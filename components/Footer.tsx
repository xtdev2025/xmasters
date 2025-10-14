'use client';

export default function Footer() {
  return (
    <footer className="bg-globo-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">xmasters</h3>
            <p className="text-gray-400 text-sm">
              Seu guia completo para serviços web gratuitos e trials. 
              Descubra as melhores plataformas para seus projetos.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Categorias</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  Cloud & VPS
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  Hospedagem Estática
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  Backend & DB
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  Ferramentas & APIs
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  Todos os Serviços
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  Filtros Avançados
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  Documentação
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Sobre</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/xtdev2025/xmasters" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  Contribuir
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} xmasters. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
