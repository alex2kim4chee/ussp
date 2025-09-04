import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вход — usXpress | Magic‑link на email (24 часа)",
  description:
    "Вход в личный кабинет по magic‑ссылке, отправленной на ваш email. Ссылка действует 24 часа. При недоступности ЛК — свяжитесь через WhatsApp или email."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
