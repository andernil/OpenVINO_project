#include <stdio.h>
#include <stdlib.h>
#include <fstream>

#include "write_wav.h"



void write_wav(const char* file_name, float* audio_data, int num_bytes, short num_channels, int sample_rate, short bits_per_sample) {
  wav_header_t header;
  // RIFF wave header
  header.chunk_id[0] = 'R';
  header.chunk_id[1] = 'I';
  header.chunk_id[2] = 'F';
  header.chunk_id[3] = 'F';
  header.chunk_size = 36 + num_bytes;
  header.format[0] = 'W';
  header.format[1] = 'A';
  header.format[2] = 'V';
  header.format[3] = 'E';

  // Format subchunk
  header.subchunk1_id[0] = 'f';
  header.subchunk1_id[1] = 'm';
  header.subchunk1_id[2] = 't';
  header.subchunk1_id[3] = ' ';
  header.subchunk1_size = 16;               // 16 for PCM, size for rest of subchunk
  header.audio_format = 3;                  // 1 for PCM, 3 for float it seems
  header.num_channels = num_channels;
  header.sample_rate = sample_rate;
  header.bits_per_sample = bits_per_sample;
  header.byte_rate = header.sample_rate * header.num_channels * header.bits_per_sample/8;
  header.block_align = header.num_channels * header.bits_per_sample/8;
/*
  // Fact subchunk
  header.subchunk2_id[0] = 'f';
  header.subchunk2_id[1] = 'a';
  header.subchunk2_id[2] = 'c';
  header.subchunk2_id[3] = 't';
  header.subchunk2_size = 4;
  header.unknown2_1 = 43207;

  // PEAK subchunk
  header.subchunk3_id[0] = 'P';
  header.subchunk3_id[1] = 'E';
  header.subchunk3_id[2] = 'A';
  header.subchunk3_id[3] = 'K';
  header.subchunk3_size = 16;
  header.unknown3_1 = 1;
  header.unknown3_2 = 0x59036d67;
  header.unknown3_3 = 0x3ealf380;
  header.unknown3_4 = 0x24fc;
*/
  // Data subchunk
  header.subchunk2_id[0] = 'd';
  header.subchunk2_id[1] = 'a';
  header.subchunk2_id[2] = 't';
  header.subchunk2_id[3] = 'a';
  header.subchunk2_size = num_bytes; // or num_samples *

  // Write
  std::ofstream file(file_name, std::ios::binary); // std::ios::out
  file.write((char*)&header, sizeof(header));
  file.write((char*)audio_data, num_bytes);
  file.close();

}
