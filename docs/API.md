# API e Funções Utilitárias

Este documento descreve as funções, hooks e utilitários disponíveis no projeto xmasters.

## 📋 Índice

- [Serviços (Services)](#serviços-services)
- [Hooks Customizados](#hooks-customizados)
- [Utilitários](#utilitários)
- [Tipos TypeScript](#tipos-typescript)

## Serviços (Services)

**Arquivo**: `lib/services.ts`

### getAllServices()

Carrega todos os serviços dos arquivos Markdown.

**Assinatura**:
```typescript
async function getAllServices(): Promise<Service[]>
```

**Retorno**: Array de objetos `Service`

**Uso**:
```typescript
import { getAllServices } from '@/lib/services'

const services = await getAllServices()
console.log(services.length) // 105
```

**Implementação**:
- Lê todos os arquivos `.md` de `data/services/`
- Parseia frontmatter com gray-matter
- Retorna array ordenado por ID

---

### getServiceById()

Busca um serviço específico por ID.

**Assinatura**:
```typescript
async function getServiceById(id: number): Promise<Service | null>
```

**Parâmetros**:
- `id` (number): ID do serviço

**Retorno**: Objeto `Service` ou `null` se não encontrado

**Uso**:
```typescript
const service = await getServiceById(1)
if (service) {
  console.log(service.name) // "AWS"
}
```

---

### getServiceBySlug()

Busca um serviço por slug (nome formatado para URL).

**Assinatura**:
```typescript
async function getServiceBySlug(slug: string): Promise<Service | null>
```

**Parâmetros**:
- `slug` (string): Slug do serviço (ex: "aws-amazon-web-services")

**Retorno**: Objeto `Service` ou `null`

**Uso**:
```typescript
const service = await getServiceBySlug('aws-amazon-web-services')
```

**Geração de Slug**:
```typescript
// "AWS (Amazon)" → "aws-amazon"
const slug = name
  .toLowerCase()
  .replace(/[^\w\s-]/g, '')
  .replace(/\s+/g, '-')
```

---

### getUniqueCategories()

Retorna lista de categorias únicas dos serviços.

**Assinatura**:
```typescript
function getUniqueCategories(services: Service[]): string[]
```

**Parâmetros**:
- `services` (Service[]): Array de serviços

**Retorno**: Array de strings com categorias únicas

**Uso**:
```typescript
const categories = getUniqueCategories(services)
// ["Cloud & VPS", "Hospedagem Estática", ...]
```

---

### getUniqueTypes()

Retorna lista de tipos únicos dos serviços.

**Assinatura**:
```typescript
function getUniqueTypes(services: Service[]): string[]
```

**Parâmetros**:
- `services` (Service[]): Array de serviços

**Retorno**: Array de strings com tipos únicos

**Uso**:
```typescript
const types = getUniqueTypes(services)
// ["Infraestrutura", "Frontend/Serverless", ...]
```

---

### getServicesByCategory()

Filtra serviços por categoria.

**Assinatura**:
```typescript
function getServicesByCategory(
  services: Service[], 
  category: string
): Service[]
```

**Parâmetros**:
- `services` (Service[]): Array de serviços
- `category` (string): Nome da categoria

**Retorno**: Array filtrado de serviços

**Uso**:
```typescript
const cloudServices = getServicesByCategory(services, 'Cloud & VPS')
```

---

### getServicesByOfferType()

Filtra serviços por tipo de oferta.

**Assinatura**:
```typescript
function getServicesByOfferType(
  services: Service[], 
  offerType: OfferType
): Service[]
```

**Parâmetros**:
- `services` (Service[]): Array de serviços
- `offerType` (OfferType): Tipo de oferta

**Retorno**: Array filtrado de serviços

**Uso**:
```typescript
const freeServices = getServicesByOfferType(services, 'GRÁTIS PERMANENTE')
```

---

### searchServices()

Busca serviços por texto.

**Assinatura**:
```typescript
function searchServices(services: Service[], query: string): Service[]
```

**Parâmetros**:
- `services` (Service[]): Array de serviços
- `query` (string): Texto de busca

**Retorno**: Array de serviços que correspondem à busca

**Busca em**:
- Nome do serviço
- Summary
- Categoria
- Tipo
- Conteúdo (opcional)

**Uso**:
```typescript
const results = searchServices(services, 'aws')
// Retorna AWS, AWS Route 53, etc.
```

**Implementação**:
```typescript
function searchServices(services: Service[], query: string): Service[] {
  const lowerQuery = query.toLowerCase()
  
  return services.filter(service =>
    service.name.toLowerCase().includes(lowerQuery) ||
    service.summary.toLowerCase().includes(lowerQuery) ||
    service.category.toLowerCase().includes(lowerQuery) ||
    service.type.toLowerCase().includes(lowerQuery)
  )
}
```

---

## Hooks Customizados

### useFavorites()

**Arquivo**: `lib/useFavorites.ts`

Hook para gerenciar favoritos do usuário.

**Assinatura**:
```typescript
function useFavorites(): UseFavoritesReturn

interface UseFavoritesReturn {
  favorites: number[]
  addFavorite: (id: number) => void
  removeFavorite: (id: number) => void
  isFavorite: (id: number) => boolean
  toggleFavorite: (id: number) => void
  clearFavorites: () => void
}
```

**Uso**:
```typescript
'use client'
import { useFavorites } from '@/lib/useFavorites'

function ServiceCard({ service }) {
  const { favorites, toggleFavorite, isFavorite } = useFavorites()
  
  const handleClick = () => {
    toggleFavorite(service.id)
  }
  
  return (
    <button onClick={handleClick}>
      {isFavorite(service.id) ? '❤️' : '🤍'}
    </button>
  )
}
```

**Métodos**:

#### favorites
Array com IDs dos serviços favoritos.

```typescript
console.log(favorites) // [1, 5, 12, 31]
```

#### addFavorite(id)
Adiciona um serviço aos favoritos.

```typescript
addFavorite(1) // Adiciona AWS
```

#### removeFavorite(id)
Remove um serviço dos favoritos.

```typescript
removeFavorite(1) // Remove AWS
```

#### isFavorite(id)
Verifica se um serviço está nos favoritos.

```typescript
if (isFavorite(1)) {
  console.log('AWS é favorito')
}
```

#### toggleFavorite(id)
Adiciona ou remove dependendo do estado atual.

```typescript
toggleFavorite(1) // Se está, remove. Se não está, adiciona.
```

#### clearFavorites()
Remove todos os favoritos.

```typescript
clearFavorites() // favorites = []
```

**Persistência**:
- Armazena em `localStorage` com key `xmasters-favorites`
- JSON stringified array de IDs
- Sincroniza automaticamente

```javascript
// localStorage
{
  "xmasters-favorites": "[1,5,12,31]"
}
```

---

## Utilitários

**Arquivo**: `lib/utils.ts`

### generateSlug()

Gera um slug URL-friendly a partir de uma string.

**Assinatura**:
```typescript
function generateSlug(text: string): string
```

**Parâmetros**:
- `text` (string): Texto para converter

**Retorno**: String slugificada

**Uso**:
```typescript
generateSlug('AWS (Amazon Web Services)')
// "aws-amazon-web-services"

generateSlug('Google Cloud Platform - GCP')
// "google-cloud-platform-gcp"
```

**Transformações**:
1. Lowercase
2. Remove caracteres especiais
3. Substitui espaços por hífens
4. Remove hífens duplicados
5. Trim hífens nas extremidades

---

### formatDate()

Formata uma data para exibição em português.

**Assinatura**:
```typescript
function formatDate(date: Date | string): string
```

**Parâmetros**:
- `date` (Date | string): Data para formatar

**Retorno**: String formatada

**Uso**:
```typescript
formatDate(new Date('2024-01-15'))
// "15 de janeiro de 2024"

formatDate('2024-12-25')
// "25 de dezembro de 2024"
```

---

### truncate()

Trunca um texto com limite de caracteres.

**Assinatura**:
```typescript
function truncate(text: string, maxLength: number): string
```

**Parâmetros**:
- `text` (string): Texto para truncar
- `maxLength` (number): Tamanho máximo

**Retorno**: Texto truncado com "..."

**Uso**:
```typescript
truncate('Este é um texto muito longo', 10)
// "Este é um..."

truncate('Curto', 10)
// "Curto"
```

---

### debounce()

Cria uma função debounced para otimizar performance.

**Assinatura**:
```typescript
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void
```

**Parâmetros**:
- `func` (Function): Função para debounce
- `wait` (number): Tempo de espera em ms

**Retorno**: Função debounced

**Uso**:
```typescript
const handleSearch = debounce((query: string) => {
  console.log('Searching:', query)
}, 300)

// Chama várias vezes rápido
handleSearch('a')
handleSearch('aw')
handleSearch('aws')
// Só executa console.log depois de 300ms sem novas chamadas
```

**Casos de Uso**:
- Busca em tempo real
- Resize events
- Scroll events
- Auto-save

---

### cn() / classNames()

Combina classes CSS condicionalmente (se implementado com clsx/classnames).

**Assinatura**:
```typescript
function cn(...inputs: ClassValue[]): string
```

**Uso**:
```typescript
cn('base-class', { 'active': isActive, 'disabled': isDisabled })
// Se isActive=true e isDisabled=false: "base-class active"

cn('btn', isPrimary && 'btn-primary', isLarge && 'btn-lg')
// Se isPrimary=true e isLarge=false: "btn btn-primary"
```

---

## Tipos TypeScript

**Arquivo**: `lib/types.ts`

### Service

Interface principal representando um serviço.

```typescript
interface Service {
  id: number
  name: string
  offerType: OfferType
  type: string
  category: string
  url: string
  summary: string
  content: string
  features?: string[]
  tags?: string[]
  country?: string
  slug?: string
}
```

**Campos**:
- `id`: Identificador único
- `name`: Nome do serviço
- `offerType`: Tipo de oferta gratuita
- `type`: Tipo técnico (Infraestrutura, etc.)
- `category`: Categoria principal
- `url`: Link para o serviço
- `summary`: Resumo breve
- `content`: Descrição completa (Markdown)
- `features`: Lista de recursos (opcional)
- `tags`: Tags customizadas (opcional)
- `country`: País/região (opcional)
- `slug`: Slug para URL (opcional)

---

### OfferType

Type union dos tipos de oferta disponíveis.

```typescript
type OfferType =
  | 'GRÁTIS PERMANENTE'
  | 'FREE TIER'
  | 'TRIAL'
  | 'FREE TIER + TRIAL'
  | 'TRIAL/Garantia'
```

**Uso**:
```typescript
const offerType: OfferType = 'FREE TIER'
```

---

### FilterState

Estado dos filtros da aplicação.

```typescript
interface FilterState {
  category: string
  type: string
  offerType: string
  search: string
}
```

**Uso**:
```typescript
const [filters, setFilters] = useState<FilterState>({
  category: '',
  type: '',
  offerType: '',
  search: ''
})
```

---

### ServiceCardProps

Props do componente ServiceCard.

```typescript
interface ServiceCardProps {
  service: Service
  onClick?: () => void
  className?: string
}
```

---

### ServiceDetailProps

Props do componente ServiceDetail.

```typescript
interface ServiceDetailProps {
  service: Service
  onClose: () => void
}
```

---

### OfferChartProps

Props do componente OfferChart.

```typescript
interface OfferChartProps {
  services: Service[]
  height?: number
  width?: number
}
```

---

### PaginationProps

Props do componente Pagination.

```typescript
interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  itemsPerPage?: number
}
```

---

## Exemplos de Uso Avançado

### Filtros Combinados

```typescript
import { getAllServices, searchServices } from '@/lib/services'

// Carregar todos os serviços
const allServices = await getAllServices()

// Aplicar filtros
let filtered = allServices

// Filtro por categoria
if (category) {
  filtered = filtered.filter(s => s.category === category)
}

// Filtro por tipo
if (type) {
  filtered = filtered.filter(s => s.type === type)
}

// Filtro por oferta
if (offerType) {
  filtered = filtered.filter(s => s.offerType === offerType)
}

// Busca
if (search) {
  filtered = searchServices(filtered, search)
}

console.log(filtered) // Serviços filtrados
```

---

### Paginação

```typescript
const ITEMS_PER_PAGE = 18

function paginateServices(services: Service[], page: number) {
  const start = (page - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE
  return services.slice(start, end)
}

const page1 = paginateServices(services, 1) // Serviços 1-18
const page2 = paginateServices(services, 2) // Serviços 19-36
```

---

### Estatísticas

```typescript
function getStats(services: Service[]) {
  const byCategory = services.reduce((acc, service) => {
    acc[service.category] = (acc[service.category] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  const byOfferType = services.reduce((acc, service) => {
    acc[service.offerType] = (acc[service.offerType] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  return {
    total: services.length,
    byCategory,
    byOfferType
  }
}

const stats = getStats(allServices)
console.log(stats)
// {
//   total: 105,
//   byCategory: { 'Cloud & VPS': 15, ... },
//   byOfferType: { 'FREE TIER': 40, ... }
// }
```

---

## API Futura

### REST API (Planejado)

Endpoints planejados para versão futura:

```
GET /api/services           # Listar todos os serviços
GET /api/services/:id       # Obter serviço por ID
GET /api/services/:slug     # Obter serviço por slug
GET /api/categories         # Listar categorias
GET /api/search?q=aws       # Buscar serviços
POST /api/favorites         # Adicionar favorito (requer auth)
DELETE /api/favorites/:id   # Remover favorito (requer auth)
GET /api/stats              # Estatísticas gerais
```

**Documentação**: Swagger/OpenAPI (futuro)

---

## Contribuindo

Para adicionar novas funções utilitárias:

1. Adicione em `lib/utils.ts`
2. Exporte a função
3. Adicione tipos TypeScript
4. Documente com JSDoc
5. Atualize este arquivo (API.md)

**Exemplo**:
```typescript
/**
 * Capitaliza a primeira letra de cada palavra
 * @param text - Texto para capitalizar
 * @returns Texto capitalizado
 */
export function capitalize(text: string): string {
  return text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}
```

---

**Para mais detalhes, veja o código-fonte com comentários JSDoc.**
