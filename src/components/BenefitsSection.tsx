import React from 'react';
import { TrendingUp, Shield, Users, Zap, Award, Clock } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Acelere Sua Carreira",
    description: "Profissionais qualificados em Hidráulica Industrial têm salários até 60% maiores"
  },
  {
    icon: Shield,
    title: "Formação Completa",
    description: "4 áreas essenciais da indústria em um só lugar, economia de tempo e dinheiro"
  },
  {
    icon: Users,
    title: "Networking Profissional",
    description: "Conecte-se com outros profissionais e expanda sua rede de contatos"
  },
  {
    icon: Zap,
    title: "Aplicação Imediata",
    description: "Conteúdo prático que você pode aplicar no trabalho desde o primeiro dia"
  },
  {
    icon: Award,
    title: "Certificação Reconhecida",
    description: "Certificados válidos em todo território nacional para comprovação"
  },
  {
    icon: Clock,
    title: "Flexibilidade Total",
    description: "Estude no seu ritmo, quando e onde quiser, por toda a vida"
  }
];

const BenefitsSection = () => {
  const handlePaymentClick = () => {
    window.open('https://pay.hotmart.com/M89715746E?checkoutMode=10&fbclid=fbclid&bid=1751392134728', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Por Que Escolher Este Combo?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais do que cursos, uma transformação completa na sua carreira profissional. 
            Veja todos os benefícios que você terá ao se inscrever hoje.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-green-50 transition-all duration-300 hover:shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Investimento Que Se Paga</h3>
          <p className="text-xl mb-6 text-blue-100">
            O retorno do investimento em qualificação profissional acontece em média em 3 meses. 
            Sua carreira vale esse investimento!
          </p>
          <button 
            onClick={handlePaymentClick}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 animate-pulse"
          >
            INSCREVA-SE JÁ E TRANSFORME SUA CARREIRA! 🎯
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;