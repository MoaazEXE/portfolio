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
    id: "bytelift",
    title: "ByteLift",
    role: "Firebase Auth Developer",
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
    year: "2025",
    status: "in progress",
    description:
      "Personal portfolio built with Astro and Tailwind. Dark techy aesthetic with Space Mono and Syne fonts. Deployed on Vercel.",
    tags: ["Astro", "Tailwind", "TypeScript", "Vercel"],
  },
];
