import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <main id="main-content">
    <section className="pageHero"><div className="container"><p className="eyebrow">Project Brief</p><h1>프로젝트의 목적부터<br/>함께 정리합니다.</h1><p>Vercel 배포 단계에서 공식 이메일 라우팅과 개인정보 동의를 연결합니다.</p></div></section>
    <section className="section light"><div className="container contactGrid"><div><h2>목표, 지역, 일정,<br/>예산 범위만 있어도<br/>시작할 수 있습니다.</h2><p>공식 회사 연락처는 최종 확인 후 반영합니다.</p></div><ContactForm /></div></section>
  </main>;
}
