export interface Experience {
  date: string;
  role: string;
  org: string;
  desc: string;
}

export const experiences: Experience[] = [
  {
    date: "Feb 2026 – Present",
    role: "Tech Lead & Developer",
    org: "UMISA — Universiti Malaya",
    desc: "Leading the technical direction of Digital UMISA (umisa.net). Architected the Sanity CMS + Supabase integration, managed sprint delivery, and led a team of developers and a designer — while actively writing code. After launching v1, continuing to develop new features and maintaining the platform post-launch.",
  },
  {
    date: "2025 – Present",
    role: "Front-End Mobile Developer",
    org: "Trinity Fitness",
    desc: "Contributed to an ongoing fitness platform project, responsible for building the coach-facing Flutter mobile app. Worked with senior developers on integrating the mobile client with a FastAPI + PostgreSQL backend for seamless data sync between coaches and clients.",
  },
  {
    date: "2024 – Present",
    role: "Bachelor in Software Engineering",
    org: "Universiti Malaya",
    desc: "CGPA 3.00++. Relevant courses: Mobile App Development, Database, Project Management, Machine Learning, Data Structures, Fundamentals of Programming.",
  },
  {
    date: "Graduated 2023",
    role: "High School Diploma",
    org: "Al Uloom Al Ahriea High School",
    desc: "GPA: 4.0/4.0",
  },
];
