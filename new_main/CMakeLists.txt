# Copyright (c) 2018 Intel Corporation

# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at

#      http://www.apache.org/licenses/LICENSE-2.0

# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
cmake_minimum_required(VERSION 2.8)

set (TARGET_NAME "new_main_sample")

if( BUILD_SAMPLE_NAME AND NOT ${BUILD_SAMPLE_NAME} STREQUAL ${TARGET_NAME} )
    message(STATUS "SAMPLE ${TARGET_NAME} SKIPPED")
    return()
endif()

file (GLOB SRC
        ${CMAKE_CURRENT_SOURCE_DIR}/*.cpp
        )

list (APPEND CMAKE_MODULE_PATH ${CMAKE_SOURCE_DIR}/cmake)

# Find Inference Engine if exists
# environment variable InferenceEngine_DIR can be use instead of relaive path to specify location of configuration file
get_filename_component(CMAKE_PREFIX_PATH "/opt/intel/computer_vision_sdk/inference_engine/share" ABSOLUTE)

message(STATUS "Looking for inference engine configuration file at: /opt/intel/computer_vision_sdk/inference_engine/share/")
find_package(InferenceEngine 1.2)

if (NOT InferenceEngine_FOUND)
    message(FATAL_ERROR "")
endif()

# Create named folders for the sources within the .vcproj
# Empty name lists them directly under the .vcproj
source_group("src" FILES ${SRC})

link_directories(${LIB_FOLDER})

# Create library file from sources.
add_executable(${TARGET_NAME} ${SRC})

set(CMAKE_CXX_FLAGS "-std=c++11 -g ${CMAKE_CXX_FLAGS}")

set_target_properties(${TARGET_NAME} PROPERTIES "CMAKE_CXX_FLAGS" "${CMAKE_CXX_FLAGS} -fPIE"
COMPILE_PDB_NAME ${TARGET_NAME})

target_link_libraries(${TARGET_NAME} ${InferenceEngine_LIBRARIES} ${OpenCV_LIBRARIES})


if(UNIX)
    target_link_libraries(${TARGET_NAME} ${LIB_DL} pthread)
endif()
