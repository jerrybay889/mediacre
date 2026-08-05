import type { Metadata } from "next";
export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return <main id="main-content">
    <section className="pageHero"><div className="container"><p className="eyebrow">About MEDIACRE</p><h1>광고판을 사는 회사를 넘어,<br/>접점을 설계하는 팀.</h1><p>도시 공간, 이동 경로, 사람의 접점을 브랜드를 위한 미디어와 경험으로 구현합니다.</p></div></section>
    <section className="section"><div className="container aboutGrid"><h2>Media intelligence.<br/>Creative development.<br/>Field execution.</h2><div><p>기존 소개자료에는 옥외광고 연간 플래닝, 맞춤형 매체 개발, 프로모션, 바이럴, 콘텐츠·세일즈, 중국 마케팅과 현장 운영 경험이 기록돼 있습니다.</p><p className="muted">설립연도, 조직, 대표자, 주소, 최신 서비스 범위는 공식 정보 확인 후 반영합니다.</p></div></div></section>
  </main>;
}
