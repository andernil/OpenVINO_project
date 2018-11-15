#include "../host/inc/cnn.h"

//#include "../host/inc/weights_t_linear_classifier.h" // - _t_ perhaps

//#pragma OPENCL EXTENSION cl_altera_channels : enable

//channel float ch[theta1_y]; // theta1_y=25 channels
//channel float ch __attribute((depth(theta1_y))); // channel with depth 25

#ifndef SIMD_WORK_ITEMS
#define SIMD_WORK_ITEMS 2 // default value
#endif

#ifndef NUM_COMPUTE_UNITS
#define NUM_COMPUTE_UNITS 4
#endif

#define SIGMOID(x) (1.0f / (1 + exp(-x)))
#define RELU(x) (x > 0 ? x : 0)

/*
40, 90, // input data
16, 1, 16, 8 // n, c, h, w - weights and bias (n = in_channels, c = out_channels)
25, 17, 3, 2, // h, w, s_h, s_w - Conv parameters
*/

__kernel
__attribute__((task))
void task_conv(
			// Params Ports
      unsigned in_h,
      unsigned in_w,
      unsigned out_c,
      unsigned in_c,
      unsigned K_h,
      unsigned K_w,
      unsigned out_h,
      unsigned out_w,
      unsigned S_h,
      unsigned S_w,
      unsigned relu_on,

      // Data Ports
      __global float *restrict output, // top
      __global float *restrict input, //bottom,
      __global float *restrict weights,
      __global float *restrict bias
			)
{
  unsigned M = out_c;
  unsigned N = in_c;

  unsigned filter_size_2d = K_h * K_w;
  unsigned filter_size_3d = filter_size_2d*N;

  unsigned ifm_size = in_h*in_w;
  unsigned ofm_size = out_h*out_w; // input argument?

  float running_sum = 0.0f;

  printf("IN_H: %d, IN_W: %d, R: %d, C: %d, M: %d, N: %d, K_h: %d, K_w: %d, S_h: %d, S_w: %d, ifm_size: %d \n", in_h, in_w, out_h, out_w, M, N, K_h, K_w, S_h, S_w, ifm_size);

  for (unsigned row = 0; row < out_h; row++) { // output rows
    for (unsigned col = 0; col < out_w; col++) { // output cols
      for (unsigned to = 0; to < M; to++) { // M output feature maps or num filters
        for (unsigned ti = 0; ti < N; ti++) { // N input feature maps, same as filter depth
          for (unsigned i = 0; i < K_h; i++) { // += stride_h, same as filter height
            for (unsigned j = 0; j < K_w; j++) { // += stride_w, same as filtwe width
              running_sum += weights[to*filter_size_3d + ti*filter_size_2d + i*K_w + j] * input[ti*ifm_size + (S_h*row + i)*in_w + (S_w*col + j)];
              //printf("weights[] = %f\n", weights[to*filter_size_3d + ti*filter_size_2d + i*K_w + j]);
              //printf("input[] = %f\n", input[ti*ifm_size + (S_h*row + i)*INPUT_W + (S_w*col + j)]);
            } // j
          } // i
        } // ti
        running_sum += bias[to];
        if (relu_on)
          output[to*ofm_size + row*out_w + col] = RELU(running_sum);
        else
          output[to*ofm_size + row*out_w + col] = running_sum;
        running_sum = 0.0f;
      } // to
    } // col
  } // row

  //printf("in_w = %d\n", in_w);
}

