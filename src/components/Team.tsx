
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dra. Carmen Rodriguez',
      specialty: 'Cirurgiã-Dentista | Implantodontia',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '15 anos',
      education: 'USP - Especialização em Implantodontia',
      description: 'Especialista em implantes dentários com técnicas avançadas e cirurgia guiada por computador.',
      credentials: ['CRO-SP 12345', 'Membro da SBPqO', 'Certificação ITI']
    },
    {
      name: 'Dr. Rafael Santos',
      specialty: 'Ortodontista | Estética Dental',
      photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '12 anos',
      education: 'UNICAMP - Mestrado em Ortodontia',
      description: 'Especialista em ortodontia e harmonização facial, focado em resultados estéticos excepcionais.',
      credentials: ['CRO-SP 23456', 'Invisalign Provider', 'MBA em Gestão']
    },
    {
      name: 'Dra. Lucia Ferreira',
      specialty: 'Odontopediatra | Preventiva',
      photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '10 anos',
      education: 'UNESP - Especialização em Odontopediatria',
      description: 'Dedicada ao cuidado infantil, criando experiências positivas e educativas para as crianças.',
      credentials: ['CRO-SP 34567', 'Membro da SBOPqO', 'Curso de Sedação']
    },
    {
      name: 'Dr. Marcos Lima',
      specialty: 'Endodontista | Clínica Geral',
      photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '18 anos',
      education: 'FMUSP - Doutorado em Endodontia',
      description: 'Especialista em tratamentos de canal com tecnologia de ponta e técnicas minimamente invasivas.',
      credentials: ['CRO-SP 45678', 'Professor Universitário', 'Pesquisador CNPq']
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            👥 Nossa Equipe
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Profissionais
            <span className="text-primary block">especializados</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Nossa equipe é formada por dentistas altamente qualificados e especializados, 
            comprometidos em oferecer o melhor atendimento e tratamento para você.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-500 border-0 bg-white hover:-translate-y-2 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Photo */}
                <div className="relative overflow-hidden">
                  <img 
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Credentials Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="space-y-1">
                      {member.credentials.map((credential, credIndex) => (
                        <div key={credIndex} className="text-white text-xs bg-black/50 px-2 py-1 rounded">
                          {credential}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {member.specialty}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {member.experience}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-xs text-gray-500">
                      <strong>Formação:</strong> {member.education}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Comprometimento com a
                <span className="text-primary block">excelência</span>
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nossa equipe se mantém sempre atualizada com as últimas técnicas e tecnologias 
                  da odontologia moderna, participando regularmente de cursos e congressos.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Educação continuada</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Certificações internacionais</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Pesquisa científica</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Atendimento humanizado</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Equipe médica"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
