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
CMAKE_SOURCE_DIR = /home/annil/Desktop/project/code/new_main

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/annil/Desktop/project/code/new_main

# Include any dependencies generated for this target.
include CMakeFiles/new_main_sample.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/new_main_sample.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/new_main_sample.dir/flags.make

CMakeFiles/new_main_sample.dir/new_main_sample.cpp.o: CMakeFiles/new_main_sample.dir/flags.make
CMakeFiles/new_main_sample.dir/new_main_sample.cpp.o: new_main_sample.cpp
	$(CMAKE_COMMAND) -E cmake_progress_report /home/annil/Desktop/project/code/new_main/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object CMakeFiles/new_main_sample.dir/new_main_sample.cpp.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/new_main_sample.dir/new_main_sample.cpp.o -c /home/annil/Desktop/project/code/new_main/new_main_sample.cpp

CMakeFiles/new_main_sample.dir/new_main_sample.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/new_main_sample.dir/new_main_sample.cpp.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E /home/annil/Desktop/project/code/new_main/new_main_sample.cpp > CMakeFiles/new_main_sample.dir/new_main_sample.cpp.i

CMakeFiles/new_main_sample.dir/new_main_sample.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/new_main_sample.dir/new_main_sample.cpp.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S /home/annil/Desktop/project/code/new_main/new_main_sample.cpp -o CMakeFiles/new_main_sample.dir/new_main_sample.cpp.s

CMakeFiles/new_main_sample.dir/new_main_sample.cpp.o.requires:
.PHONY : CMakeFiles/new_main_sample.dir/new_main_sample.cpp.o.requires

CMakeFiles/new_main_sample.dir/new_main_sample.cpp.o.provides: CMakeFiles/new_main_sample.dir/new_main_sample.cpp.o.requires
	$(MAKE) -f CMakeFiles/new_main_sample.dir/build.make CMakeFiles/new_main_sample.dir/new_main_sample.cpp.o.provides.build
.PHONY : CMakeFiles/new_main_sample.dir/new_main_sample.cpp.o.provides

CMakeFiles/new_main_sample.dir/new_main_sample.cpp.o.provides.build: CMakeFiles/new_main_sample.dir/new_main_sample.cpp.o

# Object files for target new_main_sample
new_main_sample_OBJECTS = \
"CMakeFiles/new_main_sample.dir/new_main_sample.cpp.o"

# External object files for target new_main_sample
new_main_sample_EXTERNAL_OBJECTS =

new_main_sample: CMakeFiles/new_main_sample.dir/new_main_sample.cpp.o
new_main_sample: CMakeFiles/new_main_sample.dir/build.make
new_main_sample: /opt/intel/computer_vision_sdk/inference_engine/lib/centos_7.4/intel64/libinference_engine.so
new_main_sample: CMakeFiles/new_main_sample.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --red --bold "Linking CXX executable new_main_sample"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/new_main_sample.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/new_main_sample.dir/build: new_main_sample
.PHONY : CMakeFiles/new_main_sample.dir/build

CMakeFiles/new_main_sample.dir/requires: CMakeFiles/new_main_sample.dir/new_main_sample.cpp.o.requires
.PHONY : CMakeFiles/new_main_sample.dir/requires

CMakeFiles/new_main_sample.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/new_main_sample.dir/cmake_clean.cmake
.PHONY : CMakeFiles/new_main_sample.dir/clean

CMakeFiles/new_main_sample.dir/depend:
	cd /home/annil/Desktop/project/code/new_main && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/annil/Desktop/project/code/new_main /home/annil/Desktop/project/code/new_main /home/annil/Desktop/project/code/new_main /home/annil/Desktop/project/code/new_main /home/annil/Desktop/project/code/new_main/CMakeFiles/new_main_sample.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/new_main_sample.dir/depend

