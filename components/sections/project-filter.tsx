"use client";

interface ProjectFilterProps {
  filters: string[];
  active: string;
  onChange: (filter: string) => void;
}

export default function ProjectFilter({
  filters,
  active,
  onChange,
}: ProjectFilterProps) {
  return (
    <div className="project-filter">
      <span className="filter-prompt">{">"} filter --tag=</span>
      <div className="filter-options">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn${active === filter ? " filter-active" : ""}`}
            onClick={() => onChange(filter)}
          >
            {filter === "ALL" ? "*" : filter}
          </button>
        ))}
      </div>
    </div>
  );
}
