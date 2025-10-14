# Guia de Desenvolvimento

Este guia fornece informações detalhadas para desenvolvedores que desejam trabalhar no projeto xmasters.

## 📋 Índice

- [Configuração do Ambiente](#configuração-do-ambiente)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias e Ferramentas](#tecnologias-e-ferramentas)
- [Fluxo de Trabalho](#fluxo-de-trabalho)
- [Padrões de Código](#padrões-de-código)
- [Testing](#testing)
- [Debugging](#debugging)
- [Performance](#performance)
- [Troubleshooting](#troubleshooting)

## Configuração do Ambiente

### Pré-requisitos

- **Node.js**: versão 18.x ou superior
- **npm**: versão 9.x ou superior (ou yarn/pnpm)
- **Git**: versão 2.x ou superior
- **Editor**: VS Code recomendado com extensões

### Instalação Inicial

```bash
# 1. Clone o repositório
git clone https://github.com/xtdev2025/xmasters.git
cd xmasters

# 2. Instale as dependências
npm install

# 3. Configure variáveis de ambiente (opcional)
cp .env.example .env.local

# 4. Execute em modo desenvolvimento
npm run dev
```

O servidor estará rodando em [http://localhost:3000](http://localhost:3000)

### Extensões Recomendadas do VS Code

Crie `.vscode/extensions.json`:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "yoavbls.pretty-ts-errors",
    "ms-vscode.vscode-typescript-next",
    "unifiedjs.vscode-mdx"
  ]
}
```

### Configuração do VS Code

Crie `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

## Estrutura do Projeto

```
xmasters/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Layout raiz da aplicação
│   ├── page.tsx                 # Página inicial
│   ├── globals.css              # Estilos globais
│   ├── categoria/               # Rotas dinâmicas de categoria
│   ├── oferta/                  # Rotas dinâmicas de oferta
│   └── servicos/                # Rotas dinâmicas de serviços
├── components/                   # Componentes React reutilizáveis
│   ├── HomePage.tsx             # Componente principal
│   ├── ServiceCard.tsx          # Card de serviço
│   ├── ServiceDetail.tsx        # Modal de detalhes
│   ├── ServiceList.tsx          # Grid de serviços
│   ├── OfferChart.tsx           # Gráfico Chart.js
│   ├── Header.tsx               # Cabeçalho
│   ├── Footer.tsx               # Rodapé
│   ├── Sidebar.tsx              # Barra lateral
│   ├── FavoriteButton.tsx       # Botão de favoritos
│   ├── ShareButton.tsx          # Botão de compartilhamento
│   ├── Newsletter.tsx           # Formulário newsletter
│   ├── Comments.tsx             # Sistema de comentários
│   ├── AdSense.tsx              # Integração AdSense
│   ├── Pagination.tsx           # Paginação
│   ├── CategoryList.tsx         # Lista de categorias
│   ├── OfferList.tsx            # Lista de ofertas
│   ├── FeaturedServices.tsx     # Serviços em destaque
│   ├── ServiceBadges.tsx        # Badges de serviço
│   └── ServiceTags.tsx          # Tags customizadas
├── data/
│   └── services/                # Arquivos Markdown dos serviços
│       ├── 001-aws-amazon-web-services.md
│       ├── 002-google-cloud-platform-gcp.md
│       └── ...
├── lib/                         # Utilitários e funções
│   ├── services.ts              # Funções para carregar serviços
│   ├── types.ts                 # Tipos TypeScript
│   ├── useFavorites.ts          # Hook de favoritos
│   └── utils.ts                 # Funções utilitárias
├── public/                      # Arquivos estáticos
│   ├── favicon.ico
│   └── images/
├── docs/                        # Documentação do projeto
│   ├── CONTRIBUTING.md
│   ├── DEPLOYMENT.md
│   ├── COMPONENTS.md
│   ├── MIGRATION.md
│   ├── ADSENSE-SETUP.md
│   └── LAYOUT-REFACTORING.md
├── .github/                     # GitHub configs
│   └── workflows/               # GitHub Actions
├── next.config.js               # Configuração Next.js
├── tailwind.config.ts           # Configuração Tailwind
├── tsconfig.json                # Configuração TypeScript
├── postcss.config.js            # Configuração PostCSS
├── .eslintrc.json               # Configuração ESLint
├── package.json                 # Dependências
├── README.md                    # Documentação principal
├── TODO.md                      # Lista de tarefas
└── PROJETO.md                   # Visão geral do projeto
```

## Tecnologias e Ferramentas

### Core

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| Next.js | ^15.5.5 | Framework React com SSR/SSG |
| React | ^19.2.0 | Biblioteca de UI |
| TypeScript | ^5.9.3 | Tipagem estática |
| Tailwind CSS | ^3.4.14 | Framework CSS utilitário |

### Bibliotecas

| Biblioteca | Versão | Propósito |
|------------|--------|-----------|
| Chart.js | ^4.5.1 | Gráficos e visualizações |
| react-chartjs-2 | ^5.3.0 | Wrapper React para Chart.js |
| gray-matter | ^4.0.3 | Parse de frontmatter Markdown |

### Dev Tools

| Ferramenta | Versão | Propósito |
|------------|--------|-----------|
| ESLint | 9.37.0 | Linting de JavaScript/TypeScript |
| PostCSS | ^8.5.6 | Transformação de CSS |
| Autoprefixer | ^10.4.21 | Prefixos CSS automáticos |

## Fluxo de Trabalho

### 1. Criar uma Branch

```bash
# Feature
git checkout -b feature/nome-da-feature

# Bug fix
git checkout -b fix/nome-do-bug

# Documentação
git checkout -b docs/atualização

# Refatoração
git checkout -b refactor/componente
```

### 2. Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Em outro terminal, executar linting contínuo (opcional)
npm run lint -- --watch
```

### 3. Testes Locais

```bash
# Lint
npm run lint

# Build de produção
npm run build

# Testar build
npm start
```

### 4. Commit

Use commits semânticos:

```bash
git add .
git commit -m "feat: adiciona filtro por país"
git commit -m "fix: corrige bug no gráfico de ofertas"
git commit -m "docs: atualiza README com novas instruções"
git commit -m "style: ajusta espaçamento dos cards"
git commit -m "refactor: reorganiza estrutura de pastas"
```

### 5. Push e Pull Request

```bash
git push origin feature/nome-da-feature
```

Abra um Pull Request no GitHub com descrição detalhada.

## Padrões de Código

### TypeScript

#### Tipagem Estrita

```typescript
// ✅ Bom
interface ServiceProps {
  service: Service
  onClick: (id: number) => void
}

// ❌ Evitar
interface ServiceProps {
  service: any
  onClick: Function
}
```

#### Tipos vs Interfaces

```typescript
// Use interface para objetos e classes
interface Service {
  id: number
  name: string
}

// Use type para unions, intersections e primitivos
type OfferType = 'FREE TIER' | 'TRIAL' | 'GRÁTIS PERMANENTE'
type ServiceWithCategory = Service & { category: string }
```

### React/Next.js

#### Server vs Client Components

```tsx
// Server Component (padrão)
// Sem 'use client', pode fazer fetch direto
export default async function Page() {
  const services = await getAllServices()
  return <ServiceList services={services} />
}

// Client Component
'use client'
import { useState } from 'react'

export default function HomePage() {
  const [filter, setFilter] = useState('')
  // ...
}
```

#### Convenções de Nomenclatura

```tsx
// Componentes: PascalCase
function ServiceCard() {}

// Hooks: camelCase com prefixo 'use'
function useFavorites() {}

// Funções utilitárias: camelCase
function formatDate() {}

// Constantes: UPPER_SNAKE_CASE
const MAX_ITEMS_PER_PAGE = 20
```

#### Props

```tsx
// Use interface para props
interface ServiceCardProps {
  service: Service
  onClick?: () => void
  className?: string
}

// Desestruture props
function ServiceCard({ service, onClick, className }: ServiceCardProps) {
  return <div className={className}>{service.name}</div>
}
```

### Tailwind CSS

#### Organização de Classes

```tsx
// Use ordem consistente: layout -> spacing -> colors -> typography
<div className="
  flex flex-col              // Layout
  p-4 m-2 gap-2             // Spacing
  bg-white border           // Colors/Borders
  text-lg font-bold         // Typography
  hover:shadow-lg           // Interactive
  md:flex-row md:p-6        // Responsive
">
```

#### Classes Customizadas

Crie em `globals.css` apenas quando necessário:

```css
@layer components {
  .service-card {
    @apply bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow;
  }
}
```

### Arquivos Markdown

#### Frontmatter

```yaml
---
id: 106
name: "Nome do Serviço"
offerType: "FREE TIER"
type: "Infraestrutura"
category: "Cloud & VPS"
url: "https://exemplo.com"
summary: "Breve descrição."
---
```

#### Conteúdo

```markdown
Parágrafo de descrição.

## Recursos Principais

- Item 1
- Item 2
- Item 3
```

## Testing

### Setup (Futuro)

Para adicionar testes ao projeto:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

### Exemplo de Teste

```typescript
import { render, screen } from '@testing-library/react'
import ServiceCard from '@/components/ServiceCard'

describe('ServiceCard', () => {
  const mockService = {
    id: 1,
    name: 'AWS',
    offerType: 'FREE TIER',
    // ...
  }

  it('renders service name', () => {
    render(<ServiceCard service={mockService} />)
    expect(screen.getByText('AWS')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<ServiceCard service={mockService} onClick={handleClick} />)
    screen.getByRole('button').click()
    expect(handleClick).toHaveBeenCalled()
  })
})
```

## Debugging

### Next.js Dev Tools

```typescript
// Ativar debug verbose
// next.config.js
module.exports = {
  webpack: (config) => {
    config.infrastructureLogging = { level: 'verbose' }
    return config
  }
}
```

### React DevTools

1. Instale extensão [React Developer Tools](https://react.dev/learn/react-developer-tools)
2. Abra DevTools (F12)
3. Tab "Components" mostra árvore de componentes
4. Tab "Profiler" analisa performance

### VS Code Debugging

Crie `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    }
  ]
}
```

### Console Logging

```typescript
// Development only
if (process.env.NODE_ENV === 'development') {
  console.log('Debug:', data)
}
```

## Performance

### Análise de Bundle

```bash
# Instalar analyzer
npm install @next/bundle-analyzer

# Adicionar em next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Analisar
ANALYZE=true npm run build
```

### Otimizações

#### 1. Lazy Loading

```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
})
```

#### 2. Memoização

```tsx
import { memo, useMemo } from 'react'

const ServiceCard = memo(({ service }) => {
  return <div>{service.name}</div>
})

function ServiceList({ services }) {
  const sortedServices = useMemo(
    () => services.sort((a, b) => a.name.localeCompare(b.name)),
    [services]
  )
  
  return <div>{/* render sortedServices */}</div>
}
```

#### 3. Imagens

```tsx
import Image from 'next/image'

<Image
  src="/logo.png"
  alt="Logo"
  width={200}
  height={100}
  priority // Para imagens above-the-fold
/>
```

### Core Web Vitals

Monitore:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

Use [Lighthouse](https://developers.google.com/web/tools/lighthouse) ou [PageSpeed Insights](https://pagespeed.web.dev/).

## Troubleshooting

### Erros Comuns

#### 1. "Cannot find module"

**Causa**: Dependência não instalada ou caminho incorreto

**Solução**:
```bash
# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

#### 2. "Hydration failed"

**Causa**: HTML do servidor difere do cliente

**Solução**: Verifique código que roda apenas no cliente:
```tsx
const [mounted, setMounted] = useState(false)

useEffect(() => {
  setMounted(true)
}, [])

if (!mounted) return null

return <ClientOnlyComponent />
```

#### 3. Build falha com TypeScript errors

**Causa**: Erros de tipo não resolvidos

**Solução**:
```bash
# Verificar erros
npx tsc --noEmit

# Ou temporariamente ignorar (não recomendado)
// next.config.js
typescript: {
  ignoreBuildErrors: true,
}
```

#### 4. Tailwind classes não aplicam

**Causa**: Purge/content config incorreto

**Solução**: Verificar `tailwind.config.ts`:
```typescript
content: [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
]
```

### Limpar Cache

```bash
# Limpar cache do Next.js
rm -rf .next

# Limpar node_modules
rm -rf node_modules package-lock.json
npm install

# Limpar tudo e reinstalar
npm run clean && npm install
```

### Verificar Saúde do Projeto

```bash
# Verificar versões
node -v
npm -v

# Verificar dependências desatualizadas
npm outdated

# Verificar vulnerabilidades
npm audit

# Atualizar dependências (cuidado!)
npm update
```

## Scripts Úteis

Adicione em `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "clean": "rm -rf .next node_modules",
    "analyze": "ANALYZE=true npm run build"
  }
}
```

## Recursos Adicionais

### Documentação Oficial

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Comunidade

- [Next.js Discord](https://discord.gg/nextjs)
- [React Discord](https://discord.gg/react)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

### Tutoriais

- [Next.js Learn Course](https://nextjs.org/learn)
- [TypeScript for Beginners](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/reusing-styles)

---

**Happy Coding! 🚀**

Para dúvidas específicas, abra uma Issue no GitHub ou consulte a documentação do projeto.
