export interface SkillGroup {
  name: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "Dart", "SQL", "HTML", "CSS"],
  },
  {
    name: "Frontend & Mobile",
    skills: ["React.js", "Next.js", "Angular", "Flutter", "Tailwind CSS", "Android (Java)"],
  },
  {
    name: "Backend & CMS",
    skills: ["Node.js", "Express", "FastAPI", "Supabase", "Firebase", "Sanity CMS", "Prisma"],
  },
  {
    name: "Data Engineering",
    skills: ["Databricks", "Cube.js", "PostgreSQL", "MySQL", "MongoDB", "Oracle APEX"],
  },
  {
    name: "Tools",
    skills: [
      "Git",
      "VS Code",
      "Claude Code",
      "Antigravity",
      "Android Studio",
      "Jupyter Notebook",
      "Figma",
      "Vercel",
    ],
  },
  {
    name: "Core Competencies",
    skills: [
      "Full-Stack Development",
      "Data Pipelines",
      "Mobile App Development",
      "Database Design",
      "Data Structures",
      "Team Leadership",
    ],
  },
];
