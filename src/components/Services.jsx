import { motion } from 'framer-motion';
import { Bath, Scissors, Stethoscope, Award, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Bath,
    title: 'Banho e Tosa',
    description: 'Cuidados que deixam seu pet ainda mais feliz e cheiroso.',
    color: 'text-blue-500',
  },
  {
    icon: Stethoscope,
    title: 'Veterinário',
    description: 'Atendimento com amor e responsabilidade.',
    color: 'text-red-500',
  },
  {
    icon: Award,
    title: 'Adestramento',
    description: 'Treinamento comportamental e obediência positiva.',
    color: 'text-green-500',
  },
  {
    icon: Home,
    title: 'Hotel Pet',
    description: 'Hospedagem com conforto e segurança.',
    color: 'text-purple-500',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para cuidar do seu pet com todo carinho e profissionalismo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className={`${service.color} mb-4`}>
                <service.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar: ' + service.title, '_blank')}
              >
                Agendar Serviço
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

