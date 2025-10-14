import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guia Completo de Serviços Web",
  description: "Explore serviços web gratuitos e trials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
