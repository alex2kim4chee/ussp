import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Запрещённые товары — usXpress | Опасные грузы и ограничения",
  description:
    "Перечень запрещённых к пересылке категорий: взрывчатые/ЛВЖ/газы, токсичные вещества, оружие, деньги, драгоценности и магниты, скоропорт, радиоактивные и др.; а также частично ограниченные (дроны, АКБ, ювелирка)."
};

export default function ForbiddenPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Запрещённые и ограниченные товары</h1>
          <p className="lead">
            Ниже перечислены категории, которые нельзя пересылать международной почтой/курьером, а также товары с ограничениями.
            Если сомневаетесь — свяжитесь с нами через <Link href="/contacts">Контакты</Link>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Полный список запрещённых категорий</h2>
          <div className="grid">
            <div className="card">
              <h3>Взрывчатые вещества, петарды, салюты, средства взрывания <span className="badge badge-danger">Запрещено</span></h3>
              <ul className="list-clean">
                <li>Фейерверки, петарды, сигнальные ракеты</li>
                <li>Порох, капсюли, детонаторы</li>
              </ul>
            </div>
            <div className="card">
              <h3>Сжатые/сжиженные газы и ЛВЖ <span className="badge badge-danger">Запрещено</span></h3>
              <ul className="list-clean">
                <li>Баллоны пропана/бутана, газ для зажигалок</li>
                <li>Аэрозоли (лак для волос, дезодоранты‑спреи)</li>
                <li>Парфюмерия с высоким содержанием спирта, растворители, бензин</li>
                <li>Краски, лаки, жидкость для снятия лака (ацетон)</li>
              </ul>
            </div>
            <div className="card">
              <h3>Окисляющие вещества <span className="badge badge-danger">Запрещено</span></h3>
              <ul className="list-clean">
                <li>Перекись водорода высокой концентрации</li>
                <li>Отбеливатели/хлорсодержащие реактивы</li>
                <li>Нитраты/перманганаты и др. химреактивы</li>
              </ul>
            </div>
            <div className="card">
              <h3>Ядовитые/токсичные вещества <span className="badge badge-danger">Запрещено</span></h3>
              <ul className="list-clean">
                <li>Пестициды, яды от грызунов, инсектициды</li>
                <li>Ртуть, ртутные термометры, антифриз/тосол</li>
              </ul>
            </div>
            <div className="card">
              <h3>Оружие любых видов <span className="badge badge-danger">Запрещено</span></h3>
              <ul className="list-clean">
                <li>Огнестрельное, пневматическое, сигнальное, боеприпасы</li>
                <li>Электрошокеры/газовые баллончики, холодное оружие</li>
                <li>Арбалеты, метательные ножи, кастеты</li>
              </ul>
            </div>
            <div className="card">
              <h3>Драгоценные камни, слитки; мощные магниты <span className="badge badge-danger">Запрещено</span></h3>
              <ul className="list-clean">
                <li>Алмазы, изумруды, инвестиционные слитки</li>
                <li>Сильные неодимовые магниты/магнитные сборки</li>
              </ul>
            </div>
            <div className="card">
              <h3>Деньги и ценные бумаги <span className="badge badge-danger">Запрещено</span></h3>
              <ul className="list-clean">
                <li>Наличные, монеты, дорожные чеки</li>
                <li>Банкноты/ценные бумаги, подарочные карты с балансом</li>
              </ul>
            </div>
            <div className="card">
              <h3>Животные, трофеи, пушнина <span className="badge badge-danger">Запрещено</span></h3>
              <ul className="list-clean">
                <li>Живые животные, насекомые, биоматериалы</li>
                <li>Охотничьи трофеи, необработанные шкуры/мех</li>
              </ul>
            </div>
            <div className="card">
              <h3>Скоропортящиеся продукты <span className="badge badge-danger">Запрещено</span></h3>
              <ul className="list-clean">
                <li>Свежие фрукты/овощи, молочные продукты, мясо/рыба</li>
                <li>Продукты, требующие температурного режима</li>
              </ul>
            </div>
            <div className="card">
              <h3>Пачкающиеся предметы <span className="badge badge-danger">Запрещено</span></h3>
              <ul className="list-clean">
                <li>Масла/смазки/автожидкости, открытые банки с краской</li>
                <li>Тонеры/чернила в незащищённой таре</li>
              </ul>
            </div>
            <div className="card">
              <h3>Радиоактивные вещества <span className="badge badge-danger">Запрещено</span></h3>
              <ul className="list-clean">
                <li>Источник ионизирующего излучения, радиоизотопные датчики</li>
              </ul>
            </div>
            <div className="card">
              <h3>Наркотические средства и прекурсоры <span className="badge badge-danger">Запрещено</span></h3>
              <ul className="list-clean">
                <li>Наркотики, психотропные вещества и прекурсоры</li>
                <li>Лекарства, содержащие контролируемые вещества (уточнять)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Частично запрещено / по согласованию</h2>
          <p className="muted">Для товаров ниже могут требоваться документы, специальные упаковки, изъятие аккумуляторов или индивидуальное согласование.</p>
          <div className="grid">
            <div className="card">
              <h3>Квадрокоптеры и электроника с АКБ <span className="badge badge-warn">Уточнять</span></h3>
              <ul className="list-clean">
                <li>Дроны DJI и аналоги (как правило, без АКБ или с сертификацией по IATA)</li>
                <li>Пауэрбанки, ноутбуки, смартфоны — ограничения по ёмкости, кол-ву и упаковке</li>
              </ul>
            </div>
            <div className="card">
              <h3>Ювелирные изделия / антиквариат <span className="badge badge-warn">Уточнять</span></h3>
              <ul className="list-clean">
                <li>Украшения из драгоценных металлов и камней</li>
                <li>Антиквариат, предметы искусства — могут требовать экспертизы/разрешений</li>
              </ul>
            </div>
            <div className="card">
              <h3>Рации и радиооборудование <span className="badge badge-warn">Уточнять</span></h3>
              <ul className="list-clean">
                <li>Рации, ретрансляторы, GPS‑трекеры с SIM</li>
                <li>Устройства с частотами, требующими разрешений</li>
              </ul>
            </div>
            <div className="card">
              <h3>Оборудование для майнинга <span className="badge badge-warn">Уточнять</span></h3>
              <ul className="list-clean">
                <li>ASIC‑майнеры, GPU‑фермы — крупногабарит, питание, теплоотвод</li>
              </ul>
            </div>
            <div className="card">
              <h3>Рыболовные сети и спецснаряжение <span className="badge badge-warn">Уточнять</span></h3>
              <ul className="list-clean">
                <li>Сети, ловушки, тактическое/военизированное снаряжение</li>
              </ul>
            </div>
          </div>
          <p className="muted" style={{marginTop: '.75rem'}}>Перед покупкой пришлите ссылку на товар — проверим возможность пересылки и подскажем альтернативы.</p>
        </div>
      </section>
    </>
  );
}
