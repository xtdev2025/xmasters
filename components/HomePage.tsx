'use client';

import { useState, useMemo } from 'react';
import ServiceList from '@/components/ServiceList';
import ServiceDetail from '@/components/ServiceDetail';
import OfferChart from '@/components/OfferChart';
import { Service } from '@/lib/types';

interface HomePageProps {
  initialServices: Service[];
  categories: string[];
  offerTypes: string[];
  types: string[];
}

export default function HomePage({ initialServices, categories, offerTypes, types }: HomePageProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(
    initialServices.length > 0 ? initialServices[0] : null
  );
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [offerFilter, setOfferFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = useMemo(() => {
    return initialServices.filter(service => {
      const matchesCategory = categoryFilter === 'all' || service.category === categoryFilter;
      const matchesOffer = offerFilter === 'all' || service.offerType === offerFilter;
      const matchesType = typeFilter === 'all' || service.type === typeFilter;

      const searchFields = [
        service.name,
        service.summary,
        service.detail,
        service.category,
        service.type,
        ...service.features,
      ].join(' ').toLowerCase();
      const matchesSearch = searchFields.includes(searchTerm.toLowerCase());

      return matchesCategory && matchesOffer && matchesType && matchesSearch;
    });
  }, [initialServices, categoryFilter, offerFilter, typeFilter, searchTerm]);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    // Scroll to top of detail section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Descubra os Melhores Serviços Web
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Explore {initialServices.length}+ plataformas com ofertas gratuitas e trials para impulsionar seus projetos
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="search-input" className="block text-sm font-semibold text-gray-700 mb-2">
                Buscar
              </label>
              <input
                type="text"
                id="search-input"
                placeholder="Nome, recurso ou palavra-chave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="category-filter" className="block text-sm font-semibold text-gray-700 mb-2">
                Categoria
              </label>
              <select
                id="category-filter"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-white"
              >
                <option value="all">Todas as Categorias</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="type-filter" className="block text-sm font-semibold text-gray-700 mb-2">
                Finalidade
              </label>
              <select
                id="type-filter"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-white"
              >
                <option value="all">Todas as Finalidades</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="offer-filter" className="block text-sm font-semibold text-gray-700 mb-2">
                Tipo de Oferta
              </label>
              <select
                id="offer-filter"
                value={offerFilter}
                onChange={(e) => setOfferFilter(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-white"
              >
                <option value="all">Todas as Ofertas</option>
                {offerTypes.map(offer => (
                  <option key={offer} value={offer}>{offer}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Stats and Chart Row */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 rounded-lg p-4">
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-600">
                Exibindo <span className="font-bold text-primary">{filteredServices.length}</span> de{' '}
                <span className="font-bold">{initialServices.length}</span> serviços
              </p>
            </div>
            <div className="w-full sm:w-auto flex justify-center">
              <div className="w-48">
                <OfferChart services={filteredServices} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ServiceDetail service={selectedService} />
        <ServiceList services={filteredServices} onServiceClick={handleServiceClick} />
      </div>
    </div>
  );
}
