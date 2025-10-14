import { PawPrint, Heart } from 'lucide-react';
import { scrollToSection } from '@/utils/scrollToSection';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Início', id: 'hero' },
    { label: 'Serviços', id: 'services' },
    { label: 'Produtos', id: 'products' },
    { label: 'Veterinário', id: 'veterinary' },
    { label: 'Avaliações', id: 'testimonials' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PawPrint className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Pet Shop</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Cuidar é um ato de amor — e é isso que fazemos todos os dias.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Rua dos Pets, 123 - Centro</p>
              <p>São Paulo - SP, 01234-567</p>
              <p>(11) 99999-9999</p>
              <p>contato@petshop.com.br</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Pet Shop. Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> para seu pet.
          </p>
        </div>
      </div>
    </footer>
  );
}

