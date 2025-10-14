# Guia de Deploy

Este guia explica como fazer o deploy do **xmasters** em diferentes plataformas de hospedagem.

## 📋 Índice

- [Pré-requisitos](#pré-requisitos)
- [Build Local](#build-local)
- [Deploy na Vercel](#deploy-na-vercel)
- [Deploy na Netlify](#deploy-na-netlify)
- [Deploy no Cloudflare Pages](#deploy-no-cloudflare-pages)
- [Deploy no GitHub Pages](#deploy-no-github-pages)
- [Deploy em VPS](#deploy-em-vps)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Troubleshooting](#troubleshooting)

## Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn
- Conta na plataforma de deploy escolhida
- Repositório Git (GitHub, GitLab, etc.)

## Build Local

Antes de fazer deploy, teste o build localmente:

```bash
# Instalar dependências
npm install

# Build de produção
npm run build

# Testar o build localmente
npm start
```

O build deve completar sem erros. Verifique:
- ✅ Sem erros de TypeScript
- ✅ Sem avisos críticos
- ✅ Todos os serviços carregam corretamente
- ✅ Filtros funcionam
- ✅ Navegação está ok

## Deploy na Vercel

A **Vercel** é a plataforma recomendada para Next.js (criadores do framework).

### Opção 1: Deploy via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy de produção
vercel --prod
```

### Opção 2: Deploy via Dashboard

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Add New Project"**
3. Importe seu repositório do GitHub
4. Configurações automáticas detectadas:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Clique em **"Deploy"**

### Configurações Recomendadas

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

### Custom Domain

1. Vá em **Settings** > **Domains**
2. Adicione seu domínio customizado
3. Configure os DNS records conforme instruído

## Deploy na Netlify

### Opção 1: Deploy via Git

1. Acesse [netlify.com](https://netlify.com)
2. Clique em **"Add new site"** > **"Import an existing project"**
3. Conecte seu repositório
4. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Clique em **"Deploy site"**

### Opção 2: Deploy via CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Inicializar projeto
netlify init

# Deploy
netlify deploy

# Deploy de produção
netlify deploy --prod
```

### netlify.toml

Crie um arquivo `netlify.toml` na raiz:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## Deploy no Cloudflare Pages

### Via Dashboard

1. Acesse [pages.cloudflare.com](https://pages.cloudflare.com)
2. Clique em **"Create a project"**
3. Conecte seu repositório Git
4. Configure:
   - **Framework preset**: Next.js
   - **Build command**: `npx @cloudflare/next-on-pages@1`
   - **Build output directory**: `.vercel/output/static`
5. Adicione variável de ambiente:
   - `NODE_VERSION`: `18`

### Via Wrangler CLI

```bash
# Instalar Wrangler
npm install -g wrangler

# Login
wrangler login

# Criar projeto Pages
wrangler pages project create xmasters

# Deploy
npm run build
wrangler pages deploy .next
```

## Deploy no GitHub Pages

**Nota**: GitHub Pages funciona melhor com sites estáticos. Next.js requer adaptação.

### Usando next-export

1. Configure `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/xmasters', // Nome do seu repo
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

2. Adicione script no `package.json`:

```json
{
  "scripts": {
    "deploy": "next build && next export && touch out/.nojekyll && git add out/ && git commit -m 'Deploy' && git subtree push --prefix out origin gh-pages"
  }
}
```

3. Deploy:

```bash
npm run deploy
```

### Via GitHub Actions

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./out
  
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v3
```

## Deploy em VPS

Para deploy em VPS (DigitalOcean, Linode, etc.):

### 1. Preparar o Servidor

```bash
# Atualizar sistema (Ubuntu/Debian)
sudo apt update && sudo apt upgrade -y

# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar PM2 (gerenciador de processos)
sudo npm install -g pm2

# Instalar nginx
sudo apt install nginx -y
```

### 2. Clonar e Build

```bash
# Clonar repositório
git clone https://github.com/xtdev2025/xmasters.git
cd xmasters

# Instalar dependências
npm install

# Build
npm run build
```

### 3. Configurar PM2

```bash
# Iniciar com PM2
pm2 start npm --name "xmasters" -- start

# Salvar configuração
pm2 save

# Iniciar na inicialização
pm2 startup
```

### 4. Configurar Nginx

Crie `/etc/nginx/sites-available/xmasters`:

```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Ative e reinicie:

```bash
sudo ln -s /etc/nginx/sites-available/xmasters /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 5. SSL com Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d seu-dominio.com
```

## Variáveis de Ambiente

Se você estiver usando variáveis de ambiente, crie um arquivo `.env.local`:

```env
# Exemplo de variáveis (adapte conforme necessário)
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Importante**: Nunca commite `.env.local` no Git!

### Configurar em Plataformas

#### Vercel
Dashboard > Settings > Environment Variables

#### Netlify
Dashboard > Site settings > Build & deploy > Environment

#### Cloudflare
Dashboard > Settings > Environment variables

## Troubleshooting

### Build Falha

**Problema**: Erro de TypeScript ou ESLint

**Solução**:
```bash
# Verificar erros localmente
npm run lint
npm run build
```

Corrija os erros antes de fazer deploy.

### Imagens Não Carregam

**Problema**: Next.js Image Optimization não funciona em export estático

**Solução**: Configure `next.config.js`:
```javascript
images: {
  unoptimized: true
}
```

### Rotas 404 no Refresh

**Problema**: Ao recarregar páginas em hosting estático

**Solução**: Configure rewrites para SPA:

**Netlify** - Crie `public/_redirects`:
```
/*    /index.html   200
```

**Cloudflare/Vercel**: Configuração automática

### Deploy Lento

**Problema**: Build demora muito

**Soluções**:
- Use cache de dependências
- Otimize imagens antes do build
- Remova dependências não utilizadas

### Out of Memory

**Problema**: Build falha com erro de memória

**Solução**: Aumente o limite de memória do Node:
```json
{
  "scripts": {
    "build": "NODE_OPTIONS='--max-old-space-size=4096' next build"
  }
}
```

## Monitoramento Pós-Deploy

Após o deploy, monitore:

- ✅ **Performance**: Google PageSpeed Insights
- ✅ **Uptime**: UptimeRobot, Pingdom
- ✅ **Analytics**: Google Analytics, Vercel Analytics
- ✅ **Errors**: Sentry, LogRocket
- ✅ **SEO**: Google Search Console

## Atualizações Futuras

Para atualizar o site:

```bash
# Pull latest changes
git pull origin main

# Instalar novas dependências
npm install

# Build
npm run build

# Reiniciar (se VPS)
pm2 restart xmasters
```

Ou simplesmente faça push para o branch principal - plataformas como Vercel/Netlify fazem deploy automático.

## Domínios Customizados

### Configurar DNS

Adicione records DNS:

**Para Vercel/Netlify**:
```
A     @       76.76.21.21
CNAME www     cname.vercel-dns.com
```

**Para Cloudflare Pages**:
```
CNAME @       your-site.pages.dev
CNAME www     your-site.pages.dev
```

### SSL/HTTPS

Todas as plataformas mencionadas oferecem SSL gratuito e automático via Let's Encrypt.

## Performance Tips

1. **Use CDN**: Vercel/Netlify/Cloudflare já incluem
2. **Otimize Imagens**: Use WebP e lazy loading
3. **Cache Estático**: Configure headers adequados
4. **Minificação**: Next.js já faz automaticamente
5. **Analyze Bundle**: Use `@next/bundle-analyzer`

```bash
npm install @next/bundle-analyzer
```

Adicione em `next.config.js`:
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

Analise:
```bash
ANALYZE=true npm run build
```

## Backup

Sempre mantenha backups:

1. **Código**: Git repository
2. **Dados**: Backup regular do banco (se houver)
3. **Configurações**: Documente variáveis de ambiente
4. **Build**: Salve `.next` ou `out` de builds bem-sucedidos

## Custos Estimados

### Plataformas Gratuitas

- **Vercel Free**: Hobby projects, 100GB bandwidth
- **Netlify Free**: 100GB bandwidth, 300 build minutes
- **Cloudflare Pages**: Builds ilimitados, bandwidth ilimitado
- **GitHub Pages**: Grátis para repos públicos

### VPS (Exemplo)

- **DigitalOcean**: $4-6/mês (Droplet básico)
- **Linode**: $5/mês (Nanode)
- **Hetzner**: €4/mês (CX11)

Para o xmasters, plataformas gratuitas são mais que suficientes.

---

**Seu site está pronto para o mundo! 🚀**
