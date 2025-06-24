import {
  UserProfile,
  Task,
  Language,
  OpportunityItem,
  OpportunityType,
  EducationEntry,
} from "./types";

export const GEMINI_CHAT_MODEL_NAME = "gemini-2.5-flash-preview-04-17";
export const GEMINI_IMAGE_MODEL_NAME = "imagen-3.0-generate-002";

export const DEFAULT_MAP_CENTER: [number, number] = [34.0522, -118.2437]; // Los Angeles
export const DEFAULT_MAP_ZOOM: number = 10;
export const AI_USER_ID = "ai_assistant"; // Special ID for the AI

export const MOCK_USER_EDUCATION: EducationEntry[] = [
  {
    id: "edu1",
    institution: "University of Digital Arts",
    degree: "B.Sc. in Interactive Media",
    fieldOfStudy: "Game Development & UI/UX",
    startYear: "2018",
    endYear: "2022",
  },
  {
    id: "edu2",
    institution: "Community Tech Institute",
    degree: "Certificate in Web Development",
    fieldOfStudy: "Full-Stack JavaScript",
    startYear: "2023",
    endYear: "Present",
  },
];

export const MOCK_USER: UserProfile = {
  id: "user123", // Current Logged In User
  name: "Vedant Raut",
  bio: "Passionate frontend developer and community volunteer. Eager to connect and contribute to meaningful projects. Exploring the potential of Web3 and decentralized technologies for social good. Future goal: To build a platform that empowers local communities through technology and innovation.",
  skills: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Problem Solving"],
  avatarUrl: "https://picsum.photos/seed/alexryder/200/200",
  location: [34.0522, -118.2437], // Los Angeles
  education: MOCK_USER_EDUCATION,
};

