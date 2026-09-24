// Edit this file with your own information.
import { ElementType } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
export type ProjectLink = { label: string; url: string; icon?: ElementType };

export const profile = {
  name: "Darah Via Moscoso",
  role: "Computer Science Graduate & Software Developer",
  location: "Iloilo, Philippines",
  tagline:
    "",
  bio: "Graduated cum laude with a Bachelor of Science in Computer Science from the University of the Philippines Visayas. I’ve led development on government and academic projects, worked as a peer tutor for Calculus and Data Structures, and built projects across web, mobile, and hardware. I enjoy turning ideas into practical, well-designed solutions and continuously learning new technologies along the way.",
  email: "dviamoscoso@gmail.com",
  resumeUrl: "/projects/moscosoD_resume.pdf",
  // Replace this with a real photo. Drop the file into /public and update
  // the path below, e.g. "/photo.jpg". Leave empty to keep the placeholder.
  photoUrl: "/projects/moscosoD_photo.jpg",
  links: [
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/darah-via-moscoso-a74b20416",
    },
    { label: "GitHub", url: "https://github.com/viamosc" },
  ],
};

export const education = [
  {
    period: "2022 \u2014 2026",
    school: "University of the Philippines Visayas",
    detail: "BS Computer Science, cum laude",
  },
  {
    period: "2020 \u2014 2022",
    school: "Colegio San Agustin \u2014 Bacolod",
    detail: "Valedictorian",
  },
];

export const experience = [
  {
    period: "Jun 2025 \u2014 Jul 2025",
    role: "IT Department Intern",
    org: "Department of Education, Cadiz City",
  },
  {
    period: "2023 \u2014 Present",
    role: "Peer Tutor, Math 53 / Math 50 / CMSC 123",
    org: "UP Visayas Teaching and Learning Resource Center",
  },
];

export const awards = [
  {
    period: "2026",
    title: "3rd Place, Quantum Computing and Cybersecurity Hackathon",
    org: "Quantum Computing Society of the Philippines",
  },
  {
    period: "2026",
    title: "1st Place, Build-a-Block Hackathon",
    org: "Miagao Valley",
  },
];

