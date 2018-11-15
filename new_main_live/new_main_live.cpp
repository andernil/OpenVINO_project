#include <sys/stat.h>
#include <math.h>
#include <gflags/gflags.h>
#include <functional>
#include <iostream>
#include <memory>
#include <map>
#include <fstream>
#include <random>
#include <string>
#include <vector>
#include <time.h>
#include <chrono>
#include <limits>
#include <iomanip>
#include <inference_engine.hpp> 
#include "wav_utils/record_voice.h"
#include "wav_utils/write_wav.h"
#include "cnpy.h"

#include "layer_config.h"

using namespace InferenceEngine;

#define NUM_IMAGES 	500
#define INPUT_W     40
#define INPUT_H     90
#define INPUT_SIZE  INPUT_W*INPUT_H

#define TMP_BUF_SIZE 6800 // should at least be the maximum buffer size needed

unsigned int correct_count = 0;


float* input;
float* output;

// Weight files info
const char* nn_path = "../models/Optimized/";


// Open time log file
std::ofstream log_file("logs/time_log_v1.log");

// Function prototypes
int prepare();
void read_new_input();
void run();
void verify();
void cleanup();

int main(void) {
	//Options options(argc, argv);
	system("pwd");

	//Check Inference Engine version
        slog::info << "InferenceEngine: " << GetInferenceEngineVersion() << slog::endl;


	// 1. Load plugin
	InferenceEnginePluginPtr engine_ptr = PluginDispatcher(pluginDirs).getSuitablePlugin(TargetDevice::eGPU);
	InferencePlugin = plugin(engine_ptr);
	
	// 2. Read intermediate representation
	CNNNetReader network_reader;
	network_reader.ReadNetwork("../models/Optimized/wakeword.xml");
	network_reader.ReadWeights("../models/Optimized/wakeword.bin");

	// 3. Configure input and output
	auto network = network_reader.getNetwork();
	InputsDataMap input_info(network.getInputsInfo());
	OutputsDataMap output_info(network.getOutputsInfo());

	// 4. Load the model
	// Optional: std:map config = {{ PluginConfigParams::KEY_PERF_COUNT, PluginConfigParams::YES}};
	auto executable_network = plugin.LoadNetwork(network, config);
	
	// 5. Create infer request
	auto infer_request = executable_network.CreateInferRequest();

	// 6. Prepare input
	// Prepare data
	read_new_input();
  	prepare();

	Blob::Ptr ptrInputBlob;
    ptrInputBlob = request.GetBlob(cInputInfo.begin()->first);
	/** Iterating over all input blobs **/
	for (auto & item : inputInfo) {
	    auto input_name = item->first;
	    /** Getting input blob **/
	    auto input = infer_request.GetBlob(input_name);
	    /** Fill input tensor with planes. First b channel, then g and r channels **/
	    ...
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
void read_new_input() {
	system("pwd");
	// record new input
	int num_bytes = NUM_SECONDS * SAMPLE_RATE * NUM_CHANNELS * sizeof(float);
	float* recorded_samples = (float*)malloc(num_bytes);
	record_voice(recorded_samples); // mby add error thingeling?
	printf("num_bytes = %d\n", num_bytes);

	// Set start time before preprocessing, after voice done recording, logical?
	start_time = getCurrentTimestamp();

	// Write the recorded samples to a wave file
	write_wav("../input/voice_rec_live.wav", recorded_samples, num_bytes, NUM_CHANNELS, SAMPLE_RATE, 32);

	// Execute preprocess program
	system("./../input/mfcc_preprocess --input ../input/voice_rec_live.wav --output ../input/voice_rec_live");

	// Read mfcc preprocessed input file
	std::ifstream input_file(input_file_name, std::ios::in | std::ios::binary);
	if (input_file.is_open()){
		input_file.read((char*)(input), sizeof(float)*INPUT_SIZE); // sizeof() should return IMG_SIZE*4 bytes
		input_file.close();
	}
	else{
		printf("Could not read input_file\n");
		input_file.close();
	}

	free(recorded_samples);
}

int prepare(){
  system("pwd"); // check current path and find out what to use in load functions

	cnpy::NpyArray input_npy = cnpy::npy_load("../fpga/per_layer/unit_tests/input_1_data.npy"); // mby use a global char array
	cnpy::NpyArray golden_ref_npy = cnpy::npy_load("../fpga/per_layer/unit_tests/input_1_ip3.npy"); //output_1.npy"); //input_1_prob.npy"); //input_1_conv1.npy");

  // Allocate aligned memory for DMA transfer
  input       = (float*)alignedMalloc(sizeof(float)*INPUT_SIZE); // input
  output      = (float*)alignedMalloc(sizeof(float)*OUTPUT_SIZE); // output_c1

  memcpy(input, input_npy.data, sizeof(float)*INPUT_SIZE);
  memcpy(golden_ref, golden_ref_npy.data, sizeof(float)*OUTPUT_SIZE);

  // Destruct
  input_npy.destruct();
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
