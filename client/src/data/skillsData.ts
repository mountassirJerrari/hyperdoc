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
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "node-js" },
  { name: "JavaScript", icon: "js" },
  { name: "Java", icon: "java" },
  { name: "Angular", icon: "angular" },
  { name: "Docker", icon: "docker" },
  { name: "AWS", icon: "aws" },
  { name: "SQL/NoSQL", icon: "database" },
  { name: "Git", icon: "git-branch" },
  { name: "Python", icon: "python" }
];

export const creativeSkills: CreativeSkill[] = [
  { name: "Digital Art", icon: "palette", proficiency: 90 },
  { name: "UI/UX Design", icon: "desktop", proficiency: 85 },
  { name: "3D Modeling", icon: "cube", proficiency: 75 }
];

export const softSkills: SoftSkill[] = [
  { 
    name: "Team Leadership", 
    icon: "users", 
    description: "Mentoring junior developers and coordinating team efforts" 
  },
  { 
    name: "Project Management", 
    icon: "list-checks", 
    description: "Planning, executing, and delivering projects on schedule" 
  },
  { 
    name: "Communication", 
    icon: "message-square", 
    description: "Clear communication with clients and team members" 
  },
  { 
    name: "Problem Solving", 
    icon: "lightbulb", 
    description: "Analytical thinking and creative solution development" 
  }
];
