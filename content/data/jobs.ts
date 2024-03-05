import { Job } from "@/interfaces/job";

export const jobs: Job[] = [
  {
    jobTitle: "Frontend Engineer",
    company: {
      logo: "/assets/companies/connectos.jpg",
      name: "ConnectOS Philippines Inc.",
      url: "https://connectos.co/",
    },
    description: `<ul>
    <li>Collaborate closely with the backend developer to build dynamic web and mobile apps using ReactJS, NextJS, Flutter, Tailwind, and VueJS, and other technologies. Dedicated to staying updated on emerging technologies for optimal, high-performance solutions.</li>
    </ul>`,
    fromDate: "2022-08-18",
    toDate: null,
    skills: ["React JS", "Next JS", "Tailwind CSS", "Flutter"],
  },
  {
    jobTitle: "Frontend Developer",
    company: {
      logo: "/assets/companies/xdna.png",
      name: "xDNA Digital Agency Inc.",
      url: "https://xdnainteractive.com/",
    },
    description: `<ul>
    <li>Led web application development, applying industry best practices and cutting-edge technologies.</li>
    <li>Established a streamlined CI/CD workflow with Gitlab, boosting efficiency and team collaboration.</li>
    <li>Pioneered innovative solutions through client engagement, driving customer satisfaction and business growth.</li>
    <li>Ensured optimal database performance and scalability while collaborating with cross-functional teams to deliver high-quality results within project timelines.</li>
    </ul>`,
    fromDate: "2021-06-21",
    toDate: "2022-08-13",
    skills: [
      "React JS",
      "Next JS",
      "SWR",
      "Tailwind CSS",
      "Redux",
      "PHP",
      "Laravel",
      "MySQL",
      "Wordpress AP",
    ],
  },
  {
    jobTitle: "Developer Analyst",
    company: {
      logo: "/assets/companies/groworx.jpg",
      name: "Groworx Philippines, OPC",
      url: "https://www.groworx.com.au/",
    },
    description: `<ul>
    <li>Provided exceptional Level 2 application support, resolving end-user issues promptly through effective problem-solving and analytical skills.</li>
    <li>Conducted thorough troubleshooting, identifying root causes and implementing efficient solutions for timely resolution.</li>
    <li>Improved testing efficiency and accuracy by leveraging TestCafe for automation testing.</li>
    <li>Collaborated seamlessly with cross-functional Level 3 team (SRE, QA, Scrum master, etc.) for effective incident management and issue resolution, fostering a collaborative work environment.</li>
    </ul>`,
    fromDate: "2019-08-05",
    toDate: "2021-06-20",
    skills: [
      "Javascript",
      "Docker",
      "Jira",
      "GitHub",
      "Jenkins",
      "TestCafe",
      "ServiceNow",
      "GCP(Datastore, StackDriver)",
    ],
  },
  {
    jobTitle: "Fullstack Developer",
    company: {
      logo: "/assets/companies/switchconnect.png",
      name: "Switch Connect",
      url: "https://www.switchconnect.com.au/",
    },
    description: `<ul>
    <li>Developed and maintained the company's financial platform, ensuring its functionality, user-friendliness, and performance.</li>
    <li>Integrated proprietary and third-party APIs (Merchant Warrior, Stripe) for seamless payment processing and enhanced functionality.</li>
    <li>Improved testing efficiency and accuracy by leveraging TestCafe for automation testing.</li>
    <li>Optimized the website's performance and user experience through proactive identification of opportunities and API integrations.</li>
    </ul>`,
    fromDate: "2018-10-01",
    toDate: "2019-07-01",
    skills: [
      "PHP",
      "Laravel",
      "MySQL",
      "Javascript",
      "Bootstrap",
      "jQuery",
      "AJAX",
    ],
  },
  {
    jobTitle: "Web Developer",
    company: {
      logo: "",
      name: "Codependa Services",
      url: "",
    },
    description: `<ul>
    <li>Created websites using a web framework and performing highly competitive skills in the field of web development.</li>
    </ul>`,
    fromDate: "2017-08-01",
    toDate: "2018-08-01",
    skills: [
      "PHP",
      "Phalcon",
      "MySQL",
      "Javascript",
      "Bootstrap",
      "jQuery",
      "AJAX",
    ],
  },
];
