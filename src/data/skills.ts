export interface SkillGroup {
  name: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    skills: ["Next.js / React", "Flutter / Dart", "Tailwind CSS", "TypeScript", "Astro"],
  },
  {
    name: "Backend & DB",
    skills: ["FastAPI", "Supabase", "Firebase", "PostgreSQL", "MySQL", "Sanity CMS"],
  },
  {
    name: "Languages",
    skills: ["Java", "Python", "JavaScript", "Dart", "SQL"],
  },
  {
    name: "Tools",
    skills: ["Git", "Android Studio", "VS Code", "Oracle APEX", "Figma", "Claude Code"],
  },
];
