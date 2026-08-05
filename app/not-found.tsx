import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content">
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1>요청한 페이지를<br />찾을 수 없습니다.</h1>
          <Link className="button primary" href="/">홈으로 돌아가기</Link>
        </div>
      </section>
    </main>
  );
}
