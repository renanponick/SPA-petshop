import { useState, useEffect } from 'react';
import { Moon, Sun, ShoppingCart, Menu, X, PawPrint } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/utils/scrollToSection';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { getTotalItems, toggleCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Serviços', id: 'services' },
    { label: 'Produtos', id: 'products' },
    { label: 'Veterinário', id: 'veterinary' },
    { label: 'Avaliações', id: 'testimonials' },
    { label: 'Contato', id: 'contact' },
  ];

  const handleMenuClick = (id) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <PawPrint className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Pet Shop</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleCart}
              className="rounded-full relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>

            <Button
              className="hidden md:inline-flex bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar um atendimento.', '_blank')}
            >
              Agendar Atendimento
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 mt-2"
                onClick={() => {
                  window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar um atendimento.', '_blank');
                  setIsMobileMenuOpen(false);
                }}
              >
                Agendar Atendimento
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

