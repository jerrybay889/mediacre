import type { Metadata } from "next";
import copy from "@/content/site-copy.json";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return <main id="main-content">
    <section className="pageHero"><div className="container"><p className="eyebrow">Services</p><h1>매체를 고르는 일부터<br/>현장을 완성하는 일까지.</h1><p>서비스 범위는 2024 회사소개서와 현재 전략 가설을 기준으로 구성했습니다.</p></div></section>
    <section className="section light"><div className="container"><div className="serviceGrid">
      {copy.services.map(([title, description], i) => <article className="serviceCard" key={title}><b>{String(i+1).padStart(2,"0")}</b><h3>{title}</h3><p>{description}</p></article>)}
    </div></div></section>
  </main>;
}
