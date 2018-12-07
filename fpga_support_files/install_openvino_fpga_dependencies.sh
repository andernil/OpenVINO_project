#!/bin/bash

# install_openvino_fpga_dependencies.sh, v.0.3

# This script currently requires Ubuntu 16.04

NEEDS_KNL=0
KV_Target="4.13"
USR_HOME=$HOME
USR_CWD=`pwd`

OV_DEPS="/opt/intel/computer_vision_sdk/install_dependencies"

# Prompt for user response
old_ask_user() {
  yn=""
  echo "$1"
  echo "Select (1) for Yes, (2) for No:"
  select yn in "Yes" "No"; do
      case $yn in
          Yes ) yn="Yes"; break;;
          No ) yn=""; break;;
      esac
  done
}

# Prompt for user response
ask_user() {
  yn=""
  opts=(y n)
  echo "$1"
  echo "Select (y)es or (n)o"
  while [[ $yn != "y" && $yn != "n" ]]; do
    read yn
  done
}


# Exit unless in fpga_support_files directory
#--------------------------------------------------------------------------------
currdir=`pwd| rev| cut -d'/' -f1|rev`
if [[ $currdir != "fpga_support_files" ]]; then
	echo "This script expects to be executed from the fpga_support_files directory"
	exit 1
fi


# Exit unless in Ubuntu 
#--------------------------------------------------------------------------------
if [ -f /etc/os-release ]; then
    # Ubuntu/CentOS/RHEL
    source /etc/os-release
    DIST="$NAME"
    VER="$VERSION_ID"
elif [ type lsb_release >/dev/null 2>&1 ]; then
    DIST=$(lsb_release -si)
    VER=$(lsb_release -sr)
elif [ -f /etc/lsb-release ]; then
    # For old/odd versions of Debian/Ubuntu without lsb_release command
    source /etc/lsb-release
    DIST="$DISTRIB_ID"
    VER="$DISTRIB_RELEASE"
else
    DIST="Unknown"
    VER="0"
fi

if [[ $DIST  != "Ubuntu" ]]; then
	echo "Dist ($DIST) not supported.  Exiting."
	exit 1
fi

# Script expects root perms, exit if otherwise
if [[ $EUID -ne 0 ]]; then
   echo "Please run this script as root.  Exiting." 
   exit 1
fi

# Setup 
#--------------------------------------------------------------------------------
cd $USR_HOME
fsf_dir=`find . -type d -iname "*fpga_supp*" 2>/dev/null`

kv=`uname -r|cut -d'-' -f1|cut -d'.' -f1,2`
#echo ".. $kv .."

if [[ $kv < $KV_Target ]]; then
	NEEDS_KNL=1
fi

cd $OV_DEPS

# Install Neo and/or Kernel 4.14 
#--------------------------------------------------------------------------------

ask_user "The NEO OpenCL GPU driver is required for using the GPU with OpenVINO.  Would you like to install it?" 
if [[ $yn == "y" ]]; then
	INSTALL_NEO=1
fi

if [[ $NEEDS_KNL == 1 ]]; then
	KNL_INFO="The Neo OCL GPU Driver requires kernel 4.14 or later.  You have an older version: $kv.  Do you want to install kernel 4.14?"
	ask_user $KNL_INFO
	if [[ $yn == "n" ]]; then
		NEEDS_KNL=0
	fi
fi

#ask_user "Do you want to Movidius USB Rules?"
#if [[ $yn == "Yes" ]]; then
#	INSTALL_MOVI=1
#fi

if [[ $NEEDS_KNL == 1 && $INSTALL_NEO == 1  ]];then
	INSTALL_ALL=1
fi

if [[ $INSTALL_ALL == 1 ]]; then
	echo "Install All" 
	./_install_all_dependencies.sh
elif [[ $INSTALL_NEO == 1 ]]; then
	echo "Install NEO OCL"
	#./install_NEO_OCL_driver.sh &> /dev/null 
	./install_NEO_OCL_driver.sh 
fi

# Movidius NCS v2 has a different usb config file - may want to prompt & install
#if [[ $INSTALL_MOVI == 1 ]]; then
	# cp MOusbblaster rules  
#fi

# Required for aocl on Ubuntu 16 
apt install -y libelf-dev

# Fix OpenVINO aocl files
#--------------------------------------------------------------------------------
#echo "Moving to: $USR_PWD/fixes"
cd "$USR_CWD/fixes"

cp Command.pm /opt/altera/aocl-pro-rte/aclrte-linux64/share/lib/perl/acl/
cp install /opt/altera/aocl-pro-rte/aclrte-linux64/board/a10_ref/linux64/libexec/
cp uninstall /opt/altera/aocl-pro-rte/aclrte-linux64/board/a10_ref/linux64/libexec/

if [[ ! -f "/etc/modprobe.d/blacklist-altera-cvp.conf" ]]; then
	cp blacklist-altera-cvp.conf /etc/modprobe.d/
fi


#--------------------------------------------------------------------------------
# cd /opt/intel/computer_vision_sdk/deployment_tools/model_optimizer/install_prerequisites
# ./install_prerequisites.sh

echo ""
echo "Success!  OpenVINO FPGA dependencies installed."
exit


