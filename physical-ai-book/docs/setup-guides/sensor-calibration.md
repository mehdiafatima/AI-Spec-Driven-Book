---
id: sensor-calibration
title: RealSense D435i and IMU Calibration Workflows
---

# RealSense D435i and IMU Calibration Workflows

Accurate sensor data is crucial for robust robotics applications. This guide outlines the calibration procedures for the Intel RealSense D435i depth camera and common Inertial Measurement Units (IMUs). Proper calibration ensures that the sensor outputs are precise and correctly aligned with the robot's coordinate frame.

## 1. Intel RealSense D435i Calibration

The RealSense D435i typically comes factory-calibrated, but re-calibration might be necessary for specific applications, after physical impacts, or to optimize performance.

### A. Depth and RGB Camera Calibration

-   **Tools**: Intel RealSense Viewer, ROS RealSense package.
-   **Procedure**:
    1.  Ensure the RealSense SDK is installed.
    2.  Use the RealSense Viewer's built-in calibration tools for fine-tuning.
    3.  For ROS 2, `ros2_intel_realsense` package provides tools for checking and sometimes applying calibration.

### B. Extrinsic Calibration (Camera to Robot Base)

This involves determining the precise transformation (position and orientation) of the camera relative to your robot's base link.
-   **Tools**: `rqt_tf_tree`, `tf2_tools`, `easy_handeye` (ROS package)
-   **Procedure**:
    1.  Mount the camera rigidly to the robot.
    2.  Use a calibration target (e.g., ArUco board, checkerboard).
    3.  Collect data with the robot moving the camera.
    4.  Run a hand-eye calibration algorithm (e.g., with `easy_handeye` in ROS) to compute the transform.

## 2. IMU Calibration

IMUs provide crucial orientation and acceleration data. Calibration helps to correct for sensor biases and misalignments.

### A. Accelerometer Calibration

-   **Purpose**: Correct for constant bias and scale errors.
-   **Procedure**: Place the IMU in various known orientations (e.g., flat, on each side) and record measurements. Use a calibration script to compute bias and scale factors.

### B. Gyroscope Calibration

-   **Purpose**: Correct for drift and bias.
-   **Procedure**: Keep the IMU perfectly still and record data. The average non-zero output represents the bias.

### C. Magnetometer Calibration

-   **Purpose**: Correct for hard-iron and soft-iron distortions caused by magnetic fields in the sensor's environment.
-   **Procedure**: Rotate the IMU in a figure-eight pattern, collecting data. Algorithms fit an ellipsoid to the data points to find correction parameters.

## 3. Integration with ROS 2

Calibrated sensor parameters are typically published as static TF (Transform) messages or configured in sensor driver launch files within ROS 2.

---
This is a placeholder document. Specific commands, code examples, and links to calibration software/packages will be added during content creation.
