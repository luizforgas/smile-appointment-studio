
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: '🦷',
      title: 'Limpeza Dentária',
      description: 'Remoção de placa bacteriana e tártaro para manter seus dentes sempre saudáveis e limpos.',
      features: ['Profilaxia completa', 'Aplicação de flúor', 'Orientação de higiene']
    },
    {
      icon: '✨',
      title: 'Clareamento Dental',
      description: 'Tratamento seguro e eficaz para deixar seus dentes mais brancos e seu sorriso radiante.',
      features: ['Clareamento a laser', 'Clareamento caseiro', 'Resultados duradouros']
    },
    {
      icon: '🔧',
      title: 'Implantes Dentários',
      description: 'Reposição de dentes perdidos com implantes de titânio de última geração.',
      features: ['Implantes unitários', 'Próteses fixas', 'Cirurgia guiada']
    },
    {
      icon: '📐',
      title: 'Ortodontia',
      description: 'Correção do posicionamento dos dentes com aparelhos modernos e discretos.',
      features: ['Aparelho tradicional', 'Aparelho estético', 'Alinhadores invisíveis']
    },
    {
      icon: '🛡️',
      title: 'Odontopediatria',
      description: 'Cuidado especializado para a saúde bucal das crianças em ambiente acolhedor.',
      features: ['Consultas lúdicas', 'Prevenção de cáries', 'Educação bucal infantil']
    },
    {
      icon: '💎',
      title: 'Estética Dental',
      description: 'Procedimentos estéticos para harmonizar seu sorriso e elevar sua autoestima.',
      features: ['Facetas de porcelana', 'Lentes de contato', 'Design do sorriso']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            🏥 Nossos Serviços
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cuidado completo para
            <span className="text-primary block">sua saúde bucal</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Oferecemos uma gama completa de serviços odontológicos com tecnologia de ponta 
            e profissionais especializados para atender todas as suas necessidades.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center text-4xl group-hover:bg-primary-100 transition-colors duration-300">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Não encontrou o que procura?</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-300 font-medium"
          >
            Entre em contato conosco
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
