export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  status: "shipped" | "in progress";
  year: string;
}

export const projects: Project[] = [
  {
    id: "digital-umisa",
    title: "Digital UMISA",
    role: "Tech Lead & Developer",
    year: "2026",
    status: "shipped",
    description:
      "Architected and built the official umisa.net platform from scratch. Led a team of developers and a designer while actively coding the full-stack with Next.js, Sanity CMS for dynamic content, and Supabase for the database. After launching v1, still developing new features and maintaining the platform post-launch.",
    tags: ["Next.js", "Sanity CMS", "Supabase", "TypeScript", "Tailwind"],
  },
  {
    id: "settle",
    title: "Settle",
    role: "Solo Full-Stack Developer",
    year: "2026",
    status: "shipped",
    description:
      "Full-stack impulse-spending tracker built solo for the Shortcut Asia 2026 mini hackathon. Users log items they want to buy, set a cooling period to think it over, then decide to skip or buy with a clear head. Tracks cumulative savings, streaks, and milestones. Features group expense splitting, multi-currency support, and a time-cost lens that converts any price into hours of your life.",
    tags: ["Next.js", "Supabase", "Prisma", "TypeScript", "Tailwind"],
  },
  {
    id: "trinity-fitness",
    title: "Trinity Fitness App",
    role: "Front-End Mobile Developer (Contributor)",
    year: "2025",
    status: "in progress",
    description:
      "Contributed to an ongoing dual-interface fitness platform project, responsible for building the coach-facing Flutter mobile app. Worked with senior developers on integrating the mobile client with a central FastAPI and PostgreSQL backend for seamless data sync between coaches and clients.",
    tags: ["Flutter", "Dart", "FastAPI", "PostgreSQL"],
  },
  {
    id: "letterboxd-roaster",
    title: "Letterboxd Roaster",
    role: "Team Lead & Lead ML Engineer",
    year: "2026",
    status: "shipped",
    description:
      "Led the team and owned the core recommendation engine for a web app that analyzes your film taste, recommends new movies, and roasts you for them. The engine is a two-stage hybrid recommender: a content-based pass uses cosine similarity over movie feature vectors to pull a candidate shortlist, then an SVD collaborative-filtering model (trained with scikit-surprise) re-ranks those candidates by the predicted rating for a chosen viewer persona. The trained models are served from a FastAPI backend, the Gemini API generates a witty persona-driven roast per recommendation, and TMDB supplies poster art — all surfaced through a React + Vite frontend.",
    tags: ["Python", "scikit-surprise", "FastAPI", "Gemini API", "React"],
  },
  {
    id: "bytelift",
    title: "ByteLift",
    role: "Mobile App Developer",
    year: "2025",
    status: "shipped",
    description:
      "Android fitness app for workout planning, diet tracking, and progress monitoring. Implemented Firebase Authentication and user session management for the team project.",
    tags: ["Java", "Android Studio", "Firebase", "MVVM"],
  },
  {
    id: "greenum",
    title: "GreenUM",
    role: "Project Lead",
    year: "2025",
    status: "shipped",
    description:
      "Led an 8-person team to build a university eco-events platform for Universiti Malaya. Features RBAC with admin and member roles, event management, and a CRUD dashboard.",
    tags: ["React", "Supabase", "RBAC", "Project Management"],
  },
  {
    id: "kh-shawarma-db",
    title: "KH Shawarma DB System",
    role: "Database Developer",
    year: "2025",
    status: "shipped",
    description:
      "Designed and implemented a full relational database system for a campus food outlet. Normalized to 3NF, built ERD, wrote DDL/DML queries, and deployed a management dashboard in Oracle APEX.",
    tags: ["Oracle APEX", "SQL", "Database Design", "Normalization"],
  },
  {
    id: "fop-ledger",
    title: "FOP Ledger System",
    role: "Backend Developer",
    year: "2024",
    status: "shipped",
    description:
      "Personal finance system with user login and registration, hashed password security, and a Java interface connected to MySQL via JDBC. Built modularly with a team.",
    tags: ["Java", "MySQL", "JDBC", "Security"],
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    role: "Designer & Developer",
    year: "2026",
    status: "in progress",
    description:
      "Personal portfolio built with Astro and Tailwind. Dark techy aesthetic with Space Mono and Syne fonts. Deployed on Vercel.",
    tags: ["Astro", "Tailwind", "TypeScript", "Vercel"],
  },
];
