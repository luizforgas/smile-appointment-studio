
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">DC</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">DentalCare</h3>
                <p className="text-primary font-medium">PRO</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Cuidando do seu sorriso com tecnologia de ponta e atendimento humanizado. 
              Mais de 15 anos transformando vidas através da odontologia moderna.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <span className="text-lg">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <span className="text-lg">💼</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-primary text-lg mt-1">📍</span>
                <div>
                  <p className="font-medium">Endereço</p>
                  <p className="text-gray-300 text-sm">
                    Av. Paulista, 1000 - Sala 1205<br />
                    Bela Vista, São Paulo - SP<br />
                    CEP: 01310-100
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-primary text-lg">📞</span>
                <div>
                  <p className="font-medium">Telefone</p>
                  <p className="text-gray-300 text-sm">(11) 3000-0000</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-primary text-lg">📱</span>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-gray-300 text-sm">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-primary text-lg">✉️</span>
                <div>
                  <p className="font-medium">E-mail</p>
                  <p className="text-gray-300 text-sm">contato@dentalcarepro.com.br</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Horário de Funcionamento</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-800">
                <span className="text-gray-300">Segunda - Sexta</span>
                <span className="text-white font-medium">8h às 18h</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-800">
                <span className="text-gray-300">Sábado</span>
                <span className="text-white font-medium">8h às 12h</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-300">Domingo</span>
                <span className="text-red-400 font-medium">Fechado</span>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-300 mb-2">🚨 <strong>Emergências 24h</strong></p>
              <p className="text-sm text-gray-300">
                Para urgências odontológicas, entre em contato pelo WhatsApp.
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Newsletter</h4>
            <p className="text-gray-300 text-sm">
              Receba dicas de saúde bucal e promoções especiais diretamente no seu e-mail.
            </p>
            
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 h-12"
              />
              <Button className="w-full bg-primary hover:bg-primary-600 h-12">
                Inscrever-se
              </Button>
            </div>

            {/* Quick Links */}
            <div className="pt-6 border-t border-gray-800">
              <h5 className="font-bold text-white mb-3">Links Rápidos</h5>
              <div className="space-y-2">
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Nossos Serviços
                </button>
                <button 
                  onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Nossa Equipe
                </button>
                <button 
                  onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Agendar Consulta
                </button>
                <a href="#" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                  Política de Privacidade
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <h4 className="text-xl font-bold text-white mb-6 text-center">Nossa Localização</h4>
          <div className="bg-gray-800 rounded-lg overflow-hidden h-64 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <span className="text-4xl mb-2 block">🗺️</span>
              <p className="text-lg font-medium">Mapa Interativo</p>
              <p className="text-sm">Av. Paulista, 1000 - Bela Vista, São Paulo</p>
              <Button 
                variant="outline" 
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"
                onClick={() => window.open('https://maps.google.com', '_blank')}
              >
                Ver no Google Maps
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} DentalCare Pro. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                CNPJ: 12.345.678/0001-90 | CRO Responsável: Dr. Rafael Santos CRO-SP 23456
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white"
              >
                ↑ Voltar ao topo
              </Button>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Desenvolvido com</span>
                <span className="text-red-500">❤️</span>
                <span>pela equipe DentalCare</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
