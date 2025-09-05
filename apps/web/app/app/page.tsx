"use client";

import { useState } from "react";

type Item = { url: string; size: string; color: string; error?: string };

export default function DashboardIndex() {
  const [items, setItems] = useState<Item[]>([{ url: "", size: "", color: "" }]);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState<string | null>(null);

  function addItem() {
    setItems((arr) => [...arr, { url: "", size: "", color: "" }]);
  }

  function removeItem(idx: number) {
    setItems((arr) => arr.filter((_, i) => i !== idx));
  }

  function updateItem(idx: number, patch: Partial<Item>) {
    setItems((arr) => arr.map((it, i) => (i === idx ? { ...it, ...patch } : it)));
  }

  function normPhone(raw: string) {
    const cleaned = raw.replace(/[^0-9+]/g, "");
    // Normalize leading 8 to +7
    if (cleaned.startsWith("8") && cleaned.length === 11) return "+7" + cleaned.slice(1);
    if (cleaned.startsWith("+7") && cleaned.length === 12) return cleaned;
    return cleaned; // fallback shown to user on error
  }

  function validPhone(p: string) {
    const n = p.replace(/[^0-9+]/g, "");
    return (n.startsWith("+7") && n.length === 12) || (n.startsWith("8") && n.length === 11);
  }

  function validUrl(u: string) {
    try {
      const url = new URL(u);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch (_) {
      return false;
    }
  }

  function buildMessage() {
    const header = "Здравствуйте! Хочу выкуп и доставку из США.";
    const lines: string[] = [header, "", "Товары:"]; // пустая строка как разделитель
    items.forEach((it, i) => {
      const num = i + 1;
      lines.push(
        `${num}) Ссылка: ${it.url}`,
        `   Размер: ${it.size ? it.size : "не указан"}`,
        `   Цвет: ${it.color ? it.color : "не указан"}`,
        ""
      );
    });
    lines.push(`Телефон для связи с курьером (РФ): ${normPhone(phone)}`);
    lines.push("", "Если нужно, могу уточнить детали после вашего предварительного расчёта.");
    return lines.join("\n");
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    let ok = true;
    // Validate items
    const next = items.map((it) => {
      if (!it.url || !validUrl(it.url)) {
        ok = false;
        return { ...it, error: "Укажите корректную ссылку (http/https)" };
      }
      return { ...it, error: undefined };
    });
    setItems(next);

    // Validate phone
    if (!validPhone(phone)) {
      setPhoneError("Укажите телефон в формате +7XXXXXXXXXX или 8XXXXXXXXXX");
      ok = false;
    } else {
      setPhoneError(null);
    }

    if (!ok) return;

    const message = buildMessage();
    const encoded = encodeURIComponent(message);
    const link = `https://wa.me/16463226000?text=${encoded}`;
    window.open(link, "_blank");
  }

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Запрос в WhatsApp</h1>
          <p className="lead">
            После заполнения формы мы подготовим сообщение с вашими товарами. Оно откроется в WhatsApp, и вы сможете сразу отправить запрос на расчёт стоимости и доставки.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <h3>Товары</h3>
            <form className="form-grid" onSubmit={onSubmit}>
              {items.map((it, idx) => (
                <div key={idx} className="card" style={{ padding: "0.75rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem" }}>
                    <strong>Товар {idx + 1}</strong>
                    {items.length > 1 && (
                      <button type="button" className="btn btn-danger-soft" onClick={() => removeItem(idx)}>Удалить</button>
                    )}
                  </div>
                  <div className="form-grid" style={{ marginTop: ".5rem" }}>
                    <div className="form-field">
                      <label className="label" htmlFor={`url-${idx}`}>Ссылка на товар*</label>
                      <input
                        id={`url-${idx}`}
                        type="url"
                        placeholder="https://example.com/product?id=123"
                        value={it.url}
                        onChange={(e) => updateItem(idx, { url: e.target.value })}
                        className={it.error ? "input invalid" : "input"}
                        required
                      />
                      {it.error && <div className="error">{it.error}</div>}
                    </div>
                    <div className="form-field">
                      <label className="label" htmlFor={`size-${idx}`}>Размер <span className="muted">(необязательно)</span></label>
                      <input id={`size-${idx}`} type="text" value={it.size} onChange={(e) => updateItem(idx, { size: e.target.value })} className="input" />
                    </div>
                    <div className="form-field">
                      <label className="label" htmlFor={`color-${idx}`}>Цвет <span className="muted">(необязательно)</span></label>
                      <input id={`color-${idx}`} type="text" value={it.color} onChange={(e) => updateItem(idx, { color: e.target.value })} className="input" />
                    </div>
                  </div>
                </div>
              ))}

              <div>
                <button type="button" className="btn btn-muted" onClick={addItem}>Добавить товар</button>
              </div>

              <div className="form-field">
                <label className="label" htmlFor="phone">Телефон для связи с курьером (РФ)*</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+7 900 000 00 00"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={phoneError ? "input invalid" : "input"}
                  required
                />
                {phoneError && <div className="error">{phoneError}</div>}
              </div>

              <button type="submit" className="btn btn-whatsapp">Запрос в WhatsApp</button>
              <p className="muted">Сообщение откроется в WhatsApp. Вы сможете отредактировать текст перед отправкой.</p>
            </form>
          </div>
          <p className="muted" style={{ marginTop: "0.75rem" }}>Приватность: мы ничего не сохраняем. Данные остаются у вас до отправки сообщения.</p>
        </div>
      </section>
    </>
  );
}
