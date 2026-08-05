import Link from "next/link";
import { Logo } from "./Logo";
export function Footer() {
  return <footer className="siteFooter"><div className="container footerGrid">
    <div><Logo /><p>OOH & Brand Experience Agency</p></div>
    <div><strong>Explore</strong><p><Link href="/work">Work</Link><br /><Link href="/services">Services</Link><br /><Link href="/about">About</Link></p></div>
    <div><strong>Contact</strong><p>공식 이메일·주소는 최종 검증 후 반영<br /><Link data-event="privacy_link_click" href="/privacy">개인정보 처리방침</Link><br />Production candidate v0.7</p></div>
  </div></footer>;
}

