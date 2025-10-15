'use client';

import { usePagination } from '@/components/Pagination';
import Pagination from '@/components/Pagination';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';
import { slugify } from '@/lib/utils';
import { Service } from '@/lib/types';
import { AdSenseInFeed } from '@/components/AdSense';

interface CategoryListProps {
  category: string;
  services: Service[];
  allServices: Service[];
  categories: string[];
}

export default function CategoryList({ category, services, allServices, categories }: CategoryListProps) {
  const { currentPage, totalPages, currentItems, goToPage } = usePagination(services, 12);

  return (
    <>
      {/* Lista de Serviços */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {services.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                Mostrando <span className="font-semibold">{(currentPage - 1) * 12 + 1}</span> - <span className="font-semibold">{Math.min(currentPage * 12, services.length)}</span> de <span className="font-semibold">{services.length}</span> serviços
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItems.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            
            {/* Paginação */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
            />

            {/* AdSense In-Feed - Após Serviços */}
            {services.length > 6 && currentPage === 1 && (
              <div className="mt-12">
                <AdSenseInFeed slot="4114286270" />
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-6">Nenhum serviço encontrado nesta categoria.</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition"
            >
              Ver todos os serviços
            </Link>
          </div>
        )}
      </div>

      {/* Outras Categorias */}
      {categories.length > 1 && (
        <div className="bg-white border-t border-gray-100 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Explorar Outras Categorias</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories
                .filter(c => c !== category)
                .map(otherCategory => {
                  const count = allServices.filter(s => s.category === otherCategory).length;
                  return (
                    <Link
                      key={otherCategory}
                      href={`/categoria/${slugify(otherCategory)}`}
                      className="group p-6 bg-gray-50 hover:bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition"
                    >
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700">
                        {otherCategory}
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
