import React from 'react';
import { Clock, Award, Users, Zap } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  const handlePaymentClick = () => {
    window.open('https://pay.hotmart.com/M89715746E?checkoutMode=10&fbclid=fbclid&bid=1751392134728', '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/162568/gears-cogs-machine-machinery-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <CountdownTimer />
          </div>
          
          <div className="inline-flex items-center bg-green-600 text-green-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            OFERTA ESPECIAL - COMBO COMPLETO
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            COMBO HIDRÁULICA<br />
            <span className="text-green-400">+ 3 CURSOS</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Torne-se um especialista completo em Hidráulica Industrial com 4 cursos essenciais.<br />
            <strong className="text-white">Mais de 44 horas de conteúdo + Certificados + Acesso Vitalício</strong>
          </p>
          
          <div className="mb-8">
            <div className="text-2xl font-bold mb-2">
              <span className="line-through text-red-300">De R$ 597,00</span>
            </div>
            <div className="text-5xl font-bold text-green-400 mb-2">
              Por R$ 197,00
            </div>
            <div className="text-lg text-blue-200">
              Ou 12x de R$ 21,59 no cartão
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 rounded-lg p-4">
              <Clock className="h-6 w-6 text-green-400" />
              <span className="font-semibold">44+ Horas</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 rounded-lg p-4">
              <Award className="h-6 w-6 text-green-400" />
              <span className="font-semibold">4 Certificados</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 rounded-lg p-4">
              <Users className="h-6 w-6 text-green-400" />
              <span className="font-semibold">Acesso Vitalício</span>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={handlePaymentClick}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse"
            >
              GARANTA SUA VAGA AGORA! 🚀
            </button>
          </div>
          
          <p className="text-sm text-blue-200 mt-4">
            ⏰ Oferta por tempo limitado • ✅ Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;