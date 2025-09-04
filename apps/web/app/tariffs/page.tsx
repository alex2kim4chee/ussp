import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Тарифы — USA Shop | Доставка из США по зонам и весу",
  description:
    "Информация о тарифах: зоны 1–3, доставка до двери и до склада, расчёт по весу и примерные сроки."
};

export default function TariffsPage() {
  return (
    <section>
      <h1>Тарифы</h1>
      <p>Информация о тарифах на доставку.</p>
    </section>
  );
}
