const projects = [
  {
    id: 1,
    name: "WellBee",
    liveLink: "https://wellbee-nine.vercel.app/",
    github: "edfc",
    techStack: {
      frontend: "Next.js",
      backend: "Node.js",
      database: "MongoDB"
    },
    description: "Enhancing Student mental Wellness through Technology",
    keyFeatures: [
      "Daily Mood Tracker",
      "Public sharing and community support",
      "Fitness Tracking",
      "Medical Assistance"
    ],
    image: "public/Images/wellbee.png"
  },
  {
    id: 2,
    name: "TLE Contest Tracker",
    liveLink: "https://tle-contest-tracker.vercel.app/",
    github: "",
    techStack: {
      frontend: "Next.js",
      backend: "Node.js"
    },
    description: "A platform that fetches upcoming coding contests (LeetCode, CodeChef, Codeforces) and provides solutions through YouTube API integration",
    keyFeatures: [
      "View Upcoming contests",
      "Solutions for completed contests",
      "Bookmarking the contests"
    ],
    image: "public/Images/contest-tracker.png"
  },
  {
    id: 3,
    name: "OBL Chatbot",
    liveLink: "https://obl-chatbot-frontend.onrender.com/",
    github: "",
    techStack: {
      frontend: "React.js",
      backend: "Python"
    },
    description: "A chatbot for a tiles company that provides tile recommendations based on user queries.",
    keyFeatures: [
      "Web scraping",
      "Intelligent query processing",
      "Real-time suggestions"
    ],
    image: "public/Images/obl-chatbot.png"
  },
  {
    id: 4,
    name: "Twitter Extension",
    liveLink: "https://github.com/Sainath9866/Twitter-Extension",
    github: "",
    techStack: {
      frontend: "JavaScript"
    },
    description: "This Chrome extension detects toxic words in tweets and adds a sensitive content warning. Users can reveal the tweet by clicking",
    keyFeatures: [
      "Detects toxic words in tweets in real-time",
      "Blurs tweets containing sensitive content",
      "Allows users to reveal hidden tweets with a single click"
    ],
    image: "public/Images/x-ex.png"
  }
];

export default projects; 