import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Técnico em Manutenção Industrial",
    company: "Petrobras",
    content: "Os cursos transformaram minha carreira. Consegui uma promoção em 6 meses e hoje lidero uma equipe de manutenção. O conteúdo é excepcional!",
    rating: 5,
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
  },
  {
    name: "Ana Paula Santos",
    role: "Engenheira de Automação",
    company: "Vale S.A.",
    content: "Formação completa e prática. Os certificados me ajudaram muito no processo seletivo. Recomendo para todos que querem crescer na área industrial.",
    rating: 5,
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
  },
  {
    name: "Roberto Oliveira",
    role: "Supervisor de Produção",
    company: "Embraer",
    content: "Investimento que valeu cada centavo. Aplico os conhecimentos diariamente e minha equipe também se beneficia. Acesso vitalício é um diferencial único!",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
  }
];

const TestimonialsSection = () => {
  const handlePaymentClick = () => {
    window.open('https://pay.hotmart.com/M89715746E?checkoutMode=10&fbclid=fbclid&bid=1751392134728', '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            O Que Nossos Alunos Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias reais de profissionais que transformaram suas carreiras com nossos cursos. 
            Você pode ser o próximo!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-green-600 mb-4" />
              
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-green-600 font-semibold">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Junte-se a mais de 10.000 profissionais que já transformaram suas carreiras</p>
          <button 
            onClick={handlePaymentClick}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse"
          >
            EU TAMBÉM QUERO ME DESTACAR! 🌟
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;