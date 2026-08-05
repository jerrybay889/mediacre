import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Brand Preview",
  robots: { index: false, follow: false },
};

const routes = [
  {
    key: "A",
    title: "Urban Frame",
    status: "Primary",
    body: "도시 프레임, 빌보드, 스크린 구조를 열린 사각형으로 정리한 메인 방향.",
    image: "/assets/logo-urban-frame.svg",
  },
  {
    key: "B",
    title: "Signal Grid",
    status: "Digital Extension",
    body: "매체 접점과 이동 데이터를 그리드와 신호점으로 표현한 확장 방향.",
    image: "/assets/logo-signal-grid.svg",
  },
  {
    key: "C",
    title: "Landmark Pulse",
    status: "Campaign Accent",
    body: "도시에 발생하는 주목성과 확산을 방사형 리듬으로 표현한 캠페인 방향.",
    image: "/assets/logo-landmark-pulse.svg",
  },
];

export default function BrandPreviewPage() {
  return (
    <main>
      <section className="pageHero brandPreviewHero">
        <div className="container">
          <p className="eyebrow">Brand System v0.3</p>
          <h1>Urban structure.<br/>Visible impact.</h1>
          <p>메인 브랜드는 Urban Frame를 채택하고, Signal Grid와 Landmark Pulse를 디지털·캠페인 확장 언어로 사용합니다.</p>
        </div>
      </section>
      <section className="section light">
        <div className="container logoRouteGrid">
          {routes.map((route) => (
            <article className="logoRoute" key={route.key}>
              <div className="logoRouteVisual">
                <Image src={route.image} alt={`${route.title} 로고 방향`} width={1200} height={760} />
              </div>
              <div className="logoRouteCopy">
                <p className="eyebrow">{route.key} · {route.status}</p>
                <h2>{route.title}</h2>
                <p>{route.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container tokenPreview">
          <div><p className="eyebrow">Color Tokens</p><h2>Black, White,<br/>Cobalt, Orange.</h2></div>
          <div className="swatches">
            <div style={{background:"#0A0A0A"}}><span>Urban Black<br/>#0A0A0A</span></div>
            <div className="lightSwatch" style={{background:"#F5F5F2"}}><span>Signal White<br/>#F5F5F2</span></div>
            <div style={{background:"#2457FF"}}><span>Electric Cobalt<br/>#2457FF</span></div>
            <div style={{background:"#FF4D1F"}}><span>Signal Orange<br/>#FF4D1F</span></div>
          </div>
        </div>
      </section>
    </main>
  );
}