// Your developed apps go here. For each one, add links that make sense
// (GitHub repo, live demo, Play Store, App Store) \u2014 the "links" array
// renders as small text links under the description. Leave it empty and
// nothing shows, so you can fill these in as you get public links.
//
// "preview" is optional markdown shown above the image in the preview
// panel \u2014 use it for anything the short description doesn't fit:
// a longer writeup, a bullet list of features, a code snippet. Leave it
// as "" to show just the image (or placeholder).
//
// "image" is a screenshot shown in the preview panel on the right when
// this project is hovered. Drop an image into /public/projects/ and point
// to it, e.g. "/projects/sungka.png". Leave it empty for a plain
// placeholder.
export const projects: {
  period: string;
  title: string;
  roleLabel: string;
  description: string;
  tags: string[];
  notes: string;
  links: ProjectLink[];
  preview: string;
  images: string[];
  video?: string;
}[] = [
    {
    period: "Aug 2026",
    title: "Miagao Pickleball Club Queueing System",
    roleLabel: "Lead Full-Stack Developer",
    description:
      "Built and deployed an end-to-end queueing dashboard for Miagao Pickleball Club in Iloilo to streamline match coordination, implementing automated court timers, team request flows, and responsive UI for real-time club operations.",
    tags: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    notes: "",
    links: [
  { label: "GitHub", url: "https://github.com/viamosc/MPC.git", icon: FaGithub },
  { label: "Live", url: "https://mpc-rouge.vercel.app/", icon: FiExternalLink },
    ],
    preview: "",
    images: ["/projects/mpc-1.png", "/projects/mpc-2.png"],
  },

    {
    period: "Aug 2026",
    title: "Bloom Daily",
    roleLabel: "Lead Full-Stack Developer",
    description:
      "Built a full-stack daily productivity app featuring journaling, custom routines, task tracking, and focused work sessions, powered by Next.js Server Actions, PostgreSQL, Supabase Auth, and a responsive timetable view with habit streaks.",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Server Actions",
    ],
    notes: "",
    links: [
  { label: "GitHub", url: "https://github.com/viamosc/bloom-daily.git", icon: FaGithub },
  { label: "Live", url: "https://bloom-daily-mu.vercel.app/", icon: FiExternalLink },
    ],
    preview: "",
    images: ["/projects/bd-1.png", "/projects/bd-2.png"],
  },

  {
    period: "May 2026",
    title: "Automated Course Timetabling Using UniTime",
    roleLabel: "Special Problem Researcher",
    description:
      "Configured UniTime's constraint solver to automate course scheduling for three degree programs, achieving complete class assignment with no curriculum conflicts.",
    tags: ["Java", "UniTime", "Constraint Programming"],
    notes: "",
    links: [],
    preview: "asdfasdf",
    images: [],
  },
  {
    period: "Aug 2025",
    title: "DepEd School-Based Feeding Program Camera",
    roleLabel: "Lead Developer",
    description:
      "A Flutter camera app for Cadiz City's DepEd feeding program, adding automatic photo overlays (school info, timestamps, logos) and deployed city-wide across 50+ schools.",
    tags: ["Dart", "Flutter", "Provider"],
    notes: "",
    links: [
  { label: "GitHub", url: "https://github.com/viamosc/sungka", icon: FaGithub },
  { label: "Install App", url: "https://drive.google.com/file/d/1BE_grr101IyXAV6umzuZVFsLDAncvXMA/view?usp=drive_link", icon: FiDownload },
    ],
    preview: "",
    images: ["/projects/okd-1.jpg", "/projects/okd-2.jpg"],
  },
  {
    period: "Dec 2025",
    title: "ESP32 Sungka Game",
    roleLabel: "Hardware-Software Developer",
    description:
      "A digital version of the Filipino board game Sungka on an ESP32, with an I2C I/O expander for input and a TFT display for real-time game state.",
    tags: ["C++", "ESP32", "I2C", "SPI"],
    notes: "",
    links: [],
    preview: "",
    images: [""],
  },
  {
    period: "May 2025",
    title: "PixelPaw Virtual Pet Simulator",
    roleLabel: "Full-Stack Mobile Developer",
    description:
      "A Flutter virtual pet game \u2014 built mini-games (Tic-Tac-Toe, Flappy Bird), pet lifecycle states, and local data storage.",
    tags: ["Dart", "Flutter", "Firebase"],
    notes: "The GitHub repository used is under my school GitHub account: @darahvia",
    links: [
  { label: "GitHub", url: "https://github.com/viamosc/MPC.git", icon: FaGithub },
  { label: "Install App", url: "https://drive.google.com/file/d/1mBmcmaoFbP5-2GZwSjlVR_IZeL4Bfsde/view?usp=drive_link", icon: FiDownload },
    ],
    preview: "",
    images: [""],
  },
  {
    period: "Dec 2023",
    title: "Calendar App \u2014 Automated Scheduling System",
    roleLabel: "Lead Developer",
    description:
      "A desktop calendar app that auto-schedules fixed and flexible tasks with a Round-Robin algorithm, using TreeMap and Queue structures for 15-minute time slots.",
    tags: ["Java", "Swing", "Data Structures"],
    notes: "",
    links: [],
    preview: "",
    images: [""],
  },
  {
    period: "Dec 2024",
    title: "Multitape Turing Machine Simulator",
    roleLabel: "Lead Developer",
    description:
      "A Python-based multitape Turing Machine simulator that models tape operations, state transitions, and machine execution through a modular architecture.",
    tags: ["Python", "OOP", "Automata Theory"],
    notes: "The GitHub repository used is under my school GitHub account: @darahvia",
    links: [
  { label: "GitHub", url: "https://github.com/viamosc/MultitapeTM", icon: FaGithub },
  { label: "Live", url: "https://mpc-rouge.vercel.app/", icon: FiExternalLink },
    ],
    preview: "",
    images: [""],
  },
];
