#include "../host/inc/defines.h"

#define VECTORIZE_NUM 16
#define FILTER_SIZE 5

// Sobel filter kernel
// frame_in and frame_out are different buffers. Specify restrict on
// them so that the compiler knows they do not alias each other.
__kernel
void conv2d(
    __global unsigned int * restrict frame_in,
    __global unsigned int * restrict frame_out,
    const unsigned int iterations, // num_pixels
    const unsigned int threshold,

    const unsigned int planes,
    //const unsigned int filter_size, // 3 => 3x3, 5 => 5x5
    const unsigned int strides)
    //const bool padding)
{
    // Padding performed here?


    // Filter coefficients
    int Gx[3][3] = {{-1,-2,-1},{0,0,0},{1,2,1}};
    int Gy[3][3] = {{-1,0,1},{-2,0,2},{-1,0,1}};

    // Pixel buffer of 2 rows and 3 extra pixels
    int rows[2 * COLS + 2 + VECTORIZE_NUM];

    // The initial iterations are used to initialize the pixel buffer.
    int count = -(2 * COLS + 2 + VECTORIZE_NUM);
    while (count < iterations) {
        // Each cycle, shift a new pixel into the buffer.
        // Unrolling this loop allows the compile to infer a shift register.
        #pragma unroll
        for (int i = COLS * 2 + 1 + VECTORIZE_NUM; i > (VECTORIZE_NUM - 1); --i) {
            rows[i] = rows[i - VECTORIZE_NUM];
        }
        #pragma unroll
        for (int i = 0; i < VECTORIZE_NUM; i++) {
          rows[i] = (count+i) >= 0 ? frame_in[count+i] : 0;
        }

        unsigned int clamped[VECTORIZE_NUM];

        float running_sum = 0.0f;
        //running_sum += W[local_id*W_width];

        //#pragma unroll
        for (int k = 0; k < VECTORIZE_NUM; k++) {
          int x_dir = 0;
          int y_dir = 0;

          // With these loops unrolled, one convolution can be computed every
          // cycle.
          #pragma unroll
          for (int i = 0; i < FILTER_SIZE; ++i) {
              #pragma unroll
              for (int j = 0; j < FILTER_SIZE; ++j) {
                  unsigned int pixel = rows[i * COLS + j + k];

                  x_dir += luma * Gx[i][j];
              }
          }

          int temp = abs(x_dir) + abs(y_dir);
          if (temp > threshold) {
              clamped[k] = 0xffffff;
          } else {
              clamped[k] = 0;
          }
        }

        #pragma unroll
        for (int i = 0; i < VECTORIZE_NUM; i++) {
          if (count+i >= 0) {
              frame_out[count+i] = clamped[i];
          }
        }
        count += VECTORIZE_NUM;
    }
}
