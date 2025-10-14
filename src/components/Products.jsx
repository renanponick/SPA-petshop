import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/formatPrice';

const products = [
  {
    id: 1,
    name: 'Ração Premium Cães',
    category: 'Rações',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop',
    description: 'Ração completa e balanceada',
  },
  {
    id: 2,
    name: 'Ração Premium Gatos',
    category: 'Rações',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=400&fit=crop',
    description: 'Nutrição completa para gatos',
  },
  {
    id: 3,
    name: 'Brinquedo Interativo',
    category: 'Brinquedos',
    price: 34.90,
    image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=400&h=400&fit=crop',
    description: 'Diversão garantida',
  },
  {
    id: 4,
    name: 'Coleira Ajustável',
    category: 'Acessórios',
    price: 29.90,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop',
    description: 'Confortável e resistente',
  },
  {
    id: 5,
    name: 'Shampoo Pet',
    category: 'Higiene',
    price: 24.90,
    image: 'https://images.unsplash.com/photo-1629198726653-e5b43f6c3d2f?w=400&h=400&fit=crop',
    description: 'Limpeza e hidratação',
  },
  {
    id: 6,
    name: 'Cama Confortável',
    category: 'Acessórios',
    price: 119.90,
    image: 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=400&h=400&fit=crop',
    description: 'Descanso perfeito',
  },
  {
    id: 7,
    name: 'Petiscos Naturais',
    category: 'Petiscos',
    price: 19.90,
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=400&fit=crop',
    description: 'Sabor irresistível',
  },
  {
    id: 8,
    name: 'Roupinha de Inverno',
    category: 'Roupas',
    price: 49.90,
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=400&fit=crop',
    description: 'Proteção e estilo',
  },
];

const categories = ['Todos', 'Rações', 'Acessórios', 'Higiene', 'Brinquedos', 'Petiscos', 'Roupas'];

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <section id="products" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossa Loja
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Produtos de qualidade para o bem-estar do seu pet.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'bg-primary text-primary-foreground' : ''}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-muted-foreground">{product.category}</span>
                <h3 className="text-lg font-bold text-card-foreground mt-1 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  <Button
                    size="sm"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

