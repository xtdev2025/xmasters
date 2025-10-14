'use client';

import { Service } from '@/lib/types';
import ServiceBadges from '@/components/ServiceBadges';
import ServiceTags from '@/components/ServiceTags';

interface ServiceDetailProps {
  service: Service | null;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  if (!service) {
    return (
      <section className="bg-white rounded-lg shadow-md p-8 mb-8 border border-gray-200">
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Selecione um Serviço
          </h2>
          <p className="text-gray-600 text-lg">
            Clique em um card abaixo para ver os detalhes completos da oferta
          </p>
        </div>
      </section>
    );
  }

  const getOfferClass = (offer: string) => {
    if (offer === 'GRÁTIS PERMANENTE') return 'offer-permanent';
    if (offer.includes('FREE TIER')) return 'offer-freetier';
    if (offer.includes('TRIAL')) return 'offer-trial';
    return 'offer-combined';
  };

  return (
    <section className="bg-white rounded-2xl border border-gray-100 mb-10 overflow-hidden">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 p-8 md:p-12 border-b border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">{service.name}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{service.summary}</p>
          </div>
          <a
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition whitespace-nowrap"
          >
            Acessar Plataforma
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      <div className="p-8 md:p-12">
        <div className="flex flex-wrap gap-2 mb-6">
          <span className={`text-xs font-semibold px-4 py-2 rounded-md ${getOfferClass(service.offerType)}`}>
            {service.offerType}
          </span>
          <span className="text-xs font-medium px-4 py-2 rounded-md bg-gray-50 text-gray-600 border border-gray-100">
            {service.category}
          </span>
          <span className="text-xs font-medium px-4 py-2 rounded-md bg-gray-50 text-gray-600 border border-gray-100">
            {service.type}
          </span>
        </div>

        {/* Badges de Verificação */}
        {service.badges && (
          <div className="mb-6">
            <ServiceBadges service={service} size="md" />
          </div>
        )}

        {/* Tags */}
        {service.tags && service.tags.length > 0 && (
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Características Destacadas</h4>
            <ServiceTags tags={service.tags} maxTags={10} size="md" />
          </div>
        )}

        {/* Featured Reason */}
        {service.featured && service.featuredReason && (
          <div className="mb-8 p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-r-lg">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div>
                <div className="font-semibold text-amber-900 mb-1">⚡ Destaque da Semana</div>
                <p className="text-sm text-amber-800">{service.featuredReason}</p>
              </div>
            </div>
          </div>
        )}

        <div className="prose prose-lg max-w-none space-y-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Análise e Considerações
            </h3>
            <p className="text-gray-700 leading-relaxed">{service.detail}</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-5">
              Recursos Principais
            </h3>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              {service.features.length > 0 ? (
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700 leading-relaxed flex-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Detalhes não especificados.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
