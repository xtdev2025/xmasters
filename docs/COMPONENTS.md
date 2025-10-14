# Documentação de Componentes

Este documento descreve todos os componentes React do projeto xmasters, suas props, uso e exemplos.

## 📋 Índice

- [Componentes Principais](#componentes-principais)
- [Componentes de UI](#componentes-de-ui)
- [Componentes de Funcionalidade](#componentes-de-funcionalidade)
- [Hooks Customizados](#hooks-customizados)

## Componentes Principais

### HomePage

**Arquivo**: `components/HomePage.tsx`

Componente principal que orquestra toda a página inicial com filtros, busca e lista de serviços.

**Tipo**: Client Component (`'use client'`)

**Estado Gerenciado**:
- Filtros (categoria, tipo, oferta)
- Busca
- Serviço selecionado
- Paginação

**Props**: Nenhuma (recebe dados via props de page.tsx)

**Exemplo de Uso**:
```tsx
import HomePage from '@/components/HomePage'

export default function Page() {
  return <HomePage />
}
```

**Funcionalidades**:
- ✅ Filtros múltiplos combinados
- ✅ Busca em tempo real
- ✅ Exibição de gráfico
- ✅ Contador de resultados
- ✅ Modal de detalhes do serviço

---

### Header

**Arquivo**: `components/Header.tsx`

Cabeçalho fixo da aplicação com navegação.

**Tipo**: Client Component

**Props**: Nenhuma

**Estrutura**:
```tsx
<header>
  <Logo>xmasters</Logo>
  <Nav>
    <Link href="/">Serviços</Link>
    <Link href="/categorias">Categorias</Link>
    <Link href="/sobre">Sobre</Link>
  </Nav>
</header>
```

**Estilo**: 
- Fundo vermelho (#C4170C)
- Fixo no topo
- Responsivo

---

### Footer

**Arquivo**: `components/Footer.tsx`

Rodapé da aplicação com links e informações.

**Tipo**: Server Component

**Props**: Nenhuma

**Estrutura**:
```tsx
<footer>
  <Column>Sobre o Projeto</Column>
  <Column>Categorias</Column>
  <Column>Recursos</Column>
  <Column>Links Úteis</Column>
  <Copyright />
</footer>
```

**Características**:
- 4 colunas em desktop
- Stack em mobile
- Fundo escuro (#212529)
- Links organizados

---

### Sidebar

**Arquivo**: `components/Sidebar.tsx`

Barra lateral com navegação e anúncios.

**Tipo**: Client Component

**Props**:
```typescript
interface SidebarProps {
  currentCategory?: string
  currentOfferType?: string
}
```

**Funcionalidades**:
- Links para categorias
- Links para tipos de oferta
- Espaço para anúncios (AdSense)
- Links úteis
- Posição fixa em desktop

---

## Componentes de UI

### ServiceCard

**Arquivo**: `components/ServiceCard.tsx`

Card individual para exibição de um serviço na lista.

**Tipo**: Client Component

**Props**:
```typescript
interface ServiceCardProps {
  service: Service
  onClick: () => void
}
```

**Estrutura**:
```tsx
<div className="service-card">
  <Header>
    <Name>{service.name}</Name>
    <Badge>{service.offerType}</Badge>
  </Header>
  <Body>
    <Type>{service.type}</Type>
    <Summary>{service.summary}</Summary>
  </Body>
  <Footer>
    <Link>Ver detalhes →</Link>
  </Footer>
</div>
```

**Exemplo de Uso**:
```tsx
<ServiceCard 
  service={service}
  onClick={() => setSelectedService(service)}
/>
```

**Características**:
- Hover com elevação
- Badge colorido por tipo de oferta
- Link externo para o serviço
- onClick para modal de detalhes

---

### ServiceDetail

**Arquivo**: `components/ServiceDetail.tsx`

Modal com detalhes completos do serviço.

**Tipo**: Client Component

**Props**:
```typescript
interface ServiceDetailProps {
  service: Service
  onClose: () => void
}
```

**Estrutura**:
```tsx
<Modal>
  <Header>
    <Title>{service.name}</Title>
    <CloseButton onClick={onClose} />
  </Header>
  <Body>
    <InfoSection />
    <Description />
    <Features />
  </Body>
  <Footer>
    <Button href={service.url}>Acessar Serviço</Button>
  </Footer>
</Modal>
```

**Exemplo de Uso**:
```tsx
{selectedService && (
  <ServiceDetail 
    service={selectedService}
    onClose={() => setSelectedService(null)}
  />
)}
```

**Características**:
- Modal overlay com backdrop
- Scrollable content
- Botão de fechar
- Link direto para serviço
- Renderização de Markdown

---

### ServiceList

**Arquivo**: `components/ServiceList.tsx`

Grid responsivo de cards de serviço.

**Tipo**: Server Component

**Props**:
```typescript
interface ServiceListProps {
  services: Service[]
  onServiceClick: (service: Service) => void
}
```

**Exemplo de Uso**:
```tsx
<ServiceList 
  services={filteredServices}
  onServiceClick={handleServiceClick}
/>
```

**Layout**:
- 1 coluna em mobile
- 2 colunas em tablet
- 3 colunas em desktop

---

### ServiceBadges

**Arquivo**: `components/ServiceBadges.tsx`

Exibe badges (tags) de um serviço.

**Tipo**: Client Component

**Props**:
```typescript
interface ServiceBadgesProps {
  service: Service
  showAll?: boolean
}
```

**Badges**:
- Tipo de oferta
- Categoria
- Tipo de serviço
- País/região (se aplicável)

**Exemplo de Uso**:
```tsx
<ServiceBadges service={service} showAll={true} />
```

---

### ServiceTags

**Arquivo**: `components/ServiceTags.tsx`

Tags customizadas para serviços (ex: "Open Source", "Sem Cartão").

**Tipo**: Client Component

**Props**:
```typescript
interface ServiceTagsProps {
  tags: string[]
  compact?: boolean
}
```

**Exemplo de Uso**:
```tsx
<ServiceTags tags={['Open Source', 'Sem Cartão']} />
```

---

### OfferChart

**Arquivo**: `components/OfferChart.tsx`

Gráfico de pizza mostrando distribuição de tipos de oferta.

**Tipo**: Client Component

**Props**:
```typescript
interface OfferChartProps {
  services: Service[]
}
```

**Biblioteca**: Chart.js + react-chartjs-2

**Cores**:
- GRÁTIS PERMANENTE: Verde (#198754)
- FREE TIER: Azul (#0D6EFD)
- TRIAL: Amarelo (#FFC107)
- COMBINED: Cinza (#6C757D)

**Exemplo de Uso**:
```tsx
<OfferChart services={filteredServices} />
```

---

## Componentes de Funcionalidade

### FavoriteButton

**Arquivo**: `components/FavoriteButton.tsx`

Botão para adicionar/remover serviço dos favoritos.

**Tipo**: Client Component

**Props**:
```typescript
interface FavoriteButtonProps {
  serviceId: number
  size?: 'sm' | 'md' | 'lg'
}
```

**Funcionalidades**:
- Toggle favorito
- Ícone de coração (vazio/cheio)
- Persiste em localStorage
- Feedback visual

**Exemplo de Uso**:
```tsx
<FavoriteButton serviceId={service.id} size="md" />
```

**Estado**:
- Usa hook `useFavorites` para gerenciar favoritos

---

### ShareButton

**Arquivo**: `components/ShareButton.tsx`

Botão para compartilhar serviço em redes sociais.

**Tipo**: Client Component

**Props**:
```typescript
interface ShareButtonProps {
  service: Service
  variant?: 'icon' | 'text' | 'full'
}
```

**Plataformas Suportadas**:
- Twitter/X
- Facebook
- LinkedIn
- WhatsApp
- Telegram
- Email
- Copy link

**Exemplo de Uso**:
```tsx
<ShareButton service={service} variant="full" />
```

**Funcionalidades**:
- Menu dropdown
- Copy to clipboard com feedback
- Links diretos para compartilhamento
- Pré-preenchimento de texto

---

### FeaturedServices

**Arquivo**: `components/FeaturedServices.tsx`

Seção de serviços em destaque.

**Tipo**: Server Component

**Props**:
```typescript
interface FeaturedServicesProps {
  count?: number
  category?: string
}
```

**Exemplo de Uso**:
```tsx
<FeaturedServices count={6} category="Cloud & VPS" />
```

**Funcionalidades**:
- Serviços selecionados manualmente ou por critérios
- Layout em grid
- Cards destacados

---

### CategoryList

**Arquivo**: `components/CategoryList.tsx`

Lista de categorias com contador de serviços.

**Tipo**: Client Component

**Props**:
```typescript
interface CategoryListProps {
  services: Service[]
  onCategorySelect: (category: string) => void
  selectedCategory?: string
}
```

**Exemplo de Uso**:
```tsx
<CategoryList 
  services={allServices}
  onCategorySelect={setCategory}
  selectedCategory={selectedCategory}
/>
```

**Funcionalidades**:
- Contador de serviços por categoria
- Estado ativo/selecionado
- Ícones por categoria

---

### OfferList

**Arquivo**: `components/OfferList.tsx`

Lista de tipos de oferta com contador.

**Tipo**: Client Component

**Props**:
```typescript
interface OfferListProps {
  services: Service[]
  onOfferSelect: (offer: string) => void
  selectedOffer?: string
}
```

**Exemplo de Uso**:
```tsx
<OfferList 
  services={allServices}
  onOfferSelect={setOffer}
  selectedOffer={selectedOffer}
/>
```

---

### Pagination

**Arquivo**: `components/Pagination.tsx`

Componente de paginação para lista de serviços.

**Tipo**: Client Component

**Props**:
```typescript
interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  itemsPerPage?: number
}
```

**Exemplo de Uso**:
```tsx
<Pagination 
  currentPage={page}
  totalPages={totalPages}
  onPageChange={setPage}
/>
```

**Funcionalidades**:
- Navegação anterior/próxima
- Números de página
- Disabled states
- Mobile responsive

---

### Newsletter

**Arquivo**: `components/Newsletter.tsx`

Formulário de inscrição em newsletter.

**Tipo**: Client Component

**Props**:
```typescript
interface NewsletterProps {
  variant?: 'inline' | 'modal' | 'sidebar'
}
```

**Exemplo de Uso**:
```tsx
<Newsletter variant="inline" />
```

**Funcionalidades**:
- Validação de email
- Loading state
- Success/error feedback
- Integração com serviço de email (a configurar)

---

### Comments

**Arquivo**: `components/Comments.tsx`

Sistema de comentários para serviços.

**Tipo**: Client Component

**Props**:
```typescript
interface CommentsProps {
  serviceId: number
  initialComments?: Comment[]
}
```

**Exemplo de Uso**:
```tsx
<Comments serviceId={service.id} />
```

**Funcionalidades**:
- Listar comentários
- Adicionar comentário
- Sistema de likes
- Moderação básica
- Persistência (localStorage ou API)

---

### AdSense

**Arquivo**: `components/AdSense.tsx`

Wrapper para Google AdSense ads.

**Tipo**: Client Component

**Props**:
```typescript
interface AdSenseProps {
  adSlot: string
  adFormat?: 'auto' | 'fluid' | 'horizontal' | 'vertical'
  adLayout?: string
  fullWidthResponsive?: boolean
}
```

**Exemplo de Uso**:
```tsx
<AdSense 
  adSlot="1234567890"
  adFormat="auto"
  fullWidthResponsive={true}
/>
```

**Características**:
- Lazy loading
- Responsive
- Fallback enquanto carrega
- Error handling

---

## Hooks Customizados

### useFavorites

**Arquivo**: `lib/useFavorites.ts`

Hook para gerenciar favoritos.

**Retorno**:
```typescript
interface UseFavoritesReturn {
  favorites: number[]
  addFavorite: (id: number) => void
  removeFavorite: (id: number) => void
  isFavorite: (id: number) => boolean
  toggleFavorite: (id: number) => void
  clearFavorites: () => void
}
```

**Exemplo de Uso**:
```tsx
const { favorites, toggleFavorite, isFavorite } = useFavorites()

const handleToggle = () => {
  toggleFavorite(serviceId)
}
```

**Persistência**: localStorage com key `xmasters-favorites`

---

## Utilitários

### services.ts

**Arquivo**: `lib/services.ts`

Funções para carregar e processar serviços.

**Funções**:

```typescript
// Carregar todos os serviços
async function getAllServices(): Promise<Service[]>

// Obter serviço por ID
async function getServiceById(id: number): Promise<Service | null>

// Obter serviço por slug
async function getServiceBySlug(slug: string): Promise<Service | null>

// Obter categorias únicas
function getUniqueCategories(services: Service[]): string[]

// Obter tipos únicos
function getUniqueTypes(services: Service[]): string[]
```

---

### types.ts

**Arquivo**: `lib/types.ts`

Definições de tipos TypeScript.

**Tipos Principais**:

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
}

type OfferType = 
  | 'GRÁTIS PERMANENTE'
  | 'FREE TIER'
  | 'TRIAL'
  | 'FREE TIER + TRIAL'
  | 'TRIAL/Garantia'
```

---

### utils.ts

**Arquivo**: `lib/utils.ts`

Funções utilitárias diversas.

**Funções**:

```typescript
// Gerar slug a partir de string
function generateSlug(text: string): string

// Formatar data
function formatDate(date: Date): string

// Truncar texto
function truncate(text: string, maxLength: number): string

// Debounce
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void
```

---

## Estilização

Todos os componentes usam **Tailwind CSS** para estilização.

### Classes Customizadas

Definidas em `app/globals.css`:

```css
.service-card { /* Card de serviço */ }
.offer-badge { /* Badge de oferta */ }
.modal-overlay { /* Overlay do modal */ }
```

### Cores do Projeto

```css
:root {
  --color-primary: #C4170C;
  --color-secondary: #6C757D;
  --color-success: #198754;
  --color-info: #0D6EFD;
  --color-warning: #FFC107;
  --color-danger: #DC3545;
}
```

---

## Padrões de Uso

### Server vs Client Components

- **Server Components**: Para componentes estáticos ou que fazem fetch de dados
- **Client Components**: Para componentes interativos (onClick, useState, etc.)

### Composição de Componentes

```tsx
// Bom ✅
<HomePage>
  <Sidebar />
  <MainContent>
    <ServiceList>
      <ServiceCard />
    </ServiceList>
  </MainContent>
</HomePage>

// Evitar ❌
<GiantMonolithComponent />
```

### Props Drilling

Use Context API para dados compartilhados:

```tsx
// FavoritesContext
const FavoritesContext = createContext()

// Provider
<FavoritesContext.Provider value={favorites}>
  {children}
</FavoritesContext.Provider>

// Consumer
const favorites = useContext(FavoritesContext)
```

---

## Testes

Para testar componentes:

```tsx
import { render, screen } from '@testing-library/react'
import ServiceCard from '@/components/ServiceCard'

test('renders service name', () => {
  const service = { name: 'AWS', ... }
  render(<ServiceCard service={service} />)
  expect(screen.getByText('AWS')).toBeInTheDocument()
})
```

---

## Performance

### Otimizações Aplicadas

1. **Lazy Loading**: Componentes carregam sob demanda
2. **Memoization**: React.memo para componentes pesados
3. **Code Splitting**: Rotas carregam separadamente
4. **Image Optimization**: Next.js Image component

### Exemplo de Memoização

```tsx
import { memo } from 'react'

const ServiceCard = memo(({ service }) => {
  return <div>...</div>
})
```

---

**Para mais informações sobre cada componente, veja o código-fonte com comentários JSDoc.**
