# Lista de Migração de Serviços - index.ht para Markdown

Este arquivo acompanha o progresso da migração dos 105 serviços do arquivo `index.ht` original para arquivos Markdown individuais em `data/services/`.

## Status Geral

**Total: 105 de 105 serviços migrados** ✅

## I. HOSPEDAGEM E INFRAESTRUTURA

### A. Cloud e VPS (IaaS/PaaS)
- [x] 001 - AWS (Amazon Web Services)
- [x] 002 - Google Cloud Platform (GCP)
- [x] 003 - Microsoft Azure
- [x] 004 - Oracle Cloud Infrastructure (OCI)
- [x] 005 - DigitalOcean
- [x] 006 - Vultr
- [x] 007 - Linode (Akamai)
- [x] 008 - Heroku
- [x] 009 - Render
- [x] 010 - Railway

### B. Hospedagem Estática e Serverless
- [x] 011 - Netlify
- [x] 012 - Vercel
- [x] 013 - Cloudflare Pages
- [x] 014 - GitHub Pages
- [x] 015 - GitLab Pages
- [x] 016 - Surge
- [x] 017 - Firebase Hosting
- [x] 018 - Render (Static Sites)
- [x] 019 - NearlyFreeSpeech.NET
- [x] 020 - Tiiny.host

### C. Hospedagem Compartilhada e Nacionais
- [x] 021 - InfinityFree
- [x] 022 - 000WebHost
- [x] 023 - Awardspace
- [x] 024 - Freehostia
- [x] 025 - Hostinger
- [x] 026 - KingHost
- [x] 027 - Umbler
- [x] 028 - DigitalOcean App Platform
- [x] 029 - Wix
- [x] 030 - Weebly

## II. SERVIÇOS DNS E NETWORKING

### A. DNS Autoritatívo Gerenciado e Anycast
- [x] 031 - Cloudflare DNS
- [x] 032 - ClouDNS
- [x] 033 - Dynu DNS
- [x] 034 - FreeDNS (Afraid.org)
- [x] 035 - Hurricane Electric (HE) DNS
- [x] 036 - Google Cloud DNS
- [x] 037 - AWS Route 53
- [x] 038 - Azure DNS
- [x] 039 - DNS Made Easy
- [x] 040 - Pulsant (Antigo EuroDNS)

### B. DNS Dinâmico (DDNS)
- [x] 041 - No-IP
- [x] 042 - Duck DNS
- [x] 043 - Dynu DDNS
- [x] 044 - Winco DDNS Free
- [x] 045 - deSEC.io (Dedyn.io)
- [x] 046 - ChangeIP
- [x] 047 - DnsExit
- [x] 048 - EntryDNS
- [x] 049 - FreeDNS (Afraid.org)
- [x] 050 - Cloudflare DDNS (API)

### C. Servidores DNS Público (Resolvers)
- [x] 051 - Cloudflare 1.1.1.1
- [x] 052 - Cloudflare for Families
- [x] 053 - Google Public DNS
- [x] 054 - Quad9
- [x] 055 - OpenDNS Home
- [x] 056 - AdGuard DNS
- [x] 057 - NextDNS
- [x] 058 - CleanBrowsing
- [x] 059 - Comodo Secure DNS
- [x] 060 - Yandex DNS

## III. OUTRAS PLATAFORMAS DE DESENVOLVIMENTO

### A. Banco de Dados, Backend e Serverless
- [x] 061 - MongoDB Atlas
- [x] 062 - Supabase
- [x] 063 - PlanetScale
- [x] 064 - Neon
- [x] 065 - Xata
- [x] 066 - Fauna
- [x] 067 - CockroachDB
- [x] 068 - Hasura Cloud
- [x] 069 - Appwrite
- [x] 070 - Upstash

### B. Ferramentas e APIs
- [x] 071 - Mailgun
- [x] 072 - SendGrid
- [x] 073 - Twilio
- [x] 074 - Postman
- [x] 075 - Sentry
- [x] 076 - LogDNA (Mezmo)
- [x] 077 - Google Analytics
- [x] 078 - Microsoft Clarity
- [x] 079 - Cloudinary
- [x] 080 - Auth0
- [x] 081 - Stripe
- [x] 082 - Figma
- [x] 083 - Trello
- [x] 084 - Notion
- [x] 085 - Canva
- [x] 086 - Visual Studio Code
- [x] 087 - Ngrok
- [x] 088 - Hoppscotch
- [x] 089 - Codespaces (GitHub)
- [x] 090 - CodePen

### C. CMS e Hospedagem Adicional
- [x] 091 - Netlify CMS (Decap CMS)
- [x] 092 - Strapi
- [x] 093 - Sanity
- [x] 094 - Deta Space
- [x] 095 - Replit
- [x] 096 - Glitch
- [x] 097 - Kinsta
- [x] 098 - WPEngine
- [x] 099 - DreamHost
- [x] 100 - HostGator
- [x] 101 - Locaweb
- [x] 102 - KingHost
- [x] 103 - DatoCMS
- [x] 104 - Clerk
- [x] 105 - Squoosh

## Notas

- ✅ Todos os 105 serviços foram migrados com sucesso do arquivo `index.ht` para arquivos Markdown individuais
- 📁 Os arquivos estão localizados em `data/services/`
- 📝 Cada arquivo segue o formato: `XXX-nome-do-servico.md`
- 🔄 O sistema detecta automaticamente novos serviços ao recarregar a aplicação
- 📊 As estatísticas e gráficos são atualizados automaticamente

## Como Adicionar Novos Serviços

Para adicionar um novo serviço no futuro:

1. Crie um arquivo `.md` em `data/services/`
2. Use o formato: `XXX-nome-do-servico.md` (ex: `106-exemplo.md`)
3. Siga o template com frontmatter YAML
4. O serviço aparecerá automaticamente na aplicação!

Para mais detalhes, consulte `README.md` e `docs/MIGRATION.md`.
