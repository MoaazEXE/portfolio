export interface SkillGroup {
  name: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "Dart", "SQL / MySQL"],
  },
  {
    name: "Frameworks & Backend",
    skills: ["Next.js", "Flutter", "FastAPI", "Supabase", "Sanity CMS", "PostgreSQL"],
  },
  {
    name: "Tools",
    skills: [
      "VS Code",
      "Visual Studio 2022",
      "Android Studio",
      "Google Colab",
      "Git",
      "Claude Code",
      "Firebase",
      "Antigravity",
      "Jupyter Notebook",
      "Oracle APEX",
      "Figma",
    ],
  },
  {
    name: "Core Competencies",
    skills: [
      "Full-Stack Development",
      "Mobile App Development",
      "Data Structures",
      "Problem Solving",
      "Team Leadership",
    ],
  },
];
