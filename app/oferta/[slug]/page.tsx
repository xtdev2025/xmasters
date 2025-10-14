import { Metadata } from 'next';
import Link from 'next/link';
import { getAllServices, getOfferTypes } from '@/lib/services';
import { slugify } from '@/lib/utils';
import OfferList from '@/components/OfferList';

interface OfferPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const offerTypes = getOfferTypes();
  return offerTypes.map(offerType => ({
    slug: slugify(offerType),
  }));
}

export async function generateMetadata({ params }: OfferPageProps): Promise<Metadata> {
  const { slug } = await params;
  const offerTypes = getOfferTypes();
  const offerType = offerTypes.find(o => slugify(o) === slug);
  
  return {
    title: `${offerType || 'Tipo de Oferta'} | xmasters`,
    description: `Serviços web com oferta ${offerType || 'selecionada'}`,
  };
}

// Função para obter cor e descrição do tipo de oferta
function getOfferTypeInfo(offerType: string) {
  const info: Record<string, { color: string; badge: string; description: string }> = {
    'Permanente': {
      color: 'bg-green-100 text-green-800 border-green-200',
      badge: 'bg-green-500',
      description: 'Serviços com plano gratuito permanente, sem prazo de expiração'
    },
    'Free Tier': {
      color: 'bg-blue-100 text-blue-800 border-blue-200',
      badge: 'bg-blue-500',
      description: 'Planos gratuitos com recursos limitados, mas funcionais para projetos pequenos'
    },
    'Trial': {
      color: 'bg-orange-100 text-orange-800 border-orange-200',
      badge: 'bg-orange-500',
      description: 'Período de testes gratuito com acesso completo ou parcial às funcionalidades'
    },
    'Freemium': {
      color: 'bg-purple-100 text-purple-800 border-purple-200',
      badge: 'bg-purple-500',
      description: 'Versão básica gratuita com opção de upgrade para recursos avançados'
    },
  };
  
  return info[offerType] || {
    color: 'bg-gray-100 text-gray-800 border-gray-200',
    badge: 'bg-gray-500',
    description: 'Tipo de oferta especial'
  };
}

export default async function OfferPage({ params }: OfferPageProps) {
  const { slug } = await params;
  const allServices = getAllServices();
  const offerTypes = getOfferTypes();
  
  // Encontrar o tipo de oferta pelo slug
  const offerType = offerTypes.find(o => slugify(o) === slug);
  
  if (!offerType) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tipo de oferta não encontrado</h1>
          <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    );
  }
  
  // Filtrar serviços pelo tipo de oferta
  const filteredServices = allServices.filter(service => service.offerType === offerType);
  const offerInfo = getOfferTypeInfo(offerType);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition">
              Início
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500">Tipos de Oferta</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-medium">
              {offerType}
            </span>
          </nav>
        </div>
      </div>

      {/* Header do Tipo de Oferta - Melhorado */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 border-b border-gray-200">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="max-w-4xl">
            {/* Badge com animação */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="relative flex h-4 w-4">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${offerInfo.badge}`}></span>
                <span className={`relative inline-flex rounded-full h-4 w-4 ${offerInfo.badge}`}></span>
              </span>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Tipo de Oferta
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              {offerType}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
              {offerInfo.description}
            </p>

            {/* Stats */}
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${offerInfo.color} border-2`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">
                {filteredServices.length} {filteredServices.length === 1 ? 'serviço disponível' : 'serviços disponíveis'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo da Oferta com Paginação */}
      <OfferList 
        services={filteredServices}
        offerType={offerType}
        allServices={allServices}
        offerTypes={offerTypes}
      />
    </div>
  );
}
