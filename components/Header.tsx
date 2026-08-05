"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="siteHeader">
      <div className="container nav">
        <Link href="/" aria-label="MEDIACRE 홈"><Logo /></Link>
        <button className="menuButton" aria-expanded={open} onClick={() => setOpen(!open)}>Menu</button>
        <nav className={open ? "navLinks isOpen" : "navLinks"} aria-label="주요 메뉴">
          <Link href="/work" onClick={() => setOpen(false)}>Work</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link className="button primary" data-event="header_cta_click" href="/contact" onClick={() => setOpen(false)}>프로젝트 브리프 보내기</Link>
        </nav>
      </div>
    </header>
  );
}

