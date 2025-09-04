"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close on route change hash changes or ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close menu when resizing to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  const links = [
    { href: "/", label: "Главная" },
    { href: "/how-it-works", label: "Как это работает" },
    { href: "/calculator", label: "Калькулятор" },
    { href: "/tracking", label: "Отслеживание" },
    { href: "/forbidden", label: "Запрещённые товары" },
    { href: "/contacts", label: "Контакты" },
    { href: "/news", label: "Новости" },
    { href: "/login", label: "Вход" }
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/">USA Shop</Link>

        <button
          className={`burger ${open ? "is-open" : ""}`}
          aria-label="Открыть меню"
          aria-controls="primary-nav"
          aria-expanded={open}
          onClick={toggle}
        >
          <span className="burger-box">
            <span className="burger-inner" />
          </span>
        </button>

        <nav id="primary-nav" className={`nav ${open ? "open" : ""}`}>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={close}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
