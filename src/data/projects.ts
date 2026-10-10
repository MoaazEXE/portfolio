export type ProjectStatus = "shipped" | "in progress";

export interface ProjectLink {
  label: string;
  href: string;
  /** Primary links are highlighted; secondary links (e.g. source code) are muted. */
  variant?: "primary" | "secondary";
}

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  year: string;
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: "digital-umisa",
    title: "Digital UMISA",
    role: "Tech Lead → Head of Department",
    year: "2026",
    status: "shipped",
    description:
      "Architected and built the official umisa.net platform from scratch. Led a team of developers and a designer while actively coding the full stack with Next.js, Sanity CMS for dynamic content, and Supabase for the database. Still shipping new features and maintaining the platform after the v1 launch.",
    tags: ["Next.js", "Sanity CMS", "Supabase", "TypeScript", "Tailwind"],
    links: [{ label: "Visit umisa.net", href: "https://umisa.net" }],
  },
  {
    id: "settle",
    title: "Settle",
    role: "Solo Full-Stack Developer",
    year: "2026",
    status: "shipped",
    description:
      "Impulse-spending tracker built solo for the Shortcut Asia 2026 mini hackathon. Log items you want, set a cooling period, then skip or buy with a clear head. Tracks savings, streaks and milestones, with group expense splitting, multi-currency support, and a time-cost lens that converts any price into hours of your life.",
    tags: ["Next.js", "Supabase", "Prisma", "TypeScript", "Tailwind"],
    links: [
      { label: "Visit Settle", href: "https://settle-moexe.vercel.app/" },
      { label: "Source", href: "https://github.com/MoaazEXE/Settle", variant: "secondary" },
    ],
  },
  {
    id: "letterboxd-roaster",
    title: "Letterboxd Roaster",
    role: "Team Lead & Lead ML Engineer",
    year: "2026",
    status: "shipped",
    description:
      "Led the team and owned the recommendation engine for a web app that analyses your film taste, recommends new movies, and roasts you for them. A two-stage hybrid recommender: cosine similarity over movie feature vectors builds a shortlist, then an SVD collaborative-filtering model (scikit-surprise) re-ranks it per viewer persona. Served from FastAPI, with Gemini-generated roasts and TMDB posters in a React + Vite frontend.",
    tags: ["Python", "scikit-surprise", "FastAPI", "Gemini API", "React"],
    links: [
      { label: "Frontend source", href: "https://github.com/MoaazEXE/letterboxd-roaster", variant: "secondary" },
      { label: "Backend source", href: "https://github.com/MoaazEXE/letterboxd-roaster-backend", variant: "secondary" },
    ],
  },
  {
    id: "trinity-fitness",
    title: "Trinity Fitness App",
    role: "Front-End Mobile Developer",
    year: "2025",
    status: "in progress",
    description:
      "Building the coach-facing Flutter app for a dual-interface fitness platform, integrating the mobile client with a central FastAPI and PostgreSQL backend for seamless data sync between coaches and clients.",
    tags: ["Flutter", "Dart", "FastAPI", "PostgreSQL"],
  },
  {
    id: "eco-travel",
    title: "Eco-Friendly Travel Planner",
    role: "Full-Stack Developer (Team)",
    year: "2025",
    status: "shipped",
    description:
      "MERN travel planner built for a web programming course. Browse eco-friendly transport and stays, save favourites, generate AI-assisted itineraries, check live weather, and calculate a trip's carbon footprint. Session auth with bcrypt, an Express 5 REST API on MongoDB, and a React + Vite frontend.",
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "Bootstrap"],
    links: [{ label: "Live demo", href: "https://eco-friendly-travel-planner.vercel.app/" }],
  },
  {
    id: "greenum",
    title: "GreenUM",
    role: "Project Lead",
    year: "2025",
    status: "shipped",
    description:
      "Led an 8-person team to build a university eco-events platform for Universiti Malaya, with role-based access for admins and members, event management, and a CRUD dashboard.",
    tags: ["React", "Supabase", "RBAC", "Project Management"],
  },
  {
    id: "bytelift",
    title: "ByteLift",
    role: "Mobile App Developer",
    year: "2025",
    status: "shipped",
    description:
      "Android fitness app for workout planning, diet tracking and progress monitoring. Implemented Firebase Authentication and user session management for the team project.",
    tags: ["Java", "Android Studio", "Firebase", "MVVM"],
    links: [{ label: "Source", href: "https://github.com/MoaazEXE/MAD", variant: "secondary" }],
  },
  {
    id: "kh-shawarma-db",
    title: "KH Shawarma DB System",
    role: "Database Developer",
    year: "2025",
    status: "shipped",
    description:
      "Designed a relational database system for a campus food outlet: ERD, normalisation to 3NF, DDL/DML queries, and a management dashboard deployed in Oracle APEX.",
    tags: ["Oracle APEX", "SQL", "Database Design"],
  },
  {
    id: "fop-ledger",
    title: "FOP Ledger System",
    role: "Backend Developer",
    year: "2024",
    status: "shipped",
    description:
      "Personal finance system with registration, login and hashed-password security, built as a modular Java application connected to MySQL via JDBC.",
    tags: ["Java", "MySQL", "JDBC", "Security"],
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    role: "Designer & Developer",
    year: "2026",
    status: "shipped",
    description:
      "The site you're on. Built with Astro and Tailwind CSS, fully static and responsive, with a dark techy aesthetic in Space Mono and Syne. Deployed on Vercel.",
    tags: ["Astro", "Tailwind", "TypeScript", "Vercel"],
    links: [{ label: "Source", href: "https://github.com/MoaazEXE/portfolio", variant: "secondary" }],
  },
];
