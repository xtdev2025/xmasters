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
      <section className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Serviços Encontrados</h2>
        <div className="text-center py-8">
          <h3 className="text-xl font-semibold text-gray-700">Nenhum serviço corresponde aos filtros.</h3>
          <p className="text-gray-500 mt-2">Tente ser menos específico ou ajustar os termos de busca.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Serviços Encontrados</h2>
      <div className="space-y-4 max-h-[800px] overflow-y-auto custom-scrollbar">
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
