# Configuração do Google AdSense

## Instruções para Ativar a Monetização

### 1. Obter ID do AdSense

1. Acesse [Google AdSense](https://www.google.com/adsense)
2. Crie uma conta ou faça login
3. Obtenha seu **Publisher ID** (formato: `ca-pub-XXXXXXXXXXXXXXXX`)

### 2. Configurar o ID no Projeto

Você precisa substituir o placeholder `ca-pub-XXXXXXXXXXXXXXXX` em todos os arquivos com seu ID real:

#### Arquivos que contêm anúncios:

- `app/layout.tsx` - Script principal do AdSense
- `components/Sidebar.tsx` - Anúncio vertical no sidebar
- `components/HomePage.tsx` - Banners e anúncios in-feed
- `app/servicos/[slug]/page.tsx` - Anúncios nas páginas de serviços
- `app/categoria/[slug]/page.tsx` - Anúncios nas páginas de categoria
- `app/oferta/[slug]/page.tsx` - Anúncios nas páginas de oferta

### 3. Criar Unidades de Anúncio no AdSense

No painel do AdSense, crie unidades de anúncio para cada tipo:

#### Tipos de Anúncios Implementados:

1. **Banner Horizontal** (topo/rodapé)
   - Formato: `horizontal`
   - Uso: Banners no topo e rodapé das páginas
   - Substitua: `data-ad-slot="XXXXXXXXXX"`

2. **Anúncio Vertical** (sidebar)
   - Formato: `vertical`
   - Uso: Sidebar fixo à esquerda
   - Tamanho recomendado: 160x600 ou 300x600
   - Substitua: `data-ad-slot="XXXXXXXXXX"`

3. **Anúncio In-Feed** (entre conteúdo)
   - Formato: `fluid` ou `in-article`
   - Uso: Entre cards de serviços
   - Substitua: `data-ad-slot="XXXXXXXXXX"`

### 4. Substituir os Placeholders

Use busca e substituição global:

```bash
# Substituir o Publisher ID
find . -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/ca-pub-XXXXXXXXXXXXXXXX/ca-pub-SEU_ID_REAL/g' {} +

# Substituir cada Ad Slot individualmente
# Cada posição deve ter um slot único
```

### 5. Posicionamento dos Anúncios

#### HomePage (`components/HomePage.tsx`):
- ✅ Banner horizontal após o hero
- ✅ Anúncio in-feed no meio da lista (após 6 serviços)
- ✅ Banner horizontal no rodapé

#### Sidebar (`components/Sidebar.tsx`):
- ✅ Anúncio vertical fixo no final do sidebar
- Permanece visível durante rolagem

#### Páginas de Serviço (`app/servicos/[slug]/page.tsx`):
- ✅ Banner horizontal após o hero
- ✅ Anúncio in-article entre conteúdo e recursos

#### Páginas de Categoria/Oferta:
- ✅ Banner horizontal no topo
- ✅ Anúncio in-feed após lista de serviços (se > 6 itens)

### 6. Verificar Implementação

Após configurar os IDs:

1. Build do projeto:
   ```bash
   npm run build
   ```

2. Rode localmente:
   ```bash
   npm run dev
   ```

3. Abra o navegador e verifique o console para erros do AdSense

4. Use a extensão [Google Publisher Tag](https://chrome.google.com/webstore) para debugar

### 7. Políticas do AdSense

⚠️ **Importante**: Certifique-se de seguir as políticas do AdSense:

- Não clique nos próprios anúncios
- Não peça para outros clicarem
- Mantenha conteúdo original e de qualidade
- Respeite direitos autorais
- Não coloque anúncios em páginas sem conteúdo suficiente

### 8. Otimização de Performance

Os anúncios estão configurados com:
- ✅ `strategy="afterInteractive"` - Carrega após página interativa
- ✅ `data-full-width-responsive="true"` - Anúncios responsivos
- ✅ Lazy loading implícito do AdSense
- ✅ Espaços de fallback com `min-height` para evitar layout shift

### 9. Testes A/B (Opcional)

Experimente diferentes posições:
- Quantidade de anúncios por página
- Posicionamento (topo vs meio vs rodapé)
- Formatos (display vs in-feed vs in-article)

### 10. Monitoramento

Acompanhe no painel do AdSense:
- RPM (Revenue per Mille)
- CTR (Click-through Rate)
- Cobertura
- Viewability

---

## Estrutura de Monetização Atual

```
┌─────────────────────────────────────┐
│           Header (fixo)             │
├──────────────┬──────────────────────┤
│              │                      │
│   Sidebar    │   Conteúdo Principal│
│   (fixo)     │                      │
│              │  ┌─────────────────┐ │
│  ┌────────┐  │  │  Banner Top     │ │
│  │Categorias  │  └─────────────────┘ │
│  │          │ │                      │
│  │Ofertas   │ │  [Conteúdo]         │
│  │          │ │                      │
│  │Links     │ │  ┌─────────────────┐ │
│  │          │ │  │  In-Feed Ad     │ │
│  └────────┘  │  └─────────────────┘ │
│              │                      │
│  ┌────────┐  │  [Mais Conteúdo]    │
│  │Ad 300x600│ │                      │
│  │(Vertical)│ │  ┌─────────────────┐ │
│  │          │ │  │  Banner Bottom  │ │
│  └────────┘  │  └─────────────────┘ │
└──────────────┴──────────────────────┘
│              Footer                 │
└─────────────────────────────────────┘
```

## Receita Estimada

Com tráfego de **10.000 visitas/mês**:
- RPM médio: $1-5 USD
- Receita estimada: $10-50 USD/mês

Com tráfego de **100.000 visitas/mês**:
- Receita estimada: $100-500 USD/mês

*Valores variam conforme nicho, geografia e qualidade do tráfego.*
