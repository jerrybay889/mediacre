import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnalyticsBridge } from "@/components/AnalyticsBridge";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "MEDIACRE | OOH & Brand Experience Agency", template: "%s | MEDIACRE" },
  description: "전략적인 옥외광고, 창의적인 매체 개발, 브랜드 경험, 현장 실행까지 MEDIACRE가 통합 설계합니다.",
  openGraph: { title: "MEDIACRE", description: "OOH & Brand Experience Agency", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MEDIACRE",
    description: "OOH & Brand Experience Agency",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  };

  return (
    <html lang="ko">
      <body>
        <a className="skipLink" href="#main-content">본문 바로가기</a>
        <AnalyticsBridge />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
