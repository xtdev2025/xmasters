# Guia Completo de Serviços Web

Este projeto é uma aplicação Next.js que lista e categoriza mais de 100 serviços web gratuitos ou com trials, permitindo filtros avançados e busca.

## 📚 Documentação

- 📖 [Guia de Contribuição](docs/CONTRIBUTING.md) - Como contribuir com o projeto
- 🚀 [Guia de Deploy](docs/DEPLOYMENT.md) - Como fazer deploy em diferentes plataformas
- 🧩 [Documentação de Componentes](docs/COMPONENTS.md) - Referência completa dos componentes
- 💻 [Guia de Desenvolvimento](docs/DEVELOPMENT.md) - Configuração e padrões de desenvolvimento
- ✨ [Funcionalidades](docs/FEATURES.md) - Todas as funcionalidades implementadas e planejadas
- 🔧 [API e Utilitários](docs/API.md) - Funções, hooks e tipos TypeScript
- 📦 [Migração de Serviços](docs/MIGRATION.md) - Como migrar serviços do formato antigo
- 💰 [Configuração do AdSense](docs/ADSENSE-SETUP.md) - Setup de monetização
- 🎨 [Refatoração de Layout](docs/LAYOUT-REFACTORING.md) - Mudanças de design

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Chart.js** - Visualização de dados
- **Gray Matter** - Parse de frontmatter Markdown

## 📁 Estrutura do Projeto

```
xmasters/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── HomePage.tsx       # Componente principal da página
│   ├── ServiceCard.tsx    # Card de serviço
│   ├── ServiceDetail.tsx  # Detalhes do serviço
│   ├── ServiceList.tsx    # Lista de serviços
│   └── OfferChart.tsx     # Gráfico de ofertas
├── data/
│   └── services/          # Arquivos Markdown dos serviços
│       ├── 001-aws.md
│       ├── 002-gcp.md
│       └── ...
├── lib/                   # Utilitários e funções
│   ├── services.ts        # Funções para ler serviços
│   └── types.ts           # Tipos TypeScript
└── public/                # Arquivos estáticos
```

## 🏃 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar o aplicativo:**
   Abra [http://localhost:3000](http://localhost:3000) no navegador

4. **Build para produção:**
   ```bash
   npm run build
   npm start
   ```

## ➕ Como Adicionar um Novo Serviço

Para adicionar um novo serviço ao guia, basta criar um novo arquivo Markdown na pasta `data/services/` seguindo o formato:

### Formato do arquivo

Nome do arquivo: `XXX-nome-do-servico.md` (onde XXX é o ID numérico com 3 dígitos)

```markdown
---
id: 106
name: "Nome do Serviço"
offerType: "FREE TIER" | "GRÁTIS PERMANENTE" | "TRIAL" | "FREE TIER + TRIAL" | "TRIAL/Garantia"
type: "Infraestrutura" | "Frontend/Serverless" | "Database/BaaS" | etc.
category: "Cloud & VPS" | "Hospedagem Estática" | "Backend & DB" | "Networking" | "Ferramentas & APIs" | etc.
url: "https://url-do-servico.com"
summary: "Breve resumo do serviço e sua oferta principal."
---

Descrição detalhada do serviço, incluindo análise e considerações importantes sobre seu uso, público-alvo e casos de uso ideais.

## Recursos Principais

- Primeiro recurso ou característica
- Segundo recurso ou característica
- Terceiro recurso ou característica
- E assim por diante...
```

### Exemplo prático

```markdown
---
id: 106
name: "Exemplo Service"
offerType: "FREE TIER"
type: "Database/BaaS"
category: "Backend & DB"
url: "https://exemplo.com"
summary: "100GB de armazenamento gratuito e 1 milhão de operações por mês."
---

Um serviço de banco de dados moderno com foco em escalabilidade e facilidade de uso. Perfeito para projetos pessoais e MVPs que precisam de um banco de dados confiável sem custos iniciais.

## Recursos Principais

- 100GB de armazenamento gratuito
- 1 milhão de operações de leitura/escrita por mês
- Backup automático diário
- API RESTful e GraphQL
```

### Após adicionar o arquivo

1. O novo serviço aparecerá automaticamente na lista quando você recarregar a página
2. Ele será incluído nos filtros de categoria e tipo
3. O gráfico de distribuição será atualizado automaticamente

Não é necessário modificar nenhum código! O sistema detecta e carrega automaticamente todos os arquivos `.md` da pasta `data/services/`.

## 🎨 Tipos de Oferta

- **GRÁTIS PERMANENTE** - Serviços gratuitos para sempre
- **FREE TIER** - Nível gratuito com limites
- **TRIAL** - Período de teste gratuito
- **FREE TIER + TRIAL** - Combinação de trial e nível gratuito
- **TRIAL/Garantia** - Trial ou garantia de devolução

## 📝 Categorias Disponíveis

- **Cloud & VPS** - Serviços de infraestrutura em nuvem
- **Hospedagem Estática** - Hospedagem de sites estáticos
- **Hospedagem Tradicional** - Hospedagem compartilhada tradicional
- **Networking** - DNS, CDN e serviços de rede
- **Backend & DB** - Bancos de dados e backend as a service
- **Ferramentas & APIs** - APIs e ferramentas de desenvolvimento

## 🤝 Contribuindo

Para contribuir com novos serviços:

1. Fork este repositório
2. Crie um arquivo Markdown seguindo o formato acima
3. Teste localmente executando `npm run dev`
4. Faça um Pull Request

## 📄 Licença

ISC
