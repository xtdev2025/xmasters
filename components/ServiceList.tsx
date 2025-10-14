'use client';

import { Service } from '@/lib/types';
import ServiceCard from './ServiceCard';

interface ServiceListProps {
  services: Service[];
  onServiceClick: (service: Service) => void;
}

export default function ServiceList({ services, onServiceClick }: ServiceListProps) {
  if (services.length === 0) {
    return (
      <section className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">
            Nenhum serviço encontrado
          </h3>
          <p className="text-gray-500">
            Tente ajustar os filtros ou termos de busca para encontrar o que procura.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Serviços Disponíveis
        </h2>
        <p className="text-gray-600">
          {services.length} {services.length === 1 ? 'serviço encontrado' : 'serviços encontrados'}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <ServiceCard
            key={service.id}
            service={service}
            onClick={() => onServiceClick(service)}
          />
        ))}
      </div>
    </section>
  );
}
