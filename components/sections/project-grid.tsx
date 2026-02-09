"use client";

import { useState, useMemo } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/sections/project-card";
import ProjectFilter from "@/components/sections/project-filter";

const FILTERS = [
  "ALL",
  "FULLSTACK",
  "FRONTEND",
  "WEB_DESIGN",
  "EDUCATIONAL",
  "DEV_TOOL",
  "AI",
  "UI_UX",
  "INACTIVE",
];

export default function ProjectGrid() {
  const [active, setActive] = useState("ALL");

  const filtered = useMemo(() => {
    if (active === "ALL") return projects;
    return projects.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <>
      <ProjectFilter filters={FILTERS} active={active} onChange={setActive} />
      <div className="portfolio-grid">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {filtered.length === 0 && (
          <div className="filter-empty">
            <span className="prompt">{">"}</span> No projects found for tag{" "}
            <span style={{ color: "var(--accent-retro)" }}>#{active}</span>
          </div>
        )}
      </div>
    </>
  );
}
