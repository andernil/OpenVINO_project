//#include <stdio.h>
//#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <iostream>
#include <fstream>
#include <iomanip>
#include <math.h>
#include "CL/opencl.h"
//#include <CL/cl.h>
#include "AOCLUtils/aocl_utils.h"
#include "cnn.h"
#include "cnpy.h" // must do some shizzle in Makefile to get this working

#include "layer_config.h"

using namespace aocl_utils;

#define NUM_IMAGES 	500
#define TEST_NUM 		0
#define LAYER_NUM   6
#define MAX_LAYER_NUM   16
#define TMP_BUF_SIZE 6800 // should at least be the maximum buffer size needed

// Configuration file instructions
enum config_item{
layer_type, // "0" -> conv, "1" -> fc

type_num, // for conv1 -> 1 for conv2 -> 2 etc.

data_h, data_w, //data_n,

weight_n, weight_c, weight_h, weight_w, /*bias_size,*/ //memRd Parameters

conv_h, conv_w, conv_stride_h, conv_stride_w, //Conv Parameters
//conv_x, conv_y, conv_z, conv_stride, conv_padding, conv_split, conv_relu, //Conv Parameters

//pool_on, pool_x, pool_y, pool_z, pool_size, pool_stride, // Pooling Parameters

relu_on,

memrd_src, //"0"-> input_buf  "1"-> output_buf  "2"->"tmp_1_buffer"  "3"->"tmp_2_buffer"

memwr_dst//"0"-> input_buf  "1"-> output_buf  "2"->"tmp_1_buffer"  "3"->"tmp_2_buffer"

};

// Define the kernel names used
const char *knl_name_mem_rd = "mem_read";
const char *knl_name_conv  = "task_conv";
//const char *knl_name_conv  = "ndr_conv";
const char *knl_name_pool  = "max_pool";
const char *knl_name_mem_wr = "mem_write";
const char *knl_name_fc = "fully_connected";

unsigned int correct_count = 0;

// OpenCL runtime configuration
unsigned num_devices = 0;
cl_platform_id platform = NULL;
cl_context context = NULL;
cl_program program = NULL;
scoped_array<cl_device_id> device; // num_devices elements
scoped_array<cl_kernel> knl_mem_rd;
scoped_array<cl_kernel> knl_conv;
scoped_array<cl_kernel> knl_mem_wr;
scoped_array<cl_kernel> knl_pool;
scoped_array<cl_kernel> knl_fc;

scoped_array<cl_command_queue> queue; // num_devices elements
scoped_array<cl_command_queue> q_mem_rd;
scoped_array<cl_command_queue> queue_conv;
scoped_array<cl_command_queue> q_mem_wr;
scoped_array<cl_command_queue> q_pool;
scoped_array<cl_command_queue> queue_fc;

scoped_array<cl_mem> input_buf;
scoped_array<cl_mem> output_buf;
scoped_array<cl_mem> weights_buf;
scoped_array<cl_mem> bias_buf;
scoped_array<cl_mem> tmp_1_buf;
scoped_array<cl_mem> tmp_2_buf;

float* input;
float* weights[num_layers];
float* bias[num_layers];
float* output;
float* golden_ref;

int weight_sizes[num_layers];
int bias_sizes[num_layers];


scoped_array<float> ref_output;

// Tot time
cl_ulong tot_kernel_time = 0;
double total_time;


// Weight files info
const char* weights_path = "../fpga/weights/";

// Open time log file
std::ofstream log_file("logs/time_log_v1.log");

// Function prototypes
void read_mnist();
int prepare();
bool init_opencl();
void run();
void verify();
void cleanup();

int main(void) {
	//Options options(argc, argv);
	system("pwd");

	// Prepare data
  prepare();

	// Initialize OpenCL.
	if (!init_opencl()) {
		return -1;
	}

	// Run the kernel
	run();

	// Free the resources allocated
	cleanup();

	// Calculate accuracy
	float accuracy = ((float)correct_count/NUM_IMAGES)*100;
	printf("Accuracy: %f\n", accuracy);
	return 0;
}

/////////// HELPER FUNCTIONS //////////

