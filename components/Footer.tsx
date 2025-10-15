'use client';

import Link from 'next/link';
import Newsletter from '@/components/Newsletter';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800 lg:ml-72">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Sobre o Projeto */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">xmasters</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Seu guia curado de serviços web gratuitos e trials. 
              Descubra as melhores plataformas para seus projetos.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/xtdev2025/xmasters"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/xmasters_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Categorias Principais */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Categorias</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categoria/cloud-vps" className="text-gray-400 hover:text-white transition">
                  Cloud & VPS
                </Link>
              </li>
              <li>
                <Link href="/categoria/hospedagem-estatica" className="text-gray-400 hover:text-white transition">
                  Hospedagem Estática
                </Link>
              </li>
              <li>
                <Link href="/categoria/backend-db" className="text-gray-400 hover:text-white transition">
                  Backend & Databases
                </Link>
              </li>
              <li>
                <Link href="/categoria/ferramentas-apis" className="text-gray-400 hover:text-white transition">
                  Ferramentas & APIs
                </Link>
              </li>
              <li>
                <Link href="/categoria/seguranca-testes" className="text-gray-400 hover:text-white transition">
                  Segurança & Testes
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition font-medium">
                  Ver todas →
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Tipos de Oferta */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Tipos de Oferta</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/oferta/permanente" className="text-gray-400 hover:text-white transition inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Grátis Permanente
                </Link>
              </li>
              <li>
                <Link href="/oferta/free-tier" className="text-gray-400 hover:text-white transition inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Free Tier
                </Link>
              </li>
              <li>
                <Link href="/oferta/trial" className="text-gray-400 hover:text-white transition inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  Trial
                </Link>
              </li>
              <li>
                <Link href="/oferta/freemium" className="text-gray-400 hover:text-white transition inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  Freemium
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Links Úteis */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Projeto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition">
                  Sobre o xmasters
                </Link>
              </li>
              <li>
                <Link href="/contribuir" className="text-gray-400 hover:text-white transition">
                  Como Contribuir
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition">
                  Contato
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/xtdev2025/xmasters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition inline-flex items-center gap-1"
                >
                  GitHub
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="max-w-md">
            <Newsletter variant="footer" />
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} xmasters. Projeto open-source.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1">
              Feito com
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              pela comunidade
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
