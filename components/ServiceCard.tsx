'use client';

import Link from 'next/link';
import { Service } from '@/lib/types';
import { slugify } from '@/lib/utils';
import FavoriteButton from '@/components/FavoriteButton';
import ServiceBadges from '@/components/ServiceBadges';
import ServiceTags from '@/components/ServiceTags';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const getOfferClass = (offer: string) => {
    if (offer === 'GRÁTIS PERMANENTE') return 'offer-permanent';
    if (offer.includes('FREE TIER')) return 'offer-freetier';
    if (offer.includes('TRIAL')) return 'offer-trial';
    return 'offer-combined';
  };

  return (
    <Link href={`/servicos/${slugify(service.name)}`}>
      <article className="group bg-white rounded-xl border border-gray-100 hover:border-gray-300 transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-xl h-full flex flex-col card-hover relative"
      >
      {/* Featured indicator */}
      {service.featured && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg shadow-md flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            DESTAQUE
          </div>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors flex-1 leading-tight pr-2">
            {service.name}
          </h3>
          <div className="flex items-center gap-2 flex-shrink-0">
            <FavoriteButton serviceId={service.id} variant="icon" />
            <span className={`text-xs font-semibold px-3 py-1 rounded-md whitespace-nowrap ${getOfferClass(service.offerType)}`}>
              {service.offerType}
            </span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed text-sm">
          {service.summary}
        </p>
        
        {/* Badges de Verificação */}
        <div className="mb-3">
          <ServiceBadges service={service} size="sm" />
        </div>

        {/* Tags */}
        <div className="mb-4">
          <ServiceTags tags={service.tags} maxTags={2} size="sm" />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-50 text-gray-600 px-3 py-1 rounded-md text-xs font-medium border border-gray-100">
            {service.category}
          </span>
          <span className="bg-gray-50 text-gray-600 px-3 py-1 rounded-md text-xs font-medium border border-gray-100">
            {service.type}
          </span>
        </div>
      </div>
      
        <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 mt-auto">
          <span className="text-gray-700 font-medium text-sm group-hover:text-gray-900 inline-flex items-center gap-1">
            Ver detalhes 
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}
