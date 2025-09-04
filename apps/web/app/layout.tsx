import Link from "next/link";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "USA Shop",
  description: "Магазин из США"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <nav>
          <ul>
            <li><Link href="/">Главная</Link></li>
            <li><Link href="/how-it-works">Как это работает</Link></li>
            <li><Link href="/calculator">Калькулятор</Link></li>
            <li><Link href="/tracking">Отслеживание</Link></li>
            <li><Link href="/forbidden">Запрещённые товары</Link></li>
            <li><Link href="/tariffs">Тарифы</Link></li>
            <li><Link href="/contacts">Контакты</Link></li>
            <li><Link href="/news">Новости</Link></li>
            <li><Link href="/login">Вход</Link></li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
