#!/bin/bash

# OpenVINO FPGA setup_env.sh v.0.2

# Locate Quartus & AOCL
Find_Install_Paths() {
	search_dirs=(
		/opt/altera/aocl-pro-rte  
		/opt/altera/intelFPGA
		/opt/altera/intelFPGA_pro
		$HOME/aocl-pro-rte  
		$HOME/intelFPGA
		$HOME/intelFPGA_pro
	)

	qt_type="lite"

	for f in ${search_dirs[@]}; do
		#echo "Dir: $f"
		if [[ -d $f ]]; then
			#echo "FOUND: $f"

			if [[ $f = *"aocl-pro-rte"* ]]; then
				# aocl
				aocl_path=$f
				ao_path="$f/aclrte-linux64"
				have_aocl=1
			elif [[ $f = *"intelFPGA_pro"* ]]; then
				# quartus pro 
				qt_type="pro"
				qt_path="$f"
			elif [[ $f = *"intelFPGA"* ]]; then
				# quartus lite 
				qt_path="$f"
			fi
		fi
	done

	qt_ver=`ls $qt_path`
	qt_path="$qt_path/$qt_ver/qprogrammer/bin"

}


# Assemble Quartus Path by identifying path & version
#------------------------------------------------------------------------------------------
# ao_path is needed by OpenVINO
# Quartus is needed for jtagconfig and quartus_pgm
#------------------------------------------------------------------------------------------
qt_type="lite"
have_aocl=0

Find_Install_Paths

# AOCL Path
if [[ $have_aocl == 1 ]]; then
	# This is the AOCL from OpenVINO
	echo "Adding to Path (OpenVINO AOCL)"
	export PATH=$PATH:$ao_path/bin:$ao_path/host/linux64/bin:$qt_path
fi

# Quartus Path 
qtp1="$qt_path/quartus/bin"
qtp2=:"$qt_path/qprogrammer/bin"

if [[ $qt_type == "pro" ]]; then
	# This is the AOCL/Quartus for Quartus Pro 
	echo "Adding to Path (QT Pro)"

	if [[ -d "$qtp1" ]]; then
		# Quartus Pro Complete
		export PATH=$PATH:$qtp1
	elif [[ -d "$qtp2" ]]; then
		# Quartus Pro "minimal" 
		export PATH=$PATH:$qtp2
	elif [[ -d "$qt_path" ]]; then
		export PATH=$PATH:$qt_path
	fi
else
	# This is the AOCL/Quartus for Quartus Lite (Quartus Lite "minimal")
	#export PATH=$PATH:$qtp1
	export PATH=$PATH:$qt_path
fi

# Exit early if OpenVINO aocl not installed yet
if [[ $have_aocl == 1 ]]; then
	# Quartus/aocl Settings 
	export INTELFPGAOCLSDKROOT="$ao_path"
	export ALTERAOCLSDKROOT="$INTELFPGAOCLSDKROOT"
	export AOCL_BOARD_PACKAGE_ROOT="$INTELFPGAOCLSDKROOT/board/a10_ref"
	export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$AOCL_BOARD_PACKAGE_ROOT/host/linux64/lib:$AOCL_BOARD_PACKAGE_ROOT/linux64/lib
	export CL_CONTEXT_COMPILER_MODE_INTELFPGA=3

	# Setup OpenCL Env
	# NOTE: init_opencl.sh is only included in OpenVINO and the large Quartus installs
	if [[ $have_aocl == 1 ]]; then
		source $ao_path/init_opencl.sh

		# Setup OpenVINO Env
		LIBCPU=~/inference_engine_samples/intel64/Release/lib
		source /opt/intel/computer_vision_sdk/bin/setupvars.sh 
		export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/opt/intel/computer_vision_sdk/deployment_tools/inference_engine/lib/ubuntu_16.04/intel64

		# libcpu_extensions - new location
		if [[ -d $LIBCPU ]]; then
			export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$LIBCPU
		fi


	elif [[ $qt_type == "pro" ]]; then
			if [[ -f "$qt_path/hld/init_opencl.sh" ]]; then
				source $qt_path/hld/init_opencl.sh
			fi
	else
		if [[ -f "$qt_path/hld/init_opencl.sh" ]]; then
			source $qt_path/hld/init_opencl.sh
		fi
	fi
fi
