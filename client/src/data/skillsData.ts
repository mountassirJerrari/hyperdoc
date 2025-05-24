export type TechSkill = {
  name: string;
  icon: string;
};

export type CreativeSkill = {
  name: string;
  icon: string;
  proficiency: number;
};

export type SoftSkill = {
  name: string;
  icon: string;
  description: string;
};

export const techSkills: TechSkill[] = [
  { name: "React.js", icon: "react" },
  { name: "Next.js", icon: "node-js" },
  { name: "TypeScript", icon: "js" },
  { name: "JavaScript", icon: "js" },
  { name: "Java", icon: "java" },
  { name: "Angular", icon: "angular" },
  { name: "Node.js", icon: "node-js" },
  { name: "NestJS", icon: "node-js" },
  { name: "Laravel", icon: "php" },
  { name: "Spring", icon: "java" },
  { name: "Docker", icon: "docker" },
  { name: "Ansible", icon: "server" },
  { name: "MySQL", icon: "database" },
  { name: "Express.js", icon: "server" },
  { name: "Tailwind CSS", icon: "code" },
  { name: "C++", icon: "code" },
  { name: "GitHub", icon: "git-branch" }
];

export const creativeSkills: CreativeSkill[] = [
  { name: "Web Development", icon: "code", proficiency: 95 },
  { name: "UI/UX Design", icon: "desktop", proficiency: 85 },
  { name: "DevOps", icon: "server", proficiency: 80 },
  { name: "Game Development", icon: "gamepad", proficiency: 75 }
];

export const softSkills: SoftSkill[] = [
  { 
    name: "Problem Solving", 
    icon: "lightbulb", 
    description: "Analytical thinking and creative solution development" 
  },
  { 
    name: "Fast Learner", 
    icon: "book", 
    description: "Ability to quickly learn and adapt to new technologies" 
  },
  { 
    name: "Team Collaboration", 
    icon: "users", 
    description: "Working effectively with others on complex projects" 
  },
  { 
    name: "Communication", 
    icon: "message-square", 
    description: "Clear communication of technical concepts" 
  },
  {
    name: "System Administration",
    icon: "server",
    description: "Network and Linux system administration skills (CCNA, Red Hat)"
  }
];
