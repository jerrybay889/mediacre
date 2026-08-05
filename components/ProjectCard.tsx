import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="projectCard">
      <Link href={`/work/${project.slug}`} className="projectImage" data-event="project_card_open" data-label={project.slug}>
        <Image src={project.image} alt={`${project.client} ${project.title} 임시 시각화`} width={1000} height={625} />
      </Link>
      <div className="projectBody">
        <div className="projectMeta"><span>{project.category}</span><span>{project.year}</span></div>
        <h3><Link href={`/work/${project.slug}`} data-event="project_card_open" data-label={project.slug}>{project.title}</Link></h3>
        <p>{project.summary}</p>
      </div>
    </article>
  );
}

