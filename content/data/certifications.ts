import { Certification } from "@/interfaces/certification";

export const certifications: Certification[] = [
  {
    certificate: "AWS Certified Solutions Architect – Associate",
    url: "https://www.credly.com/badges/b54bb0cc-0020-40ed-b287-5a1a64888360/public_url",
    fromDate: "2021-03-31",
    toDate: "2024-03-31",
    issuer: {
      name: "Amazon Web Services",
      logo: "",
      url: "https://aws.amazon.com",
    },
    badge: "/assets/badges/aws-certified-solutions-architect-associate.png",
    description:
      "Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements. Badge owners are able to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant.",
  },
  {
    certificate: "AWS Certified SysOps Administrator – Associate",
    url: "https://www.credly.com/badges/0db3a24e-b5f2-4101-ae32-194e3ca7647c/public_url",
    fromDate: "2020-06-26",
    toDate: "2023-06-26",
    issuer: {
      name: "Amazon Web Services",
      logo: "",
      url: "https://aws.amazon.com",
    },
    badge: "/assets/badges/aws-certified-sysops-administrator-associate.png",
    description:
      "Earners of this certification have a comprehensive understanding on how to deploy, manage, and operate IT systems on the AWS Cloud. They demonstrated the ability to migrate on-premises workloads to AWS and monitor, scale, and secure systems on the AWS platform. Badge owners are able to provide guidance on implementing best practices for cloud operations.",
  },
  {
    certificate: "AWS Certified Cloud Practitioner",
    url: "https://www.credly.com/badges/24d19465-53d6-4c45-8a40-5ff8fa5352bc/public_url",
    fromDate: "2020-02-20",
    toDate: "2024-03-31",
    issuer: {
      name: "Amazon Web Services",
      logo: "",
      url: "https://aws.amazon.com",
    },
    badge: "/assets/badges/aws-certified-cloud-practitioner.png",
    description:
      "Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.",
  },
];
