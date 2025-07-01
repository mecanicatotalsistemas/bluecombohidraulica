import React, { useState, useEffect } from 'react';
import { X, Gift, Clock, Star, Check } from 'lucide-react';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [couponCopied, setCouponCopied] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Detecta quando o mouse sai da área superior da página
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        setIsAnimating(true);
        setPulseCount(0);
      }
    };

    // Adiciona o listener para detectar exit intent
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  useEffect(() => {
    if (isAnimating && pulseCount < 2) {
      const timer = setTimeout(() => {
        setPulseCount(prev => prev + 1);
      }, 600); // Duração de cada pulse

      return () => clearTimeout(timer);
    } else if (pulseCount >= 2) {
      setIsAnimating(false);
    }
  }, [isAnimating, pulseCount]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handlePaymentClick = () => {
    // Armazena o cupom no localStorage antes de redirecionar
    localStorage.setItem('discountCoupon', 'Aluno10');
    localStorage.setItem('discountApplied', 'true');
    localStorage.setItem('couponTimestamp', new Date().toISOString());
    
    window.open('https://pay.hotmart.com/M89715746E?checkoutMode=10&fbclid=fbclid&bid=1751392134728', '_blank');
    setIsVisible(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('Aluno10');
      setCouponCopied(true);
      
      // Armazena o cupom no localStorage
      localStorage.setItem('discountCoupon', 'Aluno10');
      localStorage.setItem('discountApplied', 'true');
      localStorage.setItem('couponTimestamp', new Date().toISOString());
      
      // Feedback visual
      setTimeout(() => {
        // Redireciona para a página de pagamento após 2 segundos
        window.open('https://pay.hotmart.com/M89715746E?checkoutMode=10&fbclid=fbclid&bid=1751392134728', '_blank');
        setIsVisible(false);
      }, 2000);
      
    } catch (err) {
      // Fallback para navegadores que não suportam clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = 'Aluno10';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      setCouponCopied(true);
      
      // Armazena o cupom no localStorage
      localStorage.setItem('discountCoupon', 'Aluno10');
      localStorage.setItem('discountApplied', 'true');
      localStorage.setItem('couponTimestamp', new Date().toISOString());
      
      setTimeout(() => {
        window.open('https://pay.hotmart.com/M89715746E?checkoutMode=10&fbclid=fbclid&bid=1751392134728', '_blank');
        setIsVisible(false);
      }, 2000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4">
      <div className={`bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden ${isAnimating ? 'animate-pulse' : ''}`}>
        {/* Botão de fechar */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header com gradiente azul/verde (cores seguras) */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 text-center">
          <Gift className="h-12 w-12 mx-auto mb-3 text-yellow-300" />
          <h2 className="text-2xl font-bold mb-2">ESPERE! 🎁</h2>
          <p className="text-lg">Não perca esta oferta especial!</p>
        </div>

        {/* Conteúdo */}
        <div className="p-6 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              DESCONTO EXCLUSIVO DE 10%
            </h3>
            <p className="text-gray-600 mb-4">
              Use o cupom abaixo e economize ainda mais no Combo Hidráulica + 3 Cursos!
            </p>
            
            {/* Cupom */}
            <div className="bg-gradient-to-r from-green-100 to-blue-100 border-2 border-dashed border-green-500 rounded-lg p-4 mb-4">
              <div className="text-sm text-gray-600 mb-1">Código do Cupom:</div>
              <div className="text-2xl font-bold text-green-600 mb-2">ALUNO10</div>
              
              {!couponCopied ? (
                <button
                  onClick={copyToClipboard}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  📋 Copiar Cupom
                </button>
              ) : (
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center">
                  <Check className="h-4 w-4 mr-2" />
                  Cupom Copiado! Redirecionando...
                </div>
              )}
            </div>

            {/* Preços */}
            <div className="mb-6">
              <div className="text-lg text-gray-500 line-through mb-1">De R$ 197,00</div>
              <div className="text-3xl font-bold text-green-600 mb-1">Por R$ 177,30</div>
              <div className="text-sm text-gray-600">Ou 12x de R$ 19,43 no cartão</div>
            </div>

            {/* Benefícios rápidos */}
            <div className="text-left mb-6 space-y-2">
              <div className="flex items-center text-sm">
                <Star className="h-4 w-4 text-yellow-500 mr-2" />
                <span>4 Cursos Completos + Certificados</span>
              </div>
              <div className="flex items-center text-sm">
                <Star className="h-4 w-4 text-yellow-500 mr-2" />
                <span>44+ Horas de Conteúdo</span>
              </div>
              <div className="flex items-center text-sm">
                <Star className="h-4 w-4 text-yellow-500 mr-2" />
                <span>Acesso Vitalício</span>
              </div>
              <div className="flex items-center text-sm">
                <Star className="h-4 w-4 text-yellow-500 mr-2" />
                <span>Garantia de 7 Dias</span>
              </div>
            </div>

            {/* Urgência */}
            <div className="bg-orange-100 border border-orange-300 rounded-lg p-3 mb-6">
              <div className="flex items-center justify-center text-orange-600 text-sm font-semibold">
                <Clock className="h-4 w-4 mr-2" />
                Oferta válida apenas hoje!
              </div>
            </div>

            {/* Botões */}
            <div className="space-y-3">
              {!couponCopied && (
                <button
                  onClick={handlePaymentClick}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  🎯 APROVEITAR DESCONTO AGORA!
                </button>
              )}
              
              {!couponCopied && (
                <button
                  onClick={handleClose}
                  className="w-full text-gray-500 hover:text-gray-700 text-sm transition-colors"
                >
                  Não, obrigado. Continuar sem desconto.
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-3 text-center">
          <p className="text-xs text-gray-500">
            🔒 Pagamento 100% seguro • ⚡ Acesso imediato
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;