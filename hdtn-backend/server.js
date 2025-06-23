const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Firebase Admin
const serviceAccount = require("./hdtn-ae8e8-firebase-adminsdk-fbsvc-038349ead5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const tasksCollection = db.collection("tasks");

// Static task data
const tasks = [
  {
    id: 'mp001',
    title: 'Collaborate on Web App',
    type: 'mentorship',
    categoryLabel: 'MENTORSHIP',
    description: 'Early-stage startup idea in sustainable tech needs a co-founder with marketing/business development skills. Looking for a mentor to guide product strategy.',
    tags: ['AI Ethics', 'DevOps', 'Project Management', 'Sustainable Tech'],
    offeredBy: 'Jamie Curious', // Name for display
    offeredById: 'user004', // UserProfile ID
    icon: '🧑‍🏫',
  },
  {
    id: 'mp002',
    title: 'Need UX Feedback',
    type: 'gig',
    categoryLabel: 'GIG',
    description: 'Need a fresh pair of eyes to proofread and provide suggestions on a technical blog post about AI. Quick turnaround preferred.',
    tags: ['React', 'UX Design', 'Minimalism', 'Node.js', 'Technical Writing'],
    offeredBy: 'Skyler Resourceful',
    offeredById: 'user005',
    icon: '💼',
  },
  {
    id: 'mp003',
    title: 'Mental Wellness Buddy',
    type: 'support',
    categoryLabel: 'SUPPORT',
    description: 'Looking for a frontend developer to collaborate on a new social good project. Stack: React, Tailwind. Focus on mental wellness support.',
    tags: ['Illustration', 'AI Ethics', 'Data Analysis', 'React', 'Tailwind'],
    offeredBy: 'Casey Creative',
    offeredById: 'user006',
    icon: '🤝',
  },
  {
    id: 'mp004',
    title: 'Full-Stack Developer Role',
    type: 'job',
    categoryLabel: 'JOB',
    description: 'Early-stage startup idea in sustainable tech needs a co-founder with marketing/business development expertise. Full-time role with equity options.',
    tags: ['Sustainable Tech', 'Cloud Computing', 'Full-Stack', 'Node.js', 'React'],
    offeredBy: 'Taylor Pragmatic',
    offeredById: 'user007',
    icon: '💻',
  },
  {
    id: 'mp005',
    title: 'Barter Skills: Coding for Art',
    type: 'barter',
    categoryLabel: 'BARTER',
    description: 'Seeking honest feedback on a new mobile app prototype for user experience and usability. Will offer graphic design services in return.',
    tags: ['Mobile App', 'UX Feedback', 'Graphic Design', 'Prototyping'],
    offeredBy: 'Bella Ciao',
    offeredById: 'user002',
    icon: '🎨',
  },
  {
    id: 'mp006',
    title: 'Graphic Design for Blog',
    type: 'freelance',
    categoryLabel: 'FREELANCE',
    description: 'I\'m a backend developer (Node.js, Postgres) looking to trade coding services for digital art or illustrations for my tech blog. Short-term project.',
    tags: ['Graphic Design', 'Blog Graphics', 'Illustration', 'Freelance'],
    offeredBy: 'Alex Ryder', // Current user can also post
    offeredById: 'user123',
    icon: '✍️',
  },
   {
    id: 'mp007',
    title: 'Learn Python for Data Science',
    type: 'learning',
    categoryLabel: 'LEARNING',
    description: 'Join our study group for learning Python specifically for data science applications. Weekly sessions, beginner-friendly.',
    tags: ['Python', 'Data Science', 'Machine Learning', 'Study Group'],
    offeredBy: 'Data Enthusiasts Club', // Could be an org, or a user representing it
    offeredById: 'user003', // Carlos Duty is organizing
    icon: '📚',
  },
  {
    id: 'mp008',
    title: 'Volunteer for Local Shelter',
    type: 'volunteer',
    categoryLabel: 'VOLUNTEER',
    description: 'Animal shelter needs volunteers for weekend shifts. Duties include animal care, cleaning, and assisting visitors.',
    tags: ['Animal Welfare', 'Community', 'Volunteering'],
    offeredBy: 'Paws & Claws Shelter',
    offeredById: 'user004', // Jamie is coordinating volunteers
    icon: '💖',
  },
  {
    id: 'mp009',
    title: 'Open Source Project Contributor',
    type: 'collaboration',
    categoryLabel: 'COLLABORATION',
    description: 'Looking for developers to contribute to an open-source project focused on accessibility tools for the web. All skill levels welcome.',
    tags: ['Open Source', 'Accessibility', 'JavaScript', 'Collaboration'],
    offeredBy: 'A11y Collective',
    offeredById: 'user005', // Skyler represents the collective
    icon: '🧑‍💻',
  }
];

// // Route to add all tasks to Firebase
app.get("/upload-tasks", async (req, res) => {
  try {
    const batch = db.batch();

    tasks.forEach((task) => {
      const docRef = tasksCollection.doc(task.id); // use ID as doc ID
      batch.set(docRef, task);
    });

    await batch.commit();
    res.json({ message: "Tasks uploaded to Firebase successfully." });
  } catch (error) {
    console.error("Error uploading tasks:", error);
    res.status(500).json({ error: "Failed to upload tasks." });
  }
});

// Route to retrieve all tasks from Firebase
app.get("/get-tasks", async (req, res) => {
  try {
    const snapshot = await tasksCollection.get();
    const allTasks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(allTasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Failed to fetch tasks." });
  }
});

// Root check
app.get("/", (req, res) => {
  console.log("api unding");
  res.send("Root route hit");
});

// Start server
app.listen(3000, () => {
  console.log("server is running on port", 3000);
});
