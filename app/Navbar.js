"use client";

import { useEffect, useState } from "react";

const links = [
  ["Home", "#home"],
  ["Who We Are", "#about"],
  ["Services", "#services"],
  ["Why Us", "#why"],
  ["Industries", "#industries"],
  ["Contact Us", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-in">
        <a href="#home" className="brand">
          <span className="mark">A</span>
          <span className="brand-text">
            ALLIED HR
            <small>SOLUTIONS</small>
          </span>
        </a>
        <nav className={`menu ${open ? "open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
