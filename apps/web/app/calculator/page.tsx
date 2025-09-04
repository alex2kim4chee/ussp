"use client";

import { useMemo, useState } from "react";
import { PRICING, ceilToBracket, formatRub, type DeliveryMode, type Zone } from "./data";

export default function CalculatorPage() {
  const [mode, setMode] = useState<DeliveryMode>("door");
  const [zone, setZone] = useState<Zone>(1);
  const [weight, setWeight] = useState<string>("0.5");

  const bracket = useMemo(() => {
    const kg = Number(weight.replace(",", "."));
    return ceilToBracket(kg);
  }, [weight]);

  const price = useMemo(() => {
    if (bracket == null) return null;
    const table = PRICING[mode][zone];
    const key = String(bracket);
    return table[key];
  }, [mode, zone, bracket]);

  const labelMode = mode === "door" ? "До двери" : "До склада";

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Калькулятор стоимости</h1>
          <p className="lead">Выберите зону, способ доставки и вес — увидите точную стоимость по тарифной таблице.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid">
          <div className="card">
            <h3>Параметры</h3>
            <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
              <div className="form-field">
                <label className="label">Способ доставки</label>
                <div className="segmented">
                  <button
                    type="button"
                    className={`seg ${mode === "door" ? "active" : ""}`}
                    onClick={() => setMode("door")}
                  >До двери</button>
                  <button
                    type="button"
                    className={`seg ${mode === "warehouse" ? "active" : ""}`}
                    onClick={() => setMode("warehouse")}
                  >До склада</button>
                </div>
              </div>

              <div className="form-field">
                <label className="label">Зона доставки</label>
                <div className="segmented">
                  {[1, 2, 3].map((z) => (
                    <button
                      key={z}
                      type="button"
                      className={`seg ${zone === z ? "active" : ""}`}
                      onClick={() => setZone(z as Zone)}
                    >Зона {z}</button>
                  ))}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="w" className="label">Вес, кг</label>
                <input
                  id="w"
                  type="number"
                  step="0.1"
                  min="0.01"
                  max="6"
                  inputMode="decimal"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
                <p className="muted">
                  Точный расчёт ведётся по ближайшему большему тарифному порогу. Для &le;1 кг — шаг 0.1 кг; для {"\u003e"}1 кг — 2–6 кг.
                </p>
              </div>
            </form>
          </div>

          <div className="card">
            <h3>Результат</h3>
            <ul>
              <li><strong>Способ:</strong> {labelMode}</li>
              <li><strong>Зона:</strong> {zone}</li>
              <li><strong>Вес (ввод):</strong> {weight || "—"} кг</li>
              <li><strong>Тарифный порог:</strong> {bracket ? `${bracket} кг` : "вне диапазона"}</li>
            </ul>
            {price ? (
              <p style={{ fontSize: "1.6rem", fontWeight: 800, marginTop: "0.5rem" }}>
                {formatRub(price)}
              </p>
            ) : (
              <p className="muted">Доступны веса до 6 кг. Укажите значение в пределах диапазона.</p>
            )}
            <p className="muted" style={{ marginTop: "0.5rem" }}>
              Стоимость указана за доставку по выбранному направлению. Таможенные платежи (если применимо) и дополнительные услуги рассчитываются отдельно.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Подсказка по зонам</h2>
          <p className="muted">Разделение на зоны нужно для расчёта сроков и стоимости. Ниже — ориентировочные примеры. Если ваш город не указан, выберите ближайшую по географии/логистике зону.</p>
          <div className="grid">
            <div className="card">
              <h4>Зона 1 — европейская часть России (до Урала)</h4>
              <p>Крупные города европейской части РФ, западнее Уральских гор.</p>
              <ul>
                <li>Москва, Московская обл., Санкт‑Петербург, Ленинградская обл.</li>
                <li>Нижний Новгород, Казань, Самара, Уфа, Пермь</li>
                <li>Воронеж, Ростов‑на‑Дону, Краснодар, Волгоград</li>
              </ul>
            </div>
            <div className="card">
              <h4>Зона 2 — азиатская часть (за Уралом)</h4>
              <p>Регионы восточнее Уральских гор.</p>
              <ul>
                <li>Екатеринбург, Челябинск, Тюмень, Омск</li>
                <li>Новосибирск, Кемерово, Красноярск, Барнаул</li>
                <li>Иркутск, Улан‑Удэ, Хабаровск, Владивосток</li>
              </ul>
            </div>
            <div className="card">
              <h4>Зона 3 — иные/труднодоступные направления</h4>
              <p>Регионы, не попавшие в зоны 1 или 2, как правило удалённые и/или с особыми условиями логистики.</p>
              <ul>
                <li>Республика Саха (Якутия), Чукотский АО, Магаданская обл.</li>
                <li>Камчатский край, Сахалинская обл., Курильские острова</li>
                <li>Отдельные труднодоступные города краёв/областей (уточняется)</li>
              </ul>
              <p className="muted">Перечень примерный — при оформлении мы уточним зону по точному адресу доставки.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="storage-head">
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#10b981" d="M3 3h8v6H3zM13 3h8v6h-8zM3 11h8v10H3zM13 11h8v10h-8z"/>
            </svg>
            <h2>Хранение посылок</h2>
          </div>
          <div className="storage-grid">
            <div className="card storage-card">
              <h3 className="accent">Входящие — 45 дней бесплатно</h3>
              <p>Далее 130 ₽ в день, максимальный срок хранения — 75 дней.</p>
              <div className="meter-labels">
                <span>0 дн.</span>
                <span>45 дн.</span>
                <span>75 дн.</span>
              </div>
              <div className="meter">
                <span className="meter-free" style={{ width: "60%" }} />
              </div>
              <div className="price-row">
                <span className="free">0 ₽</span>
                <span className="perday">130 ₽ в день</span>
              </div>
              <p className="muted">
                Хранение входящих посылок на складе: 45 дней бесплатно, на следующий день и далее — 130 ₽ в день за одну посылку. Максимальный срок хранения груза — 75 дней. Далее посылка утилизируется.
              </p>
            </div>

            <div className="card storage-card">
              <h3 className="accent">Исходящие — 10 дней бесплатно</h3>
              <p>Далее 130 ₽ в день, максимальный срок хранения — 30 дней.</p>
              <div className="meter-labels">
                <span>0 дн.</span>
                <span>10 дн.</span>
                <span>30 дн.</span>
              </div>
              <div className="meter">
                <span className="meter-free" style={{ width: "33.33%" }} />
              </div>
              <div className="price-row">
                <span className="free">0 ₽</span>
                <span className="perday">130 ₽ в день</span>
              </div>
              <p className="muted">
                Хранение исходящей посылки со статусом «ожидает оплаты»: 10 дней бесплатно, на следующий день и далее — 130 ₽ в день за одну посылку. Максимальный срок хранения — 30 дней. Далее посылка утилизируется.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Тарифные таблицы</h2>
          <Tables />
        </div>
      </section>
    </>
  );
}

