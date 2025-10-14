import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Sobre Nós
            </h2>
            <p className="text-lg text-muted-foreground">
              Há mais de 10 anos, nossa missão é cuidar com amor. Acreditamos que cada pet é único 
              e merece atenção especial. Nossa equipe é formada por profissionais apaixonados por animais, 
              dedicados a proporcionar o melhor atendimento e cuidado.
            </p>
            <p className="text-lg text-muted-foreground">
              Trabalhamos com produtos de qualidade, equipamentos modernos e técnicas atualizadas 
              para garantir a saúde, higiene e felicidade do seu melhor amigo.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-primary/10 border border-primary/20 rounded-2xl p-6 flex items-center gap-4"
            >
              <div className="bg-primary text-primary-foreground p-4 rounded-full">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">+5.000</div>
                <div className="text-muted-foreground">Pets atendidos com carinho</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?w=800&h=600&fit=crop"
                alt="Equipe cuidando dos animais"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

