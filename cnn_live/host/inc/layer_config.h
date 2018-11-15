//#include "../device/hw_param.cl"

const unsigned int num_layers = 6; // mby use #define

unsigned int layer_config[][15] = {
							{ // conv1
								0, // "0" -> conv, "1" -> fc (only conv, conv with pool, fc, ??)
								1, // type_num for conv1 -> 1 for conv2 -> 2
								90, 40, // h, w input data
								16, 1, 16, 8, //16 // n, c, h, w, b - weights and bias
								25, 17, 3, 2, // h, w, s_h, s_w - Conv parameters
								1, // relu_on
								0, // read from data "0"-> input_buf  "1"-> output_buf  "2"->"tmp_1_buffer"  "3"->"tmp_2_buffer"
								2 // output buffer   "0"-> input_buf  "1"-> output_buf  "2"->"tmp_1_buffer"  "3"->"tmp_2_buffer"
							},
							{ // conv2
								0,
								2,
								25, 17,
								32, 16, 8, 4,
								6, 7, 3, 2,
								1,
								2,
								3
							},
							{ // conv3
								0,
								3,
								6, 7,
								64, 32, 3, 3,
								4, 5, 1, 1,
								1,
								3,
								2
							},
							{ // fc1/ip1
								1,
								1,
								1280, 1,
								1, 1, 32, 1280, // 64*4*5 = 1280
								1, 32, 1, 1,
								0, // relu should not be on in this layer
								2,
								3,
							},
							{ // fc2/ip2
								1,
								2,
								32, 1,
								1, 1, 128, 32,
								1, 128, 1, 1,
								1,
								3,
								2
							},
							{ //fc3/ip3
								1,
								3,
								128, 1,
								1, 1, 2, 128,
								1, 2, 1, 1,
								0,
								2,
								1
							}
};

/*
// Alexnet Configuration
unsigned layer_config[][25] = {{0,
							227, 227, VEC_SIZE, 11, 11, VEC_SIZE, 96, 96,  //Note: for dim3 must be consistent with VEC_SIZE
							0,
							55, 55, 96, 4, 0, 0, 1,
							1, 27, 27, 96, 3, 2,
							1,
							1},//Layer-1
							{0,
							27, 27, 96, 5, 5, 48, 256, 256,
							0,
							27, 27, 256, 1, 2, 1, 1,
							1, 13, 13, 256, 3, 2,
							1,
							1},//Layer-2
							{0,
							13, 13, 256, 3, 3, 256, 384, 384,
							0,
							13, 13, 384, 1, 1, 0, 1,
							0, 13, 13, 384, 0, 0,
							0,
							1},//Layer-3
							{0,
							13, 13, 384, 3, 3, 192, 384, 384,
							1,
							13, 13, 384, 1, 1, 1, 1,
							0, 13, 13, 384, 0, 0,
							0,
							0},//Layer-4
							{0,
							13, 13, 384, 3, 3, 192, 256, 256,
							0,
							13, 13, 256, 1, 1, 1, 1,
							1, 6, 6, 256, 3, 2,
							0,
							2},//Layer-5  Note: for last conv layer, outputs are write to fc buffer
							{1,
							24, 24, 256, 6, 6, 256, 4096, 4096,  // Note: The input size (dim1/dim2) is the combined data size (batched)
							2,
							4, 4, 4096, 6, 0, 0, 1,
							0, 4, 4, 4096, 0, 0,
							0,
							3},//Layer-6 fc
							{1,
							4, 4, 4096, 1, 1, 4096, 4096, 4096,
							3,
							4, 4, 4096, 1, 0, 0, 1,
							0, 4, 4, 4096, 0, 0,
							0,
							2},//Layer-7 fc
							{1,
							4, 4, 4096, 1, 1, 4096, 1024, 1024,
							2,
							4, 4, 1024, 1, 0, 0, 0,
							0, 4, 4, 1024, 0, 0,
							0,
							3}//Layer-8 fc
							};

unsigned input_config[5] = {227, 227, 3, 16}; //original image size(dim1, dim2, dim3), batch size

//unsigned output_config[3] = {27, 27, 96};//Layer-1

//unsigned output_config[3] = {6, 6, 256};//Layer-5

//unsigned output_config[3] = {1, 1, 4096};//Layer-6

unsigned output_config[3] = {1, 1, 1024};//Layer-8  Note: only one result is extracted and verified
*/
