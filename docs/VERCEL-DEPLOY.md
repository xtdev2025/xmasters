# Configuração de Deploy Automático na Vercel

Este documento descreve como configurar o deploy automático do projeto xmasters na Vercel.

## 🚀 Configuração Inicial

### 1. Conectar o Repositório à Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em "Add New..." → "Project"
3. Selecione o repositório `xtdev2025/xmasters`
4. A Vercel detectará automaticamente que é um projeto Next.js

### 2. Configurações do Projeto

O projeto já está configurado com:
- ✅ `vercel.json` com configurações otimizadas
- ✅ Next.js 15.5.5 com build otimizado
- ✅ Scripts de build configurados no `package.json`

### 3. Variáveis de Ambiente (Opcional)

Se necessário, adicione variáveis de ambiente na dashboard da Vercel:
- Vá em Settings → Environment Variables
- Adicione qualquer variável necessária

## 📋 Deploy Automático

Após conectar o repositório, a Vercel automaticamente:

### ✅ Deploy em Produção
- **Branch**: `main`
- **Trigger**: Qualquer push ou merge para `main`
- **URL**: `https://xmasters.vercel.app` (ou domínio customizado)

### ✅ Deploy de Preview
- **Branches**: Qualquer outro branch
- **Trigger**: Push ou abertura de Pull Request
- **URL**: URL única de preview para cada deploy

## 🔧 Configuração do vercel.json

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "git": {
    "deploymentEnabled": {
      "main": true
    }
  }
}
```

## 📊 Monitoramento

A Vercel fornece:
- Analytics de performance
- Logs de build
- Logs de runtime
- Métricas de Core Web Vitals

## 🎯 Próximos Passos

### Configurar Domínio Customizado (Opcional)

1. Vá em Settings → Domains
2. Adicione seu domínio customizado
3. Configure os DNS conforme instruções

### Configurar Alerts (Opcional)

1. Vá em Settings → Git
2. Configure notificações para builds
3. Configure integração com Slack/Discord se necessário

## 🔗 Links Úteis

- [Documentação Vercel](https://vercel.com/docs)
- [Next.js na Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Domínios Customizados](https://vercel.com/docs/concepts/projects/domains)

## 🐛 Solução de Problemas

### Build Falhando

1. Verifique os logs de build na dashboard da Vercel
2. Execute `npm run build` localmente para reproduzir o erro
3. Verifique se todas as dependências estão no `package.json`

### Performance Issues

1. Use o Analytics da Vercel para identificar problemas
2. Otimize imagens com Next.js Image Optimization
3. Use Static Site Generation (SSG) quando possível

## ✅ Status Atual

- ✅ Projeto configurado para deploy automático
- ✅ Build otimizado e funcional
- ✅ Google AdSense configurado corretamente
- ✅ Pronto para produção

---

**Última atualização**: 2025-10-15
