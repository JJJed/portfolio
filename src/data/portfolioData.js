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
        title: "Senior Full-Stack Developer",
        company: "TechCorp Inc.",
        period: "2020 - Present",
        achievements: [
            "Led development of mission-critical applications",
            "Mentored junior developers and improved team productivity by 30%",
            "Implemented CI/CD pipeline, reducing deployment time by 50%"
        ]
    },
    {
        title: "Cybersecurity Specialist",
        company: "SecureNet Solutions",
        period: "2018 - 2020",
        achievements: [
            "Conducted penetration testing for high-profile clients",
            "Developed and implemented security policies and procedures",
            "Reduced security incidents by 40% through proactive measures"
        ]
    }
];