import icon from "../public/favicon.ico";

interface IConfig {
  me: {
    name: string;
    job: string;
    started: string;
    stack: string;
    hobby: string;
    projectLink: string;
  };
  socials: {
    [name: string]: string;
  };
  projects: {
    [name: string]: {
      url: string;
      tags: string[];
    };
  };
  og: {
    image: string;
  };
}

export const Config: IConfig = {
  me: {
    name: "Kurt H.",
    job: "full stack software engineer",
    started: "2021-07-01",
    stack: "web and mobile",
    hobby: "",
    projectLink: "https://github.com/kuhiga?tab=repositories",
  },
  socials: {
    GitHub: "https://github.com/kuhiga",
    LinkedIn: "https://www.linkedin.com/in/kurthiga/",
  },
  projects: {
    StairQuest: {
      url: "https://apps.apple.com/us/app/stairquest-climb-to-fitness/id6479274950",
      tags: ["swift", "swiftui", "cloudkit", "swiftdata"],
    },
    TalkStoryEnglish: {
      url: "https://talkstoryenglish.com/en",
      tags: ["typescript", "astro", "contentful", "deno", "resend"],
    },
    "Luna Masonry": {
      url: "https://luna-masonry.com/",
      tags: ["typescript", "tailwind", "seo"],
    },
  },
  og: {
    image: icon,
  },
};

interface Tool {
  title: string;
}

interface Job {
  startYear: string;
  endYear: string;
  company: string;
  jobPosition: string;
  description: string;
}
export const jobs: Job[] = [
  {
    startYear: "2024",
    endYear: "Present",
    company: "FloQast",
    jobPosition: "Software Engineer",
    description:
      "Building ERP integrations and scalable microservices for FloQast, enhancing workflows for accounting teams.",
  },
  {
    startYear: "2021",
    endYear: "2024",
    company: "Asurion",
    jobPosition: "Software Engineer",
    description:
      "Developed and maintained mobile and web applications for Asurion's same-day repair and delivery network.",
  },
  {
    startYear: "2020",
    endYear: "2020",
    company: "BenitoLink",
    jobPosition: "Web Development Intern",
    description:
      "Designed and implemented new features for a local news website serving the residents of San Benito County.",
  },
  {
    startYear: "2017",
    endYear: "2021",
    company: "UC Santa Cruz",
    jobPosition: "Deli Clerk / Student Supervisor / Ramen Cook / TA",
    description:
      "Obtained a Bachelor of Science in Computer Science. Activities: Nikkei Student Union, Scuba Club.",
  },
];
