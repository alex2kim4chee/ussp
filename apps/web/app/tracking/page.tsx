"use client";

import Link from "next/link";
import { useState } from "react";

export default function TrackingPage() {
  const [input, setInput] = useState("");
  const [code, setCode] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed) {
      setCode(trimmed);
      const url = `https://www.cdek.ru/ru/tracking/?order_id=${encodeURIComponent(trimmed)}`;
      window.open(url, "_blank");
    }
  };

  return (
    <section className="section soft">
      <div className="container">
        <h1>Отслеживание</h1>
        <p>
          Вы можете <Link href="/login">войти в личный кабинет</Link>, чтобы видеть историю ваших отправлений.
        </p>

        <div className="search-card">
          <div className="search-card-inner">
            <div className="search-copy">
              <h2>Отследить посылку</h2>
              <p><a className="search-help" href="#where-code">Где найти номер заказа?</a></p>
              <form className="search-form" onSubmit={onSubmit}>
                <label htmlFor="track" className="sr-only">Номер заказа</label>
                <input
                  id="track"
                  type="text"
                  placeholder="Номер заказа"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="btn-icon" aria-label="Найти">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="#111827" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L20 21.5 21.5 20l-6-6zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                </button>
              </form>
            </div>
            <div className="search-illustration" aria-hidden="true">
              <img src="/tracking-parcel.svg" alt="" />
            </div>
          </div>
        </div>

        {code && (
          <div className="card" style={{ marginTop: "1rem" }}>
            <h3>Статус отправления — {code}</h3>
            <ul className="timeline">
              <li><span className="t-title">Заказ создан</span><span className="t-meta"> — получен номер {code}</span></li>
              <li><span className="t-title">Принято на складе США</span><span className="t-meta"> — измерение и фото</span></li>
              <li><span className="t-title">Отправлено из США</span><span className="t-meta"> — авиаперевозка</span></li>
              <li><span className="t-title">Прибыло в страну назначения</span><span className="t-meta"> — сортировка</span></li>
              <li><span className="t-title">Таможенное оформление</span><span className="t-meta"> — проверка декларации</span></li>
              <li><span className="t-title">Передано в СДЕК</span><span className="t-meta"> — доставка до ПВЗ/курьера</span></li>
              <li><span className="t-title">Доставлено</span><span className="t-meta"> — получено адресатом</span></li>
            </ul>
            <p className="muted">Нет обновлений? Проверьте также сторонние трек‑сервисы: <a target="_blank" href="https://www.17track.net/ru">17TRACK</a>, <a target="_blank" href="https://parcelsapp.com/ru">Parcels</a>, <a target="_blank" href="https://www.ship24.com/ru">Ship24</a>.</p>
          </div>
        )}

        <div id="where-code" className="muted" style={{ marginTop: "1rem" }}>
          Подсказка: номер заказа/трек‑номер приходит после оплаты и доступен в личном кабинете.
        </div>
      </div>
    </section>
  );
}
