---
id: digital-twin-workstation-guide
sidebar_position: 1
---

# Digital Twin Workstation Setup Guide

This guide provides comprehensive instructions for setting up a high-performance workstation optimized for Digital Twin development, focusing on compatibility with ROS 2, Gazebo, and NVIDIA Isaac Sim. A robust workstation is crucial for fluid simulation, real-time data processing, and efficient development workflows in Physical AI.

## Hardware Requirements (Recommended)

A powerful workstation significantly enhances the Digital Twin development experience.

-   **CPU**: Intel Core i7/i9 (10th gen or newer) or AMD Ryzen 7/9 (3rd gen or newer)
    -   *Recommendation*: At least 8 cores, 16 threads for parallel compilation and simulation.
-   **GPU**: NVIDIA RTX series (3060, 3070, 3080, 3090, 4070, 4080, 4090)
    -   *Recommendation*: 12GB+ VRAM for Isaac Sim and complex Gazebo simulations. CUDA cores are essential.
-   **RAM**: 32 GB DDR4 (minimum), 64 GB or more (recommended)
    -   *Recommendation*: High-speed RAM (3200 MHz or faster).
-   **Storage**: 1 TB NVMe SSD (minimum), 2 TB+ NVMe SSD (recommended)
    -   *Recommendation*: Fast read/write speeds for large datasets and frequent software installations.
-   **Operating System**: Ubuntu 20.04 LTS (Focal Fossa) or 22.04 LTS (Jammy Jellyfish)
    -   *Note*: Many robotics tools are primarily developed and tested on Ubuntu. Dual-booting or a dedicated machine is often preferred.

## Software Prerequisites

Ensure your Ubuntu installation is up-to-date and necessary foundational tools are installed.

1.  **Update System**:
    ```bash
    sudo apt update
    sudo apt upgrade -y
    ```
2.  **Install Build Tools**:
    ```bash
    sudo apt install -y build-essential curl git
    ```
3.  **Install Python and pip**:
    ```bash
    sudo apt install -y python3 python3-pip
    sudo -H pip3 install --upgrade pip
    ```
4.  **Install NVIDIA Drivers**:
    -   Ensure you have the latest stable NVIDIA drivers compatible with your GPU and Ubuntu version.
    -   *Recommendation*: Use Ubuntu's "Software & Updates" -> "Additional Drivers" tab or follow NVIDIA's official instructions.
    -   Verify installation: `nvidia-smi`

## Docker and NVIDIA Container Toolkit Setup

Docker and NVIDIA Container Toolkit are essential for reproducible environments, especially for Isaac Sim.

1.  **Install Docker Engine**: Follow the official Docker documentation for Ubuntu.
    ```bash
    # Example commands (refer to Docker docs for latest)
    sudo apt-get update
    sudo apt-get install ca-certificates curl gnupg
    sudo install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    sudo chmod a+r /etc/apt/keyrings/docker.gpg
    echo \
      "deb [arch=\"$(dpkg --print-architecture)\" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
      sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
    ```
2.  **Add User to Docker Group**:
    ```bash
    sudo usermod -aG docker $USER
    newgrp docker # You might need to log out and back in for this to take effect
    ```
3.  **Install NVIDIA Container Toolkit**: Follow the official NVIDIA Container Toolkit documentation.
    ```bash
    # Example commands (refer to NVIDIA docs for latest)
    curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg
    curl -s -L https://nvidia.github.io/libnvidia-container/ubuntu20.04/libnvidia-container.list | \
        sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
        sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
    sudo apt-get update
    sudo apt-get install -y nvidia-container-toolkit
    sudo nvidia-ctk runtime configure --runtime=docker
    sudo systemctl restart docker
    ```
4.  **Verify Docker and NVIDIA Container Toolkit**:
    ```bash
    docker run --rm --gpus all nvidia/cuda:11.7.1-base-ubuntu20.04 nvidia-smi
    ```
    You should see output from `nvidia-smi` inside the container.

## Next Steps

With your workstation configured, you are ready to proceed with installing specific robotics frameworks:

-   [ROS 2 Installation Guide](/docs/modules/module-1-ros2/chapter-1-intro) (Coming Soon)
-   [NVIDIA Isaac Sim Installation Guide](/docs/modules/module-3-isaac/overview) (Coming Soon)
-   [Gazebo Simulation Setup](/docs/examples/gazebo/README.md) (Coming Soon)
