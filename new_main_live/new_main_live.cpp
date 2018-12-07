#include <iostream>
#include <map>
#include <fstream>
#include <string>
#include <algorithm>
#include <iomanip>
#include <inference_engine.hpp>
#include "record_voice.h"
#include "write_wav.h"
#include <cstdlib>

using namespace InferenceEngine;

#define INPUT_W     40
#define INPUT_H     90
#define INPUT_SIZE  INPUT_W*INPUT_H

// Global buffer array for the input audio
float input_audio[INPUT_SIZE];

// Path of the recorded input audio file and sample
const char* input_processed_recording_name = "recordings/voice_rec_live_processed";
const char* input_processed_sample_name = "recordings/data.csv";

// Function prototypes
void load_sample(float* input_buffer);
void record_input(float* input_buffer);

int main(int argc, char *argv[]) {
	// Input argument variables
  std::string DEVICE = "CPU";
	int DEBUG = 0;
	int USE_SAMPLE = 0;
	if(argc != 7){
	  std::cerr << "Incorrect amount of arguments, use : [NETWORK_PATH XML] [WEIGHTS_PATH BIN] [NUM ITERATIONS] [SAMPLE or LIVE] [CPU or FPGA] [RELEASE or DEBUG]" << std::endl;
	  return 1;
	}
	std::string NETWORK = std::string(argv[1]);
	std::string WEIGHTS = std::string(argv[2]);
	const int NUM_LOOPS = std::stoi(argv[3]);
	if(std::string(argv[4]) == "SAMPLE")
		USE_SAMPLE = 1;	
	if(std::string(argv[5]) == "FPGA")
		DEVICE = "HETERO:FPGA,CPU";
	if(std::string(argv[6]) == "DEBUG")
		DEBUG = 1;

	// Timestamps
	long long execution_time_buffer[NUM_LOOPS];
	// Processing time average
	long long processing_avg = 0;

	// 1. Load plugin
	if(DEBUG)	
		std::cout << "Loading Plugin" << std::endl;
	InferencePlugin plugin = PluginDispatcher({"../../../lib/intel64", ""}).getPluginByDevice(DEVICE);

	// 2. Read intermediate representation
	if(DEBUG)	
		std::cout << "Reading intermediate representation" << std::endl;
	CNNNetReader network_reader;
	network_reader.ReadNetwork(NETWORK);
	network_reader.ReadWeights(WEIGHTS);
	CNNNetwork network = network_reader.getNetwork();

	// 3. Configure input and output
	if(DEBUG)	
		std::cout << "Configuring input and output" << std::endl;
	InputInfo::Ptr input_info = network.getInputsInfo().begin()->second;
	std::string input_name = network.getInputsInfo().begin()->first;

	input_info->setLayout(Layout::NCHW);
	input_info->setPrecision(Precision::FP32);
	
	// Get output info and set output precision
  OutputsDataMap outputInfo(network.getOutputsInfo());
  std::string firstOutputName;

  for (auto & item : outputInfo)
  {
    if(firstOutputName.empty())
    {
      firstOutputName = item.first;
    }
    DataPtr outputData = item.second;
    if(!outputData)
    {
      std::cout << "Data output pointer is invalid" << std::endl;
    }
    item.second->setPrecision(Precision::FP32);
  }
  // Getting output dimensions
  const SizeVector outputDims = outputInfo.begin()->second->getDims();
	if(DEBUG)	
		std::cout << "Output dims: " << outputDims[0] << "x" << outputDims[1] << std::endl;

	// 4. Load the model
	if(DEBUG)	
		std::cout << "Loading model" << std::endl;
	auto executable_network = plugin.LoadNetwork(network, {});


	// 5. Create infer request
	if(DEBUG)	
		std::cout << "Creating infer request" << std::endl;
	auto infer_request = executable_network.CreateInferRequest();

	// 6. Prepare input
	if(DEBUG)	
		std::cout << "Assigning input data" << std::endl;
	Blob::Ptr input = infer_request.GetBlob(input_name);
	auto input_data = input->buffer().as<PrecisionTrait<Precision::FP32>::value_type *>();

	if(DEBUG){
		std::cout << "Getting network info" << std::endl;
		size_t num_channels = input->getTensorDesc().getDims()[1];
		size_t width = input->getTensorDesc().getDims()[3];
		size_t height = input->getTensorDesc().getDims()[2];	
		std::cout << "Num. input channels: " << num_channels << std::endl;
		std::cout << "Input dimensions: " << width << "x" << height << std::endl;
  }

	// Loop for either inference speed testing or speech recognition testing
  for(int loop = 0; loop < NUM_LOOPS; loop++)
  {
	  if(DEBUG)	
		  std::cout << "Preparing data" << std::endl;
		if(USE_SAMPLE){
			std::cout << "Using sampled data" << std::endl;
	 	  load_sample(&input_audio[0]);
		}
		else
  		record_input(&input_audio[0]);

		std::cout << "Filling input buffer" << std::endl;
  	for(int i = 0; i < INPUT_SIZE; i++)
  	{
 	    input_data[i] = input_audio[i];
  	}	

		// 7. Start synchronous inference
		if(DEBUG)	
			std::cout << "Starting synchronous inference" << std::endl;
		infer_request.Infer();

		// 8. Process output data
		if(DEBUG)	
			std::cout << "Retrieving output data" << std::endl;
		Blob::Ptr output = infer_request.GetBlob(firstOutputName);

		// Get performance statistics for each layer
		if(DEBUG)
			std::cout << "Getting performance statistics for each layer" << std::endl;
		auto Info = infer_request.GetPerformanceCounts();
		std::map<std::string, InferenceEngineProfileInfo>::iterator it = Info.begin();
		if(DEBUG)
			std::cout << "----PERFORMANCE STATISTICS----" << std::endl;
		long long exec_time = 0;

		while(it != Info.end())
		{	
			InferenceEngineProfileInfo layer_info= it->second;
	 		exec_time += layer_info.realTime_uSec;
			if(DEBUG)
			{
				std::cout << "Performance stats for: " << it->first << std::endl;

				std::string status = layer_info.status == 0 ? "Not run":
							   						 layer_info.status == 1 ? "Optimized out":
						    	    			 								     			"Executed";

				std::cout << "Layer status: " << status << std::endl;
				if(status != "Not run"){
					std::cout << "Exec type: " << layer_info.exec_type << std::endl;
					std::cout << "layer type: " << layer_info.layer_type << std::endl;
					std::cout << "Realtime run: " << layer_info.realTime_uSec << "us" << std::endl;
				}
				std::cout << "----" << std::endl;
			}
			it++;
		}
		std::cout << "Results:" << std::endl;

		// Print output data and execution time
		auto output_data = output->buffer().as<PrecisionTrait<Precision::FP32>::value_type*>();
		std::cout << "Neural Network output" << std::endl;
		for(int i = 0; i < outputDims[0] * outputDims[1]; i++)
		{
		  std::cout << output_data[i] << std::endl;
		}	
	  std::cout << "Execution time from IE: " << exec_time << "us" << std::endl;
		std::cout << "---------------------------------------" << std::endl;

		// Add to running average and buffer
		processing_avg += exec_time;
		execution_time_buffer[loop] = exec_time;
  }

	// Calculate average and sort buffer
	double average = processing_avg / NUM_LOOPS;
	std::sort(execution_time_buffer, execution_time_buffer + NUM_LOOPS);
	
	// Print time and throughput calculations
	std::cout << "Average processing time: " << std::setprecision(4) << average/1000 << "ms" << std::endl;
	std::cout << "Mean processing time: " << std::setprecision(4) <<  double(execution_time_buffer[int(NUM_LOOPS/2)])/1000 << "ms" << std::endl;
	std::cout << "Fastest iteration: " << std::setprecision(4) << double(execution_time_buffer[0])/1000 << "ms" << std::endl;
	std::cout << "Average throughput: " << 1000*1000/average << " samples per second" << std::endl;
}

