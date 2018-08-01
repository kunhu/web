
#
#nvcc: NVIDIA (R) Cuda compiler driver
#Copyright (c) 2005-2016 NVIDIA Corporation
#Built on Sun_Sep__4_22:14:01_CDT_2016
#Cuda compilation tools, release 8.0, V8.0.44
echo "nvcc --version"
nvcc --version

echo "--------------------------------------\n\n"


echo "nvidia-smi"
nvidia-smi


echo "--------------------------------------\n\n"

#
#NVRM version: NVIDIA UNIX x86_64 Kernel Module  375.26  Thu Dec  8 18:36:43 PST 2016
#GCC version:  gcc version 5.4.0 20160609 (Ubuntu 5.4.0-6ubuntu1~16.04.4) 
cat /proc/driver/nvidia/version 


#Kernel modules: nvidiafb, nvidia_396, nvidia_396_drm
lspci -v |grep -B 10 nvidia


#apt-cache
#apt-cache policy cuda-drivers
