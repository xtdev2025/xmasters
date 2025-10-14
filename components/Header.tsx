'use client';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              xmasters
            </h1>
            <span className="ml-3 text-sm text-gray-600 hidden sm:inline">
              Guia de Serviços Web
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-primary font-medium transition">
              Serviços
            </a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium transition">
              Categorias
            </a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium transition">
              Sobre
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
