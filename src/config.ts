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
