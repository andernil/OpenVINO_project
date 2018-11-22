#ifndef RECORD_VOICE_H
#define RECORD_VOICE_H

#define SAMPLE_RATE 48000
#define FRAMES_PER_BUFFER 1024 // need this in openstream()
#define NUM_SECONDS 0.9
#define NUM_CHANNELS 1

#define PA_SAMPLE_TYPE paFloat32
#define SAMPLE_SILENCE 0.0f // ?

//typedef float SAMPLE;

void record_voice(float* recorded_samples);

#endif // RECORD_VOICE_H
