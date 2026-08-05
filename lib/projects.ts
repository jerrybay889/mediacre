import projectData from "@/content/projects.json";
export type Project = { slug:string; client:string; title:string; year:string; category:string; summary:string; challenge:string; idea:string; execution:string; outcome:string; image:string; featured:boolean };
export const projects = projectData satisfies Project[];
export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
