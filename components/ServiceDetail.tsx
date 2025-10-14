'use client';

import { Service } from '@/lib/types';

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
    <section className="bg-white rounded-lg shadow-md mb-8 overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-primary to-primary-dark p-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-4xl font-bold mb-2">{service.name}</h2>
            <p className="text-white/90 text-lg">{service.summary}</p>
          </div>
          <a
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition whitespace-nowrap shadow-lg"
          >
            Acessar Plataforma →
          </a>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-3 mb-6">
          <span className={`text-sm font-bold px-4 py-2 rounded-full ${getOfferClass(service.offerType)}`}>
            {service.offerType}
          </span>
          <span className="text-sm font-semibold px-4 py-2 rounded-full bg-gray-100 text-gray-700">
            {service.category}
          </span>
          <span className="text-sm font-semibold px-4 py-2 rounded-full bg-gray-100 text-gray-700">
            {service.type}
          </span>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="w-1 h-6 bg-primary mr-3 rounded"></span>
              Análise e Considerações
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">{service.detail}</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-primary mr-3 rounded"></span>
              Recursos Principais
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              {service.features.length > 0 ? (
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-3 mt-1 text-lg">✓</span>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">Detalhes não especificados.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