export const OTHER_USERS_ON_MAP: UserProfile[] = [
  // These are also potential chat partners
  {
    id: "user002",
    name: "Ojas",
    bio: "Designer & Dreamer. Loves to collaborate on innovative UI/UX projects. Coffee enthusiast.",
    skills: ["Figma", "Illustration", "Prototyping"],
    avatarUrl: "https://picsum.photos/id/237/200/300",
    location: [34.1, -118.3],
    education: [
      {
        id: "edu_bella1",
        institution: "Design Institute",
        degree: "MFA in Design",
        fieldOfStudy: "Digital Media",
        startYear: "2019",
        endYear: "2021",
      },
    ],
  },
  {
    id: "user002",
    name: "Aman",
    bio: "Designer & Dreamer. Loves to collaborate on innovative UI/UX projects. Coffee enthusiast.",
    skills: ["Tree plantaion Drive", "Prototyping", "UI/UX", "Figma"],
    avatarUrl:
      "https://fastly.picsum.photos/id/122/3888/2592.jpg?hmac=xkROmdWG_MzDmpTM2MTawXrpURb60jcTqzkxatKBbOk",
    location: [34.1, -118.33],
    education: [
      {
        id: "edu_bella1",
        institution: "Design Institute",
        degree: "MFA in Design",
        fieldOfStudy: "Digital Media",
        startYear: "2019",
        endYear: "2021",
      },
    ],
  },
  {
    id: "user002",
    name: "Khushi",
    bio: "Designer & Dreamer. Loves to collaborate on innovative UI/UX projects. Coffee enthusiast.",
    skills: ["Prototyping", "UI/UX", "Figma", "Illustration"],
    avatarUrl:
      "https://fastly.picsum.photos/id/12/3888/2592.jpg?hmac=z5QnvAxvFWTEDcrH9g34B5whrOlRpoyRMaX-wJpT9h0",
    location: [34.119, -118.3],
    education: [
      {
        id: "edu_bella1",
        institution: "Design Institute",
        degree: "MFA in Design",
        fieldOfStudy: "Digital Media",
        startYear: "2019",
        endYear: "2021",
      },
    ],
  },
  {
    id: "user002",
    name: "Zone",
    bio: "Designer & Dreamer. Loves to collaborate on innovative UI/UX projects. Coffee enthusiast.",
    skills: ["Java", "dsa", "Advanced", "Prototyping"],
    avatarUrl:
      "https://fastly.picsum.photos/id/8/450/300.jpg?blur=2&grayscale&hmac=IEZDiL9LH2TRFgvxHeG7-QHEAvzp_nN1Sai9YYkIweY",
    location: [34.09, -118.39],
    education: [
      {
        id: "edu_bella1",
        institution: "Design Institute",
        degree: "MFA in Design",
        fieldOfStudy: "Digital Media",
        startYear: "2019",
        endYear: "2021",
      },
    ],
  },
  {
    id: "user002",
    name: "Ramu",
    bio: "Designer & Dreamer. Loves to collaborate on innovative UI/UX projects. Coffee enthusiast.",
    skills: ["Typescript", "Nodejs", "Integration", "Prototyping"],
    avatarUrl:
      "https://fastly.picsum.photos/id/77/450/300.jpg?hmac=V_LawevwSaVitpQs2t7AnuBi84UPSNl1Qp3PmKkmaXc",
    location: [34.048, -118.32],
    education: [
      {
        id: "edu_bella1",
        institution: "Design Institute",
        degree: "MFA in Design",
        fieldOfStudy: "Digital Media",
        startYear: "2019",
        endYear: "2021",
      },
    ],
  },
  {
    id: "user002",
    name: "Ram",
    bio: "Designer & Dreamer. Loves to collaborate on innovative UI/UX projects. Coffee enthusiast.",
    skills: ["UI/UX", "Figma", "Illustration", "Prototyping"],
    avatarUrl: "https://picsum.photos/seed/picsum/200/300",
    location: [35.4, -118.15],
    education: [
      {
        id: "edu_bella1",
        institution: "Design Institute",
        degree: "MFA in Design",
        fieldOfStudy: "Digital Media",
        startYear: "2019",
        endYear: "2021",
      },
    ],
  },
  {
    id: "user002",
    name: "Rahul",
    bio: "Designer & Dreamer. Loves to collaborate on innovative UI/UX projects. Coffee enthusiast.",
    skills: ["UI/UX", "Figma", "Illustration", "Prototyping"],
    avatarUrl: "https://picsum.photos/seed/picsum/200/300",
    location: [34.09, -118.35],
    education: [
      {
        id: "edu_bella1",
        institution: "Design Institute",
        degree: "MFA in Design",
        fieldOfStudy: "Digital Media",
        startYear: "2019",
        endYear: "2021",
      },
    ],
  },
  {
    id: "user002",
    name: "mama",
    bio: "Designer & Dreamer. Loves to collaborate on innovative UI/UX projects. Coffee enthusiast.",
    skills: ["UI/UX", "Figma", "Illustration", "Prototyping"],
    avatarUrl: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
    location: [35.04, -118.35],
    education: [
      {
        id: "edu_bella1",
        institution: "Design Institute",
        degree: "MFA in Design",
        fieldOfStudy: "Digital Media",
        startYear: "2019",
        endYear: "2021",
      },
    ],
  },
  {
    id: "user002",
    name: "Sachit",
    bio: "Designer & Dreamer. Loves to collaborate on innovative UI/UX projects. Coffee enthusiast.",
    skills: ["UI/UX", "Figma", "Illustration", "Prototyping"],
    avatarUrl: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
    location: [34.07, -118.15],
    education: [
      {
        id: "edu_bell1",
        institution: "Design Institute",
        degree: "MFA in Design",
        fieldOfStudy: "Digital Media",
        startYear: "2019",
        endYear: "2021",
      },
    ],
  },
  {
    id: "user003",
    name: "Ayush",
    bio: "Logistics expert and community organizer. Always ready to help coordinate efforts for local events.",
    skills: [
      "Logistics",
      "Event Planning",
      "Team Coordination",
      "Communication",
    ],
    avatarUrl: "https://picsum.photos/seed/carlos/100/100",
    location: [34.045, -118.23],
    education: [
      {
        id: "edu_carlos1",
        institution: "Metro College",
        degree: "BBA",
        fieldOfStudy: "Supply Chain Management",
        startYear: "2015",
        endYear: "2019",
      },
    ],
  },
  {
    id: "user004",
    name: "Tejasvi",
    bio: "Tech enthusiast focusing on sustainable solutions and AI ethics. Always learning.",
    skills: ["Python", "AI Ethics", "Research", "DevOps Basics"],
    avatarUrl: "https://picsum.photos/seed/jamie/100/100",
    location: [34.075, -118.235],
  },
  {
    id: "user005",
    name: "Atharva",
    bio: "Content creator and technical writer. Specializes in making complex topics accessible.",
    skills: ["Technical Writing", "Content Strategy", "SEO", "UX Writing"],
    avatarUrl: "https://picsum.photos/seed/skyler/100/100",
    location: [34.032, -118.215],
  },
  {
    id: "user006",
    name: "Divyank",
    bio: "Frontend dev with a passion for social good projects and beautiful interfaces.",
    skills: ["React", "TailwindCSS", "JavaScript", "Firebase"],
    avatarUrl: "https://picsum.photos/seed/casey/100/100",
    location: [34.08, -118.2],
  },
  {
    id: "user007",
    name: "Himanshu",
    bio: "Full-stack developer building robust and scalable applications. Focus on sustainable tech.",
    skills: ["Node.js", "React", "Cloud Computing", "PostgreSQL"],
    avatarUrl: "https://picsum.photos/seed/taylor/100/100",
    location: [34.065, -118.27],
  },
];

export const MOCK_TASKS: Task[] = [
  // For Map Page
  {
    id: "task001",
    title: "Community Garden Volunteer",
    description:
      "Help needed with planting and weeding at the local community garden.",
    location: [34.07, -118.26],
    status: "open",
    type: "gig",
    postedBy: "Green Thumbs Org", // Could be an org ID or name
    xpPoints: 50,
  },
  // ... other tasks
];

export const AVAILABLE_LANGUAGES: Language[] = [
  Language.ENGLISH,
  Language.SPANISH,
  Language.FRENCH,
  Language.GERMAN,
  Language.JAPANESE,
  Language.KOREAN,
  Language.CHINESE_SIMPLIFIED,
];

