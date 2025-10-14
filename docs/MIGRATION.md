# Como Migrar Todos os Serviços do index.ht

Este guia explica como migrar os 105 serviços do arquivo `index.ht` original para arquivos Markdown individuais.

## Serviços Já Migrados

Atualmente, os seguintes serviços já foram migrados para o formato Markdown:

1. AWS (Amazon Web Services)
2. Google Cloud Platform (GCP)
3. Microsoft Azure
4. Oracle Cloud Infrastructure (OCI)
5. DigitalOcean
11. Netlify
12. Vercel
31. Cloudflare DNS
61. MongoDB Atlas
71. Mailgun

**Total: 10 de 105 serviços migrados**

## Como Adicionar os Serviços Restantes

Para adicionar os serviços restantes, siga estes passos:

### 1. Localize o serviço no index.ht

O arquivo `index.ht` original contém todos os 105 serviços no array `servicesData` (linhas 115-236).

### 2. Crie um novo arquivo Markdown

Crie um arquivo na pasta `data/services/` seguindo o formato:
```
XXX-nome-do-servico.md
```

### 3. Template do Arquivo

```markdown
---
id: [ID]
name: "[Nome]"
offerType: "[Tipo]"
type: "[Tipo de Serviço]"
category: "[Categoria]"
url: "[URL]"
summary: "[Resumo breve]"
---

[Descrição detalhada]

## Recursos Principais

- Recurso 1
- Recurso 2
- Recurso 3
```

### 4. Exemplo Prático

Do arquivo `index.ht`:
```javascript
{ 
  id: 6, 
  name: "Vultr", 
  offerType: "TRIAL", 
  type: "Infraestrutura", 
  category: "Cloud & VPS", 
  url: "https://www.vultr.com/", 
  summary: "Créditos gratuitos (varia) por 14-30 dias.", 
  detail: "Oferece alta performance e muitos data centers.", 
  features: ["Crédito inicial.", "Acesso a todos os produtos."]
}
```

Cria o arquivo `006-vultr.md`:
```markdown
---
id: 6
name: "Vultr"
offerType: "TRIAL"
type: "Infraestrutura"
category: "Cloud & VPS"
url: "https://www.vultr.com/"
summary: "Créditos gratuitos (varia) por 14-30 dias."
---

Oferece alta performance e muitos data centers.

## Recursos Principais

- Crédito inicial.
- Acesso a todos os produtos.
```

## Tipos de Oferta Válidos

- `GRÁTIS PERMANENTE`
- `FREE TIER`
- `TRIAL`
- `FREE TIER + TRIAL`
- `TRIAL/Garantia`
