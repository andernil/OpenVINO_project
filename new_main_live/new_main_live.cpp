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
#include "record_voice.h"
#include "write_wav.h"
#include <iomanip>
#include <cstdlib>

using namespace InferenceEngine;

#define NUM_IMAGES 	500
#define INPUT_W     40
#define INPUT_H     90
#define INPUT_SIZE  INPUT_W*INPUT_H

#define TMP_BUF_SIZE 6800 // should at least be the maximum buffer size needed

float input_audio[INPUT_SIZE];
float* output_audio;

float test_data[INPUT_SIZE];
float reordered_data[INPUT_SIZE];
// Weight files info
const char* nn_path = "Optimized/";

// Reference results
float reference[2] = {-2.2889187, 2.0511255};

// Load the recorded input audio file
const char* input_file_name = "recordings/voice_rec_live_processed";

// Open time log file
std::ofstream log_file("logs/time_log_v1.log");

// Function prototypes
int prepare();
void record_input();

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
      printf("Data output pointer is invalid \n");
    }
    item.second->setPrecision(Precision::FP32);
  }
  // Getting output dimensions
  const SizeVector outputDims = outputInfo.begin()->second->getDims();
  std::cout << "Output dims: " << outputDims[0] << " x " << outputDims[1] << std::endl;

	// 4. Load the model
	printf("Loading model \n");
	auto executable_network = plugin.LoadNetwork(network, {});


	// 5. Create infer request
	printf("Creating infer request \n");
	auto infer_request = executable_network.CreateInferRequest();

  for(int num_loops = 0; num_loops < 5; num_loops++)
  {
	// 6. Prepare input
	// Prepare data
	printf("Preparing data \n");
  //prepare(); // returns nothing, fills test_data[]
  record_input();

	printf("Assigning input data \n");
	Blob::Ptr input = infer_request.GetBlob(input_name);
	auto input_data = input->buffer().as<PrecisionTrait<Precision::FP32>::value_type *>();
	printf("Getting network info \n");
	size_t channels_number = input->getTensorDesc().getDims()[1];
	size_t image_size = input->getTensorDesc().getDims()[3] * input->getTensorDesc().getDims()[2];

  printf("Filling buffer \n");

  for(int i = 0; i < INPUT_SIZE; i++)
  {
    // Input data for testing
    //input_data[i] = test_data[i];
    // input_data[i] = reordered_data[i];

    // Live data
    input_data[i] = input_audio[i];
  }

	// 7. Start inference
	printf("Starting inference \n");
	infer_request.Infer();

	// 8. Process output data
	printf("Processing output data \n");
	Blob::Ptr output = infer_request.GetBlob(firstOutputName);

	auto output_data = output->buffer().as<PrecisionTrait<Precision::FP32>::value_type*>();
  printf("Neural Network output: \n");
  for(int i = 0; i < 2; i++)
  {
    std::cout << output_data[i] << std::endl;
  }
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

void record_input()
{
  //double samplerate = get_sample_rate();
  // Allocate memory and record voice
  std::cout << "Allocating memory for recording" << std::endl;
  int num_bytes = NUM_SECONDS * SAMPLE_RATE  * NUM_CHANNELS * sizeof(float);
  float* recorded_samples = (float*)malloc(num_bytes);


  std::cout << "Recording sample" << std::endl;
  record_voice(recorded_samples);
  printf("Num. bytes recorded: %d\n", num_bytes);

  // Export .wav file
  write_wav("recordings/voice_rec_live.wav", recorded_samples, num_bytes, NUM_CHANNELS, SAMPLE_RATE, 32); //

  // Preprocess data
  system("preprocessing/mfcc_preprocess --input recordings/voice_rec_live.wav --output recordings/voice_rec_live_processed");

  // Read preprocessed data
  std::ifstream input_file(input_file_name, std::ios::in | std::ios::binary);
  if(input_file.is_open())
  {
    input_file.read((char*)(input_audio), sizeof(float)*INPUT_SIZE);
    input_file.close();
  }
  else
  {
    std::cout << "Input file could not be read" << std::endl;
  }
  free(recorded_samples);
}
