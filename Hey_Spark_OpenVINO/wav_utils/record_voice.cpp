#include <stdio.h>
#include <stdlib.h>
#include <ctime>
//#include "portaudio.h"
#include "record_voice.h"

void record_voice(float* recorded_samples) {

  PaStreamParameters input_parameters;
  PaStream* stream;
  PaError err;
  int total_frames;
  int num_samples;
  int num_bytes;
  float max, average, val;

  total_frames = NUM_SECONDS * SAMPLE_RATE;
  num_samples = total_frames * NUM_CHANNELS;
  num_bytes = num_samples * sizeof(float);
  if (recorded_samples == NULL){
    printf("Could not allocate record array.\n");
    exit(1);
  }

  for (int i = 0; i < num_samples; i++)
    recorded_samples[i] = 0;

  err = Pa_Initialize();
  if (err != paNoError)
    goto error;

  input_parameters.device = Pa_GetDefaultInputDevice();
  if (input_parameters.device == paNoDevice) {
    fprintf(stderr, "Error: No default input device.\n");
    goto error;
  }
  input_parameters.channelCount = NUM_CHANNELS;
  input_parameters.sampleFormat = PA_SAMPLE_TYPE;
  input_parameters.suggestedLatency = Pa_GetDeviceInfo(input_parameters.device)->defaultLowInputLatency;
  input_parameters.hostApiSpecificStreamInfo = NULL;

  err = Pa_OpenStream(&stream,
                      &input_parameters,
                      NULL,               // &output_parameters
                      SAMPLE_RATE,
                      FRAMES_PER_BUFFER,
                      paClipOff,          // we won't output out of range samples so don't bother clipping them
                      NULL,               // no callback, use blocking api
                      NULL);              // no callback, so no callback userData
  if (err != paNoError)
    goto error;

  err = Pa_StartStream(stream);
  if (err != paNoError)
    goto error;
  printf("\n------NOW RECORDING!!------\n\n"); // fflush(stdout);


  err = Pa_ReadStream(stream, recorded_samples, total_frames);
  if (err != paNoError)
    goto error;

  err = Pa_CloseStream(stream);
  if (err != paNoError)
    goto error;

  Pa_Terminate();

  return;

error:
  Pa_Terminate();
  fprintf(stderr, "An error occured while using the portaudio stream\n");
  fprintf(stderr, "Error number: %d\n", err);
  fprintf(stderr, "Error message: %s\n", Pa_GetErrorText(err));
  return;
}
