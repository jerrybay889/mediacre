"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main-content">
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Temporary Error</p>
          <h1>페이지를 불러오지<br />못했습니다.</h1>
          <button className="button primary" type="button" onClick={reset}>
            다시 시도하기
          </button>
        </div>
      </section>
    </main>
  );
}
