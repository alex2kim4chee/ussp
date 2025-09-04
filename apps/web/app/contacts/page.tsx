import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты — USA Shop | Бруклин, WhatsApp +1 (646) 322‑6000, hello@u-s-a.shop",
  description:
    "Офис в США: 1720 E 13th St, Brooklyn, NY 11229. Пишите в WhatsApp +1 (646) 322‑6000 или на email hello@u-s-a.shop. Поможем с выкупом, консолидацией и доставкой."
};

export default function ContactsPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Контакты — USA Shop</h1>
          <p className="lead">Мы на связи по WhatsApp и email. Пишите — поможем с покупкой, доставкой и трекингом.</p>
          <div className="cta">
            <a className="btn btn-primary" href="https://wa.me/16463226000" target="_blank" rel="noopener noreferrer">Написать в WhatsApp</a>
            <a className="btn" href="mailto:hello@u-s-a.shop">hello@u-s-a.shop</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid">
          <div className="card">
            <h3>Офис в США</h3>
            <p>
              1720 E 13th St, Brooklyn, New York 11229
            </p>
            <p>
              WhatsApp: <a href="https://wa.me/16463226000" target="_blank" rel="noopener noreferrer">+1 (646) 322‑6000</a><br />
              Email: <a href="mailto:hello@u-s-a.shop">hello@u-s-a.shop</a>
            </p>
            <p className="muted">Для посещения офиса требуется предварительная договорённость.</p>
          </div>

          <div className="card">
            <h3>Поддержка</h3>
            <ul>
              <li>Подбор и выкуп товаров в США</li>
              <li>Статусы посылок и консолидация</li>
              <li>Расчёт стоимости и сроки доставки</li>
              <li>Возвраты и обмен</li>
            </ul>
            <p className="muted">Отвечаем максимально быстро в рабочее время (часовой пояс — Eastern Time).</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Частые вопросы</h2>
          <div className="grid">
            <div className="card">
              <details open>
                <summary>Какой курс доллара используется?</summary>
                <p>Внутренний курс формируется на основе курса ЦБ РФ с учётом издержек на международные переводы через частные обменные сервисы.</p>
              </details>
              <details>
                <summary>Какие способы оплаты доступны?</summary>
                <ul>
                  <li>Перевод с карты на карту внутри РФ</li>
                  <li>Оплата картой РФ на сайте банка Qiwi</li>
                  <li>Криптовалюта со скидкой 7%</li>
                </ul>
              </details>
              <details>
                <summary>Оплата доставки входит в стоимость товара?</summary>
                <p><strong>Нет.</strong> Товар оплачивается отдельно; доставка оплачивается в СДЕК перед отправкой. Средний срок доставки — до 4 недель.</p>
              </details>
            </div>

            <div className="card">
              <details>
                <summary>Есть ли ограничения по количеству одинаковых товаров?</summary>
                <p>Рекомендуем не более 3–5 однотипных товаров в одной посылке. Например, набор носков (10 шт) — ок; 3–5 пар обуви или сумок могут вызвать вопросы у таможни. Отдельные категории — не более 2 ед. на человека.</p>
              </details>
              <details>
                <summary>Как оформить возврат?</summary>
                <p>Кроссовки отправляйте нашему агенту в РФ в течение 7 дней после получения. Возврат — только в неношеном состоянии и с оригинальной упаковкой. Магазин в США может отказать после экспертизы; пересылка обратно — за счёт покупателя (ориентир: 1000 ₽/пара).</p>
              </details>
              <details>
                <summary>Где посмотреть трек‑номер?</summary>
                <p>После оплаты он появляется в личном кабинете. Для разового поиска используйте страницу <Link href="/tracking">Отслеживание</Link>.</p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
