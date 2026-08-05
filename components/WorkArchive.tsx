"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/lib/projects";

const ALL = "All";

export function WorkArchive({ projects }: { projects: Project[] }) {
  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects],
  );
  const [active, setActive] = useState(ALL);

  const visible =
    active === ALL
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <>
      <div className="workFilters" role="group" aria-label="프로젝트 유형 필터">
        {categories.map((category) => (
          <button
            type="button"
            className={active === category ? "filterButton isActive" : "filterButton"}
            aria-pressed={active === category}
            onClick={() => setActive(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="resultCount" aria-live="polite">
        {visible.length} projects
      </p>
      <div className="projectGrid">
        {visible.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </>
  );
}

