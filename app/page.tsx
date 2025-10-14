import { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import { getAllServices, getCategories, getOfferTypes, getTypes } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Guia Completo de Serviços Web: 100+ Plataformas',
  description: 'Explore a lista estendida de serviços essenciais, filtrando por tipo de oferta e categoria para ver a análise completa.',
};

export default function Page() {
  const services = getAllServices();
  const categories = getCategories();
  const offerTypes = getOfferTypes();
  const types = getTypes();

  return (
    <HomePage
      initialServices={services}
      categories={categories}
      offerTypes={offerTypes}
      types={types}
    />
  );
}
