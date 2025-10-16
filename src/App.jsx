import { ThemeProvider } from '@/context/ThemeContext';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Products } from '@/components/Products';
import { Cart } from '@/components/Cart';
import { Veterinary } from '@/components/Veterinary';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen smooth-scroll">
          <Navbar />
          <main className='overflow-hidden'>
            <Hero />
            <Services />
            <Products />
            <Veterinary />
            <About />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <Cart />
          <WhatsAppButton />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;

