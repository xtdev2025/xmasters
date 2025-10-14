'use client';

import Link from 'next/link';
import { Service } from '@/lib/types';
import ServiceBadges from './ServiceBadges';
import ServiceTags from './ServiceTags';

interface FeaturedServicesProps {
  services: Service[];
}

export default function FeaturedServices({ services }: FeaturedServicesProps) {
  const featuredServices = services.filter(s => s.featured).slice(0, 3);

  if (featuredServices.length === 0) return null;

  const getOfferTypeColor = (offerType: string) => {
    switch (offerType.toLowerCase()) {
      case 'permanente':
        return 'from-emerald-500 to-teal-500';
      case 'trial':
        return 'from-orange-500 to-amber-500';
      case 'freemium':
        return 'from-blue-500 to-indigo-500';
      case 'combinado':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                ⚡ Destaques da Semana
              </h2>
            </div>
            <p className="text-gray-600">
              Serviços selecionados pela nossa equipe com ofertas imperdíveis
            </p>
          </div>
        </div>

        {/* Featured Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <Link
              key={service.id}
              href={`/servicos/${service.id}`}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
            >
              {/* Featured Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  DESTAQUE
                </div>
              </div>

              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${getOfferTypeColor(service.offerType)} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800 rounded-full">
                    {service.offerType}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {service.name}
                </h3>

                {/* Featured Reason */}
                {service.featuredReason && (
                  <div className="mb-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <p className="text-xs text-amber-800 font-medium">
                        {service.featuredReason}
                      </p>
                    </div>
                  </div>
                )}

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {service.summary}
                </p>

                {/* Badges */}
                <div className="mb-3">
                  <ServiceBadges service={service} size="sm" />
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <ServiceTags tags={service.tags} maxTags={2} size="sm" />
                </div>

                {/* Category */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500 font-medium">
                    {service.category}
                  </span>
                  <span className="text-emerald-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ver detalhes
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
