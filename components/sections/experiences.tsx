import { experiences } from "@/data/experiences";

export default function Experiences() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="terminal-header">{exp.codename}.LOG</div>
            <div className="experience-card-body">
              <div className="experience-meta">
                <span className="experience-duration">{exp.duration}</span>
                <span
                  className={`experience-status ${exp.status === "COMPLETED" ? "status-completed" : "status-active"}`}
                >
                  [{exp.status}]
                </span>
              </div>
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-company">@ {exp.company}</p>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-stack">
                {exp.techStack.map((tech) => (
                  <span key={tech} className="experience-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
