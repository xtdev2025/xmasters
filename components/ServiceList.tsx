'use client';

import { Service } from '@/lib/types';
import ServiceCard from './ServiceCard';

interface ServiceListProps {
  services: Service[];
}

export default function ServiceList({ services }: ServiceListProps) {
  if (services.length === 0) {
    return (
      <section className="bg-white rounded-2xl border border-gray-100 p-12">
        <div className="text-center py-16">
          <div className="text-6xl mb-6">🔍</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Nenhum serviço encontrado
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Tente ajustar os filtros ou termos de busca para encontrar o que procura.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
          Serviços Disponíveis
        </h2>
        <p className="text-gray-500">
          {services.length} {services.length === 1 ? 'serviço encontrado' : 'serviços encontrados'}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </section>
  );
}
