import type { Skill, SkillCategory } from "@/types";

export const skills: Skill[] = [
  { name: "React", level: 95, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "TanStack Start", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  { name: "tRPC", level: 85, category: "backend" },
  { name: "Hono", level: 80, category: "backend" },
  { name: "Express", level: 85, category: "backend" },
  { name: "Java", level: 75, category: "backend" },

  { name: "React Native", level: 80, category: "mobile" },
];

export const skillCategories: Record<SkillCategory, string> = {
  frontend: "FRONT-END",
  backend: "BACK-END",
  mobile: "MOBILE",
};
