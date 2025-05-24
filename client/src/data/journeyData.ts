export type JourneyItem = {
  title: string;
  period: string;
  description: string;
  color: "purple" | "accent" | "cyan" | "mint";
};

export const journeyData: JourneyItem[] = [
  {
    title: "Senior Software Developer",
    period: "2020 - Present",
    description: "Leading development of cloud-native applications and microservices architecture. Mentoring junior developers and implementing CI/CD pipelines.",
    color: "purple"
  },
  {
    title: "Full Stack Developer",
    period: "2017 - 2020",
    description: "Developed responsive web applications using React and Node.js. Implemented RESTful APIs and database optimization.",
    color: "accent"
  },
  {
    title: "Junior Developer",
    period: "2015 - 2017",
    description: "Started my professional journey working on front-end development. Built and maintained client-facing applications.",
    color: "cyan"
  },
  {
    title: "Computer Science Degree",
    period: "2011 - 2015",
    description: "Bachelor's degree with focus on software engineering and digital art. Started exploring the intersection of technology and creativity.",
    color: "mint"
  }
];
