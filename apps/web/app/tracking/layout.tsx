import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Отслеживание отправления — usXpress",
  description:
    "Проверьте статус посылки по номеру заказа: таймлайн этапов, ссылки на агрегаторы 17TRACK, Parcels и Ship24."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
