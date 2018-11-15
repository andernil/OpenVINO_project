#include "../host/inc/cnn.h"

//#include "../host/inc/weights_t_linear_classifier.h" // - _t_ perhaps

#pragma OPENCL EXTENSION cl_altera_channels : enable

//channel float ch[theta1_y]; // theta1_y=25 channels
//channel float ch __attribute((depth(theta1_y))); // channel with depth 25

#ifndef SIMD_WORK_ITEMS
#define SIMD_WORK_ITEMS 2 // default value
#endif

#define SIGMOID(x) (1.0f / (1 + exp(-x)))

// Use __attribute((reqd_work_group_size(WORK_GROUP_SIZE,1,1)) and aoc -march=emulator -v device/two_layers_nn.cl -D WORK_GROUP_SIZE=X -o bin/two_layers_nn_X.aocx

#define VECTORIZE_NUM 16
#define FILTER_SIZE 5



// Vectorized data type
typedef struct {
   float data[VEC_SIZE];
} lane_data;

typedef struct {
   lane_data lane[LANE_NUM];
} channel_vec;

typedef struct {
   float lane[LANE_NUM];
} channel_fp32;

/*
channel channel_vec    data_ch    __attribute__((depth(CHN_DEPTH)));
channel channel_vec    weight_ch  __attribute__((depth(CHN_DEPTH)));
channel channel_fp32   bias_ch    __attribute__((depth(CHN_DEPTH)));
channel channel_fp32   conv_ch    __attribute__((depth(CHN_DEPTH)));
channel channel_fp32   pool_ch    __attribute__((depth(CHN_DEPTH)));
channel channel_fp32   bypass_ch  __attribute__((depth(CHN_DEPTH)));


// Fetch Data from Global Memory
__kernel
void memRead(
			// Params Ports
			uchar data_dim1,
			uchar data_dim2,
			uchar weight_dim1,
			uchar weight_dim2,
			uchar stride,
			uchar padding,
			uchar split,
			// Data Ports
			__global const lane_data  *restrict bottom,
			__global channel_vec  *restrict weights,
			__global channel_fp32 *restrict bias        )

{
	int global_x = get_global_id(0);
	int global_y = get_global_id(1);
	int global_z = get_global_id(2);

	int local_x = get_local_id(0);
	int local_y = get_local_id(1);
	int local_z = get_local_id(2);
	int block_x = get_group_id(0);
	int block_y = get_group_id(1);
	int block_z = get_group_id(2);

	// Input Data, Weights and Bias
	float data_vec[VEC_SIZE];
	float data_ch_vec[LANE_NUM][VEC_SIZE]; //channel_vec data_ch_vec;
	float weight_ch_vec[LANE_NUM][VEC_SIZE]; //channel_vec weight_ch_vec;
	channel_fp32  bias_ch_in;
	unsigned data_offset;

	if(split==0)
		data_offset = 0;
	else if(block_z<(get_num_groups(2)>>1))
		data_offset = 0;
	else
		data_offset = get_local_size(2);


	if(((block_y*stride<padding) && local_y<padding-block_y*stride)||((((get_num_groups(1)-1)-block_y)*stride<padding) && (get_local_size(1)-1-local_y)<padding-((get_num_groups(1)-1)-block_y)*stride)||
		((block_x*stride<padding) && local_x<padding-block_x*stride)||((((get_num_groups(0)-1)-block_x)*stride<padding) && (get_local_size(0)-1-local_x)<padding-((get_num_groups(0)-1)-block_x)*stride)){
		#pragma unroll
		for(unsigned char vv=0; vv<VEC_SIZE; vv++){
			data_vec[vv] = 0.0f;
		}
	}
	else
		data_vec = bottom[data_offset*data_dim2*data_dim1 + local_z*data_dim2*data_dim1 + block_y*stride*data_dim1 + (local_y-padding)*data_dim1 + block_x*stride + (local_x-padding)];

	weight_ch_vec = weights[block_z*weight_dim2*weight_dim1*get_local_size(2) + local_z*weight_dim2*weight_dim1 + local_y*weight_dim1 + local_x];

	#pragma unroll
	for(unsigned char ll=0; ll<LANE_NUM; ll++){
		data_ch_vec[ll] = data_vec;
	}
	write_channel_altera(data_ch, data_ch_vec);
	write_channel_altera(weight_ch, weight_ch_vec);

	if(local_z==0 && local_y==0 && local_x==0){
		bias_ch_in = bias[block_z];
		write_channel_altera(bias_ch, bias_ch_in);

	}
}
*/

channel float data_ch    __attribute__((depth(CHN_DEPTH))); // look into depth
channel float weight_ch  __attribute__((depth(CHN_DEPTH)));
channel float bias_ch    __attribute__((depth(CHN_DEPTH)));
channel float conv_ch    __attribute__((depth(CHN_DEPTH)));
channel float pool_ch    __attribute__((depth(CHN_DEPTH)));
channel float bypass_ch  __attribute__((depth(CHN_DEPTH)));

