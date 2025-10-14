import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contato | xmasters',
  description: 'Entre em contato com a equipe do xmasters. Tire suas dúvidas, sugira melhorias ou reporte problemas.',
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600">
            Estamos aqui para ajudar e ouvir sua opinião
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulário de Contato */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h2>
              
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="suggestion">Sugestão de Serviço</option>
                    <option value="update">Atualização de Informação</option>
                    <option value="bug">Reportar Problema</option>
                    <option value="contribution">Sobre Contribuições</option>
                    <option value="partnership">Parceria/Colaboração</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition resize-none"
                    placeholder="Escreva sua mensagem aqui..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition"
                >
                  Enviar Mensagem
                </button>
              </form>

              <p className="mt-6 text-sm text-gray-600 text-center">
                Responderemos o mais breve possível ✨
              </p>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Outras Formas de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">GitHub</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Abra uma issue no repositório para reportar bugs ou sugerir melhorias
                      </p>
                      <a
                        href="https://github.com/xtdev2025/xmasters/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:underline text-sm font-medium"
                      >
                        github.com/xtdev2025/xmasters
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">E-mail</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Envie um e-mail para nossa equipe
                      </p>
                      <a
                        href="mailto:contato@xmasters.dev"
                        className="text-gray-900 hover:underline text-sm font-medium"
                      >
                        contato@xmasters.dev
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Twitter / X</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Siga-nos para atualizações e novidades
                      </p>
                      <a
                        href="https://twitter.com/xmasters_dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:underline text-sm font-medium"
                      >
                        @xmasters_dev
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Como adiciono um serviço?</h4>
                    <p className="text-gray-600 text-sm">
                      Veja nossa página de{' '}
                      <Link href="/contribuir" className="text-gray-900 font-medium hover:underline">
                        Como Contribuir
                      </Link>{' '}
                      para instruções detalhadas.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Encontrei informação desatualizada</h4>
                    <p className="text-gray-600 text-sm">
                      Abra uma issue no GitHub ou envie um e-mail com os detalhes da atualização necessária.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Posso usar os dados do xmasters?</h4>
                    <p className="text-gray-600 text-sm">
                      Sim! Este é um projeto open-source. Verifique a licença no repositório para mais detalhes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl border border-blue-200 p-8">
                <div className="flex items-start gap-3 mb-4">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Tempo de Resposta</h3>
                    <p className="text-blue-800 text-sm">
                      Normalmente respondemos em até 48 horas úteis. Issues no GitHub costumam ter resposta mais rápida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seção de Comunidade */}
          <div className="mt-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Junte-se à Comunidade</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              O xmasters é mais do que um guia - é uma comunidade de desenvolvedores 
              compartilhando conhecimento. Seja parte dela!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/xtdev2025/xmasters"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <Link
                href="/contribuir"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition border border-white/20"
              >
                Como Contribuir
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
