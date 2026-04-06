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
    role: "Tech Lead",
    year: "2026",
    status: "shipped",
    description:
      "Architected and built the official umisa.net platform from scratch. Led a team of developers and a designer. Full-stack with Next.js, Sanity CMS for dynamic content, and Supabase for the database.",
    tags: ["Next.js", "Sanity CMS", "Supabase", "TypeScript", "Tailwind"],
  },
  {
    id: "trinity-fitness",
    title: "Trinity Fitness App",
    role: "Front-End Mobile Developer",
    year: "2025",
    status: "in progress",
    description:
      "Building the coach-facing mobile app for a dual-interface fitness platform. Integrated with a central FastAPI and PostgreSQL backend for seamless data sync between coaches and clients.",
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
    id: "umisa-mobile",
    title: "UMISA Mobile App",
    role: "Developer",
    year: "2024",
    status: "shipped",
    description:
      "Mobile platform for the UM International Students Association, built in Android Studio. Served as a hub for events, announcements, and student services.",
    tags: ["Android Studio", "Java", "Firebase"],
  },
  {
    id: "renteasy",
    title: "RentEasy",
    role: "Co-Founder & Developer",
    year: "2025",
    status: "in progress",
    description:
      "SaaS rental property management tool targeting Malaysian small landlords. Lean v1 focused on tenant tracking, rent status, WhatsApp reminders, and tenancy alerts.",
    tags: ["Next.js", "SaaS", "WhatsApp API", "Malaysia"],
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