__kernel
__attribute__((task))
void mem_read(
			// Params Ports
			uchar data_w, // w or x?
			uchar data_h,
			uchar weight_w,
			uchar weight_h,
			uchar stride,
			uchar padding,
			// uchar split, // ?
			// Data Ports
			__global const lane_data  *restrict data, //bottom,
			__global channel_vec  *restrict weights,
			__global channel_fp32 *restrict bias        )

{
  /*
	int global_x = get_global_id(0);
	int global_y = get_global_id(1);
	int global_z = get_global_id(2);

	int local_x = get_local_id(0);
	int local_y = get_local_id(1);
	int local_z = get_local_id(2);
	int block_x = get_group_id(0);
	int block_y = get_group_id(1);
	int block_z = get_group_id(2);
  */

	// Input Data, Weights and Bias
	float data;
	float weight;
	float bias;
	//unsigned data_offset;

  uchar data_pad_size = IMG_W + 2*padding;

  /*
	if(((block_y*stride<padding) && local_y<padding-block_y*stride)||((((get_num_groups(1)-1)-block_y)*stride<padding) && (get_local_size(1)-1-local_y)<padding-((get_num_groups(1)-1)-block_y)*stride)||
		((block_x*stride<padding) && local_x<padding-block_x*stride)||((((get_num_groups(0)-1)-block_x)*stride<padding) && (get_local_size(0)-1-local_x)<padding-((get_num_groups(0)-1)-block_x)*stride)){
		#pragma unroll
		for(unsigned char vv=0; vv<VEC_SIZE; vv++){
			data_vec[vv] = 0.0f;
		}
	}
	else
		data_vec = bottom[data_offset*data_dim2*data_dim1 + local_z*data_dim2*data_dim1 + block_y*stride*data_dim1 + (local_y-padding)*data_dim1 + block_x*stride + (local_x-padding)];
  */

  if (padding) {
    for (uchar i = 0; i < data_pad_size; i++) {
      for (uchar j = 0; i < data_pad_size; i++) {
        if ((i < 2) && (i > data_pad_size-2) && (j < 2) && (j > data_pad_size-2))
      }
    }
      write_channel_altera(data_ch, 0.0f)
  }

	weight_ch_vec = weights[block_z*weight_dim2*weight_dim1*get_local_size(2) + local_z*weight_dim2*weight_dim1 + local_y*weight_dim1 + local_x];

	#pragma unroll
	for(unsigned char ll=0; ll<LANE_NUM; ll++){
		data_ch_vec[ll] = data_vec;
	}
	write_channel_altera(data_ch, data_ch_vec);
	write_channel_altera(weight_ch, weight_ch_vec);

	if(local_z==0 && local_y==0 && local_x==0){
		bias_ch_in = bias[block_z];
		write_channel_altera(bias_ch, bias_ch_in);

	}
}



// Sobel filter kernel
// frame_in and frame_out are different buffers. Specify restrict on
// them so that the compiler knows they do not alias each other.
__kernel
__attribute__((task))
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


__kernel
__attribute__((task))
void conv(
			// Params Ports
			uint  output_num,
			uint  conv_loop_cnt,
			uint  contol //[0]-> relu  [1]->bypass pooling
			)
{
	channel_vec mac_data;
 	channel_vec mac_weight;
	channel_fp32 bias_ch_out;
	channel_fp32 conv_ch_in;
	float bias[LANE_NUM];
	float conv_out[LANE_NUM];
	float lane_accum[LANE_NUM];
	float accum_piped[LANE_NUM][PIPE_DEPTH];

	for(unsigned int k=0; k<output_num; k++){

		bias_ch_out = read_channel_altera(bias_ch);

		#pragma unroll
		for(unsigned char ll=0; ll<LANE_NUM; ll++){

			conv_out[ll] = 0.0f;
			bias[ll] = bias_ch_out.lane[ll];

			#pragma unroll
			for(unsigned int p=0; p<PIPE_DEPTH; p++){
				accum_piped[ll][p] = 0.0f;
			}
		}

		for(int j=0; j<conv_loop_cnt; j++){

			mac_data = read_channel_altera(data_ch);
			mac_weight = read_channel_altera(weight_ch);

			#pragma unroll
			for(unsigned char ll=0; ll<LANE_NUM; ll++){

				lane_accum[ll] = accum_piped[ll][PIPE_DEPTH-1] + mac(mac_data.lane[ll], mac_weight.lane[ll]);

				#pragma unroll
				for(unsigned int p=PIPE_DEPTH-1; p>0; p-- ){
					accum_piped[ll][p]=accum_piped[ll][p-1];
				}

				accum_piped[ll][0] = lane_accum[ll];

			}
		}// end of conv loop

		#pragma unroll
		for(unsigned char ll=0; ll<LANE_NUM; ll++){

			#pragma unroll
			for(unsigned i=0; i<PIPE_DEPTH; i++){
				conv_out[ll] += accum_piped[ll][i];
			}

			conv_out[ll] += bias[ll];

			// Relu operation
			if((contol&0x01)==0x01){
				if(conv_out[ll]<=0)
					conv_ch_in.lane[ll] = 0;
				else
					conv_ch_in.lane[ll] = conv_out[ll];
			}
			else
				conv_ch_in.lane[ll] = conv_out[ll];
		}

		// write convoluation results
		if((contol&0x02)==0x02)
			//by-pass pooling
			write_channel_altera(bypass_ch, conv_ch_in);
		else // to pooling kernel
			write_channel_altera(conv_ch, conv_ch_in);

	}// end of output loop

}


