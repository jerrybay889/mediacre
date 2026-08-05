import type { Metadata } from "next";
import legal from "@/content/legal.json";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  description: "MEDIACRE 웹사이트 개인정보 처리방침.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <section className="pageHero compactHero">
        <div className="container">
          <p className="eyebrow">Privacy Policy</p>
          <h1>개인정보 처리방침</h1>
          <p>
            이 문서는 사이트 구축 단계의 검토용 초안입니다. 실제 공개 전
            회사 정보, 처리 목적, 보유 기간, 수탁자와 담당자를 법률 검토 후 확정합니다.
          </p>
        </div>
      </section>
      <section className="section light">
        <div className="container legalDocument">
          <article>
            <h2>1. 수집하는 개인정보</h2>
            <p>회사명, 담당자명, 이메일, 연락처, 프로젝트 유형·일정·설명.</p>
          </article>
          <article>
            <h2>2. 처리 목적</h2>
            <p>프로젝트 문의 확인, 상담, 제안, 계약 전 커뮤니케이션.</p>
          </article>
          <article>
            <h2>3. 보유 기간</h2>
            <p>
              상담 종료 후 실제 운영 정책에 따라 삭제합니다. 정확한 기간은 공개 전
              법률·운영 검토를 거쳐 확정해야 합니다.
            </p>
          </article>
          <article>
            <h2>4. 외부 전송·처리 위탁</h2>
            <p>
              폼·메일·호스팅 서비스가 확정되면 수탁자, 이전 국가, 보유 기간을
              이 문서에 명시합니다.
            </p>
          </article>
          <article>
            <h2>5. 이용자의 권리</h2>
            <p>열람, 정정, 삭제, 처리정지를 요청할 수 있습니다.</p>
          </article>
          <article>
            <h2>6. 개인정보 보호 담당자</h2>
            <dl className="legalFacts">
              <div><dt>회사명</dt><dd>{legal.companyName}</dd></div>
              <div><dt>담당자</dt><dd>{legal.privacyOfficer}</dd></div>
              <div><dt>이메일</dt><dd>{legal.email}</dd></div>
              <div><dt>시행일</dt><dd>{legal.effectiveDate}</dd></div>
            </dl>
          </article>
          <div className="legalWarning">
            <strong>공개 금지 상태</strong>
            <p>현재 회사·담당자·정책 정보가 미확정이므로 법률 문서로 사용하지 않습니다.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
