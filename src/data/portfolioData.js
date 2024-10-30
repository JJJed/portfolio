import { Code, Shield, Server, Cloud, Terminal, BrainCircuit } from 'lucide-react';

import splunk_dashboard from "../assets/splunk_dashboard.png";

// export const skillsData = [
//     {
//         skill: "Frontend Development",
//         icon: Code,
//         projects: ["E-commerce Platform", "Portfolio Website", "Dashboard UI"],
//         yearsOfExperience: 5,
//         proficiency: "Expert",
//         keySkills: ["React", "Vue.js", "JavaScript", "HTML5", "CSS3"],
//         toolsAndTechnologies: ["Webpack", "Babel", "Jest", "Cypress"],
//         featuredProject: {
//             name: "E-commerce Platform",
//             image: "/images/ecommerce-project.jpg",
//             description: "A full-stack e-commerce solution with real-time inventory management."
//         }
//     },
//     {
//         skill: "Backend Development",
//         icon: Server,
//         projects: ["RESTful API", "Real-time Chat Server", "Data Processing Pipeline"],
//         yearsOfExperience: 4,
//         proficiency: "Advanced",
//         keySkills: ["Node.js", "Python", "Java", "SQL", "NoSQL"],
//         toolsAndTechnologies: ["Express.js", "Django", "Spring Boot", "MongoDB"],
//         featuredProject: {
//             name: "Real-time Chat Server",
//             image: "/images/chat-server-project.jpg",
//             description: "Scalable chat server supporting thousands of concurrent users."
//         }
//     },
//     {
//         skill: "Cybersecurity",
//         icon: Shield,
//         projects: ["Security Audit Tool", "Encryption Library", "Penetration Testing Framework"],
//         yearsOfExperience: 3,
//         proficiency: "Intermediate",
//         keySkills: ["Network Security", "Cryptography", "Ethical Hacking"],
//         toolsAndTechnologies: ["Wireshark", "Metasploit", "Burp Suite"],
//         featuredProject: {
//             name: "Security Audit Tool",
//             image: "/images/security-audit-tool.jpg",
//             description: "Automated tool for conducting comprehensive security audits of web applications."
//         }
//     },
//     {
//         skill: "Cloud Computing",
//         icon: Cloud,
//         projects: ["Serverless Application", "Multi-region Deployment", "Auto-scaling Infrastructure"],
//         yearsOfExperience: 3,
//         proficiency: "Advanced",
//         keySkills: ["AWS", "Azure", "Google Cloud Platform", "Kubernetes"],
//         toolsAndTechnologies: ["Docker", "Terraform", "Jenkins", "Prometheus"],
//         featuredProject: {
//             name: "Auto-scaling Infrastructure",
//             image: "/images/auto-scaling-infra.jpg",
//             description: "Cloud-native application with automatic scaling based on traffic patterns."
//         }
//     }
// ];

export const skillsData = [
    {
        skill: "Frontend Development",
        icon: Code,
        projects: [
            "Immigrant Life",
            "Portfolio Website ;)",
        ],
        yearsOfExperience: 7,
        proficiency: "Intermediate",
        keySkills: [
            "React",
            "TypeScript",
            "State Management",
            "Responsive Design",
            "Web Performance"
        ],
        toolsAndTechnologies: [
            "React",
            "Tailwind CSS",
            "Framer Motion"
        ]
    },
    {
        skill: "Backend Development",
        icon: Terminal,
        projects: [
            "BeatstarRPC",
            "CCBal",
            "FTC Robotics"
        ],
        yearsOfExperience: 8,
        proficiency: "Advanced",
        keySkills: [
            "API Design",
            "Database Design",
            "Performance Optimization"
        ],
        toolsAndTechnologies: [
            "Python",
            "Flask",
            "MySQL",
            "Java",
        ]
    },
    {
        skill: "Machine Learning",
        icon: BrainCircuit,
        projects: [
            "Hearo",
            "Joda Music",
            "FTC Robotics"
        ],
        yearsOfExperience: 3,
        proficiency: "Intermediate",
        keySkills: [
            "Database Design",
            "Performance Optimization",
            "ML Algorithms"
        ],
        toolsAndTechnologies: [
            "Python",
            "C++",
            "scikit-learn",
            "TensorFlow",
            "HuskyLens",
            "Edge Impulse"
        ]
    },
    {
        skill: "Cybersecurity",
        icon: Shield,
        projects: [
            "Splunk Threat Dashboard",
            "Firewall Alert Analysis",
        ],
        yearsOfExperience: 3,
        proficiency: "Intermediate",
        keySkills: [
            "Security Mindset",
            "Networking",
            "Information Technology"
        ],
        toolsAndTechnologies: [
            "Splunk",
            "Python",
            "Linux",
            "Wireshark",
            "tcpdump"
        ]
    },
];

export const projectsData = [
    {
        title: "Splunk Threat Dashboard",
        description: "Dashboard to monitor high severity cybersecurity threats.",
        tech: ['Splunk', 'SPL', 'XML'],
        metrics: { 'Users': '10k+', 'Transactions': '50k+', 'Uptime': '99.9%' }
    },
    {
        title: "Joda Music",
        description: "Data-driven approach to music recommendation.",
        tech: ['Python', 'Machine Learning', 'scikit-learn', 'MySQL', 'Flask', 'Swift', 'SwiftUI', 'Apple Music API', 'Acoustic Fingerprinting'],
        metrics: { 'Songs Mapped': '25K+', 'Metadata Recorded': '150M+ Songs', 'Dimensions': '15+' }
    },
    {
        title: "Hearo",
        description: "ML-driven assistant for hearing-impaired drivers.",
        tech: ['C++', 'Arduino', 'Edge Impulse', 'Machine Learning', 'Audio Classification'],
        metrics: { 'Training Data': '10 hrs', 'Accuraccy': '99.7%', 'Processing Time': '<1s' }
    },
    {
        title: "Immigrant Life",
        description: "Simple, yet aesthetic and functional, HTML/CSS/JS webpage.",
        tech: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        link: "https://brli.jedd.dev"
    },
    {
        title: "BeatstarRPC",
        description: "Discord RPC integration for Beatstar.",
        tech: ['Python', 'Flask', 'TypeScript', 'Discord RPC API', 'HTML', 'CSS', 'JavaScript', 'Jinja2'],
        metrics: { 'Users': '10+' },
        image: "https://via.placeholder.com/400x200?text=IoT+Fleet+Management",
        link: "https://github.com/JJJed/beatstarRPC"
    },
    {
        title: "CCBal",
        description: "Balance checking system with API.",
        tech: ['Python', 'Flask', 'Proprietary APIs', 'HTML', 'CSS', 'JavaScript', 'Jinja2'],
        metrics: { 'Users': '50+', 'Visits/Day': '20+', 'Uptime': '100%' },
        link: "https://ccbal.jedd.dev"
    },
    {
        title: "Robotics Autonomous Path Viewer",
        description: "Website for alliances to easily understand team 15762's autonomous capabilities.",
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: "https://ftc15762autons.jedd.dev"
    },
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