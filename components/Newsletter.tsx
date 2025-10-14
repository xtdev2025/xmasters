'use client';

import { useState } from 'react';

interface NewsletterProps {
  variant?: 'inline' | 'card' | 'footer';
}

export default function Newsletter({ variant = 'card' }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Por favor, insira um e-mail válido');
      return;
    }

    setStatus('loading');

    // Simular envio (substituir por API real)
    setTimeout(() => {
      // Salvar no localStorage por enquanto
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
        setStatus('success');
        setMessage('Obrigado por se inscrever! 🎉');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Este e-mail já está cadastrado');
      }
    }, 1000);
  };

  // Variant: Inline (hero sections)
  if (variant === 'inline') {
    return (
      <div className="max-w-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Receba atualizações semanais
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Novos serviços e ofertas direto no seu e-mail
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-50"
          >
            {status === 'loading' ? 'Enviando...' : 'Inscrever'}
          </button>
        </form>
        {message && (
          <p className={`mt-2 text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>
    );
  }

  // Variant: Footer (minimal)
  if (variant === 'footer') {
    return (
      <div>
        <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">
          Newsletter
        </h4>
        <p className="text-gray-400 text-sm mb-4">
          Receba novidades toda semana
        </p>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition disabled:opacity-50"
          >
            {status === 'loading' ? 'Enviando...' : 'Inscrever'}
          </button>
        </form>
        {message && (
          <p className={`mt-2 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
      </div>
    );
  }

  // Variant: Card (default - standalone sections)
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Form */}
        <div className="flex-1 p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu melhor e-mail"
                className="w-full px-5 py-4 pr-32 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition text-gray-900 placeholder-gray-400"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transition disabled:opacity-50 shadow-md"
              >
                {status === 'loading' ? (
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  'Inscrever'
                )}
              </button>
            </div>
            
            {message && (
              <div className={`p-4 rounded-xl flex items-start gap-3 ${
                status === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                <svg 
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 ${status === 'success' ? 'text-green-500' : 'text-red-500'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  {status === 'success' ? (
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  ) : (
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  )}
                </svg>
                <span className="text-sm font-medium">{message}</span>
              </div>
            )}
          </form>
        </div>

        {/* Right side - Stats/Social Proof */}
        <div className="bg-gradient-to-br from-emerald-500 to-blue-500 p-8 md:p-10 md:w-80 flex flex-col justify-center text-white">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-white/80">Serviços catalogados</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold">1.000+</div>
                <div className="text-sm text-white/80">Inscritos ativos</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold">Semanal</div>
                <div className="text-sm text-white/80">Atualizações regulares</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
