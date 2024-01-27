import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const font = Poppins({ subsets: ["latin"], weight: ["400", "800"] });

export const metadata: Metadata = {
  title: "Menu Responsivo",
  description: "Criando menu responsivo, com react",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        <div className="min-h-screen flex flex-col">
          <Header/>
          <main className="flex-grow">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
