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
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Guia Completo de Serviços Web: 100+ Plataformas
        </h1>
        <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">
          Explore a lista estendida de {initialServices.length} serviços essenciais, filtrando por tipo de oferta e categoria para ver a análise completa.
        </p>
      </header>

      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        {/* Sidebar (Filters and Summary) */}
        <aside className="lg:col-span-1 mb-8 lg:mb-0">
          <div className="bg-white p-6 rounded-xl shadow-lg sticky lg:top-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Refinar Busca</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700">
                  Categoria Principal
                </label>
                <select
                  id="category-filter"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md transition duration-150 ease-in-out"
                >
                  <option value="all">Todas</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700">
                  Subcategoria/Finalidade
                </label>
                <select
                  id="type-filter"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md transition duration-150 ease-in-out"
                >
                  <option value="all">Todas</option>
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="offer-filter" className="block text-sm font-medium text-gray-700">
                  Tipo de Oferta
                </label>
                <select
                  id="offer-filter"
                  value={offerFilter}
                  onChange={(e) => setOfferFilter(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md transition duration-150 ease-in-out"
                >
                  <option value="all">Todas</option>
                  {offerTypes.map(offer => (
                    <option key={offer} value={offer}>{offer}</option>
                  ))}
                </select>
              </div>

              <input
                type="text"
                id="search-input"
                placeholder="Buscar por nome ou recurso..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>

            <div className="mt-6 pt-4 border-t">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Resumo Filtrado</h3>
              <p className="text-sm text-gray-600 mb-4">
                Mostrando {filteredServices.length} de {initialServices.length} serviços no total.
              </p>
              <OfferChart services={filteredServices} />
            </div>
          </div>
        </aside>

        {/* Main Content (List and Detail View) */}
        <main className="lg:col-span-3">
          <ServiceDetail service={selectedService} />
          <ServiceList services={filteredServices} onServiceClick={handleServiceClick} />
        </main>
      </div>
    </div>
  );
}