int prepare(){
  system("pwd"); // check current path and find out what to use in load functions

	// could mby have these as only one buffer
	char conv_filename[sizeof(weights_path)+11]; // should do this another way
	char conv_bias_filename[sizeof(weights_path)+11];
	char fc_filename[sizeof(weights_path)+9];
	char fc_bias_filename[sizeof(weights_path)+9];

	for (int i = 0; i < num_layers; i++) {
		cnpy::NpyArray weight_npy;
		cnpy::NpyArray bias_npy;

		if (layer_config[i][layer_type] == 0) { // conv layer
			sprintf(conv_filename, "../fpga/weights/W_conv%d.npy", layer_config[i][type_num]);
			sprintf(conv_bias_filename, "../fpga/weights/b_conv%d.npy", layer_config[i][type_num]);
			weight_npy = cnpy::npy_load(conv_filename);
			bias_npy = cnpy::npy_load(conv_bias_filename);
		} else if (layer_config[i][layer_type] == 1) { // fc layer
			sprintf(fc_filename, "../fpga/weights/W_ip%d.npy", layer_config[i][type_num]);
			sprintf(fc_bias_filename, "../fpga/weights/b_ip%d.npy", layer_config[i][type_num]);
			weight_npy = cnpy::npy_load(fc_filename);
			bias_npy = cnpy::npy_load(fc_bias_filename);
		}

		bias_sizes[i] = bias_npy.shape[0];
		weight_sizes[i] = 1;
		for (int j = 0; j < weight_npy.shape.size(); j++)
			weight_sizes[i] *= weight_npy.shape[j];

		weights[i] = (float*)alignedMalloc(sizeof(float)*weight_sizes[i]);
		bias[i] = (float*)alignedMalloc(sizeof(float)*bias_sizes[i]);

		memcpy(weights[i], weight_npy.data, sizeof(float)*weight_sizes[i]);
		memcpy(bias[i], bias_npy.data, sizeof(float)*bias_sizes[i]);

		weight_npy.destruct();
		bias_npy.destruct();
	}

	cnpy::NpyArray input_npy = cnpy::npy_load("../fpga/per_layer/unit_tests/input_1_data.npy"); // mby use a global char array
	cnpy::NpyArray golden_ref_npy = cnpy::npy_load("../fpga/per_layer/unit_tests/input_1_ip3.npy"); //output_1.npy"); //input_1_prob.npy"); //input_1_conv1.npy");

  // Allocate aligned memory for DMA transfer
  input       = (float*)alignedMalloc(sizeof(float)*INPUT_SIZE); // input
  output      = (float*)alignedMalloc(sizeof(float)*OUTPUT_SIZE); // output_c1
  golden_ref  = (float*)alignedMalloc(sizeof(float)*OUTPUT_SIZE); // golden_ref

  memcpy(input, input_npy.data, sizeof(float)*INPUT_SIZE);
  memcpy(golden_ref, golden_ref_npy.data, sizeof(float)*OUTPUT_SIZE);

  // Destruct
  input_npy.destruct();
  golden_ref_npy.destruct();

	for(int i = 0; i < num_layers; i++)
		printf("layer %d weight size = %d\n", i, weight_sizes[i]);

}


