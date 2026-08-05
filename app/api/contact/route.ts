import { NextResponse } from "next/server";
import { validateContact } from "@/lib/contact-validation";

const MAX_BODY_BYTES = 16 * 1024;
const json = (body: object, status = 200) => NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) return json({ message: "JSON 요청만 지원합니다." }, 415);
  const length = Number(request.headers.get("content-length") || "0");
  if (length > MAX_BODY_BYTES) return json({ message: "요청 크기가 너무 큽니다." }, 413);

  let body: unknown;
  try { body = await request.json(); } catch { return json({ message: "요청 형식을 확인해주세요." }, 400); }
  const result = validateContact(body);
  if (!result.ok) return json({ message: result.message }, 400);
  if (result.honeypot) return json({ message: "요청이 처리되었습니다." }, 202);

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook || process.env.CONTACT_MODE === "mock") {
    return json({ message: "프로토타입 접수 구조가 정상 작동했습니다. 실제 수신 채널은 배포 전에 연결합니다." }, 202);
  }

  const { consent: _consent, website: _website, ...forwardPayload } = result.payload;
  void _consent;
  void _website;
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (process.env.CONTACT_WEBHOOK_BEARER_TOKEN) headers.Authorization = `Bearer ${process.env.CONTACT_WEBHOOK_BEARER_TOKEN}`;

  try {
    const upstream = await fetch(webhook, { method: "POST", headers, body: JSON.stringify(forwardPayload), signal: AbortSignal.timeout(8000) });
    if (!upstream.ok) return json({ message: "문의 전달 중 오류가 발생했습니다." }, 502);
  } catch {
    return json({ message: "문의 전달 서버에 연결하지 못했습니다." }, 502);
  }
  return json({ message: "문의가 접수되었습니다." });
}
