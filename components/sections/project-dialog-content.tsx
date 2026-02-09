import ProjectImage from "@/components/sections/project-image";
import type { Project } from "@/types";

export default function ProjectDialogContent({
  project,
}: {
  project: Project;
}) {
  return (
    <>
      <ProjectImage
        src={project.image}
        alt={project.imageAlt}
        title={project.title}
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
        <p className="project-year">{project.year}</p>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-actions">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-retro btn-sm"
            >
              LIVE SITE
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-retro btn-sm"
            >
              GITHUB
            </a>
          )}
        </div>
      </div>
    </>
  );
}
