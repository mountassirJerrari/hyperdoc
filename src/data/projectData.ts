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
    id: 'piece-table-editor',
    title: 'Text Editor Backend with Piece Table',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    description: 'Engineered a high-performance text editor backend in C++ using the Piece Table data structure, built with CMake for cross-platform compatibility. The implementation enables efficient text manipulation operations like insertions, deletions, and undos with optimal time complexity.',
    technologies: ['C++', 'CMake', 'Data Structures', 'Algorithms', 'Text Processing'],
    challenges: 'Designing an efficient piece table implementation in C++ that handles large documents, supports concurrent operations, and maintains performance during intensive editing sessions while ensuring memory efficiency and thread safety.',
    outcome: 'Developed a robust, high-performance text editing backend in C++ that outperforms traditional gap buffer and rope implementations, particularly for large documents and memory-constrained environments.',
    link: 'https://github.com/mountassirJerrari/piece-table-editor',
    tags: ['C++', 'Data Structures', 'Systems Programming']
  },
  {
    id: 'snaterj-framework',
    title: 'Snaterj - Front-End Framework',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    description: 'Creation of a custom front-end framework named Snaterj, based on a JSX-like syntax called SSX, specifically designed for this framework with its own compiler and rendering engine.',
    technologies: ['JavaScript', 'Custom Compiler', 'SSX', 'Rendering Engine'],
    challenges: 'Designing a custom compiler that transforms SSX code into optimized instructions for the rendering engine while maintaining performance.',
    outcome: 'Built a complete front-end framework with its own syntax, compiler, and efficient rendering system.',
    link: 'https://github.com/mountassirJerrari',
    tags: ['Framework', 'Compiler', 'JavaScript']
  },
  {
    id: 'ai-assistant-rag',
    title: 'AI Assistant with RAG',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324b6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    description: 'Developed a Java-based AI assistant using LangChain4j and RAG (Retrieval-Augmented Generation) technology, enabling context-aware responses by retrieving and synthesizing information from a knowledge base.',
    technologies: ['Java', 'LangChain4j', 'RAG', 'Vector Database', 'AI/ML'],
    challenges: 'Implementing efficient document retrieval, managing context windows, and ensuring the AI provides accurate, relevant responses based on the retrieved information.',
    outcome: 'Created a powerful AI assistant capable of providing accurate, context-aware responses by leveraging both parametric knowledge and retrieved documents.',
    link: 'https://github.com/mountassirJerrari/ai-assistant-rag',
    tags: ['AI', 'Java', 'RAG']
  },
  {
    id: 'collaborative-text-editor',
    title: 'Collaborative Text Editor',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    description: 'Real-time collaborative text editor using Conflict-free Replicated Data Types (CRDTs) and the YJS library for conflict management, allowing multiple users to edit documents simultaneously.',
    technologies: ['Next.js', 'Quill.js', 'WebRTC', 'YJS', 'CRDTs'],
    challenges: 'Implementing real-time collaboration while handling concurrency conflicts and maintaining data consistency across multiple clients.',
    outcome: 'Developed an interactive text editor with real-time collaboration features, supporting multiple users editing simultaneously.',
    link: 'https://github.com/mountassirJerrari',
    tags: ['Real-time', 'Collaboration', 'WebRTC']
  },
  {
    id: 'fido2-authentication',
    title: 'FIDO2 Passwordless Authentication',
    image: 'https://images.unsplash.com/photo-1560157368-946d9c8f7cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    description: 'Implementation of the FIDO2 passwordless authentication standard with CTAP and WebAuthn, improving connection security and reducing password-related risks during an internship at MOENN Technologies.',
    technologies: ['FIDO2', 'WebAuthn', 'CTAP', 'Security', 'Authentication'],
    challenges: 'Integrating complex security protocols while ensuring a seamless user experience for passwordless authentication.',
    outcome: 'Enhanced application security by implementing modern authentication standards that reduce reliance on traditional passwords.',
    link: 'https://github.com/mountassirJerrari',
    tags: ['Security', 'Authentication', 'WebAuthn']
  },
  {
    id: 'ioc-container',
    title: 'Basic IoC Container',
    image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    description: 'Development of a dependency injection container in Java, enabling annotation-based injection and automatic component scanning for simplified application architecture.',
    technologies: ['Java', 'Dependency Injection', 'Annotations', 'Reflection API'],
    challenges: 'Implementing a flexible dependency resolution system that handles circular dependencies and supports various injection styles.',
    outcome: 'Created a lightweight IoC container that simplifies application architecture through dependency injection.',
    link: 'https://github.com/mountassirJerrari',
    tags: ['Java', 'Architecture', 'DI']
  },
  {
    id: 'ecommerce-website',
    title: 'E-commerce Website',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    description: 'Design and development of a complete e-commerce website using Laravel, integrating product management, order management, and secure payment systems during an internship at WEM.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Payment Gateway Integration'],
    challenges: 'Implementing secure payment processing and ensuring data integrity for product and order management.',
    outcome: 'Successfully delivered a fully functional e-commerce platform with complete product and order management capabilities.',
    link: 'https://github.com/mountassirJerrari',
    tags: ['E-commerce', 'Laravel', 'PHP']
  },
  {
    id: 'tetris-game',
    title: 'Tetris Game',
    image: 'https://images.unsplash.com/photo-1586336944748-ba39227245e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    description: 'Development of a Tetris-style game using C++ with SDL graphics library, implementing optimized data structures for smooth gameplay mechanics.',
    technologies: ['C++', 'SDL', 'Game Development', 'Data Structures'],
    challenges: 'Optimizing game performance and implementing collision detection while maintaining smooth gameplay and responsive controls.',
    outcome: 'Created a fully functional Tetris game with smooth animations and classic gameplay mechanics.',
    link: 'https://github.com/mountassirJerrari',
    tags: ['Game Dev', 'C++', 'SDL']
  },
  {
    id: 'recipe-management',
    title: 'Recipe Management App',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    description: 'Development of a recipe management web application using Next.js for the frontend and NestJS for the backend, providing a smooth and responsive user experience for saving and sharing recipes.',
    technologies: ['Next.js', 'NestJS', 'TypeScript', 'RESTful API'],
    challenges: 'Building a seamless user experience with responsive design while ensuring efficient data management.',
    outcome: 'Created a feature-rich recipe application with intuitive interface for managing and sharing recipes.',
    link: 'https://github.com/mountassirJerrari',
    tags: ['Full Stack', 'Web App', 'TypeScript']
  }
];
