'use client';

import { useFavorites } from '@/lib/useFavorites';

interface FavoriteButtonProps {
  serviceId: number;
  variant?: 'icon' | 'button';
  className?: string;
}

export default function FavoriteButton({ serviceId, variant = 'icon', className = '' }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite, isLoaded } = useFavorites();
  const favorite = isLoaded && isFavorite(serviceId);

  if (variant === 'button') {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleFavorite(serviceId);
        }}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
          favorite
            ? 'bg-red-50 text-red-600 border-2 border-red-200 hover:bg-red-100'
            : 'bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50'
        } ${className}`}
        aria-label={favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      >
        <svg
          className="w-5 h-5"
          fill={favorite ? 'currentColor' : 'none'}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        {favorite ? 'Favoritado' : 'Favoritar'}
      </button>
    );
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(serviceId);
      }}
      className={`p-2 rounded-full transition ${
        favorite
          ? 'bg-red-50 text-red-600 hover:bg-red-100'
          : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600'
      } ${className}`}
      aria-label={favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      title={favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
    >
      <svg
        className="w-5 h-5"
        fill={favorite ? 'currentColor' : 'none'}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
}
