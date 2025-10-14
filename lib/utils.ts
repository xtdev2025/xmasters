/**
 * Converte uma string para um slug amigável para URL
 * @param text - Texto a ser convertido
 * @returns Slug formatado
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // Normaliza caracteres unicode
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/[^\w\-]+/g, '') // Remove caracteres especiais
    .replace(/\-\-+/g, '-') // Substitui múltiplos hífens por um
    .replace(/^-+/, '') // Remove hífens do início
    .replace(/-+$/, ''); // Remove hífens do final
}

/**
 * Formata uma data para exibição
 * @param date - Data a ser formatada
 * @returns Data formatada em pt-BR
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
