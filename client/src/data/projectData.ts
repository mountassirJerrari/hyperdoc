export type ProjectType = {
  id: string;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  challenges: string;
  outcome: string;
  link: string;
  tags: string[];
};

export const projectData: ProjectType[] = [
  {
    id: 'cosmic-dashboard',
    title: 'Cosmic Dashboard',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    description: 'A real-time analytics dashboard for monitoring system performance and user activity. Features customizable widgets, dark theme UI, and responsive design.',
    technologies: ['React', 'Node.js', 'D3.js', 'Socket.io', 'MongoDB'],
    challenges: 'Implementing real-time data visualization with minimal latency while maintaining browser performance.',
    outcome: 'Successfully deployed to production with 99.9% uptime and positive user feedback on the intuitive interface.',
    link: 'https://github.com',
    tags: ['Full Stack', 'Data Viz']
  },
  {
    id: 'nexus-ai',
    title: 'Nexus AI',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    description: 'AI-powered content analysis platform that processes text and visual data to extract insights and generate reports.',
    technologies: ['Python', 'TensorFlow', 'React', 'Flask', 'AWS'],
    challenges: 'Training machine learning models to accurately analyze diverse content types with minimal false positives.',
    outcome: 'Reduced manual content analysis time by 75% for client organizations.',
    link: 'https://github.com',
    tags: ['AI/ML', 'Frontend']
  },
  {
    id: 'orbital-chat',
    title: 'Orbital Chat',
    image: 'https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    description: 'Secure, real-time messaging application with end-to-end encryption and customizable space-themed UI.',
    technologies: ['Socket.io', 'Express', 'Angular', 'WebRTC', 'MongoDB'],
    challenges: 'Implementing secure encryption while maintaining real-time performance across devices.',
    outcome: 'Built a scalable infrastructure supporting 10,000+ concurrent users with minimal latency.',
    link: 'https://github.com',
    tags: ['Real-time', 'WebSockets']
  },
  {
    id: 'stellar-commerce',
    title: 'Stellar Commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    description: 'E-commerce platform with microservices architecture, advanced product recommendation, and seamless checkout flow.',
    technologies: ['Java Spring Boot', 'React', 'MySQL', 'Docker', 'Kubernetes'],
    challenges: 'Designing a scalable microservice architecture that maintains transaction integrity during high traffic periods.',
    outcome: 'Increased conversion rate by 23% and reduced cart abandonment by implementing a streamlined checkout process.',
    link: 'https://github.com',
    tags: ['E-commerce', 'Microservices']
  },
  {
    id: 'quantum-canvas',
    title: 'Quantum Canvas',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    description: 'Interactive 3D art creation platform that allows users to create, share, and explore digital art in a virtual gallery.',
    technologies: ['Three.js', 'WebGL', 'JavaScript', 'Firebase', 'WebXR'],
    challenges: 'Optimizing 3D rendering performance across various devices while maintaining visual fidelity.',
    outcome: 'Featured in digital art exhibitions and garnered a community of over 5,000 artists creating and sharing work.',
    link: 'https://github.com',
    tags: ['Digital Art', '3D Graphics']
  },
  {
    id: 'nebula-notes',
    title: 'Nebula Notes',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    description: 'Cross-platform note-taking application with markdown support, cloud sync, and customizable dark themes.',
    technologies: ['Firebase', 'Vue.js', 'Electron', 'IndexedDB', 'Sass'],
    challenges: 'Creating a seamless offline-first experience that syncs reliably when connectivity is restored.',
    outcome: 'Developed and launched on desktop and mobile with 4.8/5 average user rating.',
    link: 'https://github.com',
    tags: ['Productivity', 'Cross-platform']
  }
];