// Initializes the OpenCL objects
bool init_opencl() {

  cl_int status;

  printf("Initializing OpenCL\n");

  if (!setCwdToExeDir()) {
    return false;
  }

  // Get the OpenCL platform
  platform = findPlatform("Altera");
  if (platform == NULL) {
    printf("ERROR: Unable to find Altera OpenCL platform.\n");
  }

  // Query the available OpenCL device.
  device.reset(getDevices(platform, CL_DEVICE_TYPE_ALL, &num_devices));
  printf("Platform: %s\n", getPlatformName(platform).c_str());
  printf("Using %d device(s)\n", num_devices);
  for (unsigned i = 0; i < num_devices; ++i) {
    printf("  %s\n", getDeviceName(device[i]).c_str());
  }

  // Create the context
  context = clCreateContext(NULL, num_devices, device, &oclContextCallback, NULL, &status);
  checkError(status, "Failed to create context");
  // Create the program for all device. Use the first device as the
  // representative device (assuming all device are of the same type)
  std::string binary_file = getBoardBinaryFile("cnn", device[0]);
  printf("Using AOCX: %s\n", binary_file.c_str());
  program = createProgramFromBinary(context, binary_file.c_str(), device , num_devices);



  // Build the program that was just created
  status = clBuildProgram(program, 0, NULL, "", NULL, NULL);
  checkError(status, "Failed to build program");

  // Create per-device objects
  //queue.reset(num_devices);
	queue_conv.reset(num_devices);
	queue_fc.reset(num_devices);
  //kernel.reset(NUM_KERNELS);
  knl_conv.reset(num_devices);
	knl_fc.reset(num_devices);
	weights_buf.reset(num_devices*num_layers);
	bias_buf.reset(num_devices*num_layers);
  input_buf.reset(num_devices); // * batch_size?
  output_buf.reset(num_devices);
	tmp_1_buf.reset(num_devices);
	tmp_2_buf.reset(num_devices);

  // Command queue
  queue_conv[0] = clCreateCommandQueue(context, device[0], CL_QUEUE_PROFILING_ENABLE, &status);
  checkError(status, "Failed to create command queue conv");
	queue_fc[0] = clCreateCommandQueue(context, device[0], CL_QUEUE_PROFILING_ENABLE, &status);
	checkError(status, "Failed to create command queue fc");

	// Kernels
  knl_conv[0] = clCreateKernel(program, knl_name_conv, &status);
  checkError(status, "Failed to create conv kernel");

	knl_fc[0] = clCreateKernel(program, knl_name_fc, &status);
  checkError(status, "Failed to create fc kernel");

	// Buffers.
	for (int i = 0; i < num_layers; i++){
		weights_buf[i] = clCreateBuffer(context, CL_MEM_READ_ONLY | CL_MEM_BANK_1_ALTERA,
				weight_sizes[i] * sizeof(float), NULL, &status);
		checkError(status, "Failed to create buffer for weights layer = %d", i);

		bias_buf[i] = clCreateBuffer(context, CL_MEM_READ_ONLY | CL_MEM_BANK_1_ALTERA,
				bias_sizes[i] * sizeof(float), NULL, &status);
		checkError(status, "Failed to create buffer for bias");
	}


	input_buf[0] = clCreateBuffer(context, CL_MEM_READ_ONLY | CL_MEM_BANK_2_ALTERA,
			INPUT_SIZE * sizeof(float), NULL, &status);
	checkError(status, "Failed to create buffer for input");

	output_buf[0] = clCreateBuffer(context, CL_MEM_WRITE_ONLY | CL_MEM_BANK_1_ALTERA,
			OUTPUT_SIZE * sizeof(float), NULL, &status);
	checkError(status, "Failed to create buffer for output");

	// Allocate fc buffers
	tmp_1_buf[0] = clCreateBuffer(context,  CL_MEM_READ_WRITE,
		TMP_BUF_SIZE * sizeof(float), NULL, &status);
	checkError(status, "Failed to create buffer tmp 1");

	tmp_2_buf[0] = clCreateBuffer(context,  CL_MEM_READ_WRITE,
		TMP_BUF_SIZE * sizeof(float), NULL, &status);
	checkError(status, "Failed to create buffer tmp 2");



  return true;
}

