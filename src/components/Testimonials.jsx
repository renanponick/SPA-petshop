import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    rating: 5,
    comment: 'Excelente atendimento! Minha cachorrinha sempre volta feliz e cheirosa. A equipe é super atenciosa e carinhosa.',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'João Santos',
    rating: 5,
    comment: 'O melhor pet shop da região! Produtos de qualidade e preços justos. Recomendo muito!',
    image: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Ana Costa',
    rating: 5,
    comment: 'Levei meu gato para consulta veterinária e fui muito bem atendida. Profissionais competentes e dedicados.',
    image: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'Pedro Oliveira',
    rating: 5,
    comment: 'Adoro o serviço de banho e tosa! Meu cachorro sempre fica lindo e bem cuidado. Equipe nota 10!',
    image: 'https://i.pravatar.cc/150?img=13',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Quem conhece, confia
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos serviços.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-card-foreground">{testimonial.name}</h3>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                {testimonial.comment}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

