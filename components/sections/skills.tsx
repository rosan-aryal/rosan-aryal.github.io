import { skills, skillCategories } from "@/data/skills";
import type { SkillCategory } from "@/types";

export default function Skills() {
  const categories = Object.keys(skillCategories) as SkillCategory[];

  const getProgressBar = (level: number): string => {
    const filled = Math.round(level / 5);
    const empty = 20 - filled;
    return "\u2588".repeat(filled) + "\u2591".repeat(empty);
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {categories.map((category) => (
          <div key={category} className="skill-category">
            <div className="terminal-header">
              {skillCategories[category]}_MODULES.SYS
            </div>
            <div className="skill-list">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <span className="skill-progress">
                        {getProgressBar(skill.level)}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
