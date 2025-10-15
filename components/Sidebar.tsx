'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { slugify } from '@/lib/utils';

interface SidebarProps {
  categories: string[];
  offerTypes: string[];
  allServicesCount: number;
}

export default function Sidebar({ categories, offerTypes, allServicesCount }: SidebarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const offerTypeColors: Record<string, string> = {
    'GRÁTIS PERMANENTE': 'bg-green-500',
    'FREE TIER': 'bg-blue-500',
    'TRIAL': 'bg-orange-500',
    'FREE TIER + TRIAL': 'bg-purple-500',
    'Permanente': 'bg-green-500',
    'Free Tier': 'bg-blue-500',
    'Trial': 'bg-orange-500',
    'Freemium': 'bg-purple-500',
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-gray-900 text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay para mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 left-0 h-[calc(100vh-4rem)] w-72 
          bg-white border-r border-gray-100 overflow-y-auto z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-6 space-y-8">
          {/* Busca Rápida */}
          <div>
            <label htmlFor="sidebar-search" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Busca Rápida
            </label>
            <input
              type="search"
              id="sidebar-search"
              placeholder="Buscar serviços..."
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>

          {/* Todas as Categorias */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Navegação
            </h3>
            <nav className="space-y-1">
              <Link
                href="/"
                className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition ${
                  pathname === '/'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>Todos os Serviços</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                  {allServicesCount}
                </span>
              </Link>
            </nav>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Categorias
            </h3>
            <nav className="space-y-1">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/categoria/${slugify(category)}`}
                  className={`block px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition ${
                    pathname.includes(slugify(category)) ? 'bg-gray-50' : ''
                  }`}
                >
                  {category}
                </Link>
              ))}
            </nav>
          </div>

          {/* Tipos de Oferta */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Tipos de Oferta
            </h3>
            <div className="space-y-2">
              {offerTypes.map((offer) => (
                <Link
                  key={offer}
                  href={`/oferta/${slugify(offer)}`}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  <span className={`w-2 h-2 rounded-full ${offerTypeColors[offer] || 'bg-gray-400'}`} />
                  <span className="text-xs font-medium">{offer}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Links Rápidos
            </h3>
            <nav className="space-y-1">
              <Link
                href="/sobre"
                className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                Sobre o Projeto
              </Link>
              <Link
                href="/contribuir"
                className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                Como Contribuir
              </Link>
              <Link
                href="/contato"
                className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* Espaço para AdSense - Sidebar */}
          <div className="border-t border-gray-100 pt-6">
            <div className="bg-gray-50 rounded-lg p-4 min-h-[600px] flex items-center justify-center">
              <div className="text-center text-gray-400 text-xs">
                {/* AdSense Vertical aqui */}
                <ins
                  className="adsbygoogle"
                  style={{ display: 'block' }}
                  data-ad-client="ca-pub-1224933273731070"
                  data-ad-slot="XXXXXXXXXX"
                  data-ad-format="vertical"
                  data-full-width-responsive="true"
                />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
