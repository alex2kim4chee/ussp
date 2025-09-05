import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "usXpress — доставка покупок из США | Форвардинг, консолидация, трекинг",
  description:
    "Покупайте в США и получайте заказы в России: адрес склада в США, приём и фото, консолидация, калькулятор стоимости, отслеживание и поддержка на русском."
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-wrap">
          <div className="hero-copy">
            <h1>usXpress — доставка покупок из США</h1>
            <p className="lead">
              Покупайте в американских интернет‑магазинах, принимайте товары на наш склад в США и отправляйте по миру. Консолидация, страховка, отслеживание — всё в одном личном кабинете.
            </p>
            <div className="cta">
              <Link className="btn btn-primary" href="/calculator">Рассчитать доставку</Link>
              <Link className="btn btn-secondary" href="/tracking">Отслеживать отправление</Link>
              <Link className="btn" href="/app">Заявка на выкуп</Link>
            </div>
            <p className="muted">Склад в США • Фото поступлений • Консолидация • Поддержка на русском</p>
          </div>
          <div className="hero-art">
            <img src="/hero.png" alt="" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Как это работает</h2>
          <ol className="steps">
            <li><strong>Регистрация.</strong> Получаете персональный адрес нашего склада в США.</li>
            <li><strong>Покупка.</strong> Оформляете заказы в магазинах США и указываете этот адрес.</li>
            <li><strong>Приём и фото.</strong> Мы принимаем посылки, измеряем вес/габариты и делаем фото.</li>
            <li><strong>Консолидация.</strong> Объединяем несколько посылок в одно отправление по инструкции.</li>
            <li><strong>Отправка.</strong> Выбираете тариф и страховку, оплачиваете и получаете трек‑номер.</li>
            <li><strong>Доставка.</strong> Получение в ПВЗ или курьером — отслеживайте статус онлайн.</li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container grid">
          <div className="card">
            <h3>Онлайн‑калькулятор</h3>
            <p>
              Оцените стоимость и срок доставки по маршруту, весу и габаритам. Учёт объёмного веса и страховки.
            </p>
            <ul className="muted">
              <li>Формула: base + per&nbsp;kg × chargeable&nbsp;weight</li>
              <li>Объёмный вес: max(фактического, L×W×H/фактор)</li>
            </ul>
            <Link className="btn btn-primary" href="/calculator">Открыть калькулятор</Link>
          </div>

          <div className="card">
            <h3>Тарифы</h3>
            <ul>
              <li><strong>Эконом:</strong> выгодно, дольше по времени.</li>
              <li><strong>Стандарт:</strong> баланс цены и скорости.</li>
              <li><strong>Экспресс:</strong> максимально быстро.</li>
            </ul>
            <Link className="btn" href="/tariffs">Смотреть тарифы</Link>
          </div>

          <div className="card">
            <h3>Отслеживание</h3>
            <p>Следите за отправлением по трек‑номеру, а также в сторонних агрегаторах.</p>
            <Link className="btn" href="/tracking">Перейти к отслеживанию</Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Почему usXpress</h2>
          <div className="grid four">
            <div className="card">
              <h4>Прозрачные цены</h4>
              <p>Без скрытых сборов: видите расчёт до оплаты.</p>
            </div>
            <div className="card">
              <h4>Фото и контроль</h4>
              <p>Фотографии поступлений, измерения веса и габаритов.</p>
            </div>
            <div className="card">
              <h4>Консолидация</h4>
              <p>Соберём несколько покупок в одну посылку по инструкции.</p>
            </div>
            <div className="card">
              <h4>Поддержка на русском</h4>
              <p>Помощь в выкупе, оформлении и доставке.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Ваш адрес в США</h2>
          <p>
            Сразу после регистрации вы получите персональный складской адрес в США и инструкции по корректному оформлению адреса при покупках. Так мы автоматически сопоставим посылки вашему аккаунту.
          </p>
          <Link className="btn btn-primary" href="/app">Заявка на выкуп</Link>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Частые вопросы</h2>
          <details>
            <summary>Какие товары запрещены к пересылке?</summary>
            <p>
              Опасные грузы, литиевые батареи без защиты, аэрозоли, легковоспламеняющиеся жидкости и иные категории запрещены к перевозке. См. раздел <Link href="/forbidden">Запрещённые товары</Link>.
            </p>
          </details>
          <details>
            <summary>Сколько хранится посылка на складе?</summary>
            <p>
              Входящие посылки хранятся бесплатно ограниченное время; далее может взиматься плата за хранение. Подробности уточняйте у поддержки.
            </p>
          </details>
          <details>
            <summary>Как рассчитывается стоимость доставки?</summary>
            <p>
              По тарифу маршрута и большему из фактического и объёмного веса. Страховка и дополнительные услуги считаются отдельно.
            </p>
          </details>
          <p>
            Остались вопросы? Перейдите в раздел <Link href="/contacts">Контакты</Link> — мы поможем.
          </p>
        </div>
      </section>
    </>
  );
}
