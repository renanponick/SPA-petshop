import { motion } from 'framer-motion';
import { Heart, Wrench, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';

const highlights = [
  {
    icon: Heart,
    title: 'Atendimento humanizado',
    description: 'Cuidamos com carinho e dedicação',
  },
  {
    icon: Wrench,
    title: 'Equipamentos modernos',
    description: 'Tecnologia de ponta para diagnósticos precisos',
  },
  {
    icon: ClipboardList,
    title: 'Histórico do pet',
    description: 'Registro completo de consultas e vacinas',
  },
];

export function Veterinary() {
  return (
    <section id="veterinary" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&h=600&fit=crop"
                alt="Veterinário cuidando de pet"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Consultório Veterinário
            </h2>
            <p className="text-lg text-muted-foreground">
              Nosso consultório conta com profissionais dedicados à saúde e bem-estar do seu pet. 
              Oferecemos consultas, vacinas, check-ups e acompanhamento personalizado.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-card p-4 rounded-xl"
                >
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta veterinária.', '_blank')}
            >
              Agendar Consulta
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

