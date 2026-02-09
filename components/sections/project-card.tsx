"use client";

import { useState } from "react";
import WindowFrame from "@/components/ui/window-frame";
import ProjectDialogContent from "@/components/sections/project-dialog-content";
import ProjectImage from "@/components/sections/project-image";
import type { Project } from "@/types";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <WindowFrame
      title={project.codename}
      wrapperClassName="project-card"
      dialogContent={<ProjectDialogContent project={project} />}
      open={open}
      onOpenChange={setOpen}
    >
      <ProjectImage
        src={project.image}
        alt={project.imageAlt}
        title={project.title}
        className="object-contain"
      />
      <div className="project-info">
        <div className="project-meta">
          <span className="project-tag">
            {project.tags.map((tag) => `#${tag}`).join(" ")}
          </span>
          <span className="project-status" data-status={project.status}>
            {project.status.replace("_", " ")}
          </span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-excerpt line-clamp-2">{project.excerpt}</p>
        <div className="project-actions">
          <button
            className="btn-retro btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
          >
            VIEW DETAILS
          </button>
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-retro btn-sm"
              onClick={(e) => e.stopPropagation()}
            >
              LIVE SITE
            </Link>
          )}
        </div>
      </div>
    </WindowFrame>
  );
}
