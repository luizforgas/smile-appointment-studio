
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Maria Silva',
      age: 32,
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Excelente atendimento! A equipe é muito profissional e o ambiente é super limpo e moderno. Meu tratamento de clareamento ficou perfeito!',
      treatment: 'Clareamento Dental'
    },
    {
      name: 'João Santos',
      age: 45,
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Fiz meu implante aqui e superou todas as expectativas. Processo tranquilo, sem dor e resultado incrível. Recomendo muito!',
      treatment: 'Implante Dentário'
    },
    {
      name: 'Ana Costa',
      age: 28,
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Minha filha adora vir aqui! O atendimento infantil é excepcional, ela perdeu o medo do dentista. Equipe muito carinhosa!',
      treatment: 'Odontopediatria'
    },
    {
      name: 'Pedro Oliveira',
      age: 35,
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Ortodontia com aparelho invisível foi a melhor escolha! Profissionais competentes e resultado além das expectativas.',
      treatment: 'Ortodontia'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span 
        key={i} 
        className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            💬 Depoimentos
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que nossos
            <span className="text-primary block">pacientes dizem</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A satisfação dos nossos pacientes é nossa maior recompensa. 
            Veja alguns depoimentos reais de quem confia em nosso trabalho.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-primary-50 to-white">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center space-y-8">
                {/* Quote */}
                <div className="text-6xl text-primary-200 font-serif">"</div>
                
                {/* Testimonial Text */}
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                  {testimonials[currentTestimonial].text}
                </p>

                {/* Rating */}
                <div className="flex justify-center space-x-1">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonials[currentTestimonial].photo}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="text-left">
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].age} anos • {testimonials[currentTestimonial].treatment}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-primary w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                index === currentTestimonial 
                  ? 'ring-2 ring-primary shadow-lg' 
                  : 'hover:scale-105'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <CardContent className="p-6 text-center space-y-4">
                <img 
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mx-auto border-2 border-gray-200"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.treatment}</div>
                </div>
                <div className="flex justify-center space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
