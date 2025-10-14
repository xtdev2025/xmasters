import { Metadata } from 'next';
import Link from 'next/link';
import { getAllServices, getCategories } from '@/lib/services';
import { slugify } from '@/lib/utils';
import CategoryList from '@/components/CategoryList';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map(category => ({
    slug: slugify(category),
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categories = getCategories();
  const category = categories.find(c => slugify(c) === slug);
  
  return {
    title: `${category || 'Categoria'} | xmasters`,
    description: `Serviços web gratuitos na categoria ${category || 'selecionada'}`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const allServices = getAllServices();
  const categories = getCategories();
  
  // Encontrar a categoria pelo slug
  const category = categories.find(c => slugify(c) === slug);
  
  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Categoria não encontrada</h1>
          <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    );
  }
  
  // Filtrar serviços pela categoria
  const filteredServices = allServices.filter(service => service.category === category);
  
  // Estatísticas da categoria
  const stats = {
    total: filteredServices.length,
    permanente: filteredServices.filter(s => s.offerType.includes('Permanente') || s.offerType.includes('GRÁTIS')).length,
    freeTier: filteredServices.filter(s => s.offerType.includes('FREE')).length,
    trial: filteredServices.filter(s => s.offerType.includes('Trial')).length,
  };
  
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
            <span className="text-gray-500">Categorias</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-medium">
              {category}
            </span>
          </nav>
        </div>
      </div>

      {/* Header da Categoria - Melhorado */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 border-b border-gray-200">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="max-w-4xl">
            {/* Ícone da Categoria */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              {category}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Explore <strong>{filteredServices.length} {filteredServices.length === 1 ? 'serviço' : 'serviços'}</strong> nesta categoria com planos gratuitos e trials
            </p>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
                <div className="text-sm text-gray-600">Total de Serviços</div>
              </div>
              {stats.permanente > 0 && (
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">{stats.permanente}</div>
                  <div className="text-sm text-gray-600">Grátis Permanente</div>
                </div>
              )}
              {stats.freeTier > 0 && (
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">{stats.freeTier}</div>
                  <div className="text-sm text-gray-600">Free Tier</div>
                </div>
              )}
              {stats.trial > 0 && (
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-orange-600">{stats.trial}</div>
                  <div className="text-sm text-gray-600">Trial</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo da Categoria com Paginação */}
      <CategoryList 
        services={filteredServices}
        category={category}
        allServices={allServices}
        categories={categories}
      />
    </div>
  );
}
