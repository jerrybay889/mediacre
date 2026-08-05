import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    creator: { "@type": "Organization", name: "MEDIACRE" },
    about: project.category,
    dateCreated: project.year,
    description: project.summary,
  };

  return <main id="main-content">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
    />
    <section className="projectHero"><div className="container"><p className="eyebrow">{project.category} · {project.year}</p><h1>{project.title}</h1><p>{project.summary}</p></div></section>
    <div className="projectVisual"><Image src={project.image} alt={`${project.client} ${project.title} 임시 시각화`} width={1600} height={1000} priority /></div>
    <section className="section light"><div className="container caseStudy">
      <article><p className="eyebrow">Challenge</p><h2>해결해야 했던 문제</h2><p>{project.challenge}</p></article>
      <article><p className="eyebrow">Media Idea</p><h2>접점을 설계한 방식</h2><p>{project.idea}</p></article>
      <article><p className="eyebrow">Execution</p><h2>현장에서 구현한 내용</h2><p>{project.execution}</p></article>
      <article><p className="eyebrow">Outcome / Verification</p><h2>공개 전 확인 사항</h2><p>{project.outcome}</p></article>
    </div></section>
  </main>;
}
