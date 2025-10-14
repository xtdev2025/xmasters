export interface Service {
  id: number;
  name: string;
  offerType: string;
  type: string;
  category: string;
  url: string;
  summary: string;
  detail: string;
  features: string[];
  // Novos campos opcionais
  tags?: string[]; // Ex: ["Ideal para Startups", "Fácil de usar", "Suporte PT-BR"]
  badges?: {
    verified?: boolean; // Testado pela equipe
    portugueseSupport?: boolean; // Suporte em português
    noCreditCard?: boolean; // Não precisa de cartão
    established?: number; // Ano de fundação
  };
  featured?: boolean; // Destaque da semana
  featuredReason?: string; // Motivo do destaque
}
