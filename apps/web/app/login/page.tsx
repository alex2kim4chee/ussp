"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !agree) return;
    // Здесь должна быть отправка запроса на генерацию magic‑link.
    // Пока показываем сообщение об успешной отправке.
    setSent(true);
  }

  return (
    <section className="auth-section">
      <div className="auth-bg" aria-hidden="true" />
      <div className="container auth-center">
        <div className="auth-card">
          <div className="brand-top">usXpress</div>
          <h1>Вход в личный кабинет</h1>
          <p className="muted">Укажите email — отправим ссылку для входа. Ссылка действует 24 часа.</p>

          <div className="alert alert-warn" role="alert" style={{marginTop: '.5rem'}}>
            <strong>Извините, временно недоступно.</strong> Сейчас личный кабинет находится на техническом обслуживании и недоступен.
            Пожалуйста, оформляйте заказы через нашу страницу <Link href="/contacts">Контакты</Link> — напишите в WhatsApp или на email
            <a href="mailto:hello@usXpress.link"> hello@usXpress.link</a>.
          </div>

          {sent ? (
            <div className="card" style={{ marginTop: ".75rem" }}>
              <h3>Письмо отправлено</h3>
              <p>
                Мы отправили ссылку для входа на <strong>{email}</strong>. Проверьте входящие и папку «Спам». Ссылка активна в течение 24 часов.
              </p>
              <p className="muted">Если письма нет — попробуйте ещё раз через пару минут или свяжитесь с поддержкой на странице <Link href="/contacts">Контакты</Link>.</p>
            </div>
          ) : (
            <form className="auth-form" onSubmit={onSubmit}>
              <label className="label" htmlFor="email">Email</label>
              <input
                id="email"
                className="input"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="turnstile">
                <label className="turnstile-row">
                  <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                  <span>Я человек (Cloudflare Turnstile)</span>
                </label>
                <span className="turnstile-note">Реальная интеграция потребует sitekey Cloudflare.</span>
              </div>

              <button type="submit" className="btn btn-primary" disabled={!email || !agree}>Получить ссылку</button>
              <p className="muted small">Продолжая, вы соглашаетесь с <Link href="/how-it-works#contract">условиями агентского договора</Link>.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
