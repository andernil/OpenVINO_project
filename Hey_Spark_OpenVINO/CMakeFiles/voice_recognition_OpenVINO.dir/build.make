# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 2.8

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list

# Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The program to use to edit the cache.
CMAKE_EDIT_COMMAND = /usr/bin/ccmake

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/annil/Desktop/project/code/Hey_Spark_OpenVINO

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/annil/Desktop/project/code/Hey_Spark_OpenVINO

# Include any dependencies generated for this target.
include CMakeFiles/voice_recognition_OpenVINO.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/voice_recognition_OpenVINO.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/voice_recognition_OpenVINO.dir/flags.make

CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.o: CMakeFiles/voice_recognition_OpenVINO.dir/flags.make
CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.o: voice_recognition_openVINO.cpp
	$(CMAKE_COMMAND) -E cmake_progress_report /home/annil/Desktop/project/code/Hey_Spark_OpenVINO/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.o -c /home/annil/Desktop/project/code/Hey_Spark_OpenVINO/voice_recognition_openVINO.cpp

CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E /home/annil/Desktop/project/code/Hey_Spark_OpenVINO/voice_recognition_openVINO.cpp > CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.i

CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S /home/annil/Desktop/project/code/Hey_Spark_OpenVINO/voice_recognition_openVINO.cpp -o CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.s

CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.o.requires:
.PHONY : CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.o.requires

CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.o.provides: CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.o.requires
	$(MAKE) -f CMakeFiles/voice_recognition_OpenVINO.dir/build.make CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.o.provides.build
.PHONY : CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.o.provides

CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.o.provides.build: CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.o

CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.o: CMakeFiles/voice_recognition_OpenVINO.dir/flags.make
CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.o: wav_utils/record_voice.cpp
	$(CMAKE_COMMAND) -E cmake_progress_report /home/annil/Desktop/project/code/Hey_Spark_OpenVINO/CMakeFiles $(CMAKE_PROGRESS_2)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.o -c /home/annil/Desktop/project/code/Hey_Spark_OpenVINO/wav_utils/record_voice.cpp

CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E /home/annil/Desktop/project/code/Hey_Spark_OpenVINO/wav_utils/record_voice.cpp > CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.i

CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S /home/annil/Desktop/project/code/Hey_Spark_OpenVINO/wav_utils/record_voice.cpp -o CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.s

CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.o.requires:
.PHONY : CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.o.requires

CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.o.provides: CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.o.requires
	$(MAKE) -f CMakeFiles/voice_recognition_OpenVINO.dir/build.make CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.o.provides.build
.PHONY : CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.o.provides

CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.o.provides.build: CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.o

CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.o: CMakeFiles/voice_recognition_OpenVINO.dir/flags.make
CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.o: wav_utils/write_wav.cpp
	$(CMAKE_COMMAND) -E cmake_progress_report /home/annil/Desktop/project/code/Hey_Spark_OpenVINO/CMakeFiles $(CMAKE_PROGRESS_3)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.o -c /home/annil/Desktop/project/code/Hey_Spark_OpenVINO/wav_utils/write_wav.cpp

CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E /home/annil/Desktop/project/code/Hey_Spark_OpenVINO/wav_utils/write_wav.cpp > CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.i

CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S /home/annil/Desktop/project/code/Hey_Spark_OpenVINO/wav_utils/write_wav.cpp -o CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.s

CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.o.requires:
.PHONY : CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.o.requires

CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.o.provides: CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.o.requires
	$(MAKE) -f CMakeFiles/voice_recognition_OpenVINO.dir/build.make CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.o.provides.build
.PHONY : CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.o.provides

CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.o.provides.build: CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.o

# Object files for target voice_recognition_OpenVINO
voice_recognition_OpenVINO_OBJECTS = \
"CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.o" \
"CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.o" \
"CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.o"

# External object files for target voice_recognition_OpenVINO
voice_recognition_OpenVINO_EXTERNAL_OBJECTS =

voice_recognition_OpenVINO: CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.o
voice_recognition_OpenVINO: CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.o
voice_recognition_OpenVINO: CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.o
voice_recognition_OpenVINO: CMakeFiles/voice_recognition_OpenVINO.dir/build.make
voice_recognition_OpenVINO: /opt/intel/computer_vision_sdk/inference_engine/lib/centos_7.4/intel64/libinference_engine.so
voice_recognition_OpenVINO: CMakeFiles/voice_recognition_OpenVINO.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --red --bold "Linking CXX executable voice_recognition_OpenVINO"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/voice_recognition_OpenVINO.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/voice_recognition_OpenVINO.dir/build: voice_recognition_OpenVINO
.PHONY : CMakeFiles/voice_recognition_OpenVINO.dir/build

CMakeFiles/voice_recognition_OpenVINO.dir/requires: CMakeFiles/voice_recognition_OpenVINO.dir/voice_recognition_openVINO.cpp.o.requires
CMakeFiles/voice_recognition_OpenVINO.dir/requires: CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/record_voice.cpp.o.requires
CMakeFiles/voice_recognition_OpenVINO.dir/requires: CMakeFiles/voice_recognition_OpenVINO.dir/wav_utils/write_wav.cpp.o.requires
.PHONY : CMakeFiles/voice_recognition_OpenVINO.dir/requires

CMakeFiles/voice_recognition_OpenVINO.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/voice_recognition_OpenVINO.dir/cmake_clean.cmake
.PHONY : CMakeFiles/voice_recognition_OpenVINO.dir/clean

CMakeFiles/voice_recognition_OpenVINO.dir/depend:
	cd /home/annil/Desktop/project/code/Hey_Spark_OpenVINO && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/annil/Desktop/project/code/Hey_Spark_OpenVINO /home/annil/Desktop/project/code/Hey_Spark_OpenVINO /home/annil/Desktop/project/code/Hey_Spark_OpenVINO /home/annil/Desktop/project/code/Hey_Spark_OpenVINO /home/annil/Desktop/project/code/Hey_Spark_OpenVINO/CMakeFiles/voice_recognition_OpenVINO.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/voice_recognition_OpenVINO.dir/depend

