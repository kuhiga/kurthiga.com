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
    job: "software engineer",
    started: "2021-07-01",
    stack: "web and ios",
    hobby: "",
    projectLink: "https://github.com/kuhiga?tab=repositories",
  },
  socials: {
    twitter: "https://twitter.com/JohnDoe",
    github: "https://github.com/kuhiga",
  },
  projects: {
    StairQuest: {
      url: "https://apps.apple.com/us/app/stairquest-climb-to-fitness/id6479274950",
      tags: ["swift", "swiftui", "cloudkit", "swiftdata"],
    },
    TalkStoryEnglish: {
      url: "https://talkstoryenglish.com/en",
      tags: ["typescript", "astro", "deno deploy", "resend"],
    },
  },
  og: {
    image: icon,
  },
};
