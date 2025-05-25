export type Certification = {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  isBadge: boolean;
  badgeImage?: string;
  verifyUrl?: string;
};

export const certifications: Certification[] = [
  {
    id: 1,
    title: "English for IT",
    issuer: "British Council",
    issueDate: "2023",
    isBadge: false,
    verifyUrl: "#"
  },
  {
    id: 2,
    title: "Red Hat System Administration",
    issuer: "Red Hat",
    issueDate: "2023",
    credentialId: "123-456-789",
    isBadge: true,
    badgeImage: "/images/redhat-badge.png",
    verifyUrl: "#"
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    issueDate: "2023",
    credentialId: "AWS1234567890",
    isBadge: true,
    badgeImage: "/images/aws-badge.png",
    verifyUrl: "#"
  },
  {
    id: 4,
    title: "Cisco Networking Essentials",
    issuer: "Cisco Networking Academy",
    issueDate: "2022",
    isBadge: false,
    verifyUrl: "#"
  }
];