__kernel
__attribute__((task))
void max_pool(
			// Params Ports
			uint input_num,
			uint line_size,  // line_size should be no larger than POOL_LBUF_DEPTH
			uint pool_size,  // by now, only pooling size no larger than 3
			uint pool_stride

			)
{
	channel_fp32 conv_ch_out;
	channel_fp32 pool_final;

	float line_buf_0[LANE_NUM][POOL_LBUF_DEPTH];
	float line_buf_1[LANE_NUM][POOL_LBUF_DEPTH];
	int   line_buf_ptr;
	int   col_pool_cnt;
	int   row_pool_cnt;
	int   row_cnt;
	float row_pool_reg[LANE_NUM];
	float col_pool_reg[LANE_NUM];
	float pool_reg[LANE_NUM][POOL_MAX_SIZE];

	line_buf_ptr = 0;
	row_pool_cnt = 0;
	col_pool_cnt = 0;
	for(unsigned int k=0; k<input_num; k++){

		conv_ch_out = read_channel_altera(conv_ch);

		#pragma unroll
		for(unsigned char ll=0; ll<LANE_NUM; ll++){
			if(pool_size==3)
				row_pool_reg[ll] = fmax(line_buf_1[ll][line_buf_ptr], line_buf_0[ll][line_buf_ptr]);
			else // pool_size==2
				row_pool_reg[ll] = line_buf_0[ll][line_buf_ptr];

			pool_reg[ll][0] = fmax(row_pool_reg[ll], conv_ch_out.lane[ll]);

			if(pool_size==3)
				col_pool_reg[ll] = fmax(pool_reg[ll][1], pool_reg[ll][2]);
			else //pool_size==2
				col_pool_reg[ll] = pool_reg[ll][1];

			pool_final.lane[ll] = fmax(col_pool_reg[ll], pool_reg[ll][0]);

			line_buf_1[ll][line_buf_ptr] = line_buf_0[ll][line_buf_ptr];
			line_buf_0[ll][line_buf_ptr] = conv_ch_out.lane[ll];

			#pragma unroll
			for(unsigned int p=POOL_MAX_SIZE-1; p>0; p--){
				pool_reg[ll][p]=pool_reg[ll][p-1];
			}
		}

		if(row_pool_cnt==(pool_size-1)){

			if(col_pool_cnt==(pool_size-1)){
				write_channel_altera(pool_ch, pool_final);

				col_pool_cnt = (pool_size-pool_stride);
			}
			else
				col_pool_cnt = col_pool_cnt + 1;
		}
		else
			col_pool_cnt = 0;

		if(line_buf_ptr==(line_size-1)){
			line_buf_ptr = 0;

			if(row_cnt == (line_size-1))
				row_cnt = 0;
			else
				row_cnt = row_cnt + 1;

			if(row_cnt == 0)
				row_pool_cnt = 0;
			else if(row_pool_cnt==(pool_size-1))
				row_pool_cnt = (pool_size-pool_stride);
			else
				row_pool_cnt = row_pool_cnt + 1;
		}
		else{
			line_buf_ptr = line_buf_ptr + 1;
		}

	}
}


__kernel
//__attribute((reqd_work_group_size(100,1,1))) // May need to compile several times for different work group sizez
//__attribute((num_simd_work_items(SIMD_WORK_ITEMS))) // This is not supported when using channels
void fully_connected( // Input and output matrices
                 __global float *restrict Y,
                 __global const float *restrict W,
                 __global float *restrict X,
                 // Widths of matrices.
                 int W_width) //int X_width)
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

    running_sum += W[local_id*W_width];

    //#pragma unroll
    for (int k = 1; k < W_width; ++k)
    {
        //float t1_k = Theta1[local_id][k]; // W[local_id*W_x + k];
        //float x_k = X[k];
        running_sum += W[local_id*W_width + k] * X[k-1];
        //printf("LID: %d running_sum = %f\n", local_id, running_sum);
    }
    barrier(CLK_LOCAL_MEM_FENCE);
    // Store result in matrix C
    Y[get_global_id(0)] = SIGMOID(running_sum);
}
