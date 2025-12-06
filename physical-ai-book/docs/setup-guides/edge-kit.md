---
id: edge-kit
title: Physical AI Edge Kit Setup (Jetson Orin)
---

# Physical AI Edge Kit Setup: NVIDIA Jetson Orin

This guide provides instructions for setting up your NVIDIA Jetson Orin device as a Physical AI Edge Kit for hands-on robotics development. The Jetson Orin platform is ideal for deploying AI models at the edge and interacting with physical hardware.

## 1. Hardware Requirements

-   NVIDIA Jetson Orin Developer Kit (e.g., Jetson AGX Orin, Jetson Orin Nano)
-   Power supply
-   MicroSD card (for Jetson Nano/Xavier NX) or NVMe SSD (for AGX Orin)
-   Monitor, keyboard, mouse
-   Ethernet cable or Wi-Fi adapter

## 2. Software Setup

### Flashing the Jetson OS

Follow NVIDIA's official documentation to flash the Jetson Operating System onto your device. This typically involves:
1.  Downloading the NVIDIA SDK Manager.
2.  Connecting your Jetson device to your host PC.
3.  Using SDK Manager to flash the appropriate JetPack OS.

### Initial Configuration

-   Set up user accounts.
-   Connect to Wi-Fi/Ethernet.
-   Update and upgrade system packages:
    ```bash
    sudo apt update
    sudo apt upgrade -y
    ```

## 3. Install ROS 2 (Humble)

Install ROS 2 Humble following the official ROS 2 documentation for Ubuntu/ARM architectures.

```bash
# Example commands (refer to official docs for precise steps)
sudo apt install software-properties-common
sudo add-apt-repository universe
sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
sudo apt update
sudo apt install ros-humble-desktop -y
# ... additional setup for environment
```

## 4. Install other essential libraries and tools

-   **Python Development Tools**: `pip`, `venv`
-   **VS Code (Optional)**: Remote Development extensions for SSH
-   **Git**: For version control

## 5. Next Steps

Once your Jetson Orin is set up, you can proceed with deploying AI models, connecting sensors, and running robotics applications.

---
This is a placeholder document. Detailed instructions, specific versions, and troubleshooting tips will be added during content creation.
