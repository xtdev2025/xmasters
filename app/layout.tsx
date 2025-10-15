import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { getAllServices, getCategories, getOfferTypes } from "@/lib/services";

export const metadata: Metadata = {
  title: "xmasters - Guia Completo de Serviços Web",
  description: "Explore mais de 100 serviços web gratuitos e trials para seus projetos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Obter dados para o Sidebar
  const allServices = getAllServices();
  const categories = getCategories();
  const offerTypes = getOfferTypes();

  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen bg-gray-50">
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1224933273731070"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        <Header />
        <div className="flex flex-1 relative">
          {/* Sidebar Fixo */}
          <Sidebar 
            categories={categories}
            offerTypes={offerTypes}
            allServicesCount={allServices.length}
          />
          {/* Main Content com padding para o sidebar */}
          <main className="flex-1 min-h-screen lg:ml-72">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
