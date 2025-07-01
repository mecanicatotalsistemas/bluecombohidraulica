import React from 'react';
import { Clock, Award, BookOpen, Droplets, Wind, Ruler, Shield } from 'lucide-react';

const courses = [
  {
    title: "Hidráulica Industrial",
    duration: "12 Horas",
    icon: Droplets,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
    description: "Domínio completo de sistemas hidráulicos industriais, desde fundamentos até aplicações avançadas.",
    topics: ["Princípios da hidráulica", "Bombas e válvulas", "Circuitos hidráulicos", "Manutenção preventiva"]
  },
  {
    title: "Pneumática Industrial",
    duration: "10 Horas",
    icon: Wind,
    iconColor: "text-cyan-600",
    bgColor: "bg-cyan-100",
    description: "Sistemas pneumáticos para Hidráulica Industrial com foco prático e aplicação imediata.",
    topics: ["Ar comprimido", "Atuadores pneumáticos", "Válvulas direcionais", "Automação pneumática"]
  },
  {
    title: "Metrologia",
    duration: "10 Horas",
    icon: Ruler,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100",
    description: "Medições precisas e controle de qualidade essenciais para a indústria moderna.",
    topics: ["Instrumentos de medição", "Tolerâncias dimensionais", "Calibração", "Controle de qualidade"]
  },
  {
    title: "Elementos de Vedação",
    duration: "12 Horas",
    icon: Shield,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
    description: "Seleção e aplicação correta de vedações para sistemas industriais eficientes.",
    topics: ["Tipos de vedações", "Materiais e aplicações", "Instalação correta", "Falhas e soluções"]
  }
];

const CoursesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            O Que Você Vai Aprender
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            4 cursos fundamentais para sua especialização em Hidráulica Industrial. 
            Conteúdo prático, atualizado e ministrado por especialistas da área.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`h-48 ${course.bgColor} relative overflow-hidden flex items-center justify-center`}>
                <course.icon className={`h-24 w-24 ${course.iconColor}`} />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="space-y-2 mb-6">
                  {course.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center text-sm text-gray-700">
                      <BookOpen className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      {topic}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-600 font-semibold">
                    <Award className="h-5 w-5 mr-2" />
                    Certificado Incluso
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-800">{course.duration}</div>
                    <div className="text-sm text-gray-500">de conteúdo</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Total do Combo</h3>
            <div className="text-4xl font-bold text-green-600 mb-2">44+ Horas</div>
            <div className="text-gray-600 mb-4">4 Certificados Profissionais</div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold">
              Acesso Vitalício Garantido
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;