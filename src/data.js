// src/data.js
export const portfolioItems = [
    {
        id: 1,
        slug: "robot-dog-teleoperation",
        title: "Robot Dog Teleoperation System",
        description: "Developed a ROS teleoperation repository for a Lite3 Robot equipped with an OpenMANIPULATOR arm running on a Jetson Xavier NX.",
        longDescription: `This project involved building a comprehensive teleoperation system for the Lite3 quadruped robot. The system enables real-time remote control of both the robot's locomotion and its mounted OpenMANIPULATOR robotic arm through a unified ROS-based interface.

The robot runs on a Jetson Xavier NX edge computing platform, which handles onboard perception, motion planning, and communication with the operator station. The teleoperation stack was designed with modularity in mind, allowing individual subsystems (arm control, gait generation, sensor fusion) to be developed and tested independently.

Key technical challenges included achieving low-latency control over wireless networks, implementing smooth trajectory interpolation for the arm, and ensuring safe operation boundaries to prevent self-collision between the arm and the robot body.`,
        tags: ["ROS", "Jetson Xavier NX", "Python"],
        icon: "robot",
        link: "https://github.com/yourusername/repo-link",
        role: "Lead Developer",
        duration: "Sep 2024 — Jan 2025",
        highlights: [
            "Built a full ROS teleoperation stack with real-time control latency under 50ms",
            "Integrated OpenMANIPULATOR arm with custom inverse kinematics solver",
            "Implemented safety boundaries and self-collision avoidance algorithms",
            "Designed modular architecture allowing independent subsystem testing",
            "Deployed on Jetson Xavier NX with optimized compute resource allocation"
        ],
        media: [
            { type: "image", src: "/assets/robot-dog-teleoperation/hero.png", caption: "Robot Dog System Overview" },
            // Add more images/videos here:
            // { type: "video", src: "/assets/robot-dog-teleoperation/demo.mp4", caption: "Live Teleoperation Demo" },
            // { type: "image", src: "/assets/robot-dog-teleoperation/arm-control.png", caption: "Arm Control Interface" },
        ]
    },
    {
        id: 2,
        slug: "solar-powered-railway-gate",
        title: "Solar-Powered Railway Gate",
        description: "Designed an IoT railway gate system incorporating ESP32 controllers, SX1278 LoRa communication, and MPU6050 vibration analysis.",
        longDescription: `This IoT project tackled the challenge of automating railway gate operations in remote areas where reliable power and network infrastructure are limited. The system uses solar panels for energy independence and LoRa (Long Range) wireless communication for connectivity without cellular networks.

The core sensing mechanism relies on MPU6050 accelerometers mounted on the railway tracks to detect approaching trains through vibration pattern analysis. An ESP32 microcontroller processes the vibration data using a custom signal processing pipeline that distinguishes between train vibrations and environmental noise (vehicles, weather, etc.).

When a train is detected, the system wirelessly triggers the gate mechanism at the crossing via SX1278 LoRa modules, achieving reliable communication over distances exceeding 2km. The entire system is powered by a solar panel and battery setup, enabling deployment in areas without grid electricity.`,
        tags: ["ESP32", "Embedded Systems", "LoRa"],
        icon: "iot",
        link: "https://github.com/yourusername/repo-link",
        role: "Hardware & Firmware Engineer",
        duration: "Mar 2024 — Jul 2024",
        highlights: [
            "Designed a solar-powered system achieving 24/7 autonomous operation",
            "Implemented vibration-based train detection with 98% accuracy using MPU6050",
            "Established LoRa communication link with 2km+ reliable range",
            "Built custom signal processing pipeline on ESP32 for real-time analysis",
            "Created a web dashboard for remote system monitoring and diagnostics"
        ],
        media: [
            { type: "image", src: "/assets/solar-powered-railway-gate/hero.png", caption: "System Architecture Overview" },
            // Add more images/videos here:
            // { type: "video", src: "/assets/solar-powered-railway-gate/demo.mp4", caption: "Gate Operation Demo" },
            // { type: "image", src: "/assets/solar-powered-railway-gate/pcb.png", caption: "Custom PCB Design" },
        ]
    },
    {
        id: 3,
        slug: "agricultural-drone",
        title: "Agricultural Drone Architecture",
        description: "Hardware integration and communication setup using Pixhawk 6X and MAVROS for a 22L payload heavy-lift UAV.",
        longDescription: `This project focused on the hardware architecture and communication infrastructure for a heavy-lift agricultural drone capable of carrying a 22-liter spray payload. The drone is designed for precision crop spraying operations across large agricultural fields.

The flight controller stack is built around the Pixhawk 6X autopilot running PX4 firmware, with MAVROS providing the bridge between the flight controller and a companion computer for high-level mission planning. The system supports autonomous waypoint missions, terrain following, and variable-rate spray application based on field maps.

A significant engineering challenge was managing the changing center of gravity as the spray tank empties during operation. Custom parameter tuning and adaptive PID gains were implemented to maintain stable flight characteristics throughout the mission regardless of payload state.`,
        tags: ["Drone Engineering", "Pixhawk", "MAVROS"],
        icon: "drone",
        link: "https://github.com/yourusername/repo-link",
        role: "Systems Architect",
        duration: "Jun 2024 — Nov 2024",
        highlights: [
            "Architected hardware integration for a 22L payload heavy-lift UAV platform",
            "Configured Pixhawk 6X with PX4 and MAVROS for autonomous missions",
            "Implemented adaptive PID tuning for variable-payload stability",
            "Designed terrain-following spray system with variable-rate application",
            "Achieved 15-minute flight endurance at maximum payload capacity"
        ],
        media: [
            { type: "image", src: "/assets/agricultural-drone/hero.png", caption: "Drone Platform Overview" },
            // Add more images/videos here:
            // { type: "video", src: "/assets/agricultural-drone/flight-test.mp4", caption: "First Flight Test" },
            // { type: "image", src: "/assets/agricultural-drone/wiring.png", caption: "Wiring Diagram" },
        ]
    },
    {
        id: 4,
        slug: "multi-class-image-classification",
        title: "Multi-Class Image Classification",
        description: "Optimized a multi-layer perceptron (MLP) model achieving over 92% accuracy for a 12-class categorization task.",
        longDescription: `This machine learning project involved designing and optimizing a multi-layer perceptron (MLP) neural network for a challenging 12-class image categorization task. The goal was to achieve maximum classification accuracy while maintaining reasonable inference speed for potential edge deployment.

The optimization process included systematic hyperparameter tuning across learning rates, batch sizes, network depth, hidden layer widths, activation functions, and regularization strategies. Techniques such as dropout, batch normalization, and learning rate scheduling were evaluated and combined to push accuracy beyond the 92% threshold.

Data augmentation strategies including random cropping, horizontal flipping, and color jittering were employed to increase the effective training set size and improve model generalization. The final model achieved 92.4% accuracy on the held-out test set, representing a 7% improvement over the baseline architecture.`,
        tags: ["PyTorch", "AI Programming", "Machine Learning"],
        icon: "ai",
        link: "https://github.com/yourusername/repo-link",
        role: "ML Engineer",
        duration: "Feb 2025 — Apr 2025",
        highlights: [
            "Achieved 92.4% test accuracy on a 12-class categorization benchmark",
            "Implemented systematic hyperparameter optimization across 6 dimensions",
            "Applied data augmentation pipeline increasing effective dataset by 4x",
            "Utilized dropout, batch normalization, and LR scheduling for regularization",
            "Improved baseline accuracy by 7% through architecture optimization"
        ],
        media: [
            { type: "image", src: "/assets/multi-class-image-classification/hero.png", caption: "Model Architecture Diagram" },
            // Add more images/videos here:
            // { type: "image", src: "/assets/multi-class-image-classification/confusion-matrix.png", caption: "Confusion Matrix" },
            // { type: "image", src: "/assets/multi-class-image-classification/training-curves.png", caption: "Training & Validation Curves" },
        ]
    }
];