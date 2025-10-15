'use client';

import { useEffect } from 'react';

interface AdSenseProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  style?: React.CSSProperties;
  className?: string;
}

export default function AdSense({ slot, format = 'auto', style, className }: AdSenseProps) {
  useEffect(() => {
    try {
      // @ts-expect-error - adsbygoogle is loaded by external script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={className} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-1224933273731070" // Substitua pelo seu ID do AdSense
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

// Componente para banner horizontal (topo/rodapé)
export function AdSenseBanner({ slot, className }: { slot: string; className?: string }) {
  return (
    <AdSense
      slot={slot}
      format="horizontal"
      className={className}
      style={{ minHeight: '90px', textAlign: 'center' }}
    />
  );
}

// Componente para anúncio vertical (sidebar)
export function AdSenseVertical({ slot, className }: { slot: string; className?: string }) {
  return (
    <AdSense
      slot={slot}
      format="vertical"
      className={className}
      style={{ minHeight: '600px', textAlign: 'center' }}
    />
  );
}

// Componente para anúncio in-feed (entre conteúdo)
export function AdSenseInFeed({ slot, className }: { slot: string; className?: string }) {
  return (
    <AdSense
      slot={slot}
      format="fluid"
      className={className}
      style={{ minHeight: '250px', textAlign: 'center' }}
    />
  );
}

// Componente para anúncio responsivo padrão
export function AdSenseResponsive({ slot, className }: { slot: string; className?: string }) {
  return (
    <AdSense
      slot={slot}
      format="auto"
      className={className}
      style={{ display: 'block', minHeight: '280px', textAlign: 'center' }}
    />
  );
}
