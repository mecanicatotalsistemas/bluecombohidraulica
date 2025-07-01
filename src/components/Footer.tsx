import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/LOGO SEM FUNDO.png" 
                alt="Mecânica Total" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold">Mecânica Total</span>
            </div>
            <p className="text-gray-400 mb-4">
              Formação especializada em Hidráulica Industrial para impulsionar sua carreira profissional.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/mecanicatotalbr" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/mecanicatotalbr/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.linkedin.com/company/mecanicatotalbrasil" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.youtube.com/@mecanicatotalbr" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Cursos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Hidráulica Industrial</li>
              <li>Pneumática Industrial</li>
              <li>Metrologia</li>
              <li>Elementos de Vedação</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Suporte</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Central de Ajuda</li>
              <li>Dúvidas Frequentes</li>
              <li>Garantia</li>
              <li>Política de Privacidade</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>suporte@mecanicatotalbrasil.com.br</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="https://wa.me/message/WCJ7UXSCWWVVH1" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Serra, ES</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Mecânica Total Brasil. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">CNPJ: 29.705.491/0001-58 | Certificados válidos em todo território nacional</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;