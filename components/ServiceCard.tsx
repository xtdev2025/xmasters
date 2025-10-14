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
    <article
      onClick={onClick}
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-200 hover:border-primary"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors flex-1">
            {service.name}
          </h3>
          <span className={`text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap ml-3 ${getOfferClass(service.offerType)}`}>
            {service.offerType}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {service.summary}
        </p>
        
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
            {service.category}
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
            {service.type}
          </span>
        </div>
      </div>
      
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
        <span className="text-primary font-semibold text-sm group-hover:underline">
          Ver detalhes →
        </span>
      </div>
    </article>
  );
}
