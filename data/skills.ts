import type { Skill, SkillCategory } from "@/types";

export const skills: Skill[] = [
  { name: "HTML5", level: 95, category: "languages" },
  { name: "CSS", level: 90, category: "languages" },
  { name: "JavaScript", level: 95, category: "languages" },
  { name: "TypeScript", level: 90, category: "languages" },
  { name: "Python", level: 75, category: "languages" },
  { name: "Java", level: 75, category: "languages" },

  { name: "React", level: 95, category: "frameworks" },
  { name: "Next.js", level: 90, category: "frameworks" },
  { name: "TanStack Start", level: 85, category: "frameworks" },
  { name: "Tailwind CSS", level: 90, category: "frameworks" },

  { name: "Node.js", level: 90, category: "backend" },
  { name: "tRPC", level: 85, category: "backend" },
  { name: "Hono", level: 80, category: "backend" },
  { name: "Express", level: 85, category: "backend" },
  { name: "Docker", level: 75, category: "backend" },

  { name: "PostgreSQL", level: 85, category: "database" },
  { name: "MongoDB", level: 80, category: "database" },
  { name: "Drizzle", level: 85, category: "database" },
  { name: "Prisma", level: 80, category: "database" },

  { name: "React Native", level: 80, category: "mobile" },
  { name: "Expo", level: 80, category: "mobile" },
];

export const skillCategories: Record<SkillCategory, string> = {
  languages: "CORE",
  frameworks: "FRAMEWORKS",
  backend: "BACK-END",
  database: "DATABASE",
  mobile: "MOBILE",
};
