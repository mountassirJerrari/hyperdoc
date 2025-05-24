export type JourneyItem = {
  title: string;
  period: string;
  description: string;
  color: "purple" | "accent" | "cyan" | "mint";
};

export const journeyData: JourneyItem[] = [
  {
    title: "Engineering Degree - ENSET Mohammedia",
    period: "2023 - Present",
    description: "Pursuing an engineering degree in Software Engineering and Distributed Computer Systems at ENSET Mohammedia, focusing on advanced software architecture and distributed systems.",
    color: "purple"
  },
  {
    title: "Web Developer Internship - MOENN Technologies",
    period: "April 2023 - June 2023",
    description: "Implemented FIDO2 passwordless authentication with CTAP and WebAuthn. Developed a recipe management web application using Next.js and NestJS.",
    color: "accent"
  },
  {
    title: "DUT in Computer Engineering - EST Fès",
    period: "2021 - 2023",
    description: "Earned a Diplôme Universitaire de Technologie (DUT) in Computer Engineering with a specialization in Software Engineering from Ecole Supérieure de Technologie in Fès.",
    color: "cyan"
  },
  {
    title: "Web Developer Internship - WEM",
    period: "July 2022",
    description: "Designed and developed an e-commerce website using Laravel, integrating product management, order management, and secure payment systems.",
    color: "mint"
  }
];
