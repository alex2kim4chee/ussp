import "./globals.css";
import type { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "USA Shop",
  description: "Магазин из США"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
