import React, { useState, useEffect } from 'react';
import { CheckCircle, X, ShoppingCart } from 'lucide-react';

interface Purchase {
  name: string;
  location: string;
  timeAgo: string;
  course: string;
}

const purchases: Purchase[] = [
  { name: "Carlos Silva", location: "São Paulo, SP", timeAgo: "2 minutos atrás", course: "Combo Hidráulica + 3 Cursos" },
  { name: "Ana Santos", location: "Rio de Janeiro, RJ", timeAgo: "5 minutos atrás", course: "Combo Hidráulica + 3 Cursos" },
  { name: "Roberto Lima", location: "Belo Horizonte, MG", timeAgo: "8 minutos atrás", course: "Combo Hidráulica + 3 Cursos" },
  { name: "Maria Oliveira", location: "Brasília, DF", timeAgo: "12 minutos atrás", course: "Combo Hidráulica + 3 Cursos" },
  { name: "João Pereira", location: "Salvador, BA", timeAgo: "15 minutos atrás", course: "Combo Hidráulica + 3 Cursos" },
  { name: "Fernanda Costa", location: "Fortaleza, CE", timeAgo: "18 minutos atrás", course: "Combo Hidráulica + 3 Cursos" },
  { name: "Pedro Almeida", location: "Porto Alegre, RS", timeAgo: "22 minutos atrás", course: "Combo Hidráulica + 3 Cursos" },
  { name: "Juliana Rocha", location: "Recife, PE", timeAgo: "25 minutos atrás", course: "Combo Hidráulica + 3 Cursos" },
  { name: "Marcos Ferreira", location: "Curitiba, PR", timeAgo: "28 minutos atrás", course: "Combo Hidráulica + 3 Cursos" },
  { name: "Luciana Martins", location: "Goiânia, GO", timeAgo: "32 minutos atrás", course: "Combo Hidráulica + 3 Cursos" },
  { name: "Rafael Souza", location: "Manaus, AM", timeAgo: "35 minutos atrás", course: "Combo Hidráulica + 3 Cursos" },
  { name: "Camila Barbosa", location: "Vitória, ES", timeAgo: "38 minutos atrás", course: "Combo Hidráulica + 3 Cursos" },
  { name: "Diego Nascimento", location: "Florianópolis, SC", timeAgo: "42 minutos atrás", course: "Combo Hidráulica + 3 Cursos" },
  { name: "Patrícia Gomes", location: "Campo Grande, MS", timeAgo: "45 minutos atrás", course: "Combo Hidráulica + 3 Cursos" },
  { name: "André Cardoso", location: "Teresina, PI", timeAgo: "48 minutos atrás", course: "Combo Hidráulica + 3 Cursos" }
];

const PurchaseNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState<Purchase>(purchases[0]);
  const [purchaseIndex, setPurchaseIndex] = useState(0);

  useEffect(() => {
    // Primeira exibição após 5 segundos
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
      setCurrentPurchase(purchases[0]);
      setPurchaseIndex(0);
    }, 5000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Auto-hide após 5 segundos
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      // Próxima exibição após 17 segundos
      const nextTimer = setTimeout(() => {
        const nextIndex = (purchaseIndex + 1) % purchases.length;
        setPurchaseIndex(nextIndex);
        setCurrentPurchase(purchases[nextIndex]);
        setIsVisible(true);
      }, 17000);

      return () => {
        clearTimeout(hideTimer);
        clearTimeout(nextTimer);
      };
    }
  }, [isVisible, purchaseIndex]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-slide-in-left">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 max-w-sm relative overflow-hidden">
        {/* Botão de fechar */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Indicador de atividade */}
        <div className="absolute top-0 left-0 w-full h-1 bg-green-500 animate-pulse"></div>

        <div className="flex items-start space-x-3">
          <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <ShoppingCart className="h-4 w-4 text-green-600" />
              <span className="text-sm font-semibold text-green-600">Compra Realizada!</span>
            </div>
            
            <p className="text-sm text-gray-800 font-medium mb-1">
              <strong>{currentPurchase.name}</strong> de {currentPurchase.location}
            </p>
            
            <p className="text-xs text-gray-600 mb-2">
              Adquiriu: {currentPurchase.course}
            </p>
            
            <p className="text-xs text-gray-500">
              {currentPurchase.timeAgo}
            </p>
          </div>
        </div>

        {/* Barra de progresso */}
        <div className="mt-3 bg-gray-200 rounded-full h-1">
          <div className="bg-green-500 h-1 rounded-full animate-progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseNotification;