cmake_minimum_required(VERSION 3.16)
project(WLED)

set(CMAKE_CXX_STANDARD 14)

# Add source files
add_executable(WLED src/main.cpp src/other.cpp)

# Include directories
include_directories(include)

# Link libraries
target_link_libraries(WLED pthread)