/*
__kernel
//__attribute((reqd_work_group_size(100,1,1))) // May need to compile several times for different work group sizez
//__attribute((num_simd_work_items(SIMD_WORK_ITEMS))) // This is not supported when using channels
__attribute((num_compute_units(NUM_COMPUTE_UNITS)))
void ndr_conv(// Params Ports
          unsigned in_h,
          unsigned in_w,
          unsigned out_c,
          unsigned in_c,
          unsigned K_h,
          unsigned K_w,
          unsigned out_h,
          unsigned out_w,
          unsigned S_h,
          unsigned S_w,
          unsigned relu_on,

          // Data Ports
          __global float *restrict output, // top
          __global float *restrict input, //bottom,
          __global float *restrict weights,
          __global float *restrict bias
          )
{
    // Local ID index (offset within a block)
    int local_id_x = get_local_id(0);
    int local_id_y = get_local_id(1);
    int local_id_z = get_local_id(2);

    // Global ID index (offset within the NDRange)
    int global_id_x = get_global_id(0);
    int global_id_y = get_global_id(1);
    int global_id_z = get_global_id(2);

    //printf("LID: %d GID: %d\n", local_id, global_id);

    unsigned weight_size_2d = K_h*K_w;
    unsigned weight_size_3d = weight_size_2d*in_c;
    unsigned ifm_size = in_h*in_w;
    unsigned ofm_size = out_h*out_w;

    unsigned ifm_idx = 0;
    unsigned row_idx = 0;
    unsigned cnt_ifm = 1;
    unsigned cnt_row = 1;

    float running_sum = 0.0f;

    //#pragma unroll
    for (int k = 0; k < weight_size_3d; ++k) {
        running_sum += weights[weight_size_3d*global_id_z + k] * input[ifm_size*ifm_idx + (S_h*local_id_y + row_idx)*in_w + (S_w*local_id_x + cnt_row-1)];

        if (cnt_ifm == weight_size_2d) {
          row_idx = 0;
          ifm_idx++;
          cnt_ifm = 1;
          cnt_row = 1;
        }
        else if (cnt_row == K_w) {
          row_idx++;
          cnt_row = 1;
          cnt_ifm++;
        }
        else {
          cnt_row++;
          cnt_ifm++;
        }
    }

    running_sum += bias[global_id_z];

    //barrier(CLK_LOCAL_MEM_FENCE); // should not be necessary but gives better resource utilization?

    // Store result in output
    if (relu_on)
      output[ofm_size*global_id_z + local_id_y*out_w + local_id_x] = RELU(running_sum);
    else
      output[ofm_size*global_id_z + local_id_y*out_w + local_id_x] = running_sum;

    // to*ofm_size + row*out_w + col
}
*/

__kernel
//__attribute((reqd_work_group_size(100,1,1))) // May need to compile several times for different work group sizez
//__attribute((num_simd_work_items(SIMD_WORK_ITEMS))) // This is not supported when using channels
void fully_connected( // Input and output matrices
                // Weight weight
                unsigned W_width, // mby save locally
                unsigned relu_on,

                // Data ports
                 __global float *restrict output,
                 __global float *restrict input,
                 __global float *restrict weights,
                 __global float *restrict bias
               )
{
    // Local storage for a block of input matrices W and X
    //__local float W_local[W_y][W_x];  //[W_y][W_x];
    //__local float X_local[X_y];

    // Block index
    int block_id = get_group_id(0);
    //int block_y = get_group_id(1);

    // Local ID index (offset within a block)
    int local_id = get_local_id(0);
    int global_id = get_global_id(0);
    //printf("LID: %d GID: %d\n", local_id, global_id);
    //int local_y = get_local_id(1);

    float running_sum = 0.0f;

    //running_sum += weights[local_id*W_width];

    //#pragma unroll
    for (int k = 0; k < W_width; ++k) // fix bias -> add bias
    {
        //float t1_k = Theta1[local_id][k]; // W[local_id*W_x + k];
        //float x_k = X[k];
        running_sum += weights[local_id*W_width + k] * input[k];
        //printf("LID: %d running_sum = %f\n", local_id, running_sum);
    }

    running_sum += bias[local_id];

    barrier(CLK_LOCAL_MEM_FENCE);
    // Store result in matrix C
    if (relu_on)
      output[get_global_id(0)] = RELU(running_sum);
    else
      output[get_global_id(0)] = running_sum;
}
