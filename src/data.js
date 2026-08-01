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
            { type: "image", src: "/assets/robot-dog-teleoperation/realsense-graspnet.jpeg", caption: "RealSense + GraspNet Perception" },
            { type: "video", src: "/assets/robot-dog-teleoperation/teleoperation-test.mp4", caption: "Teleoperation Test" },
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
            { type: "image", src: "/assets/agricultural-drone/field-test-screenshot.png", caption: "Field Test Telemetry" },
            { type: "video", src: "/assets/agricultural-drone/flight-test-v2.mp4", caption: "Flight Test (v2)" },
            { type: "video", src: "/assets/agricultural-drone/field-test.mp4", caption: "Field Test" },
            { type: "video", src: "/assets/agricultural-drone/spray-volume-test.mp4", caption: "Spray Volume Test" },
            { type: "video", src: "/assets/agricultural-drone/motor-test-v2.mp4", caption: "Motor Test (v2)" },
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
    },
    {
        id: 5,
        slug: "safmc-2026",
        title: "LiDAR Localization Drone (SAFMC 2026)",
        description: "Developed a LiDAR-based localization and mapping pipeline using GICP scan matching for GPS-denied autonomous flight, built for the Singapore Amazing Flying Machine Competition 2026.",
        longDescription: `This project targets autonomous drone navigation in GPS-denied environments for the Singapore Amazing Flying Machine Competition (SAFMC) 2026. The core of the system is a LiDAR-based localization pipeline that lets the drone estimate its own pose without relying on satellite positioning.

The pipeline uses Generalized Iterative Closest Point (GICP) scan matching to align successive LiDAR point clouds and track the drone's motion over time. Registering each incoming scan against the accumulated map produces a drift-corrected pose estimate that feeds directly into the flight controller for stable, autonomous position hold and waypoint following.

Key challenges included keeping the scan-matching pipeline real-time on an onboard companion computer, filtering noisy point clouds from a lightweight LiDAR, and fusing the LiDAR-derived pose with the flight controller's inertial estimates for robust indoor flight.`,
        tags: ["LiDAR", "GICP", "SLAM", "ROS"],
        icon: "drone",
        link: "https://github.com/sebry4n",
        role: "Perception & Localization Engineer",
        duration: "2026",
        highlights: [
            "Built a LiDAR-based localization pipeline for GPS-denied autonomous flight",
            "Implemented GICP scan matching for real-time point-cloud registration",
            "Fused LiDAR pose estimates with flight-controller inertial data",
            "Validated onboard, real-time performance on a companion computer",
            "Developed for the Singapore Amazing Flying Machine Competition 2026"
        ],
        media: [
            { type: "video", src: "/assets/safmc-2026/lidar-gicp-test.mp4", caption: "LiDAR GICP Localization Test" },
        ]
    },
    {
        id: 6,
        slug: "safmc-2025",
        title: "Autonomous Mission Drone (SAFMC 2025)",
        description: "Built an autonomous drone for SAFMC 2025 featuring obstacle avoidance, AR-tag detection, a custom payload mechanism, and a wearable controller interface.",
        longDescription: `This project was an autonomous mission drone developed for the Singapore Amazing Flying Machine Competition (SAFMC) 2025. The drone had to complete a series of mission tasks that combined autonomous navigation, visual target recognition, and precise payload handling.

The perception stack included an obstacle avoidance system for navigating cluttered environments and AR-tag (fiducial marker) detection for identifying and localizing mission targets. On top of navigation, a custom onboard mechanism handled the physical mission task, and was iterated through multiple test revisions to improve reliability.

To give the operator intuitive control during the manual phases of the mission, the team also developed a wearable controller interface, translating body/hand motion into flight commands as an alternative to a traditional transmitter.`,
        tags: ["Autonomous Drone", "Computer Vision", "AR Tags", "ROS"],
        icon: "drone",
        link: "https://github.com/sebry4n",
        role: "Autonomy & Systems Engineer",
        duration: "2025",
        highlights: [
            "Developed an obstacle avoidance system for cluttered-environment navigation",
            "Implemented AR-tag detection for mission target identification and localization",
            "Designed and iterated a custom onboard payload mechanism across test revisions",
            "Prototyped a wearable controller interface for intuitive manual control",
            "Competed in the Singapore Amazing Flying Machine Competition 2025"
        ],
        media: [
            { type: "video", src: "/assets/safmc-2025/obstacle-avoidance-test.mp4", caption: "Obstacle Avoidance Test" },
            { type: "video", src: "/assets/safmc-2025/artag-detection-test.mp4", caption: "AR Tag Detection Test" },
            { type: "video", src: "/assets/safmc-2025/mechanism-test.mp4", caption: "Mechanism Test" },
            { type: "video", src: "/assets/safmc-2025/mechanism-test-2.mp4", caption: "Mechanism Test 2" },
            { type: "video", src: "/assets/safmc-2025/wearable-controller.mp4", caption: "Wearable Controller" },
        ]
    },
    {
        id: 7,
        slug: "drone-krti-2024",
        title: "Autonomous Payload Drone (KRTI 2024)",
        description: "Designed an autonomous drone with a custom payload dropper mechanism for the Kontes Robot Terbang Indonesia (KRTI) 2024 competition.",
        longDescription: `This project was an autonomous drone built for Kontes Robot Terbang Indonesia (KRTI) 2024, a national flying-robot competition in Indonesia. The mission required the drone to fly autonomously and accurately deliver a payload to a designated target zone.

A central engineering effort was the custom payload dropper mechanism, designed to hold, carry, and release the payload reliably on command. The mechanism was integrated with the flight controller so that the release could be triggered autonomously once the drone reached the target location.

The system was validated through competition trials, tuning both the flight behavior and the release timing to improve delivery accuracy under real competition conditions.`,
        tags: ["Autonomous Drone", "Payload Systems", "Pixhawk"],
        icon: "drone",
        link: "https://github.com/sebry4n",
        role: "Drone Systems Engineer",
        duration: "2024",
        highlights: [
            "Built an autonomous drone for the KRTI 2024 national flying-robot competition",
            "Designed a custom payload dropper mechanism for targeted delivery",
            "Integrated autonomous release triggering with the flight controller",
            "Tuned flight and release timing through live competition trials"
        ],
        media: [
            { type: "image", src: "/assets/drone-krti-2024/drone.jpeg", caption: "The Drone" },
            { type: "image", src: "/assets/drone-krti-2024/dropper.png", caption: "Payload Dropper Mechanism" },
            { type: "video", src: "/assets/drone-krti-2024/trial.mp4", caption: "Competition Trial" },
        ]
    },
    {
        id: 8,
        slug: "drone-krti-2025",
        title: "Autonomous Drone (KRTI 2025)",
        description: "Developed an autonomous drone for the Kontes Robot Terbang Indonesia (KRTI) 2025 competition, building on prior mission and flight-control experience.",
        longDescription: `This project was an autonomous drone developed for Kontes Robot Terbang Indonesia (KRTI) 2025, the next iteration of the national flying-robot competition. Building on lessons from the previous year's platform, the focus was on more reliable autonomous flight and mission execution.

The work covered the full flight pipeline — from flight-controller configuration and tuning to autonomous mission logic — and was validated through competition trial flights that exercised the drone's autonomy under real conditions.`,
        tags: ["Autonomous Drone", "Flight Control", "Pixhawk"],
        icon: "drone",
        link: "https://github.com/sebry4n",
        role: "Drone Systems Engineer",
        duration: "2025",
        highlights: [
            "Built an autonomous drone for the KRTI 2025 national flying-robot competition",
            "Iterated on flight-control tuning and autonomous mission logic",
            "Validated autonomy through live competition trial flights"
        ],
        media: [
            { type: "video", src: "/assets/drone-krti-2025/trial.mp4", caption: "Competition Trial" },
        ]
    },
    {
        id: 9,
        slug: "adas-mmwave-radar",
        title: "mmWave Radar ADAS",
        description: "Built a data collection and logging pipeline around a mmWave radar sensor for an Advanced Driver Assistance System (ADAS) perception project.",
        longDescription: `This project explored the use of millimeter-wave (mmWave) radar as a sensing modality for an Advanced Driver Assistance System (ADAS). Unlike cameras, mmWave radar provides robust range and velocity measurements in poor lighting and adverse weather, making it a valuable input for driver-assistance perception.

The work centered on building the sensing and data infrastructure: setting up the radar hardware, developing a logging pipeline to capture raw radar returns, and running structured dataset collection sessions to gather the data needed for downstream perception and detection development.

The collected dataset forms the foundation for building and evaluating perception algorithms — such as object detection and tracking — on radar data for ADAS applications.`,
        tags: ["mmWave Radar", "ADAS", "Sensor Fusion", "Data Collection"],
        icon: "iot",
        link: "https://github.com/sebry4n",
        role: "Perception Engineer",
        duration: "2025",
        highlights: [
            "Set up a mmWave radar sensing platform for ADAS perception research",
            "Built a logging pipeline to capture raw radar returns",
            "Ran structured dataset collection sessions for downstream development",
            "Established a radar dataset foundation for object detection and tracking"
        ],
        media: [
            { type: "image", src: "/assets/adas-mmwave-radar/setup.jpeg", caption: "Radar Setup" },
            { type: "image", src: "/assets/adas-mmwave-radar/logging.jpeg", caption: "Data Logging" },
            { type: "image", src: "/assets/adas-mmwave-radar/dataset-collection.jpeg", caption: "Dataset Collection" },
        ]
    }
];