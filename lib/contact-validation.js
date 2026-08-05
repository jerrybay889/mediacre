const text = (value, max) => typeof value === "string" ? value.trim().slice(0, max) : "";
export function validateContact(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) return { ok:false, message:"요청 형식을 확인해주세요." };
  const payload = { company:text(input.company,120), name:text(input.name,80), email:text(input.email,254), phone:text(input.phone,30), type:text(input.type,80), timeline:text(input.timeline,100), message:text(input.message,5000), consent:text(input.consent,20), website:text(input.website,200) };
  if (payload.website) return { ok:true, honeypot:true, payload };
  if (!payload.company || !payload.name || !payload.message) return { ok:false, message:"필수 항목을 입력해주세요." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) return { ok:false, message:"이메일 주소를 확인해주세요." };
  if (payload.consent !== "agreed") return { ok:false, message:"개인정보 수집·이용 동의가 필요합니다." };
  return { ok:true, honeypot:false, payload };
}
