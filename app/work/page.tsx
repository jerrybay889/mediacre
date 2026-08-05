import type { Metadata } from "next";
import { WorkArchive } from "@/components/WorkArchive";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Work", description: "MEDIACRE 대표 OOH·브랜드 경험 프로젝트." };

export default function WorkPage() {
  return <main id="main-content">
    <section className="pageHero"><div className="container"><p className="eyebrow">Work Archive</p><h1>사례는 넓게,<br/>대표작은 선명하게.</h1><p>실제 공개 전 원본 이미지와 사용 권한을 확인합니다.</p></div></section>
    <section className="section light"><div className="container"><WorkArchive projects={projects} /></div></section>
  </main>;
}

