 'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Service } from '@/lib/types';

ChartJS.register(ArcElement, Tooltip, Legend);

interface OfferChartProps {
  services: Service[];
}

const offerColors: Record<string, string> = {
  'GRÁTIS PERMANENTE': '#86A382',
  'FREE TIER': '#A39182',
  'TRIAL': '#D4C7B8',
  'FREE TIER + TRIAL': '#BFB2A3',
  'TRIAL/Garantia': '#D4C7B8',
};

export default function OfferChart({ services }: OfferChartProps) {
  const offerCounts = services.reduce((acc: Record<string, number>, service) => {
    acc[service.offerType] = (acc[service.offerType] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(offerCounts);
  const data = Object.values(offerCounts);
  const backgroundColors = labels.map(label => offerColors[label] || '#BFB2A3');

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Distribuição por Tipo de Oferta',
        data,
        backgroundColor: backgroundColors,
        borderColor: '#FDFBF8',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            size: 12,
          },
          boxWidth: 15,
          padding: 15,
        },
      },
      tooltip: {
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: function(context: any) {
            let label = context.label || '';
            if (label) {
              label = label.length > 16 ? label.substring(0, 16) + '...' : label;
              label += ': ';
            }
            if (context.parsed !== null) {
              label += context.parsed;
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="chart-container" style={{ position: 'relative', width: '100%', maxWidth: '350px', margin: '0 auto', height: '300px', maxHeight: '350px' }}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
}
