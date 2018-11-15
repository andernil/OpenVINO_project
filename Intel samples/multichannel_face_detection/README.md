# Multi-Channel Face Detection Sample {#InferenceEngineMultiChannelFaceDetectionSampleApplication}

This sample provides an inference pipeline for multi-channel face detection. The sample uses Face Detection network. The corresponding pre-trained model delivered with the product is `face-detection-retail-0004`, which is a primary detection network for finding faces.

For details on the models, please refer to the descriptions in the `deployment_tools/intel_models` folder of the OpenVINO&trade; toolkit installation directory.

Other sample objectives are:

* Up to 16 Cameras as inputs, via OpenCV*
* Visualization of detected faces from all channels on single screen


## How It Works

**NOTE**: Running the sample requires using at least one web camera attached to your machine. 
 
On the start-up, the application reads command line parameters and loads the specified networks. The Face Detection network is required.


## Running

Running the application with the `-h` option yields the following usage message:
```sh
./multichannel_face_detection_sample -h

multichannel_face_detection [OPTION]
Options:

    -h                           Print a usage message.
    -m "<path>"                  Required. Path to an .xml file with a trained face detection model.
      -l "<absolute_path>"       Required for MKLDNN (CPU)-targeted custom layers.Absolute path to a shared library with the kernels impl.
          Or
      -c "<absolute_path>"       Required for clDNN (GPU)-targeted custom kernels.Absolute path to the xml file with the kernels desc.
    -d "<device>"                Specify the target device for Face Detection (CPU, GPU, FPGA, or MYRIAD). Sample will look for a suitable plugin for device specified.
    -nc                          Maximum number of processed camera inputs (web cams). If not specified, 4 cameras are expected by default. 
    -bs                          Processing batch size, number of frames processed per infer request
    -n_ir                        Number of infer requests
    -n_iqs                       Frame queue size for input channels
    -fps_sp                      FPS measurement sampling period. Duration between timepoints, msec
    -num_sp                      Exit after N sampling periods in performance testing(No show) mode
    -t                           Probability threshold for detections.
    -no_show                     No show processed video.
    -show_stats                  Enable statictics output
    -duplicate_num               Enable and specify number of channel additionally copied from real sources
    -real_input_fps              Disable input frames caching, for maximum throughput pipeline

```

For example, to run the sample with the pre-trained face detection model on FPGA with fallback on CPU, with one single camera, use the following command:
```sh
./multi-channel-sample -m <INSTALL_DIR>/deployment_tools/intel_models/face-detection-retail-0004/FP32/face-detection-retail-0004.xml 
-l <samples_build_folder>/intel64/Release/lib/libcpu_extension.so -d HETERO:FPGA,CPU -nc 1
```

To run with a single camera but several channels, specify additional parameter: `-duplicate_num 3`. You will see 4 channels: 1 real and 3 duplicated. 


## Sample Output

The sample uses OpenCV to display the resulting bunch of frame with detections rendered as bounding boxes.
On the Top of the screen sample reports Throughput (in frames per second). If needed it prints on the screen more detailed statistics

## See Also
* [Using Inference Engine Samples](@ref SamplesOverview)
