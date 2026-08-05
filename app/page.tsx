import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import copy from "@/content/site-copy.json";

export default function Home() {
  const featured = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <main id="main-content">
      <section className="hero">
        <div className="heroMedia" aria-hidden="true">
          {/* Prototype visual. Replace with rights-cleared production photography before launch. */}
          <Image src="/assets/hero-city.svg" alt="" fill priority sizes="100vw" />
        </div>
        <div className="heroShade" />
        <div className="container heroContent">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.headline.map((line) => <span key={line}>{line}<br /></span>)}</h1>
          <p className="heroBody">{copy.hero.body}</p>
          <div className="actions">
            <Link className="button primary" data-event="hero_cta_click" href="/contact">{copy.hero.primaryCta}</Link>
            <Link className="button" data-event="hero_work_click" href="#selected-work">{copy.hero.secondaryCta}</Link>
          </div>
          <div className="heroCapabilities"><span>Media Intelligence</span><span>Creative Media Development</span><span>Field Execution</span></div>
        </div>
      </section>

      <section className="section" id="selected-work"><div className="container">
        <header className="sectionHeader">
          <div><p className="eyebrow">Selected Work</p><h2>아이디어보다<br />실행으로 증명합니다.</h2></div>
          <p>회사소개서에 기록된 대표 프로젝트를 웹 사례 구조로 재구성했습니다.</p>
        </header>
        <div className="projectGrid">{featured.map((project) => <ProjectCard project={project} key={project.slug} />)}</div>
      </div></section>

      <section className="section light"><div className="container">
        <header className="sectionHeader">
          <div><p className="eyebrow">What We Do</p><h2>전략에서 현장까지<br />하나의 흐름으로.</h2></div>
          <p>광고주의 의사결정과 실행 순서에 맞춘 통합 서비스 구조입니다.</p>
        </header>
        <div className="serviceGrid">{copy.services.map(([title, description], index) => (
          <article className="serviceCard" key={title}><b>{String(index + 1).padStart(2, "0")}</b><h3>{title}</h3><p>{description}</p></article>
        ))}</div>
      </div></section>

      <section className="section"><div className="container">
        <header className="sectionHeader">
          <div><p className="eyebrow">Why MEDIACRE</p><h2>아이디어와 현장을<br />동시에 다루는 팀.</h2></div>
          <p>복잡한 오프라인 캠페인의 품질은 마지막 현장에서 결정됩니다.</p>
        </header>
        <div className="valueGrid">
          <article><p className="eyebrow">01</p><h3>Strategic Media Thinking</h3><p>목적·타깃·지역을 기준으로 매체를 선별하고 조합합니다.</p></article>
          <article><p className="eyebrow">02</p><h3>Creative Media Development</h3><p>표준 매체에 그치지 않고 새로운 형태와 접점을 개발합니다.</p></article>
          <article><p className="eyebrow">03</p><h3>Operational Execution</h3><p>제작·인허가·설치·운영·검수까지 현장에서 완결합니다.</p></article>
        </div>
      </div></section>

      <section className="section cobalt"><div className="container">
        <header className="sectionHeader"><div><p className="eyebrow">How We Work</p><h2>복잡함을<br />실행 가능한 순서로.</h2></div></header>
        <div className="processGrid">
          {["Diagnose", "Plan", "Build", "Launch", "Operate"].map((step, index) => (
            <article key={step}><b>{String(index + 1).padStart(2, "0")}</b><h3>{step}</h3><p>{["문제·타깃·조건 정의", "미디어 믹스 설계", "제작과 인허가", "설치와 현장 검수", "운영과 결과 정리"][index]}</p></article>
          ))}
        </div>
      </div></section>

      <section className="finalCta"><div className="container ctaGrid">
        <h2>도시에서 시작될<br />다음 프로젝트를<br />함께 설계합니다.</h2>
        <Link className="button dark" data-event="hero_cta_click" data-label="final_cta" href="/contact">프로젝트 브리프 보내기</Link>
      </div></section>
    </main>
  );
}

