'use client';

import { Service } from '@/lib/types';

interface ServiceDetailProps {
  service: Service | null;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  if (!service) {
    return (
      <section className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Selecione um Serviço</h2>
        <p className="text-gray-600">Clique em um serviço na lista lateral para ver sua análise completa e detalhes da oferta.</p>
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
    <section className="bg-white p-6 rounded-xl shadow-lg mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 border-b pb-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 sm:mb-0">{service.name}</h2>
        <a
          href={service.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition"
        >
          Visitar Plataforma →
        </a>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${getOfferClass(service.offerType)}`}>
          Oferta: {service.offerType}
        </span>
        <span className="text-sm font-semibold px-3 py-1 rounded-full bg-gray-200 text-gray-700">
          Categoria: {service.category}
        </span>
        <span className="text-sm font-semibold px-3 py-1 rounded-full bg-gray-200 text-gray-700">
          Finalidade: {service.type}
        </span>
      </div>

      <div className="mt-4 text-gray-700 space-y-4">
        <p className="font-semibold text-lg border-l-4 border-gray-400 pl-3 italic">{service.summary}</p>

        <h3 className="text-xl font-bold text-gray-900 pt-2 border-t">Análise e Considerações</h3>
        <p>{service.detail}</p>

        <h3 className="text-xl font-bold text-gray-900 pt-2 border-t">Pontos-chave da Oferta</h3>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          {service.features.length > 0 ? (
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="ml-4 list-disc">{feature}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">Detalhes não especificados.</p>
          )}
        </div>
      </div>
    </section>
  );
}
