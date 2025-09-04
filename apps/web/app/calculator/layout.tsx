import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Калькулятор стоимости доставки из США — usXpress",
  description:
    "Рассчитайте цену доставки из США: до двери или до склада, зоны 1–3, веса 0.1–6 кг. Округление по тарифным порогам и таблицы цен."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
