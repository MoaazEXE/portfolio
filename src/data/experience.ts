export interface Experience {
  date: string;
  role: string;
  org: string;
  desc: string;
}

export const experiences: Experience[] = [
  {
    date: "2024 – Present",
    role: "Tech Lead",
    org: "UMISA — Universiti Malaya",
    desc: "Leading the technical direction of Digital UMISA (umisa.net). Architected the Sanity CMS + Supabase integration, managed sprint delivery, and led a team of developers and a designer.",
  },
  {
    date: "2025 – Present",
    role: "Front-End Mobile Developer",
    org: "Trinity Fitness",
    desc: "Building the coach-facing Flutter mobile app for a dual-interface fitness platform, integrated with a FastAPI + PostgreSQL backend.",
  },
  {
    date: "2025 – Present",
    role: "Co-Founder & Developer",
    org: "RentEasy (SaaS)",
    desc: "Building a lean SaaS rental management tool for Malaysian small landlords with my brother. Handling product, architecture, and front-end.",
  },
  {
    date: "2024 – Present",
    role: "Bachelor in Computer Science",
    org: "Universiti Malaya",
    desc: "CGPA: 3.0/4.0. Relevant courses: Mobile App Development, Database, Project Management, Machine Learning, Data Structures, Fundamentals of Programming.",
  },
  {
    date: "Graduated 2023",
    role: "High School Diploma",
    org: "Al Uloom Al Ahriea High School",
    desc: "GPA: 4.0/4.0",
  },
];
