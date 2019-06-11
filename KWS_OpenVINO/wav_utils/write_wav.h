#ifndef WRITE_WAV_H
#define WRITE_WAV_H

typedef struct wav_header_t {
    // RIFF wave header
    char  chunk_id[4];
    int   chunk_size;
    char  format[4];

    // Format subchunk
    char  subchunk1_id[4];
    int   subchunk1_size;
    short audio_format; // short int
    short num_channels;
    int   sample_rate;
    int   byte_rate;
    short block_align;
    short bits_per_sample;

    // short extra_param_size; // if PCM, then doesn't exist
    // x extra_params;         // space for extra parameters
/*
    // Fact subchunk
    char  subchunk2_id[4];
    int   subchunk2_size;
    int   unknown2_1;

    // PEAK subchunk
    char  subchunk3_id[4];
    int   subchunk3_size;
    int   unknown3_1;
    int   unknown3_2;
    int   unknown3_3;
    int   unknown3_4;
*/
    // Data subchunk
    char  subchunk2_id[4];
    int   subchunk2_size;
} wav_header_t;

void write_wav(const char* file_name, float* audio_data, int num_bytes, short num_channels, int sample_rate, short bits_per_sample);

#endif // WRITE_WAV_H
