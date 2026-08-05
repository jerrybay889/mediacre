"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const started = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatus("전송 중…");
    trackEvent("contact_form_submit");

    try {
      const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) trackEvent("contact_form_error", { status: response.status });
      setStatus(data.message ?? "처리 결과를 확인하지 못했습니다.");
      if (response.ok) event.currentTarget.reset();
    } catch {
      trackEvent("contact_form_error", { status: "network" });
      setStatus("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      className="contactForm"
      onSubmit={submit}
      onFocus={() => {
        if (!started.current) {
          started.current = true;
          trackEvent("contact_form_start");
        }
      }}
    >
      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <label>회사명<input name="company" required maxLength={120} autoComplete="organization" /></label>
      <label>담당자명<input name="name" required maxLength={80} autoComplete="name" /></label>
      <label>이메일<input name="email" type="email" required maxLength={254} autoComplete="email" /></label>
      <label>연락처<input name="phone" maxLength={30} autoComplete="tel" /></label>
      <label>프로젝트 유형<select name="type"><option>OOH / DOOH</option><option>Creative Media</option><option>Brand Experience</option><option>Public Campaign</option></select></label>
      <label>예상 일정<input name="timeline" maxLength={100} placeholder="예: 2026년 10월" /></label>
      <label className="full">프로젝트 설명<textarea name="message" required maxLength={5000} /></label>
      <label className="consent full"><input name="consent" value="agreed" type="checkbox" required /><span>문의 처리를 위한 개인정보 수집·이용에 동의합니다. <Link data-event="privacy_link_click" href="/privacy">처리방침 보기</Link></span></label>
      <div className="full"><button className="button primary" type="submit" disabled={submitting}>{submitting ? "전송 중…" : "프로젝트 브리프 보내기"}</button><p className="formStatus" aria-live="polite">{status}</p></div>
    </form>
  );
}
