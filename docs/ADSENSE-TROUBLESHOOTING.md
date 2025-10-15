# Guia de Solução de Problemas do AdSense

## 🔧 Problemas Corrigidos

### 1. Erro: "AdSense head tag doesn't support data-nscript attribute"

**Problema**: O componente `Script` do Next.js adiciona automaticamente o atributo `data-nscript` quando usado dentro de `<head>`, causando conflito com o AdSense.

**Solução Aplicada**:
- ✅ Movido o script do AdSense de `<head>` para `<body>`
- ✅ Usado componente `Script` do Next.js com `strategy="afterInteractive"`
- ✅ Adicionado `crossOrigin="anonymous"` (camelCase correto)

**Arquivo**: `app/layout.tsx`
```tsx
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1224933273731070"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>
```

### 2. Erro: Minified React error #418

**Problema**: Anúncios AdSense não sendo inicializados porque as tags `<ins>` estavam sendo renderizadas sem executar `window.adsbygoogle.push({})`.

**Solução Aplicada**:
- ✅ Criado componente `AdSense` com hook `useEffect` para inicialização automática
- ✅ Refatoradas todas as páginas para usar os componentes:
  - `AdSenseBanner` - para banners horizontais
  - `AdSenseVertical` - para sidebar vertical
  - `AdSenseInFeed` - para anúncios entre conteúdo
  - `AdSenseResponsive` - para anúncios responsivos

**Arquivo**: `components/AdSense.tsx`
```tsx
export default function AdSense({ slot, format = 'auto', style, className }: AdSenseProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={className} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-1224933273731070"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
```

### 3. Erro de Build: Property 'crossorigin' does not exist

**Problema**: TypeScript/React espera `crossOrigin` em camelCase, não `crossorigin` em lowercase.

**Solução Aplicada**:
- ✅ Corrigido para `crossOrigin="anonymous"`

## 🧪 Como Testar

### 1. Build Local
```bash
npm run build
```
Deve compilar sem erros.

### 2. Executar em Desenvolvimento
```bash
npm run dev
```
Acesse http://localhost:3000 e:
1. Abra o DevTools (F12)
2. Verifique a aba Console - não deve haver erros do AdSense
3. Verifique a aba Network - o script `adsbygoogle.js` deve carregar
4. Os anúncios podem aparecer como espaços em branco até aprovação do AdSense

### 3. Verificar Inicialização
No console do navegador, execute:
```javascript
window.adsbygoogle
```
Deve retornar um array, não `undefined`.

### 4. Inspecionar Elementos
Use "Inspect Element" nos anúncios:
- As tags `<ins class="adsbygoogle">` devem estar presentes
- O atributo `data-adsbygoogle-status` deve aparecer (adicionado pelo script)

## 📋 Checklist de Configuração

Antes de colocar em produção:

- [ ] Substituir todos os slots `XXXXXXXXXX` por IDs reais do AdSense
- [ ] Criar unidades de anúncio no painel do AdSense
- [ ] Verificar que o ID `ca-pub-1224933273731070` está correto
- [ ] Testar em produção (Vercel)
- [ ] Aguardar aprovação do Google AdSense (pode levar 24-48h)

## 🚀 Deploy na Vercel

O projeto está configurado para deploy automático:

1. Conecte o repositório à Vercel
2. A Vercel detecta Next.js automaticamente
3. Cada push para `main` gera um deploy
4. Cada PR gera um preview

Veja [VERCEL-DEPLOY.md](./VERCEL-DEPLOY.md) para mais detalhes.

## 🐛 Problemas Comuns

### Anúncios não aparecem

**Possíveis causas**:
1. Conta AdSense ainda não aprovada
2. Site não adicionado no AdSense
3. Ad blockers instalados
4. Slots ainda com placeholder `XXXXXXXXXX`

**Como verificar**:
- Desative ad blockers
- Verifique console do navegador
- Teste em modo anônimo
- Verifique painel do AdSense

### Erro "adsbygoogle is not defined"

**Causa**: Script do AdSense não carregou antes dos componentes.

**Solução**: Já resolvido com `strategy="afterInteractive"` no componente Script.

### Anúncios aparecem mas não mudam

**Causa**: Cache do navegador ou do AdSense.

**Solução**:
- Limpar cache do navegador
- Aguardar alguns minutos (o AdSense tem cache próprio)
- Testar em modo anônimo

## 📊 Monitoramento

### Console do Navegador
Mensagens esperadas:
- ✅ Sem erros relacionados ao AdSense
- ✅ Script carrega com sucesso (200 OK)

Mensagens que indicam problemas:
- ❌ "adsbygoogle.push() error"
- ❌ "AdSense script failed to load"
- ❌ Erros 404 ou 403 ao carregar script

### Painel do AdSense
Após deploy em produção:
1. Acesse [AdSense Dashboard](https://www.google.com/adsense)
2. Verifique "Sites" → adicione seu domínio
3. Verifique "Anúncios" → unidades de anúncio
4. Aguarde aprovação (24-48h)
5. Monitore receita e impressões

## 📚 Referências

- [Next.js Script Component](https://nextjs.org/docs/app/api-reference/components/script)
- [Google AdSense Help](https://support.google.com/adsense)
- [React Error #418](https://react.dev/errors/418)

## ✅ Status Atual

- ✅ Build compila sem erros
- ✅ AdSense script carrega corretamente
- ✅ Componentes de anúncio inicializam automaticamente
- ✅ Código seguindo melhores práticas do Next.js
- ✅ Pronto para deploy na Vercel

---

**Última atualização**: 2025-10-15
