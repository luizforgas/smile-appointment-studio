
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Consulta de Avaliação',
    'Limpeza Dentária',
    'Clareamento Dental',
    'Implante Dentário',
    'Ortodontia',
    'Odontopediatria',
    'Estética Dental',
    'Tratamento de Canal',
    'Prótese Dentária'
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !selectedService || !formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Erro no agendamento",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Agendamento realizado com sucesso!",
        description: `Sua consulta foi agendada para ${format(selectedDate, 'dd/MM/yyyy', { locale: ptBR })} às ${selectedTime}.`,
      });
    }, 1000);
  };

  const isDateDisabled = (date: Date) => {
    const today = new Date();
    const dayOfWeek = date.getDay();
    
    // Disable past dates, weekends
    return date < today || dayOfWeek === 0 || dayOfWeek === 6;
  };

  if (isSubmitted) {
    return (
      <section id="appointment" className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-0 shadow-2xl">
            <CardContent className="p-12 text-center space-y-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-green-600 text-4xl">✓</span>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">
                  Agendamento Confirmado!
                </h3>
                <p className="text-gray-600 text-lg">
                  Recebemos seu agendamento e em breve entraremos em contato para confirmar os detalhes.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Paciente:</span>
                  <span className="text-gray-900">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Serviço:</span>
                  <span className="text-gray-900">{selectedService}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Data:</span>
                  <span className="text-gray-900">
                    {selectedDate && format(selectedDate, 'dd/MM/yyyy', { locale: ptBR })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Horário:</span>
                  <span className="text-gray-900">{selectedTime}</span>
                </div>
              </div>

              <Button 
                onClick={() => {
                  setIsSubmitted(false);
                  setSelectedDate(undefined);
                  setSelectedTime('');
                  setSelectedService('');
                  setFormData({ name: '', phone: '', email: '', notes: '' });
                }}
                className="bg-primary hover:bg-primary-600 text-white px-8 py-3"
              >
                Fazer Novo Agendamento
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            📅 Agendamento Online
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Agende sua
            <span className="text-primary block">consulta</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Escolha o melhor dia e horário para sua consulta. Nosso sistema é rápido, 
            seguro e você recebe confirmação instantânea.
          </p>
        </div>

        {/* Appointment Form */}
        <Card className="max-w-4xl mx-auto border-0 shadow-2xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Preencha os dados para agendamento
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Service Selection */}
              <div className="space-y-4">
                <Label className="text-base font-semibold text-gray-900">
                  Selecione o serviço *
                </Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Escolha o tipo de consulta ou tratamento" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date and Time Selection */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Calendar */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold text-gray-900">
                    Escolha a data *
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full h-12 justify-start text-left font-normal text-base",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        {selectedDate ? (
                          format(selectedDate, 'dd/MM/yyyy', { locale: ptBR })
                        ) : (
                          <span>Selecione uma data</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={isDateDisabled}
                        initialFocus
                        locale={ptBR}
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  <p className="text-sm text-gray-600">
                    Atendemos de segunda a sexta-feira
                  </p>
                </div>

                {/* Time Slots */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold text-gray-900">
                    Escolha o horário *
                  </Label>
                  <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        className={cn(
                          "h-10 text-sm",
                          selectedTime === time 
                            ? "bg-primary text-white" 
                            : "hover:bg-primary-50"
                        )}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Dados Pessoais
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-medium">
                      Nome completo *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Seu nome completo"
                      className="h-12 text-base"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-medium">
                      Telefone *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="h-12 text-base"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-medium">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="seu.email@exemplo.com"
                    className="h-12 text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-base font-medium">
                    Observações (opcional)
                  </Label>
                  <textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Alguma informação adicional que gostaria de compartilhar..."
                    className="w-full h-24 p-3 border border-gray-300 rounded-lg text-base resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-200">
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-600 text-white h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Confirmar Agendamento
                </Button>
                <p className="text-sm text-gray-600 text-center mt-4">
                  Após o envio, nossa equipe entrará em contato para confirmar sua consulta.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Appointment;
