import React from 'react';
import { Clock, Shield, Award, Zap } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const CTASection = () => {
  const handlePaymentClick = () => {
    window.open('https://pay.hotmart.com/M89715746E?checkoutMode=10&fbclid=fbclid&bid=1751392134728', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <CountdownTimer />
          </div>
          
          <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            <Clock className="h-4 w-4 mr-2" />
            ÚLTIMAS VAGAS DISPONÍVEIS
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Não Perca Esta Oportunidade Única!
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Transforme sua carreira hoje mesmo com o combo mais completo de cursos industriais do mercado.
          </p>
          
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 mb-10">
            <h3 className="text-2xl font-bold mb-6">O Que Você Leva Hoje:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <strong>4 Cursos Completos</strong>
                  <p className="text-blue-200">Hidráulica, Pneumática, Metrologia e Elementos de Vedação</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <strong>44+ Horas de Conteúdo</strong>
                  <p className="text-blue-200">Material prático e aplicável imediatamente</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <strong>4 Certificados</strong>
                  <p className="text-blue-200">Reconhecidos nacionalmente</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <strong>Acesso Vitalício</strong>
                  <p className="text-blue-200">Estude para sempre, sem pressa</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <strong>Garantia de 7 Dias</strong>
                  <p className="text-blue-200">100% do dinheiro de volta</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <strong>Suporte IA 24h</strong>
                  <p className="text-blue-200">IA especialista disponível 24 horas por dia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="text-3xl font-bold mb-2">
              <span className="line-through text-red-300">R$ 597,00</span>
            </div>
            <div className="text-5xl font-bold text-green-400 mb-2">
              R$ 197,00
            </div>
            <div className="text-lg text-blue-200">
              Ou 12x de R$ 21,59 no cartão
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={handlePaymentClick}
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl animate-pulse"
            >
              🚀 GARANTIR MINHA VAGA AGORA!
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2 text-green-400" />
              <span>Pagamento 100% Seguro</span>
            </div>
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-2 text-green-400" />
              <span>Certificação Garantida</span>
            </div>
            <div className="flex items-center">
              <Zap className="h-4 w-4 mr-2 text-green-400" />
              <span>Acesso Imediato</span>
            </div>
          </div>
          
          <p className="text-sm text-blue-200 mt-6">
            🔒 Seus dados estão protegidos • ⚡ Acesso liberado em segundos
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;