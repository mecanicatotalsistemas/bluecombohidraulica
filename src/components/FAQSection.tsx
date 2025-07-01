import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Como funciona o acesso vitalício?",
    answer: "Você terá acesso aos cursos para sempre, podendo assistir quantas vezes quiser, baixar materiais e acompanhar atualizações sem custo adicional."
  },
  {
    question: "Os certificados são reconhecidos no mercado?",
    answer: "Sim! Nossos certificados são válidos em todo território nacional e reconhecidos pelas principais empresas do setor industrial."
  },
  {
    question: "Posso assistir no celular ou tablet?",
    answer: "Claro! Nossa plataforma é 100% responsiva. Você pode estudar no computador, tablet ou smartphone, onde e quando quiser."
  },
  {
    question: "Há algum pré-requisito para os cursos?",
    answer: "Não! Os cursos foram desenvolvidos do básico ao avançado. Ideal tanto para iniciantes quanto para profissionais que querem se atualizar."
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Se não ficar satisfeito com o conteúdo em até 7 dias, devolvemos 100% do seu investimento sem burocracias."
  },
  {
    question: "Como funciona o suporte com IA especialista?",
    answer: "Você terá acesso 24 horas por dia a nossa IA especialista em Hidráulica Industrial, que pode tirar suas dúvidas técnicas e ajudar com os estudos a qualquer momento."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <HelpCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas para que você possa tomar a melhor decisão. 
            Transparência total é nosso compromisso!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-green-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ainda tem dúvidas? Entre em contato conosco!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:suporte@mecanicatotalbrasil.com.br" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              📧 Enviar Email
            </a>
            <a href="https://wa.me/message/WCJ7UXSCWWVVH1" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              📱 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;