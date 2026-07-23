import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Пилатес Реформър — Студио в София, Лозенец",
  description:
    "Малко реформър студио в Лозенец. Шест реформъра, групови и индивидуални часове, резервация по дни.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
