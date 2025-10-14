import { Service } from '@/lib/types';

interface ServiceBadgesProps {
  service: Service;
  size?: 'sm' | 'md';
}

export default function ServiceBadges({ service, size = 'sm' }: ServiceBadgesProps) {
  const { badges } = service;
  
  if (!badges) return null;

  const sizeClasses = size === 'sm' 
    ? 'text-xs px-2 py-1' 
    : 'text-sm px-3 py-1.5';

  const iconSize = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';

  return (
    <div className="flex flex-wrap gap-2">
      {/* Badge: Verificado pela equipe */}
      {badges.verified && (
        <span className={`inline-flex items-center gap-1 ${sizeClasses} bg-emerald-50 text-emerald-700 rounded-full font-medium border border-emerald-200`}>
          <svg className={iconSize} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Verificado
        </span>
      )}

      {/* Badge: Suporte em Português */}
      {badges.portugueseSupport && (
        <span className={`inline-flex items-center gap-1 ${sizeClasses} bg-blue-50 text-blue-700 rounded-full font-medium border border-blue-200`}>
          <svg className={iconSize} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
          </svg>
          PT-BR
        </span>
      )}

      {/* Badge: Sem Cartão de Crédito */}
      {badges.noCreditCard && (
        <span className={`inline-flex items-center gap-1 ${sizeClasses} bg-purple-50 text-purple-700 rounded-full font-medium border border-purple-200`}>
          <svg className={iconSize} fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
          </svg>
          Sem Cartão
        </span>
      )}

      {/* Badge: Anos de Experiência */}
      {badges.established && (
        <span className={`inline-flex items-center gap-1 ${sizeClasses} bg-amber-50 text-amber-700 rounded-full font-medium border border-amber-200`}>
          <svg className={iconSize} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          Desde {badges.established}
        </span>
      )}
    </div>
  );
}
