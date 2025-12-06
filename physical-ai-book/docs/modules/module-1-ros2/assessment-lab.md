---
sidebar_position: 6
---

# Assessment + Lab Exercises (Module 1: ROS 2)

This section provides assessment questions and hands-on lab exercises to test your understanding of ROS 2 core concepts covered in Module 1. These exercises will reinforce your ability to create, communicate between, and manage ROS 2 nodes.

## Assessment Questions

### Part 1: Multiple Choice / Short Answer

1.  What is the primary communication mechanism in ROS 2 for asynchronous, one-way data streaming?
    a) Services
    b) Actions
    c) Topics
    d) Parameters

2.  Explain the difference between a ROS 2 Node and a Topic.

3.  In a Python launch file, what is the purpose of the `LaunchDescription` class?

4.  If you want to change the name of a topic `/robot_cmd` to `/my_robot/command` when launching a node, which launch file mechanism would you use?
    a) Parameters
    b) Remapping
    c) Services
    d) Actions

5.  What is the main advantage of using Xacro over plain URDF for complex robot descriptions?

### Part 2: Critical Thinking

1.  Consider a mobile robot with a camera and a LIDAR sensor. Describe how you would use ROS 2 nodes, topics, and potentially services to collect data from these sensors, process it, and make navigation decisions. Outline the communication flow between these components.
2.  You are designing a ROS 2 system for a robot arm that needs to perform a long-duration pick-and-place operation, during which you want to monitor its progress and potentially cancel the operation. Would you use a ROS 2 Service or an Action for this task? Justify your choice by explaining the benefits of the chosen communication type in this scenario.
3.  Discuss the role of ROS 2 parameters in making a robot's behavior more flexible and adaptable. Provide an example of a parameter that would be useful for a robot's navigation stack.

## Lab Exercises

### Lab 1: Implementing a Simple ROS 2 Publisher and Subscriber

**Objective**: Create a custom ROS 2 package containing a publisher node and a subscriber node that communicate via a topic.

**Tools**: ROS 2 environment (e.g., Ubuntu with ROS 2 Humble installed), text editor, terminal.

**Tasks**:

1.  **Create a New Package**:
    -   Navigate to your `~/ros2_ws/src` directory.
    -   Create a new Python package named `my_ros2_examples`:
        ```bash
        ros2 pkg create --build-type ament_python my_ros2_examples
        ```
2.  **Publisher Node**:
    -   Inside `my_ros2_examples/my_ros2_examples/`, create `talker_node.py`.
    -   Implement a node that publishes `std_msgs/String` messages to a topic named `/my_topic` every 1 second. The message data should include a counter.
3.  **Subscriber Node**:
    -   Inside `my_ros2_examples/my_ros2_examples/`, create `listener_node.py`.
    -   Implement a node that subscribes to `/my_topic` and prints the received string messages to the console.
4.  **Update `setup.py`**: Add entry points for both `talker_node` and `listener_node` in `my_ros2_examples/setup.py`.
5.  **Build and Source**:
    -   Build your workspace: `cd ~/ros2_ws && colcon build --packages-select my_ros2_examples`
    -   Source your workspace: `source install/setup.bash`
6.  **Run and Verify**:
    -   Open two terminals.
    -   Terminal 1: `ros2 run my_ros2_examples talker_node`
    -   Terminal 2: `ros2 run my_ros2_examples listener_node`
    -   Verify that messages are being exchanged. Use `ros2 topic list`, `ros2 topic info /my_topic`, and `ros2 node list` to inspect your system.

### Lab 2: Creating a ROS 2 Launch File

**Objective**: Create a Python launch file to simultaneously start the publisher and subscriber nodes created in Lab 1.

**Tools**: ROS 2 environment, text editor, terminal.

**Tasks**:

1.  **Create Launch Directory**:
    -   Inside `my_ros2_examples/`, create a directory named `launch`.
2.  **Create Launch File**:
    -   Inside `my_ros2_examples/launch/`, create `my_talk_listen.launch.py`.
    -   Implement a Python launch file that starts both `talker_node` and `listener_node` from Lab 1.
    -   Configure the `listener_node` in the launch file to remap its subscription from `/my_topic` to `/another_topic`.
3.  **Update `setup.py`**: Ensure your `setup.py` includes the launch files in `data_files`.
4.  **Build and Source**: Rebuild and source your workspace.
5.  **Run and Verify**:
    -   Run your launch file: `ros2 launch my_ros2_examples my_talk_listen.launch.py`
    -   Observe the output. What do you notice about the listener node's output regarding `/my_topic` vs `/another_topic`?
    -   Use `ros2 topic list` and `ros2 node info /my_listener` (if you named your listener node `my_listener`) to verify the remapping.

### Lab 3: Exploring Parameters (Conceptual)

**Objective**: Understand how to declare and manipulate ROS 2 parameters from a node and the command line.

**Tools**: ROS 2 environment, text editor, terminal.

**Tasks**:

1.  **Modify Talker Node**:
    -   In your `talker_node.py` from Lab 1, declare a parameter `message_prefix` with a default value of `"Hello from "`.
    -   Modify the message data being published to use this prefix (e.g., `msg.data = f'{self.get_parameter("message_prefix").value}SimplePublisher: {self.i}'`).
2.  **Build and Source**: Rebuild and source your workspace.
3.  **Run and Verify**:
    -   Run the `talker_node` directly: `ros2 run my_ros2_examples talker_node`. Observe the output.
    -   Run the `talker_node` setting a parameter at launch: `ros2 run my_ros2_examples talker_node --ros-args -p message_prefix:="Custom Prefix: "`
    -   Use `ros2 param list /talker_node` and `ros2 param get /talker_node message_prefix` to inspect the parameter.
    -   Try changing the parameter dynamically: `ros2 param set /talker_node message_prefix "New Dynamic Prefix: "` and observe the talker's output. (Note: for dynamic updates to be reflected, the node might need a parameter event listener, which is an advanced topic. For this lab, focus on setting at launch and reading current values).

---

**Note**: These labs assume a basic understanding of Python and shell commands. Refer to the official ROS 2 documentation for detailed troubleshooting or additional guidance.
