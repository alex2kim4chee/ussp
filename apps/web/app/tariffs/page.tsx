import type { Metadata } from "next";
import { PRICING } from "../calculator/data";
import { WEIGHT_STEPS_SMALL, WEIGHT_STEPS_BIG, formatRub } from "../calculator/data";

export const metadata: Metadata = {
  title: "Тарифы — usXpress | Доставка из США по зонам и весу",
  description:
    "Тарифы usXpress: до двери и до склада, зоны 1–3. Готовые таблицы по весу 0.1–1 кг (шаг 0.1) и 2–6 кг."
};

export default function TariffsPage() {
  const small = WEIGHT_STEPS_SMALL;
  const big = WEIGHT_STEPS_BIG;
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Тарифы доставки из США</h1>
          <p className="lead">Фиксированные пороги по весу и зонам. Для быстрой оценки воспользуйтесь нашим <a className="search-help" href="/calculator">калькулятором</a>.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Зоны доставки</h2>
          <div className="grid">
            <div className="card">
              <h3>Зона 1 — европейская часть (до Урала)</h3>
              <p>Москва/МО, Санкт‑Петербург/ЛО, Нижний Новгород, Казань, Самара, Уфа, Пермь, Воронеж, Ростов‑на‑Дону, Краснодар, Волгоград.</p>
            </div>
            <div className="card">
              <h3>Зона 2 — азиатская часть (за Уралом)</h3>
              <p>Екатеринбург, Челябинск, Тюмень, Омск, Новосибирск, Кемерово, Красноярск, Барнаул, Иркутск, Улан‑Удэ, Хабаровск, Владивосток.</p>
            </div>
            <div className="card">
              <h3>Зона 3 — иные/труднодоступные</h3>
              <p>Республика Саха (Якутия), Чукотка, Магаданская обл., Камчатка, Сахалин, Курилы и отдельные труднодоступные территории.</p>
            </div>
          </div>
          <p className="muted" style={{marginTop: '.5rem'}}>Перечень примерный. Точная зона определяется по адресу доставки при оформлении.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>До двери</h2>
          <div className="grid">
            <PriceTable title="Зона 1" data={PRICING.door[1]} small={small} big={big} />
            <PriceTable title="Зона 2" data={PRICING.door[2]} small={small} big={big} />
            <PriceTable title="Зона 3" data={PRICING.door[3]} small={small} big={big} />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>До склада (ПВЗ)</h2>
          <div className="grid">
            <PriceTable title="Зона 1" data={PRICING.warehouse[1]} small={small} big={big} />
            <PriceTable title="Зона 2" data={PRICING.warehouse[2]} small={small} big={big} />
            <PriceTable title="Зона 3" data={PRICING.warehouse[3]} small={small} big={big} />
          </div>
          <p className="muted" style={{marginTop: '.5rem'}}>
            Стоимость указана за доставку по выбранному направлению. Таможенные платежи (если применимо), страховка и доп. услуги оплачиваются отдельно.
          </p>
        </div>
      </section>
    </>
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
