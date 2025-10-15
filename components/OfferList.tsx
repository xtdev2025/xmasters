'use client';

import Link from 'next/link';
import { Service } from '@/lib/types';
import { slugify } from '@/lib/utils';
import ServiceCard from './ServiceCard';
import Pagination, { usePagination } from './Pagination';
import { AdSenseBanner, AdSenseInFeed } from '@/components/AdSense';

interface OfferListProps {
  services: Service[];
  offerType: string;
  allServices: Service[];
  offerTypes: string[];
}

export default function OfferList({ services, offerType, allServices, offerTypes }: OfferListProps) {
  const { currentItems, currentPage, totalPages, goToPage } = usePagination(services, 12);

  return (
    <>
      {/* AdSense Banner - Topo */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <AdSenseBanner slot="2928362968" />
          </div>
        </div>
      </div>

      {/* Lista de Serviços */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {services.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItems.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            
            {/* Paginação */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={goToPage}
                />
              </div>
            )}
            
            {/* AdSense In-Feed - Após Serviços */}
            {services.length > 6 && (
              <div className="mt-12">
                <AdSenseInFeed slot="4114286270" />
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-6">Nenhum serviço encontrado com este tipo de oferta.</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition"
            >
              Ver todos os serviços
            </Link>
          </div>
        )}
      </div>

      {/* Outros Tipos de Oferta */}
      {offerTypes.length > 1 && (
        <div className="bg-white border-t border-gray-100 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Outros Tipos de Oferta</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {offerTypes
                .filter(type => type !== offerType)
                .map(otherType => {
                  const count = allServices.filter(s => s.offerType === otherType).length;
                  const typeColors: Record<string, string> = {
                    'GRÁTIS': 'bg-green-50 border-green-200 hover:bg-green-100',
                    'FREE': 'bg-blue-50 border-blue-200 hover:bg-blue-100',
                    'Trial': 'bg-orange-50 border-orange-200 hover:bg-orange-100',
                    'Permanente': 'bg-green-50 border-green-200 hover:bg-green-100',
                  };
                  const colorClass = typeColors[otherType] || 'bg-gray-50 border-gray-200 hover:bg-gray-100';
                  
                  return (
                    <Link
                      key={otherType}
                      href={`/oferta/${slugify(otherType)}`}
                      className={`p-4 rounded-lg border transition group ${colorClass}`}
                    >
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-700">
                        {otherType}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {count} {count === 1 ? 'serviço' : 'serviços'}
                      </p>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
