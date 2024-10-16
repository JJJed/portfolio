import { Code, Shield, Server, Cloud } from 'lucide-react';

export const skillsData = [
    {
        skill: "Frontend Development",
        icon: Code,
        projects: ["E-commerce Platform", "Portfolio Website", "Dashboard UI"],
        yearsOfExperience: 5,
        proficiency: "Expert"
    },
    {
        skill: "Backend Development",
        icon: Server,
        projects: ["RESTful API", "Real-time Chat Server", "Data Processing Pipeline"],
        yearsOfExperience: 4,
        proficiency: "Advanced"
    },
    {
        skill: "Cybersecurity",
        icon: Shield,
        projects: ["Security Audit Tool", "Encryption Library", "Penetration Testing Framework"],
        yearsOfExperience: 3,
        proficiency: "Intermediate"
    },
    {
        skill: "Cloud Computing",
        icon: Cloud,
        projects: ["Serverless Application", "Multi-region Deployment", "Auto-scaling Infrastructure"],
        yearsOfExperience: 3,
        proficiency: "Advanced"
    }
];

export const projectsData = [
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory management.",
        tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
        metrics: { 'Users': '10k+', 'Transactions': '50k+', 'Uptime': '99.9%' },
        image: "https://via.placeholder.com/400x200?text=E-commerce+Platform"
    },
    {
        title: "Cybersecurity Dashboard",
        description: "Real-time threat detection and visualization platform for enterprise networks.",
        tech: ['Python', 'Machine Learning', 'Elasticsearch', 'Kibana'],
        metrics: { 'Threats Detected': '1M+', 'False Positive Rate': '<0.1%', 'Response Time': '<5ms' },
        image: "https://via.placeholder.com/400x200?text=Cybersecurity+Dashboard"
    },
    {
        title: "IoT Fleet Management",
        description: "Scalable IoT solution for managing and optimizing large vehicle fleets.",
        tech: ['React Native', 'GraphQL', 'Serverless', 'IoT Protocols'],
        metrics: { 'Devices': '50k+', 'Data Points/Day': '10M+', 'Fuel Savings': '15%' },
        image: "https://via.placeholder.com/400x200?text=IoT+Fleet+Management"
    }
];

export const experiencesData = [
    {
        title: "Software Developer (Intern)",
        company: "National Retail Solutions",
        period: "June 2024 - Present",
        achievements: [
            "Developed a tool to streamline the company's ad placement process",
            "Created Splunk dashboard for security monitoring",
            "Developed JS algorithm for Puerto Rico tax compliance"
        ]
    },
    {
        title: "Software Developer (Intern)",
        company: "Skybotic",
        period: "July 2023",
        achievements: [
            "Explored AI pathfinding and obstacle avoidance for medical drones",
            "Integrated PX4 Autopilot",
        ]
    }
];