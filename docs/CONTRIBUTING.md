# Guia de Contribuição

Obrigado por considerar contribuir com o **xmasters**! Este guia irá ajudá-lo a entender como contribuir da melhor forma possível.

## 📋 Índice

- [Como Contribuir](#como-contribuir)
- [Adicionando Novos Serviços](#adicionando-novos-serviços)
- [Reportando Bugs](#reportando-bugs)
- [Sugerindo Melhorias](#sugerindo-melhorias)
- [Desenvolvimento](#desenvolvimento)
- [Padrões de Código](#padrões-de-código)
- [Processo de Pull Request](#processo-de-pull-request)

## Como Contribuir

Existem várias formas de contribuir com o projeto:

1. **Adicionar novos serviços** ao catálogo
2. **Reportar bugs** ou serviços desatualizados
3. **Sugerir melhorias** na interface ou funcionalidades
4. **Corrigir bugs** existentes
5. **Melhorar a documentação**
6. **Traduzir conteúdo** (futuramente)

## Adicionando Novos Serviços

Esta é a forma mais comum de contribuição! Para adicionar um novo serviço:

### 1. Verifique se o Serviço Já Existe

Antes de adicionar, verifique se o serviço já está no catálogo em `data/services/`.

### 2. Crie um Novo Arquivo Markdown

Crie um arquivo seguindo o padrão: `XXX-nome-do-servico.md`

**Exemplo:** `106-exemplo-servico.md`

### 3. Use o Template Correto

```markdown
---
id: 106
name: "Nome do Serviço"
offerType: "FREE TIER"
type: "Infraestrutura"
category: "Cloud & VPS"
url: "https://exemplo.com"
summary: "Breve descrição da oferta gratuita ou trial."
---

Descrição detalhada do serviço, explicando suas principais características, público-alvo, casos de uso ideais e possíveis limitações. Seja claro e objetivo.

## Recursos Principais

- Primeiro recurso importante
- Segundo recurso importante
- Terceiro recurso importante
- Limitações relevantes (se houver)
```

### 4. Diretrizes para Preenchimento

#### ID
- Use um número sequencial único
- Verifique o último ID usado em `data/services/`
- Mantenha 3 dígitos (001, 002, ..., 106)

#### Name
- Nome oficial do serviço
- Use capitalização correta
- Exemplo: "Amazon Web Services (AWS)"

#### offerType
Escolha uma das opções:
- `GRÁTIS PERMANENTE` - Serviço 100% gratuito sem limites de tempo
- `FREE TIER` - Nível gratuito com limites (renovável)
- `TRIAL` - Período de teste gratuito
- `FREE TIER + TRIAL` - Combinação dos dois
- `TRIAL/Garantia` - Trial ou garantia de reembolso

#### type
Exemplos:
- `Infraestrutura` - VPS, Cloud Computing
- `Frontend/Serverless` - Hospedagem estática, CDN
- `Database/BaaS` - Bancos de dados, Backend as a Service
- `Desenvolvimento` - IDEs, ferramentas
- `Email/Comunicação` - Email transacional, SMS
- `Monitoramento` - Analytics, logs, APM

#### category
Escolha uma categoria existente ou justifique uma nova:
- `Cloud & VPS`
- `Hospedagem Estática`
- `Hospedagem Tradicional`
- `Networking`
- `Backend & DB`
- `Ferramentas & APIs`
- `Design & Produtividade`

#### url
- Link direto para a página principal ou página de pricing
- Prefira URLs limpas (sem parâmetros UTM)

#### summary
- Uma linha descrevendo a oferta gratuita
- Seja específico sobre limites e benefícios
- Exemplo: "300 minutos de build grátis por mês + 100GB de banda"

#### Descrição (corpo do markdown)
- Descreva o serviço de forma objetiva
- Mencione casos de uso ideais
- Inclua informações sobre público-alvo
- Destaque diferencial do serviço

#### Recursos Principais
- Liste 4-6 recursos mais importantes
- Seja específico sobre limites
- Mencione restrições importantes
- Use bullet points

### 5. Teste Localmente

Antes de enviar o PR:

```bash
npm run dev
```

Verifique se:
- ✅ O serviço aparece na lista
- ✅ Os filtros funcionam corretamente
- ✅ O modal de detalhes abre sem erros
- ✅ Todas as informações estão corretas
- ✅ O link funciona

## Reportando Bugs

Ao reportar um bug, inclua:

1. **Descrição clara** do problema
2. **Passos para reproduzir** o bug
3. **Comportamento esperado** vs **comportamento atual**
4. **Screenshots** (se aplicável)
5. **Ambiente**: navegador, versão, sistema operacional
6. **Console errors** (se houver)

**Template:**

```markdown
## Descrição
[Descreva o bug]

## Passos para Reproduzir
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

## Comportamento Esperado
[O que deveria acontecer]

## Comportamento Atual
[O que está acontecendo]

## Screenshots
[Se aplicável]

## Ambiente
- Navegador: Chrome 120
- SO: Windows 11
- Versão do Node: 20.x
```

## Sugerindo Melhorias

Para sugerir melhorias:

1. **Verifique** se a sugestão já não existe em Issues
2. **Descreva** claramente a melhoria proposta
3. **Explique** por que seria útil
4. **Forneça exemplos** ou mockups (se possível)
5. **Considere** a complexidade de implementação

## Desenvolvimento

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Git

### Setup do Ambiente

```bash
# Clone o repositório
git clone https://github.com/xtdev2025/xmasters.git
cd xmasters

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Acesse http://localhost:3000
```

### Estrutura do Projeto

```
xmasters/
├── app/              # Next.js App Router
├── components/       # Componentes React
├── data/services/    # Arquivos Markdown dos serviços
├── docs/            # Documentação
├── lib/             # Utilitários e funções
└── public/          # Arquivos estáticos
```

### Tecnologias Utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Chart.js** - Gráficos
- **Gray Matter** - Parse de Markdown

## Padrões de Código

### TypeScript

- Use tipagem estrita
- Evite `any` - prefira `unknown` ou tipos específicos
- Documente funções complexas com JSDoc

### React/Next.js

- Use componentes funcionais com hooks
- Prefira Server Components quando possível
- Use Client Components (`'use client'`) apenas quando necessário
- Mantenha componentes pequenos e focados

### Estilização

- Use Tailwind CSS utilities primeiro
- CSS customizado em `globals.css` apenas quando necessário
- Siga a paleta de cores existente
- Mobile-first approach

### Nomenclatura

- **Arquivos**: PascalCase para componentes (`ServiceCard.tsx`)
- **Variáveis**: camelCase (`serviceList`)
- **Constantes**: UPPER_SNAKE_CASE (`MAX_ITEMS`)
- **Tipos**: PascalCase (`Service`, `OfferType`)

### Git Commits

Use commits semânticos em português:

```
feat: adiciona filtro por país
fix: corrige bug no gráfico de ofertas
docs: atualiza guia de contribuição
style: ajusta espaçamento do card
refactor: reorganiza estrutura de pastas
test: adiciona testes para filtros
chore: atualiza dependências
```

## Processo de Pull Request

### 1. Fork e Clone

```bash
# Fork no GitHub primeiro, depois:
git clone https://github.com/SEU_USUARIO/xmasters.git
cd xmasters
git remote add upstream https://github.com/xtdev2025/xmasters.git
```

### 2. Crie uma Branch

```bash
git checkout -b feature/nome-da-feature
# ou
git checkout -b fix/nome-do-bug
```

### 3. Faça Suas Alterações

- Siga os padrões de código
- Teste localmente
- Commit com mensagens claras

### 4. Mantenha Atualizado

```bash
git fetch upstream
git rebase upstream/main
```

### 5. Push e Crie o PR

```bash
git push origin feature/nome-da-feature
```

No GitHub:
1. Abra um Pull Request
2. Use o template de PR (se houver)
3. Descreva claramente as mudanças
4. Referencie issues relacionadas

### Template de PR

```markdown
## Tipo de Mudança
- [ ] Novo serviço
- [ ] Bug fix
- [ ] Nova feature
- [ ] Melhoria de documentação
- [ ] Refatoração

## Descrição
[Descreva o que foi feito]

## Serviços Adicionados
- [x] Nome do Serviço 1
- [x] Nome do Serviço 2

## Checklist
- [ ] Testei localmente
- [ ] Segui os padrões de código
- [ ] Atualizei a documentação (se necessário)
- [ ] Verifiquei que não há erros no console
- [ ] Os filtros funcionam corretamente
- [ ] O build passa sem erros (`npm run build`)
```

## Revisão de Código

Seu PR será revisado por mantenedores. Esteja preparado para:

- Responder perguntas sobre suas mudanças
- Fazer ajustes solicitados
- Explicar decisões de design/implementação

## Código de Conduta

- Seja respeitoso com outros contribuidores
- Aceite feedback construtivo
- Foque no que é melhor para o projeto
- Mantenha discussões profissionais e cordiais

## Dúvidas?

Se tiver dúvidas:

1. Verifique a [documentação](../README.md)
2. Procure em [Issues existentes](https://github.com/xtdev2025/xmasters/issues)
3. Abra uma nova Issue com a tag `question`

## Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a licença ISC do projeto.

---

**Obrigado por contribuir com o xmasters! 🚀**
