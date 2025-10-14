'use client';

import { useState, useEffect } from 'react';
import { Service } from './types';

const FAVORITES_KEY = 'xmasters_favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Carregar favoritos do localStorage
  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (error) {
        console.error('Erro ao carregar favoritos:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Salvar favoritos no localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  const isFavorite = (serviceId: number): boolean => {
    return favorites.includes(serviceId);
  };

  const toggleFavorite = (serviceId: number) => {
    setFavorites(prev => {
      if (prev.includes(serviceId)) {
        return prev.filter(id => id !== serviceId);
      } else {
        return [...prev, serviceId];
      }
    });
  };

  const addFavorite = (serviceId: number) => {
    if (!favorites.includes(serviceId)) {
      setFavorites(prev => [...prev, serviceId]);
    }
  };

  const removeFavorite = (serviceId: number) => {
    setFavorites(prev => prev.filter(id => id !== serviceId));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  const getFavoriteServices = (allServices: Service[]): Service[] => {
    return allServices.filter(service => favorites.includes(service.id));
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
    addFavorite,
    removeFavorite,
    clearFavorites,
    getFavoriteServices,
    count: favorites.length,
    isLoaded,
  };
}