export const OPPORTUNITY_FILTER_CATEGORIES: {
  label: string;
  type: OpportunityType;
}[] = [
  { label: "All", type: "all" },
  { label: "Job", type: "job" },
  { label: "Gig", type: "gig" },
  { label: "Volunteer", type: "volunteer" },
  { label: "Freelance", type: "freelance" },
  { label: "Mentorship", type: "mentorship" },
  { label: "Learning", type: "learning" },
  { label: "Support", type: "support" },
  { label: "Barter", type: "barter" },
  { label: "Collaboration", type: "collaboration" },
];

export const MARKETPLACE_OPPORTUNITIES: OpportunityItem[] = [
  {
    id: "mp001",
    title: "Collaborate on Web App",
    type: "mentorship",
    categoryLabel: "MENTORSHIP",
    description:
      "Early-stage startup idea in sustainable tech needs a co-founder with marketing/business development skills. Looking for a mentor to guide product strategy.",
    tags: ["AI Ethics", "DevOps", "Project Management", "Sustainable Tech"],
    offeredBy: "Jamie Curious", // Name for display
    offeredById: "user004", // UserProfile ID
    icon: "🧑‍🏫",
  },
  {
    id: "mp002",
    title: "Need UX Feedback",
    type: "gig",
    categoryLabel: "GIG",
    description:
      "Need a fresh pair of eyes to proofread and provide suggestions on a technical blog post about AI. Quick turnaround preferred.",
    tags: ["React", "UX Design", "Minimalism", "Node.js", "Technical Writing"],
    offeredBy: "Skyler Resourceful",
    offeredById: "user005",
    icon: "💼",
  },
  {
    id: "mp003",
    title: "Mental Wellness Buddy",
    type: "support",
    categoryLabel: "SUPPORT",
    description:
      "Looking for a frontend developer to collaborate on a new social good project. Stack: React, Tailwind. Focus on mental wellness support.",
    tags: ["Illustration", "AI Ethics", "Data Analysis", "React", "Tailwind"],
    offeredBy: "Casey Creative",
    offeredById: "user006",
    icon: "🤝",
  },
  {
    id: "mp004",
    title: "Full-Stack Developer Role",
    type: "job",
    categoryLabel: "JOB",
    description:
      "Early-stage startup idea in sustainable tech needs a co-founder with marketing/business development expertise. Full-time role with equity options.",
    tags: [
      "Sustainable Tech",
      "Cloud Computing",
      "Full-Stack",
      "Node.js",
      "React",
    ],
    offeredBy: "Taylor Pragmatic",
    offeredById: "user007",
    icon: "💻",
  },
  {
    id: "mp005",
    title: "Barter Skills: Coding for Art",
    type: "barter",
    categoryLabel: "BARTER",
    description:
      "Seeking honest feedback on a new mobile app prototype for user experience and usability. Will offer graphic design services in return.",
    tags: ["Mobile App", "UX Feedback", "Graphic Design", "Prototyping"],
    offeredBy: "Bella Ciao",
    offeredById: "user002",
    icon: "🎨",
  },
  {
    id: "mp006",
    title: "Graphic Design for Blog",
    type: "freelance",
    categoryLabel: "FREELANCE",
    description:
      "I'm a backend developer (Node.js, Postgres) looking to trade coding services for digital art or illustrations for my tech blog. Short-term project.",
    tags: ["Graphic Design", "Blog Graphics", "Illustration", "Freelance"],
    offeredBy: "Alex Ryder", // Current user can also post
    offeredById: "user123",
    icon: "✍️",
  },
  {
    id: "mp007",
    title: "Learn Python for Data Science",
    type: "learning",
    categoryLabel: "LEARNING",
    description:
      "Join our study group for learning Python specifically for data science applications. Weekly sessions, beginner-friendly.",
    tags: ["Python", "Data Science", "Machine Learning", "Study Group"],
    offeredBy: "Data Enthusiasts Club", // Could be an org, or a user representing it
    offeredById: "user003", // Carlos Duty is organizing
    icon: "📚",
  },
  {
    id: "mp008",
    title: "Volunteer for Local Shelter",
    type: "volunteer",
    categoryLabel: "VOLUNTEER",
    description:
      "Animal shelter needs volunteers for weekend shifts. Duties include animal care, cleaning, and assisting visitors.",
    tags: ["Animal Welfare", "Community", "Volunteering"],
    offeredBy: "Paws & Claws Shelter",
    offeredById: "user004", // Jamie is coordinating volunteers
    icon: "💖",
  },
  {
    id: "mp009",
    title: "Open Source Project Contributor",
    type: "collaboration",
    categoryLabel: "COLLABORATION",
    description:
      "Looking for developers to contribute to an open-source project focused on accessibility tools for the web. All skill levels welcome.",
    tags: ["Open Source", "Accessibility", "JavaScript", "Collaboration"],
    offeredBy: "A11y Collective",
    offeredById: "user005", // Skyler represents the collective
    icon: "🧑‍💻",
  },
];