void run() {
  printf("Running\n");

  cl_int status;

  // Launch kernels.
  // This is the portion of time that we'll be measuring for throughput
  // benchmarking.
  scoped_array<cl_event> conv_event(num_devices);
	scoped_array<cl_event> fc_event(num_devices);

  const double start_time = getCurrentTimestamp();

	// Set kernel arguments.
  // Hidden layer 1 kernel

	for (int i = 0; i < num_layers; i++) {
		if (layer_config[i][layer_type] == 0) { // conv layer
			int argi;
			for (argi = data_h; argi < relu_on+1; argi++) {
				status = clSetKernelArg(knl_conv[0], argi-2, sizeof(unsigned),  &layer_config[i][argi]);// &out_h);
				checkError(status, "Failed to set argument %d", argi - 2);
				//printf("argi %d\n", argi-2);
			}
			argi = argi - 2;
			// Data ports

			// Output port
			if (layer_config[i][memwr_dst] == 1) {
				status = clSetKernelArg(knl_conv[0], argi++, sizeof(cl_mem), &output_buf[0]);
				checkError(status, "Failed to set argument %d", argi - 1);
			}
			else if (layer_config[i][memwr_dst] == 2) {
				status = clSetKernelArg(knl_conv[0], argi++, sizeof(cl_mem), &tmp_1_buf[0]);
				checkError(status, "Failed to set argument %d", argi - 1);
			}
			else if (layer_config[i][memwr_dst] == 3) { // else?
				status = clSetKernelArg(knl_conv[0], argi++, sizeof(cl_mem), &tmp_2_buf[0]);
				checkError(status, "Failed to set argument %d", argi - 1);
			}

			// Input port
			if (layer_config[i][memrd_src] == 0) {
				status = clSetKernelArg(knl_conv[0], argi++, sizeof(cl_mem), &input_buf[0]);
				checkError(status, "Failed to set argument %d", argi - 1);
			}
			else if (layer_config[i][memrd_src] == 2) {
				status = clSetKernelArg(knl_conv[0], argi++, sizeof(cl_mem), &tmp_1_buf[0]);
				checkError(status, "Failed to set argument %d", argi - 1);
			}
			else if (layer_config[i][memrd_src] == 3) { // else?
				status = clSetKernelArg(knl_conv[0], argi++, sizeof(cl_mem), &tmp_2_buf[0]);
				checkError(status, "Failed to set argument %d", argi - 1);
			}


			status = clSetKernelArg(knl_conv[0], argi++, sizeof(cl_mem), &weights_buf[i]);
			checkError(status, "Failed to set argument %d", argi - 1);

			status = clSetKernelArg(knl_conv[0], argi++, sizeof(cl_mem), &bias_buf[i]);
			checkError(status, "Failed to set argument %d", argi - 1);

		} else if (layer_config[i][layer_type] == 1) { // fc layer
			int argi = 0;

			status = clSetKernelArg(knl_fc[0], argi++, sizeof(unsigned), &layer_config[i][weight_w]);
			checkError(status, "Failed to set argument %d", argi - 1);

			status = clSetKernelArg(knl_fc[0], argi++, sizeof(unsigned), &layer_config[i][relu_on]);
			checkError(status, "Failed to set argument %d", argi - 1);

			// Data ports

			// Output port
			if (layer_config[i][memwr_dst] == 1) {
				status = clSetKernelArg(knl_fc[0], argi++, sizeof(cl_mem), &output_buf[0]);
				checkError(status, "Failed to set argument %d", argi - 1);
			}
			else if (layer_config[i][memwr_dst] == 2) {
				status = clSetKernelArg(knl_fc[0], argi++, sizeof(cl_mem), &tmp_1_buf[0]);
				checkError(status, "Failed to set argument %d", argi - 1);
			}
			else if (layer_config[i][memwr_dst] == 3) {  // else?
				status = clSetKernelArg(knl_fc[0], argi++, sizeof(cl_mem), &tmp_2_buf[0]);
				checkError(status, "Failed to set argument %d", argi - 1);
			}

			// Input port
			if (layer_config[i][memrd_src] == 0) {
				status = clSetKernelArg(knl_fc[0], argi++, sizeof(cl_mem), &input_buf[0]);
				checkError(status, "Failed to set argument %d", argi - 1);
			}
			else if (layer_config[i][memrd_src] == 2) {
				status = clSetKernelArg(knl_fc[0], argi++, sizeof(cl_mem), &tmp_1_buf[0]);
				checkError(status, "Failed to set argument %d", argi - 1);
			}
			else if (layer_config[i][memrd_src] == 3) { // else?
				status = clSetKernelArg(knl_fc[0], argi++, sizeof(cl_mem), &tmp_2_buf[0]);
				checkError(status, "Failed to set argument %d", argi - 1);
			}

			status = clSetKernelArg(knl_fc[0], argi++, sizeof(cl_mem), &weights_buf[i]);
			checkError(status, "Failed to set argument %d", argi - 1);

			status = clSetKernelArg(knl_fc[0], argi++, sizeof(cl_mem), &bias_buf[i]);
			checkError(status, "Failed to set argument %d", argi - 1);
		}

		// Enqueue kernel.
		// Use a global work size corresponding to the size of the output matrix.
		// Each work-item computes the result for one value of the output matrix,
		// so the global work size has the same dimensions as the output matrix.
		//
		// Events are used to ensure that the kernel is not launched until
		// the writes to the input buffers have completed.
		const size_t global_work_size_conv[3] = {layer_config[i][conv_w], layer_config[i][conv_h], layer_config[i][weight_n]}; // for NDRange conv kernel
		const size_t local_work_size_conv[3]  = {layer_config[i][conv_w], layer_config[i][conv_h], 1}; // for NDRange conv kernel

		const size_t global_work_size_fc[1] = {layer_config[i][weight_h]};
		const size_t local_work_size_fc[1]  = {layer_config[i][weight_h]};

		if (i == 0) { // first layer
			// must do something here change input if tmp...
			status = clEnqueueWriteBuffer(queue_conv[0], input_buf[0], CL_FALSE, // use blocking CL_TRUE?
				0, INPUT_SIZE * sizeof(float), input, 0, NULL, NULL);
			checkError(status, "Failed to transfer input");
		}

		if (layer_config[i][layer_type] == 0) { // conv layer
			status = clEnqueueWriteBuffer(queue_conv[0], weights_buf[i], CL_FALSE, // use blocking CL_TRUE?
		  	0, weight_sizes[i] * sizeof(float), weights[i], 0, NULL, NULL);
			checkError(status, "Failed to transfer weights");

			status = clEnqueueWriteBuffer(queue_conv[0], bias_buf[i], CL_FALSE, // use blocking CL_TRUE?
		  	0, bias_sizes[i] * sizeof(float), bias[i], 0, NULL, NULL);
			checkError(status, "Failed to transfer bias");

			if (clFinish(queue_conv[0]) == CL_SUCCESS) //test
				printf("cl_finish == success\n");

			// kernel task_conv
			status = clEnqueueTask(queue_conv[0], knl_conv[0], 0, NULL, &conv_event[0]);
			checkError(status, "Failed to launch simple_conv kernel");

			//// kernel ndr_conv
			//status = clEnqueueNDRangeKernel(queue_conv[0], knl_conv[0], 3, NULL,
			//global_work_size_conv, local_work_size_conv, 0, NULL, &conv_event[0]);
			//checkError(status, "Failed to launch kernel");

			// Wait for all kernels to finish.
			clWaitForEvents(num_devices, conv_event);

			// Get kernel times using the OpenCL event profiling API.
			cl_ulong conv_time_ns = getStartEndTime(conv_event[0]);
			printf("Conv layer kernel time (device %d): %0.3f ms\n", 0, double(conv_time_ns) * 1e-6);
			log_file << "Conv layer " << i << " kernel time: " << std::setprecision(3) <<  conv_time_ns * 1e-6 << "ms\n";

			tot_kernel_time += conv_time_ns;
		}
		else if (layer_config[i][layer_type] == 1) { // fc layer
			status = clEnqueueWriteBuffer(queue_fc[0], weights_buf[i], CL_FALSE, // use blocking CL_TRUE?
			  0, weight_sizes[i] * sizeof(float), weights[i], 0, NULL, NULL);
			checkError(status, "Failed to transfer weights");

			status = clEnqueueWriteBuffer(queue_fc[0], bias_buf[i], CL_FALSE, // use blocking CL_TRUE?
			  0, bias_sizes[i] * sizeof(float), bias[i], 0, NULL, NULL);
			checkError(status, "Failed to transfer bias");

			if (clFinish(queue_fc[0]) == CL_SUCCESS) //test
				printf("cl_finish == success\n");

			status = clEnqueueNDRangeKernel(queue_fc[0], knl_fc[0], 1, NULL,
			global_work_size_fc, local_work_size_fc, 0, NULL, &fc_event[0]);
			checkError(status, "Failed to launch kernel");

			// Wait for all kernels to finish.
			clWaitForEvents(num_devices, fc_event);

			cl_ulong fc_time_ns = getStartEndTime(fc_event[0]);
			printf("FC layer kernel time (device %d): %0.3f ms\n", 0, double(fc_time_ns) * 1e-6);
			log_file << "FC layer " << i << " kernel time: " << std::setprecision(3) <<  fc_time_ns * 1e-6 << "ms\n";

			tot_kernel_time += fc_time_ns;
		}

	} // end layer iteration

	const double end_time = getCurrentTimestamp();
	total_time = end_time - start_time;

	// Wall-clock time taken.
	printf("\nTotal time: %0.3f ms\n", total_time * 1e3);
	printf("\nTotal kernel time: %0.3f ms\n", tot_kernel_time * 1e-6);

	// Total time log
	log_file << "\nTotal time: " << std::setprecision(3) <<  total_time * 1e3 << "ms\n";
	log_file << "\nTotal kernel time: " << std::setprecision(3) <<  tot_kernel_time * 1e-6 << "ms\n";
	log_file.close();

	/*
	// Compute the throughput (GFLOPS).
	// There are Y_width * Y_height output values, with each value
	// computed using W_width multiplies and adds.
	const float flops = (float)(2.0f * 870400 / total_time); // change to get correct amount of calculations
	printf("\nThroughput: %0.2f GFLOPS\n\n", flops * 1e-9);
	*/

	// Release kernel events.
	clReleaseEvent(conv_event[0]);
	clReleaseEvent(fc_event[0]);

	// Read the result.
	if (layer_config[num_layers-1][layer_type] == 0) { // conv layer
		status = clEnqueueReadBuffer(queue_conv[0], output_buf[0], CL_TRUE,
			0, OUTPUT_SIZE * sizeof(float), output, 0, NULL, NULL);
		checkError(status, "Failed to read output matrix");
	}
	else if (layer_config[num_layers-1][layer_type] == 1) { // fc layer
		status = clEnqueueReadBuffer(queue_fc[0], output_buf[0], CL_TRUE,
			0, OUTPUT_SIZE * sizeof(float), output, 0, NULL, NULL);
		checkError(status, "Failed to read output matrix");
	}

	// Verify results.
	verify();
}

