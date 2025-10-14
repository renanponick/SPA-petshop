import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/utils/scrollToSection';

export function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 min-h-screen flex items-center bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Cuidamos do seu pet como parte da família.
            </h1>
            <p className="text-xl text-muted-foreground">
              Banho, tosa, produtos e atendimento veterinário com todo amor e carinho que seu amigo merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => scrollToSection('services')}
              >
                Conheça nossos serviços
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar um atendimento.', '_blank')}
              >
                Agendar agora
              </Button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop"
                alt="Cachorro e gato felizes"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-secondary text-secondary-foreground rounded-full p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold">+5k</div>
                <div className="text-sm">Pets Felizes</div>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-full p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Anos</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

