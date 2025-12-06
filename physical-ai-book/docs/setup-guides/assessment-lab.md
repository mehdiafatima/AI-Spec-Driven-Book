---
sidebar_position: 4
---

# Assessment + Lab Exercises (Setup Guides)

This section provides assessment questions and hands-on lab exercises to test your understanding and practical skills in setting up development environments for Physical AI and Humanoid Robotics. These exercises cover local workstations, edge devices (Jetson), and cloud-native setups.

## Assessment Questions

### Part 1: Multiple Choice / Short Answer

1.  What is the primary benefit of using a GPU in a Digital Twin workstation for robotics simulation?
    a) Faster CPU performance.
    b) Accelerated graphics rendering and parallel computation for physics.
    c) Increased RAM capacity.
    d) Improved network latency.

2.  Which operating system is highly recommended for ROS 2 and NVIDIA Isaac Sim development, and why?

3.  List two key advantages of developing Physical AI solutions in a cloud-native environment compared to a local workstation.

4.  What is the purpose of the NVIDIA Container Toolkit when setting up Docker for GPU-accelerated applications?

5.  Describe a scenario where a Physical AI Edge Kit (e.g., NVIDIA Jetson) would be preferred over a cloud-native setup.

### Part 2: Critical Thinking

1.  You are tasked with developing an autonomous warehouse robot that needs to perform real-time object detection and navigation. Compare and contrast the pros and cons of setting up your development environment as:
    a) A high-performance local Digital Twin workstation.
    b) A cloud-native development environment.
    Justify your recommendation for this specific project.
2.  Imagine you have a team of five developers working on a complex humanoid robot project. How would a cloud-native development setup facilitate collaboration and resource management compared to each developer relying solely on their local workstations?
3.  Discuss the trade-offs between a powerful local workstation and an edge device like NVIDIA Jetson for deploying and testing a trained AI model for a humanoid robot. Consider factors like latency, cost, power consumption, and portability.

## Lab Exercises

### Lab 1: Verify Digital Twin Workstation Setup

**Objective**: Confirm proper installation and functionality of core components on your Digital Twin workstation.

**Tools**: Your Digital Twin Workstation, command line terminal.

**Tasks**:

1.  **System Update**: Ensure your system is fully updated by running `sudo apt update && sudo apt upgrade -y`. Report any errors or warnings.
2.  **NVIDIA Driver Check**: Run `nvidia-smi`.
    -   Verify that the command executes successfully and displays information about your NVIDIA GPU.
    -   Note down the CUDA version reported.
3.  **Docker Installation Check**: Run `docker run hello-world`.
    -   Confirm that Docker is correctly installed and the `hello-world` container runs without issues.
    -   If it fails, troubleshoot your Docker installation using official Docker documentation.
4.  **NVIDIA Container Toolkit Check**: Run `docker run --rm --gpus all nvidia/cuda:11.7.1-base-ubuntu20.04 nvidia-smi`.
    -   Verify that `nvidia-smi` successfully runs *inside* the container and displays GPU information.
    -   This confirms Docker can access your GPU via the NVIDIA Container Toolkit.

### Lab 2: Initial Setup of Physical AI Edge Kit (NVIDIA Jetson)

**Objective**: Perform the initial setup steps for an NVIDIA Jetson device and verify basic functionalities.

**Tools**: NVIDIA Jetson development kit, power supply, microSD card (if applicable), host PC with SDK Manager (or Balena Etcher).

**Tasks**:

1.  **Flash JetPack**:
    -   Following the instructions in the "Physical AI Edge Kit Setup Guide" (and NVIDIA's official documentation), flash the latest JetPack OS onto your Jetson device.
    -   Document the JetPack version and Ubuntu version installed.
2.  **First Boot Configuration**:
    -   Complete the initial setup wizard (user creation, locale, etc.).
    -   Connect your Jetson to the internet (Wi-Fi or Ethernet).
3.  **System Update**: On the Jetson, run `sudo apt update && sudo apt upgrade -y`.
4.  **Python & pip Check**: Verify Python 3 and pip are installed by running `python3 --version` and `pip3 --version`.
5.  **ROS 2 Repository Check**: Verify that the ROS 2 repository was successfully added by checking the contents of `/etc/apt/sources.list.d/ros2.list`.

### Lab 3: Cloud Instance Provisioning (Conceptual / Optional Hands-on)

**Objective**: Understand the steps involved in provisioning a GPU-enabled virtual machine in a cloud environment.

**Tools**: Web browser, cloud provider console (e.g., AWS, GCP, Azure) or CLI tools (conceptual only if hands-on not feasible).

**Tasks**:

1.  **Cloud Console Exploration**:
    -   Log in to your chosen cloud provider's console.
    -   Navigate to the Compute (e.g., EC2, Compute Engine, Virtual Machines) section.
    -   Identify available GPU-enabled instance types (e.g., `g4dn`, `p3`, `A100`, `V100`).
2.  **Instance Configuration (Conceptual)**:
    -   Without launching, mentally walk through the steps to launch a new instance:
        -   Selecting an Ubuntu Deep Learning AMI.
        -   Choosing a GPU instance type.
        -   Configuring storage (e.g., 100GB SSD).
        -   Setting up a key pair for SSH access.
        -   Configuring security group rules to allow SSH.
    -   Identify the command you would use to SSH into this instance once launched.
3.  **Discussion**: Discuss with peers how this cloud provisioning process compares to setting up a local workstation in terms of complexity, cost, and access to resources.

---

**Note**: Specific cloud credentials and active subscriptions are required for hands-on execution of Lab 3. If direct access is not available, focus on the conceptual understanding of the provisioning process.
