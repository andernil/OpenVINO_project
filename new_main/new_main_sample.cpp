#include <sys/stat.h>
#include <math.h>
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
#include "cnpy.h"
#include <iomanip>
#include <cstdlib>

using namespace InferenceEngine;

#define NUM_IMAGES 	500
#define INPUT_W     40
#define INPUT_H     90
#define INPUT_SIZE  INPUT_W*INPUT_H

#define TMP_BUF_SIZE 6800 // should at least be the maximum buffer size needed

float* input_audio;
float* output_audio;

float test_data[INPUT_SIZE];
float reordered_data[INPUT_SIZE];
// Weight files info
const char* nn_path = "Optimized/";

// Reference results
float reference[2] = {-2.2889187, 2.0511255};

// Output dimensions
unsigned long channels = 2;
unsigned long width = 1;
unsigned long heigth = 1;
unsigned long k = 1;

const SizeVector output_size = {channels, width, width, k};

// Open time log file
std::ofstream log_file("logs/time_log_v1.log");

// Function prototypes
int prepare();

int main(void) {
	//Options options(argc, argv);
	system("pwd");

	// 1. Load plugin
	printf("Loading plugin \n");
	PluginDispatcher dispatcher({"/opt/intel/computer_vision_sdk/inference_engine/lib/centos_7.4/intel64", ""});
	InferencePlugin plugin(dispatcher.getSuitablePlugin(TargetDevice::eCPU));

	// 2. Read intermediate representation
	printf("Reading IR \n");
	CNNNetReader network_reader;
	network_reader.ReadNetwork("Optimized/wakeword_prob.xml");
	network_reader.ReadWeights("Optimized/wakeword_prob.bin");
	CNNNetwork network = network_reader.getNetwork();

	// 3. Configure input and output
	printf("Configuring input and output \n");
	InputInfo::Ptr input_info = network.getInputsInfo().begin()->second;
	std::string input_name = network.getInputsInfo().begin()->first;

	input_info->setLayout(Layout::NCHW);
	input_info->setPrecision(Precision::FP32);

	DataPtr output_info = network.getOutputsInfo().begin()->second;
	std::string output_name = network.getOutputsInfo().begin()->first;
  std::cout << "Batch size: " <<network.getBatchSize() << std::endl;

	output_info->setPrecision(Precision::FP32);
  /*
  for(int i = 0; i < 2; i++){
    std::cout << "Dims: " << output_info->getDims()[i] << std::endl;
  }
    output_info->setDims(output_size);
    */
	// 4. Load the model
	printf("Loading model \n");
	auto executable_network = plugin.LoadNetwork(network, {});

	// 5. Create infer request
	printf("Creating infer request \n");
	auto infer_request = executable_network.CreateInferRequest();

	// 6. Prepare input
	// Prepare data
	printf("Preparing data \n");
  prepare(); // returns nothing, fills test_data[]

	printf("Assigning input data \n");
	Blob::Ptr input = infer_request.GetBlob(input_name);
	auto input_data = input->buffer().as<PrecisionTrait<Precision::FP32>::value_type *>();
	printf("Getting network info \n");
	size_t channels_number = input->getTensorDesc().getDims()[1];
	size_t image_size = input->getTensorDesc().getDims()[3] * input->getTensorDesc().getDims()[2];
  std::cout << "No. channels: " << input->getTensorDesc().getDims()[1] << std::endl;
  std::cout << "Dim 1: " << input->getTensorDesc().getDims()[2] << std::endl;
  std::cout << "Dim 2: " << input->getTensorDesc().getDims()[3] << std::endl;


  printf("Filling buffer \n");
  /*
	for (size_t pid = 0; pid < image_size; ++pid) {
			for (size_t ch = 0; ch < channels_number; ++ch) {
					input_data[ch * image_size + pid] = input_audio[ch * image_size + pid];
          std::cout << input_data[ch * image_size + pid] << std::endl;
			}
	}
  */
  for(int i = 0; i < INPUT_SIZE; i++)
  {
        input_data[i] = test_data[i];
        input_data[i] = reordered_data[i];
  }

	// 7. Start inference
	printf("Starting inference \n");
	infer_request.Infer();

	// 8. Process output data
	printf("Processing output data \n");
	Blob::Ptr output = infer_request.GetBlob(output_name);

  std::cout << "Channels: " << output->getTensorDesc().getDims()[1] << std::endl;
  std::cout << "Dim 1: " << output->getTensorDesc().getDims()[2] << std::endl;
  std::cout << "Dim 2: " << output->getTensorDesc().getDims()[3] << std::endl;

	auto output_data = output->buffer().as<PrecisionTrait<Precision::FP32>::value_type*>();
  printf("Neural Network output: \n");
  for(int i = 0; i < 2; i++)
  {
    std::cout << output_data[i] << std::endl;
  }
}

/////////// HELPER FUNCTIONS //////////
int prepare(){
	printf("Loading array \n");
  std::ifstream in("input_data/data.csv");
  std::string line;
  int i = 0;
  while(getline(in, line))
  {
    std::stringstream ss(line);
    std::string data;
    std::string::size_type string_size;
    while(getline(ss, data, ','))
    {
      test_data[i] = std::stof(data, &string_size);
      i++;
      //std::cout << data << std::endl;
      //      std::cout << test_data[i-1] << std::endl;
    }
  }
  // Restructure the input data
  i = 0;
  for(int row = 0; row < 40; row++)
  {
    for(int line = 0; line < 90; line++)
    {
      reordered_data[i] = test_data[row + (40 * line)];
      i++;
    }
  }
  printf("Read %d input values \n", i);
	return(0);
}
