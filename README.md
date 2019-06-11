# OpenVINO_project
NTNU 2019 master thesis for Cisco, branch of semester project autumn 2018

Project files for compiling and running the Google Speech Commands keyword spotting neural
network program using OpenVINO on a CPU or FPGA. 

The program reads an input file list of verification samples generated during network training,
defined in the program to by default be recordings/verification_data-201955023_CNN.txt.

The executable program takes several input arguments in the following way:
./voice_recognition_OpenVINO [NETWORK_PATH XML] [WEIGHTS_PATH BIN] [NUM_ITERATIONS]
[SAMPLE] [CPU, FPGA or HETERO] [RELEASE or DEBUG].


[NETWORK_PATH XML] is the path to the network.xml file (in this case Optimized/wakeword.bin)

[WEIGHTS_PATH BIN] is the path to the network.bin file (in this case Optimized/wakeword.xml)


[NUM_ITERATIONS] is the number of iterations the program will record and infer

[SAMPLE or LIVE] is whether the program should use the pre-recorded sample or recordl live data.
NOTE: Unused for this branch.

[CPU, FPGA or HETERO] is whether to infer to only CPU, only FPGA or using Hetero with FPGA and CPu as fallback.

[RELEASE or DEBUG] is whether to have minimal output info or debug info

Minimal output info is:

-Loading sample/recording data

-Filling buffer

-Results for each iteration

-Average, mean and fastest time

-Average throughput


Debug output is:
-Every step of the setup and inferring process

-Detailed info on every processing layer, seperated into what's running on CPU and FPGA
and includes the execution time for every stage. 

-The output from the minimal output.


Time outputs are printed based on the execution time from the Inference Engine.



Requirements:

-OS: CentOS or Ubuntu (as per Intel's instructions for OpenVINO)

-Intel OpenVINO framework for running the program

-OpenVINO with FPGA support if running on FPGA

-PortAudio (http://portaudio.com/docs/v19-doxydocs/index.html)

-Intel Quartus for running the progrma on FPGA

-Intel PAC or Intel Arria 10 GX Development Kit


Results:
The fastest speed achieved was 2.39ms when using FPGA and 5.54ms when using CPU. Due to
the size of the neural network the first convolutional layer can't be inferred to the 
FPGA and is therefore run on the CPU. This can be faster if the network is edited, and 
the speedup can be higher if a PCI-Expressx8 Gen3 port is used instead of a 
PCI-Express x8 Gen1 which was used in this case. The average time used was 5.1ms for FPGA
and 7.53 for CPU, but this is probably due to the layers on the CPU.


The test setup was:

-HP Z800 workstation

-Intel Xeon E5620 @ 2.40GHz

-8GiB DDR3 Ram

-Intel Altera Arria 10 GX Develpment Kit in a PCIe x8 Gen1 slot


