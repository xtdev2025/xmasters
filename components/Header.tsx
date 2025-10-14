'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                xmasters
              </h1>
            </Link>
            <span className="text-sm text-gray-400 hidden lg:inline border-l border-gray-200 pl-8">
              Guia de Serviços Web Gratuitos
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition">
              Serviços
            </Link>
            <Link href="/sobre" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition">
              Sobre
            </Link>
            <Link href="/contribuir" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition">
              Contribuir
            </Link>
            <Link href="/contato" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition">
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
