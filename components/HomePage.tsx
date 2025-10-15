'use client';

import { useState, useMemo } from 'react';
import ServiceList from '@/components/ServiceList';
import Pagination, { usePagination } from '@/components/Pagination';
import FeaturedServices from '@/components/FeaturedServices';
import { AdSenseInFeed } from '@/components/AdSense';
import { Service } from '@/lib/types';

interface HomePageProps {
  initialServices: Service[];
  categories: string[];
  offerTypes: string[];
}

export default function HomePage({ initialServices, categories }: HomePageProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = useMemo(() => {
    return initialServices.filter(service => {
      const searchFields = [
        service.name,
        service.summary,
        service.detail,
        service.category,
        service.type,
        ...service.features,
      ].join(' ').toLowerCase();
      const matchesSearch = searchFields.includes(searchTerm.toLowerCase());

      return matchesSearch;
    });
  }, [initialServices, searchTerm]);

  // Paginação
  const { currentPage, totalPages, currentItems, goToPage } = usePagination(filteredServices, 12);

  return (
    <>
      {/* Hero Section - Melhorado com Animações */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        
        {/* Decorative gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge - Com animação */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium mb-6 shadow-sm animate-slide-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              {initialServices.length}+ serviços ativos
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight animate-fade-in">
              Explore Serviços Web
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 animate-gradient">
                Gratuitos
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
              Catálogo completo de plataformas com <strong className="text-emerald-600">free tiers</strong> e <strong className="text-blue-600">trials</strong> para desenvolvedores, startups e criadores.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="search"
                  placeholder="Buscar por nome, categoria ou recurso..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 text-lg border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition shadow-sm hover:shadow-md"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-0 pr-6 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              <p className="mt-3 text-sm text-gray-500">
                <span className="font-semibold text-gray-700">{filteredServices.length}</span> {filteredServices.length === 1 ? 'serviço encontrado' : 'serviços encontrados'}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-gray-900">{categories.length}</div>
                <div className="text-sm text-gray-600">Categorias</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-green-600">{initialServices.filter(s => s.offerType.includes('PERMANENTE') || s.offerType.includes('GRATUITO')).length}</div>
                <div className="text-sm text-gray-600">Grátis para sempre</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-blue-600">{initialServices.filter(s => s.offerType.includes('FREE TIER')).length}</div>
                <div className="text-sm text-gray-600">Free Tiers</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-orange-600">{initialServices.filter(s => s.offerType.includes('TRIAL')).length}</div>
                <div className="text-sm text-gray-600">Trials</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Banner - Topo */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <AdSenseInFeed slot="4114286270" />
          </div>
        </div>
      </div>

      {/* Featured Services - Destaques da Semana */}
      <FeaturedServices services={initialServices} />

      {/* Services Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Mostrando <span className="font-semibold">{(currentPage - 1) * 12 + 1}</span> - <span className="font-semibold">{Math.min(currentPage * 12, filteredServices.length)}</span> de <span className="font-semibold">{filteredServices.length}</span> serviços
          </p>
        </div>

        <ServiceList services={currentItems} />

        {/* Paginação */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />

        {/* AdSense In-Feed - Meio do Conteúdo */}
        {filteredServices.length > 6 && currentPage === 1 && (
          <div className="my-12">
            <AdSenseInFeed slot="4114286270" />
          </div>
        )}
      </div>

      {/* AdSense Banner - Rodapé */}
      <div className="bg-white border-t border-gray-100 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <AdSenseInFeed slot="4114286270" />
          </div>
        </div>
      </div>
    </>
  );
}