function Tables() {
  const rowsSmall = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1];
  const rowsBig = [2,3,4,5,6];
  return (
    <div className="tables">
      <h3>До двери</h3>
      <div className="grid">
        <PriceTable title="Зона 1" data={PRICING.door[1]} small={rowsSmall} big={rowsBig} />
        <PriceTable title="Зона 2" data={PRICING.door[2]} small={rowsSmall} big={rowsBig} />
        <PriceTable title="Зона 3" data={PRICING.door[3]} small={rowsSmall} big={rowsBig} />
      </div>
      <h3 style={{marginTop: '1.5rem'}}>До склада</h3>
      <div className="grid">
        <PriceTable title="Зона 1" data={PRICING.warehouse[1]} small={rowsSmall} big={rowsBig} />
        <PriceTable title="Зона 2" data={PRICING.warehouse[2]} small={rowsSmall} big={rowsBig} />
        <PriceTable title="Зона 3" data={PRICING.warehouse[3]} small={rowsSmall} big={rowsBig} />
      </div>
    </div>
  );
}

function PriceTable({ title, data, small, big }: { title: string; data: Record<string, number>; small: number[]; big: number[] }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <div className="price-table">
        <table>
          <thead>
            <tr>
              <th>Вес, кг</th>
              <th>Цена</th>
            </tr>
          </thead>
          <tbody>
            {small.map((w) => (
              <tr key={"s"+w}>
                <td>{w}</td>
                <td>{formatRub(data[String(w)])}</td>
              </tr>
            ))}
            {big.map((w) => (
              <tr key={"b"+w}>
                <td>{w}</td>
                <td>{formatRub(data[String(w)])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
