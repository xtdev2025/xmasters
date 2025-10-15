import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllServices } from '@/lib/services';
import { slugify } from '@/lib/utils';
import Comments from '@/components/Comments';
import FavoriteButton from '@/components/FavoriteButton';
import ShareButton from '@/components/ShareButton';
import { AdSenseBanner, AdSenseInFeed } from '@/components/AdSense';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  
  return services.map((service) => ({
    slug: slugify(service.name),
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const services = getAllServices();
  const service = services.find((s) => slugify(s.name) === slug);

  if (!service) {
    return {
      title: 'Serviço não encontrado',
    };
  }

  return {
    title: `${service.name} | xmasters - Guia de Serviços Web`,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const services = getAllServices();
  const service = services.find((s) => slugify(s.name) === slug);

  if (!service) {
    notFound();
  }

  const getOfferClass = (offer: string) => {
    if (offer === 'GRÁTIS PERMANENTE') return 'offer-permanent';
    if (offer.includes('FREE TIER')) return 'offer-freetier';
    if (offer.includes('TRIAL')) return 'offer-trial';
    return 'offer-combined';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-900 transition">
              Início
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link 
              href={`/categoria/${service.category.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`} 
              className="text-gray-500 hover:text-gray-900 transition"
            >
              {service.category}
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-medium">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero do Serviço */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`text-xs font-semibold px-4 py-2 rounded-md ${getOfferClass(service.offerType)}`}>
                {service.offerType}
              </span>
              <span className="text-xs font-medium px-4 py-2 rounded-md bg-white text-gray-600 border border-gray-200">
                {service.category}
              </span>
              <span className="text-xs font-medium px-4 py-2 rounded-md bg-white text-gray-600 border border-gray-200">
                {service.type}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              {service.name}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {service.summary}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition"
              >
                Acessar Plataforma
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              <FavoriteButton serviceId={service.id} variant="button" />
              
              <ShareButton
                url={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://xmasters.dev'}/servicos/${slug}`}
                title={service.name}
                description={service.summary}
                variant="button"
              />
            </div>
          </div>
        </div>
      </div>

      {/* AdSense Banner - Após Hero */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AdSenseBanner slot="XXXXXXXXXX" />
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl space-y-10">
          {/* Análise */}
          <section className="bg-white rounded-2xl border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Análise e Considerações
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {service.detail}
            </p>
          </section>

          {/* AdSense In-Article */}
          <AdSenseInFeed slot="XXXXXXXXXX" />

          {/* Recursos Principais */}
          <section className="bg-white rounded-2xl border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Recursos Principais
            </h2>
            {service.features.length > 0 ? (
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
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
          </section>

          {/* Comentários */}
          <Comments serviceId={service.id} />
        </div>
      </div>
    </div>
  );
}
