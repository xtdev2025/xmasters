import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Como Contribuir | xmasters',
  description: 'Aprenda como contribuir com o xmasters e ajudar a comunidade a descobrir mais serviços web gratuitos.',
};

export default function ContribuirPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Como Contribuir
          </h1>
          <p className="text-xl text-gray-600">
            Sua contribuição pode ajudar milhares de desenvolvedores
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-white rounded-2xl border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Por que Contribuir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O xmasters é mantido pela comunidade e para a comunidade. Cada contribuição ajuda 
              desenvolvedores, estudantes e empresas a encontrar as ferramentas certas para seus projetos.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Ajude outros desenvolvedores a economizar tempo e dinheiro</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Compartilhe seu conhecimento sobre serviços que você usa</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Faça parte de um projeto open-source ativo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Construa seu portfólio com contribuições relevantes</span>
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Formas de Contribuir</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Adicionar Novos Serviços</h3>
                <p className="text-gray-700 mb-3">
                  Conhece um serviço web com plano gratuito que ainda não está no catálogo? 
                  Adicione-o seguindo o formato padrão dos arquivos Markdown.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 text-sm font-mono text-gray-800">
                  <p># Nome do Serviço</p>
                  <p className="mt-2">**Categoria:** [categoria]</p>
                  <p>**Tipo de Oferta:** [Permanente/Free Tier/Trial]</p>
                  <p className="mt-2">## Descrição</p>
                  <p>[Descrição detalhada...]</p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Atualizar Informações</h3>
                <p className="text-gray-700">
                  Os planos gratuitos mudam com frequência. Se você notar alguma informação desatualizada, 
                  abra uma issue ou faça um pull request com a correção.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Melhorar a Plataforma</h3>
                <p className="text-gray-700">
                  Desenvolvedores são bem-vindos para contribuir com melhorias no código, 
                  design, performance, acessibilidade ou novas funcionalidades.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Compartilhar Experiências</h3>
                <p className="text-gray-700">
                  Deixe comentários nas páginas dos serviços compartilhando sua experiência, 
                  dicas de uso e considerações importantes.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Passo a Passo</h2>
            
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Fork o Repositório</h3>
                  <p className="text-gray-700">
                    Faça um fork do repositório no GitHub para sua conta.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Clone o Projeto</h3>
                  <p className="text-gray-700 mb-2">Clone o repositório para sua máquina local:</p>
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-sm font-mono">
                    git clone https://github.com/seu-usuario/xmasters.git
                  </div>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Crie uma Branch</h3>
                  <p className="text-gray-700 mb-2">Crie uma branch para sua contribuição:</p>
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-sm font-mono">
                    git checkout -b feat/novo-servico
                  </div>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                  4
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Faça suas Alterações</h3>
                  <p className="text-gray-700">
                    Adicione o serviço ou faça as melhorias desejadas seguindo os padrões do projeto.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                  5
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Teste Localmente</h3>
                  <p className="text-gray-700 mb-2">Execute o projeto e teste suas alterações:</p>
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-sm font-mono">
                    npm install<br />
                    npm run dev
                  </div>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                  6
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Commit e Push</h3>
                  <p className="text-gray-700 mb-2">Faça commit e envie para seu fork:</p>
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-sm font-mono">
                    git add .<br />
                    git commit -m &quot;feat: adiciona serviço XYZ&quot;<br />
                    git push origin feat/novo-servico
                  </div>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                  7
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Abra um Pull Request</h3>
                  <p className="text-gray-700">
                    No GitHub, abra um Pull Request explicando suas alterações e por que elas são importantes.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          <section className="bg-white rounded-2xl border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Diretrizes</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-gray-400">•</span>
                <span className="text-gray-700">Seja claro e objetivo nas descrições dos serviços</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-gray-400">•</span>
                <span className="text-gray-700">Inclua informações sobre limites do plano gratuito</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-gray-400">•</span>
                <span className="text-gray-700">Verifique se o serviço realmente oferece plano gratuito ou trial</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-gray-400">•</span>
                <span className="text-gray-700">Mantenha um tom profissional e respeitoso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-gray-400">•</span>
                <span className="text-gray-700">Siga as convenções de código do projeto</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 text-gray-400">•</span>
                <span className="text-gray-700">Teste suas alterações antes de submeter o PR</span>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Pronto para Começar?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Acesse nosso repositório no GitHub e faça sua primeira contribuição hoje mesmo!
            </p>
            <a
              href="https://github.com/xtdev2025/xmasters"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Ir para o GitHub
            </a>
          </section>

          <div className="text-center pt-4">
            <p className="text-gray-600">
              Dúvidas sobre como contribuir?{' '}
              <Link href="/contato" className="text-gray-900 font-medium hover:underline">
                Entre em contato
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
