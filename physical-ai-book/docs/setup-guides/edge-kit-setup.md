---
sidebar_position: 2
---

# Physical AI Edge Kit Setup Guide

This guide provides instructions for setting up a Physical AI Edge Kit, typically based on NVIDIA Jetson platforms, for developing and deploying AI models directly on edge devices. This setup is crucial for applications requiring low latency, privacy, and operation in environments without constant cloud connectivity.

## Hardware Requirements (Jetson Platform Focus)

This guide assumes the use of an NVIDIA Jetson development kit (e.g., Jetson Orin Nano, Jetson Orin NX, Jetson AGX Orin).

-   **NVIDIA Jetson Development Kit**: Orin Nano (recommended for beginners), Orin NX, or AGX Orin.
-   **Power Supply**: Compatible with your Jetson kit.
-   **microSD Card (for Nano)**: 64GB+ A2 class for OS (if not using eMMC).
-   **USB Keyboard & Mouse**: For initial setup.
-   **HDMI/DisplayPort Monitor**: For initial setup.
-   **Ethernet Cable / Wi-Fi Adapter**: For network connectivity.
-   **Optional**: USB Camera, Sensors (LiDAR, IMU), Robot Platform.

## Software Prerequisites

The Jetson platform typically comes with NVIDIA JetPack SDK pre-installed or available for flashing. JetPack includes Ubuntu, CUDA, cuDNN, TensorRT, and other essential tools for AI development.

1.  **Flash JetPack OS (if necessary)**:
    -   Download and install the NVIDIA SDK Manager on your host PC (Ubuntu x86_64 recommended).
    -   Connect your Jetson device to the host PC via USB.
    -   Follow the SDK Manager instructions to flash the latest JetPack OS onto your Jetson device. This typically installs Ubuntu, CUDA, and other core components.
    -   *Alternative (for Nano/Xavier NX with SD card)*: Download the JetPack image and flash it to an SD card using a tool like Balena Etcher.
2.  **Initial Setup on Jetson**:
    -   After flashing and booting for the first time, complete the Ubuntu welcome screen setup (create user, set locale).
    -   Connect to Wi-Fi or Ethernet.
3.  **Update System**:
    ```bash
    sudo apt update
    sudo apt upgrade -y
    ```
4.  **Install General Build Tools**:
    ```bash
    sudo apt install -y build-essential curl git cmake
    ```
5.  **Install Python and pip**:
    -   Python 3 is usually pre-installed with JetPack.
    ```bash
    sudo apt install -y python3-pip
    sudo -H pip3 install --upgrade pip
    ```

## Setting up ROS 2 on Jetson

Installing ROS 2 on Jetson follows similar steps to a standard Ubuntu installation but might require specific pre-built packages or considerations for ARM architecture.

1.  **Configure ROS 2 Repositories**:
    ```bash
    # Example for ROS 2 Humble (adjust for other versions)
    sudo apt install -y software-properties-common
    sudo add-apt-repository universe
    sudo apt update && sudo apt install curl -y
    sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $VERSION_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
    sudo apt update
    ```
2.  **Install ROS 2 Desktop (or Base)**:
    -   For minimal installation: `sudo apt install ros-humble-ros-base`
    -   For a more complete desktop experience: `sudo apt install ros-humble-desktop` (might be heavy for Nano)
3.  **Environment Setup**:
    ```bash
    echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
    source ~/.bashrc
    ```
4.  **Install `rosdep` and initialize**:
    ```bash
    sudo apt install -y python3-rosdep
    sudo rosdep init
    rosdep update
    ```

## Deep Learning Frameworks (TensorFlow, PyTorch)

While JetPack includes TensorRT for optimized inference, you might want to install full DL frameworks.

-   **PyTorch**: NVIDIA provides pre-built PyTorch wheels for Jetson.
    -   Follow the official NVIDIA Jetson Zoo for PyTorch installation instructions specific to your JetPack version.
-   **TensorFlow**: Similarly, NVIDIA offers optimized TensorFlow installations.
    -   Refer to the NVIDIA Jetson Zoo for TensorFlow installation instructions.

## Next Steps

With your Jetson Edge Kit configured, you are ready to explore deployment of AI models and integration with physical robotic hardware.

-   [Document Robot Options](/docs/hardware/robots)
-   [Sensor Calibration Guide](/docs/setup-guides/sensor-calibration)
-   [Deploying ROS 2 Applications to Edge Devices](/docs/modules/module-1-ros2/chapter-5-launch-packages) (Coming Soon)
