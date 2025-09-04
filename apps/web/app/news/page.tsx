import NewsFeedClient, { type Post } from "./NewsFeedClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новости — USA Shop | Кросс‑бордер, пороги, логистика",
  description:
    "Подборка важных новостей: лимиты ЕАЭС, сроки и правила пошлин, USPS, санкционные пакеты ЕС, обновления OFAC и НДС‑новшества ЕС."
};

const POSTS: Post[] = [
  {
    slug: "eaeu-limit-200-eur-2025",
    date: "24 фев 2025",
    title: "ЕАЭС сохранил лимит беспошлинного ввоза €200 на 2025 год",
    summary:
      "Совет ЕЭК подтвердил: порог для трансграничных онлайн‑покупок остаётся €200 за отправление по всем странам ЕАЭС, включая РФ. Это удерживает прежнюю модель расчёта пошлин на весь 2025 год.",
    sources: [{ label: "Interfax", href: "https://www.interfax.ru/" }]
  },
  {
    slug: "plan-2026-lower-threshold",
    date: "06 мар 2025",
    title: "План на 2026: постепенное снижение порога",
    summary:
      "Интерфакс: ориентир ЕЭК — понижение порога до €100 в 2026 и €50 в 2027 (требует финальных актов ЕАЭС). Калькуляторам доставки стоит предусмотреть сценарии «пониженного порога».",
    sources: [{ label: "Interfax", href: "https://www.interfax.ru/" }]
  },
  {
    slug: "ru-rules-2025-duty",
    date: "02 сен 2025",
    title: "Правила РФ для посылок физлиц в 2025: как считают пошлину",
    summary:
      "До €200 и до 31 кг — без пошлины; при превышении — 15% на сумму сверх лимита (минимум €2/кг сверхлимитного веса). Упрощённая декларация, учёт по паспорту/ИНН.",
    sources: [{ label: "tonlexing.com", href: "https://tonlexing.com/" }]
  },
  {
    slug: "usps-suspension-to-russia",
    date: "18 июл 2025",
    title: "USPS: приём международной почты в РФ всё ещё приостановлен",
    summary:
      "Почта США по‑прежнему не принимает отправления в Россию по большинству каналов. Для маршрутизации из США это исключает прямой USPS → РФ; используются альтернативные логистические цепочки.",
    sources: [{ label: "USPS", href: "https://about.usps.com/newsroom/service-alerts/" }]
  },
  {
    slug: "us-de-minimis-removed",
    date: "29 авг 2025",
    title: "США отменили правило de minimis $800 для импорта в США",
    summary:
      "Решение касается импорта в США (не экспорта из США в РФ), но вызвало операционные сбои у операторов и влияет на обратные потоки/возвраты.",
    sources: [
      { label: "Reuters", href: "https://www.reuters.com/" },
      { label: "Bloomberg", href: "https://www.bloomberg.com/" },
      { label: "AP News", href: "https://apnews.com/" }
    ]
  },
  {
    slug: "russian-post-stops-to-usa",
    date: "26 авг 2025",
    title: "«Почта России» временно перестала принимать посылки в США",
    summary:
      "На фоне решения США по de minimis Приём посылок в США приостановлен (письма — без изменений). Это бьёт по возвратам и двусторонним потокам.",
    sources: [
      { label: "Interfax", href: "https://www.interfax.ru/" },
      { label: "Meduza", href: "https://meduza.io/" },
      { label: "Newsweek", href: "https://www.newsweek.com/" }
    ]
  },
  {
    slug: "eu-18th-sanctions-july-2025",
    date: "21 июл 2025",
    title: "ЕС: 18‑й пакет санкций — усиление экспортных ограничений",
    summary:
      "Новые запреты на экспорт чувствительных товаров/технологий и промтоваров, дополнительные ограничения по транзиту и обходу. Усложняет европейские плечи в маршрутах США→РФ.",
    sources: [
      { label: "European Commission", href: "https://commission.europa.eu/" },
      { label: "Baker McKenzie Sanctions News", href: "https://sanctionsnews.bakermckenzie.com/" }
    ]
  },
  {
    slug: "eu-16th-sanctions-feb-2025",
    date: "19 фев 2025",
    title: "ЕС: 16‑й пакет — ограничения на электронику и консоли",
    summary:
      "Санкции усилили контроль над товарами потенциально двойного назначения (консоли/контроллеры и пр.), что затрагивает популярные потребительские позиции и «серые» каналы.",
    sources: [
      { label: "Reuters", href: "https://www.reuters.com/" },
      { label: "Financial Times", href: "https://www.ft.com/" }
    ]
  },
  {
    slug: "ofac-updates-jan-2025",
    date: "10 янв 2025",
    title: "OFAC (США): продолжающиеся обновления российских санкций",
    summary:
      "Казначейство США обновило генеральные лицензии и разъяснения (пример: GL 8L по энергетике). Это индикатор динамики санкционных режимов, влияющей на платежи и логистику.",
    sources: [{ label: "OFAC", href: "https://home.treasury.gov/policy-issues/financial-sanctions/sanctions-programs-and-country-information/russia-related-sanctions" }]
  },
  {
    slug: "eu-vat-crossborder-2025",
    date: "июл 2025",
    title: "ЕС: тарифные и НДС‑новации по кросс‑бордеру",
    summary:
      "Обновления по НДС для e‑commerce (IOSS) и обсуждение фиксированного сбора ~€2 за низкостоймостные посылки. Повышает издержки транзита через ЕС и меняет оптимальные «хабы» для США→РФ.",
    sources: [
      { label: "Taxation and Customs Union", href: "https://taxation-customs.ec.europa.eu/" },
      { label: "Reuters", href: "https://www.reuters.com/" }
    ]
  }
];

export default function NewsPage() {
  const updated = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date());

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Новости USA Shop</h1>
          <p className="lead">Подборка важных обновлений по кросс‑бордеру (обновлено: {updated}).</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <NewsFeedClient posts={POSTS} />
        </div>
      </section>
    </>
  );
}
