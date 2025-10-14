'use client';

import { Service } from '@/lib/types';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  const getOfferClass = (offer: string) => {
    if (offer === 'GRÁTIS PERMANENTE') return 'offer-permanent';
    if (offer.includes('FREE TIER')) return 'offer-freetier';
    if (offer.includes('TRIAL')) return 'offer-trial';
    return 'offer-combined';
  };

  return (
    <button
      onClick={onClick}
      className="text-left w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-sm transition duration-150 ease-in-out border-l-4 border-secondary"
    >
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${getOfferClass(service.offerType)}`}>
          {service.offerType}
        </span>
      </div>
      <p className="text-sm text-gray-600">{service.summary}</p>
      <div className="mt-2 text-xs flex gap-3 flex-wrap">
        <span className="font-medium text-primary">Categoria: {service.category}</span>
        <span className="font-medium text-secondary">Finalidade: {service.type}</span>
      </div>
    </button>
  );
}