/////////// HELPER FUNCTIONS //////////////////////////////
/*	load_sample	
*
*		Function for loading the sample data saying "Hey Spark" 
*	  from a .csv file to the input_audio buffer via the 
*		input_buffer pointer
*/

void load_sample(float* input_buffer){
	std::cout << "Loading array" << std::endl;
  std::ifstream in(input_processed_sample_name);
  std::string line;
  int i = 0;
  while(getline(in, line))
  {
    std::stringstream ss(line);
    std::string data;
    std::string::size_type string_size;
    while(getline(ss, data, ','))
    {
      input_buffer[i] = std::stof(data, &string_size);
      i++;
    }
  }
  std::cout << "Read " << i << " input values" << std::endl;
}

/*	record_input
*
*		Function for calling record_voice in record_voice.c and
*		store the output data to a .wav-file using write_wav in write_wav.c
*		Also calls and the MFCC-preprocess function and reads the data to 
* 	input_audio via the input_buffer pointer.
*/

void record_input(float* input_buffer)
{
  // Allocate memory and record voice
  std::cout << "Allocating memory for recording" << std::endl;
  int num_bytes = NUM_SECONDS * SAMPLE_RATE  * NUM_CHANNELS * sizeof(float);
  float* recorded_samples = (float*)malloc(num_bytes);

	// Start recording
  record_voice(recorded_samples);
  std::cout << "Recorded " << num_bytes << " of data" << std::endl;

  // Export .wav file
  write_wav("recordings/voice_rec_live.wav", recorded_samples, num_bytes, NUM_CHANNELS, SAMPLE_RATE, 32); //

  // Preprocess data
  system("preprocessing/mfcc_preprocess --input recordings/voice_rec_live.wav --output recordings/voice_rec_live_processed");

  // Read preprocessed data
  std::ifstream input_file(input_processed_recording_name, std::ios::in | std::ios::binary);
  if(input_file.is_open())
  {
    input_file.read((char*)(input_buffer), sizeof(float)*INPUT_SIZE);
    input_file.close();
  }
  else
  {
    std::cout << "Input file could not be read" << std::endl;
  }
  free(recorded_samples);
}