// Verify function only used to print and check the values
// need to account for some rounding differences to work properly
void verify() {
  printf("Verifying\n");

  bool success = 1; // mby err_cnt aswell

  for (unsigned i = 0; i < OUTPUT_SIZE; i++) { // mby also check difference
    printf("output[%d]     = %f\ngolden_ref[%d] = %f\n\n", i, output[i], i, golden_ref[i]);
    if (output[i] != golden_ref[i])
      success = 0;
  }

	if (success)
		printf("The convolution is CORRECT\n");
  else
		printf("The convolution is  WRONG\n");
}

// Free the resources allocated during initialization
void cleanup() {

  if(knl_conv && knl_conv[0]) {
    clReleaseKernel(knl_conv[0]);
  }
	if(knl_fc && knl_fc[0]) {
  clReleaseKernel(knl_fc[0]);
	}
  if(queue_conv && queue_conv[0]) {
    clReleaseCommandQueue(queue_conv[0]);
  }
	if(queue_fc && queue_fc[0]) {
		clReleaseCommandQueue(queue_fc[0]);
	}
  if(input_buf && input_buf[0]) {
    clReleaseMemObject(input_buf[0]);
  }
  if(output_buf && output_buf[0]) {
    clReleaseMemObject(output_buf[0]);
  }
  if(weights_buf && weights_buf[0]) {
    clReleaseMemObject(weights_buf[0]);
  }
  if(bias_buf && bias_buf[0]) {
    clReleaseMemObject(bias_buf[0]);
  }
	if(tmp_1_buf && tmp_1_buf[0]) {
		clReleaseMemObject(tmp_1_buf[0]);
	}
	if(tmp_2_buf && tmp_2_buf[0]) {
		clReleaseMemObject(tmp_2_buf[0]);
	}
  if(program) {
    clReleaseProgram(program);
  }
  if(context) {
    clReleaseContext(context);
  }

	for (int i = 0; i < num_layers; i++) {
		alignedFree(weights[i]);
	  alignedFree(bias[i]);
	}
  alignedFree(input);
  alignedFree(output);
  alignedFree(golden_ref);
}
