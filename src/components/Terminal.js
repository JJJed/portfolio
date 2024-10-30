import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Terminal = ({ experiencesData, skillsData, projectsData }) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [tabOptions, setTabOptions] = useState([]);
    const [showTabCompletion, setShowTabCompletion] = useState(false);
    const [isTerminalActive, setIsTerminalActive] = useState(false);
    const inputRef = useRef(null);
    const terminalRef = useRef(null);

    // Remove the autoFocus from input and modify click handler
    const handleTerminalClick = () => {
        setIsTerminalActive(true);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    // Initial welcome message without auto-focus
    useEffect(() => {
        setHistory([
            { type: 'output', content: '=== Joshua Davis Terminal v1.0 ===' },
            { type: 'output', content: 'Welcome! Type "help" for available commands.' },
            { type: 'output', content: 'Press Tab for command completion.' },
            { type: 'output', content: '' }
        ]);
    }, []);

    // Define all available commands and their tab completion options
    const commandList = [
        'help', 'clear', 'experience', 'skills', 'projects', 'about', 'contact',
        'whoami', 'date', 'socials', 'matrix', 'echo', 'open', 'cd', 'ls',
        'man', 'theme', 'games', 'achievements', 'education', 'certifications',
        'tree', 'weather', 'calc', 'github', 'linkedin', 'email', 'resume',
        'snake', 'tetris', 'pong', 'history', 'status', 'version', 'uptime',
        'skill', 'project', 'play'
    ];

    const gamesAvailable = ['snake', 'tetris', 'pong'];

    const commands = {
        help: {
            description: 'Show available commands',
            usage: 'help [command]',
            execute: (args) => {
                if (args.length > 0) {
                    const command = commands[args[0]];
                    if (command) {
                        return {
                            output: [
                                `Command: ${args[0]}`,
                                `Description: ${command.description}`,
                                `Usage: ${command.usage || args[0]}`
                            ]
                        };
                    }
                    return { output: [`Command '${args[0]}' not found.`] };
                }

                return {
                    output: [
                        '=== Available Commands ===',
                        '',
                        'Navigation:',
                        '  cd, ls, open, tree        - Navigate portfolio sections',
                        '',
                        'Portfolio Info:',
                        '  about, skill, project     - View portfolio sections',
                        '  experience, achievements  - View professional history',
                        '  education, certifications - View educational background',
                        '',
                        'Contact & Social:',
                        '  contact, socials, github  - Contact information',
                        '  email, linkedin           - Social media links',
                        '  meeting                   - Schedule a meeting',
                        '',
                        'Fun & Games:',
                        '  matrix                    - Interactive features',
                        '  play                      - Classic games',
                        '',
                        'Utilities:',
                        '  clear, echo, date        - Basic utilities',
                        '  calc, weather, status    - Additional tools',
                        '',
                        'System:',
                        '  help, man, history       - Get help and info',
                        '  version, uptime          - System information',
                        '',
                        "Type 'man <command>' for detailed help on specific commands.",
                        "Use Tab for command completion."
                    ]
                };
            }
        },

        man: {
            description: 'Display manual page for a command',
            usage: 'man <command>',
            execute: (args) => {
                if (args.length === 0) return { output: ['Usage: man <command>'] };
                const command = commands[args[0]];
                if (!command) return { output: [`No manual entry for '${args[0]}'`] };

                return {
                    output: [
                        `NAME`,
                        `    ${args[0]} - ${command.description}`,
                        ``,
                        `SYNOPSIS`,
                        `    ${command.usage || args[0]}`,
                        ``,
                        `DESCRIPTION`,
                        `    ${command.longDescription || command.description}`,
                        ``,
                        `EXAMPLES`,
                        ...(command.examples || [`    ${args[0]}`])
                    ]
                };
            }
        },

        clear: {
            description: 'Clear the terminal',
            execute: () => {
                setHistory([]);
                return { output: [] };
            }
        },

        skill: {
            description: 'Show details about a specific skill',
            usage: 'skill <skillname>',
            execute: (args) => {
                if (args.length === 0) {
                    return {
                        output: [
                            'Usage: skill <skillname>',
                            'Available skills:',
                            ...skillsData.map(s => `- ${s.skill}`)
                        ]
                    };
                }

                const skillName = args.join(' ');
                const skill = skillsData.find(s =>
                    s.skill.toLowerCase() === skillName.toLowerCase()
                );

                if (!skill) {
                    return { output: [`Skill '${skillName}' not found.`] };
                }

                return {
                    output: [
                        `=== ${skill.skill} ===`,
                        `Proficiency: ${skill.proficiency}`,
                        `Years of Experience: ${skill.yearsOfExperience}`,
                        '',
                        'Related Projects:',
                        ...skill.projects.map(p => `- ${p}`),
                        '',
                        'Key Skills:',
                        ...skill.keySkills.map(k => `- ${k}`),
                        '',
                        'Tools & Technologies:',
                        ...skill.toolsAndTechnologies.map(t => `- ${t}`)
                    ]
                };
            }
        },

        project: {
            description: 'Show details about a specific project',
            usage: 'project <projectname>',
            execute: (args) => {
                if (args.length === 0) {
                    return {
                        output: [
                            'Usage: project <projectname>',
                            'Available projects:',
                            ...projectsData.map(p => `- ${p.title}`)
                        ]
                    };
                }

                const projectName = args.join(' ');
                const project = projectsData.find(p =>
                    p.title.toLowerCase() === projectName.toLowerCase()
                );

                if (!project) {
                    return { output: [`Project '${projectName}' not found.`] };
                }

                return {
                    output: [
                        `=== ${project.title} ===`,
                        project.description,
                        '',
                        'Technologies:',
                        ...project.tech.map(t => `- ${t}`),
                        '',
                        'Key Metrics:',
                        ...Object.entries(project.metrics).map(([key, value]) => `${key}: ${value}`)
                    ]
                };
            }
        },

        matrix: {
            description: 'Enter the matrix',
            execute: () => {
                const characters = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
                let timeout;

                const createRain = () => {
                    const rain = Array(Math.floor(Math.random() * 20) + 10)
                        .fill(0)
                        .map(() => characters[Math.floor(Math.random() * characters.length)])
                        .join(' ');

                    setHistory(prev => [...prev, { type: 'matrix', content: rain }]);
                };

                const startMatrix = () => {
                    setHistory([{ type: 'output', content: 'Initializing the Matrix...' }]);
                    timeout = setInterval(createRain, 100);

                    setTimeout(() => {
                        clearInterval(timeout);
                        setHistory(prev => [
                            ...prev,
                            { type: 'output', content: 'Wake up, Joshua...' },
                            { type: 'output', content: 'The Matrix has you...' }
                        ]);
                    }, 5000);
                };

                startMatrix();
                return { output: [] };
            }
        },

        play: {
            description: 'Play a terminal game',
            usage: 'play <gamename>',
            execute: (args) => {
                if (args.length === 0) {
                    return {
                        output: [
                            'Available games:',
                            ...gamesAvailable.map(game => `- ${game}`),
                            '',
                            'Usage: play <gamename>'
                        ]
                    };
                }

                const game = args[0].toLowerCase();
                if (!gamesAvailable.includes(game)) {
                    return { output: [`Game '${game}' not found.`] };
                }

                // Example implementation for Snake game
                if (game === 'snake') {
                    return {
                        output: [
                            'Starting Snake game...',
                            'Use WASD to move, X to quit',
                            '┌────────────────┐',
                            '│   SNAKE GAME   │',
                            '│    🟢⬛⬛⬛    │',
                            '│    ⬛🔴⬛⬛    │',
                            '│    ⬛⬛⬛⬛    │',
                            '└────────────────┘',
                            'Game not fully implemented yet!'
                        ]
                    };
                }

                return { output: [`Starting ${game}...`] };
            }
        },

        tree: {
            description: 'Display portfolio structure',
            execute: () => ({
                output: [
                    'Portfolio Structure:',
                    '├── About',
                    '│   └── Professional Summary',
                    '├── Skills',
                    '│   ├── Frontend Development',
                    '│   ├── Backend Development',
                    '│   ├── Cybersecurity',
                    '│   └── Cloud Computing',
                    '├── Projects',
                    '│   ├── Project 1',
                    '│   ├── Project 2',
                    '│   └── Project 3',
                    '├── Experience',
                    '│   └── Professional History',
                    '└── Contact',
                    '    └── Social Links'
                ]
            })
        },

        history: {
            description: 'Show command history',
            execute: () => ({
                output: commandHistory.map((cmd, i) => `${i + 1}  ${cmd}`)
            })
        },

        status: {
            description: 'Show system status',
            execute: () => {
                const startTime = new Date(performance.timeOrigin);
                const uptime = (performance.now() / 1000).toFixed(0);

                return {
                    output: [
                        '=== System Status ===',
                        `Uptime: ${uptime} seconds`,
                        `Started: ${startTime.toLocaleString()}`,
                        `Memory: ${(performance.memory?.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
                        'All systems operational'
                    ]
                };
            }
        },

        calc: {
            description: 'Simple calculator',
            usage: 'calc <expression>',
            execute: (args) => {
                if (args.length === 0) return { output: ['Usage: calc <expression>'] };

                try {
                    // Safely evaluate mathematical expression
                    const result = Function(`'use strict'; return (${args.join(' ')})`)();
                    return { output: [`${args.join(' ')} = ${result}`] };
                } catch (e) {
                    return { output: ['Invalid expression'] };
                }
            }
        },

        cd: {
            description: 'Navigate to a section',
            usage: 'cd <section>',
            execute: (args) => {
                if (args.length === 0) return { output: ['Usage: cd <section>'] };
                const section = args[0].toLowerCase();
                const element = document.getElementById(section);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    window.open(`#${section}`, '_self');
                    return { output: [`Navigating to ${section}...`] };
                }
                return { output: [`Section "${section}" not found.`] };
            }
        },

        ls: {
            description: 'List available sections',
            execute: () => ({
                output: [
                    'Available sections:',
                    'about/      - Professional summary',
                    'skills/     - Technical skills',
                    'projects/   - Portfolio projects',
                    'experience/ - Work history',
                    'contact/    - Contact information',
                    '',
                    'Type "cd <section>" to navigate'
                ]
            })
        },

        open: {
            description: 'Open a section (alias for cd)',
            usage: 'open <section>',
            execute: (args) => commands.cd.execute(args)
        },

        // Professional Info Commands
        experience: {
            description: 'Show professional experience',
            execute: () => ({
                output: [
                    '=== Professional Experience ===',
                    '',
                    ...experiencesData.map(exp => [
                        `${exp.title} @ ${exp.company}`,
                        `Period: ${exp.period}`,
                        'Achievements:',
                        ...exp.achievements.map(achievement => `  • ${achievement}`),
                        ''
                    ]).flat()
                ]
            })
        },

        certifications: {
            description: 'List professional certifications',
            execute: () => ({
                output: [
                    '=== Professional Certifications ===',
                    '',
                    'Security:',
                    '• Google Cybersecurity Certificate',
                    '• CompTIA Security+ (In Progress)',
                    '',
                ]
            })
        },

        // Contact Commands
        contact: {
            description: 'Show contact information',
            execute: () => ({
                output: [
                    '=== Contact Information ===',
                    '',
                    'Email:    jdavis@jedd.dev',
                    'GitHub:   github.com/jjjed',
                    'LinkedIn: linkedin.com/in/joshua-davis-20a720266',
                    'Calendar: fantastical.app/joda',
                    '',
                    'Type "email", "github", or "linkedin" to open directly'
                ]
            })
        },

        socials: {
            description: 'Display social media links',
            execute: () => commands.contact.execute()
        },

        github: {
            description: 'Open GitHub profile',
            execute: () => {
                window.open('https://github.com/jjjed', '_blank');
                return { output: ['Opening GitHub profile...'] };
            }
        },

        email: {
            description: 'Send an email',
            execute: () => {
                window.open('mailto:jdavis@jedd.dev', '_blank');
                return { output: ['Opening email client...'] };
            }
        },

        linkedin: {
            description: 'Open LinkedIn profile',
            execute: () => {
                window.open('https://www.linkedin.com/in/joshua-davis-20a720266', '_blank');
                return { output: ['Opening LinkedIn profile...'] };
            }
        },

        meeting: {
            description: 'Schedule a meeting',
            execute: () => {
                window.open('https://jedd.dev/meet', '_blank');
                return { output: ['Opening calendar...'] };
            }
        },

        echo: {
            description: 'Print text to the terminal',
            usage: 'echo <message>',
            execute: (args) => ({
                output: [args.join(' ')]
            })
        },

        date: {
            description: 'Display current date and time',
            execute: () => ({
                output: [
                    new Date().toLocaleString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        timeZoneName: 'short'
                    })
                ]
            })
        },

        echo: {
            description: 'Print text to the terminal',
            usage: 'echo <message>',
            execute: (args) => ({
                output: [args.join(' ')]
            })
        },

        date: {
            description: 'Display current date and time',
            execute: () => ({
                output: [
                    new Date().toLocaleString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        timeZoneName: 'short'
                    })
                ]
            })
        },

        weather: {
            description: 'Show current weather',
            execute: () => ({
                output: [
                    '=== Newark, NJ Weather ===',
                    'Unable to fetch real-time weather data.',
                    'Integration with weather API coming soon!',
                    'Type "help weather" for more information.'
                ]
            })
        },

        version: {
            description: 'Show terminal version',
            execute: () => ({
                output: [
                    'Joshua Davis Terminal v1.0.0',
                    '© 2024 Joshua Davis',
                    'Built with React + Tailwind CSS',
                    'Type "help" for available commands'
                ]
            })
        },

        uptime: {
            description: 'Show system uptime',
            execute: () => {
                const startTime = new Date(performance.timeOrigin);
                const uptime = Math.floor(performance.now() / 1000);
                const hours = Math.floor(uptime / 3600);
                const minutes = Math.floor((uptime % 3600) / 60);
                const seconds = uptime % 60;

                return {
                    output: [
                        `System start: ${startTime.toLocaleString()}`,
                        `Uptime: ${hours}h ${minutes}m ${seconds}s`,
                        'System status: Online',
                        'All services operational'
                    ]
                };
            }
        }
    };

    const handleTabCompletion = (input) => {
        const inputLower = input.toLowerCase();
        const matches = commandList.filter(cmd => cmd.startsWith(inputLower));

        if (matches.length === 0) {
            return input;
        } else if (matches.length === 1) {
            setShowTabCompletion(false);
            return matches[0];
        } else {
            setTabOptions(matches);
            setShowTabCompletion(true);
            return input;
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const newInput = handleTabCompletion(input);
            setInput(newInput);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > -1) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(newIndex === -1 ? '' : commandHistory[commandHistory.length - 1 - newIndex] || '');
            }
        }
    };

    // Terminal rendering and command handling
    const handleCommand = (cmd) => {
        const args = cmd.trim().split(' ');
        const command = args[0].toLowerCase();
        const commandArgs = args.slice(1);

        // Add to command history
        setCommandHistory(prev => [...prev, cmd]);

        // Handle special cases first
        if (command === '') {
            return { output: [] };
        }

        // Look for command in commands object
        if (commands[command]) {
            try {
                return commands[command].execute(commandArgs);
            } catch (error) {
                return {
                    output: [`Error executing command '${command}': ${error.message}`]
                };
            }
        }

        // Command not found
        return {
            output: [
                `Command not found: ${command}`,
                "Type 'help' for available commands",
                `Did you mean: ${findSimilarCommands(command).join(', ')}`
            ]
        };
    };

    // Find similar commands for suggestions
    const findSimilarCommands = (cmd) => {
        return commandList
            .filter(command => {
                const distance = levenshteinDistance(cmd, command);
                return distance <= 2 && distance > 0;
            })
            .slice(0, 3);
    };

    // Levenshtein distance for command suggestions
    const levenshteinDistance = (a, b) => {
        if (a.length === 0) return b.length;
        if (b.length === 0) return a.length;

        const matrix = Array(b.length + 1).fill(null)
            .map(() => Array(a.length + 1).fill(null));

        for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
        for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

        for (let j = 1; j <= b.length; j++) {
            for (let i = 1; i <= a.length; i++) {
                const substitute = matrix[j - 1][i - 1] + (a[i - 1] !== b[j - 1] ? 1 : 0);
                matrix[j][i] = Math.min(
                    matrix[j - 1][i] + 1,
                    matrix[j][i - 1] + 1,
                    substitute
                );
            }
        }

        return matrix[b.length][a.length];
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const result = handleCommand(input.trim());

        setHistory(prev => [
            ...prev,
            { type: 'input', content: input },
            ...(result.output || []).map(line => ({
                type: 'output',
                content: line,
                className: result.className
            }))
        ]);

        setInput('');
        setHistoryIndex(-1);
        setShowTabCompletion(false);
    };

    // Format output based on type
    const formatOutput = (entry) => {
        switch (entry.type) {
            case 'input':
                return (
                    <div className="flex items-center">
                        <span className="text-green-400">joshua</span>
                        <span className="text-gray-400 mx-1">@</span>
                        <span className="text-purple-400">professional-journey</span>
                        <span className="text-gray-400 mx-1">%</span>
                        <span className="text-white ml-1">{entry.content}</span>
                    </div>
                );
            case 'matrix':
                return (
                    <div className="text-green-500 font-matrix opacity-75">
                        {entry.content}
                    </div>
                );
            default:
                return (
                    <div className={`text-gray-300 ${entry.className || ''}`}>
                        {entry.content}
                    </div>
                );
        }
    };

    // Auto-scroll to bottom
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    // Initial welcome message
    useEffect(() => {
        setHistory([
            { type: 'output', content: '=== Joshua Davis Terminal v1.0 ===' },
            { type: 'output', content: 'Welcome! Type "help" for available commands.' },
            { type: 'output', content: 'Press Tab for command completion.' },
            { type: 'output', content: '' }
        ]);
    }, []);

    return (
        <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden font-mono">
            {/* Terminal Header */}
            <div className="bg-gray-800 p-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm">joshua@professional-journey — portfolio</span>
            </div>

            {/* Terminal Body */}
            <div
                ref={terminalRef}
                className="p-4 h-96 overflow-y-auto bg-gray-900"
                onClick={handleTerminalClick}
            >
                {/* Command History */}
                {history.map((entry, i) => (
                    <div key={i} className="mb-1">
                        {formatOutput(entry)}
                    </div>
                ))}

                {/* Tab Completion Display */}
                {showTabCompletion && tabOptions.length > 0 && (
                    <div className="text-gray-400 mb-2">
                        Available commands:
                        <div className="grid grid-cols-3 gap-2 ml-2">
                            {tabOptions.map((opt, i) => (
                                <div key={i}>{opt}</div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="flex items-center mt-2">
                    <span className="text-green-400">joshua</span>
                    <span className="text-gray-400 mx-1">@</span>
                    <span className="text-purple-400">professional-journey</span>
                    <span className="text-gray-400 mx-1">%</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent text-white outline-none border-none ml-1"
                        spellCheck="false"
                    />
                </form>

                {/* Blinking Cursor */}
                {isTerminalActive && (
                    <motion.div
                        className="inline-block w-2 h-4 bg-gray-400 ml-1"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                    />
                )}
            </div>
        </div>
    );
};

export default Terminal;