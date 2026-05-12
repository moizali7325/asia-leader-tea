import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { IMAGES } from '../constants';

export default function Navbar({ cartCount, onOpenCart }: { cartCount: number; onOpenCart: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 mobile-padding py-4',
        isScrolled 
          ? 'glass py-3 border-b border-gold/20' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <img 
            src="/logo.jpeg" 
            alt="Asia Leader Tea Logo - Premium tea brand from Pakistan"
            className="h-16 w-auto group-hover:scale-105 transition-transform drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.3em] font-black text-text-main opacity-80 hover:opacity-100 hover:text-gold hover:scale-105 transition-all drop-shadow-sm hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] py-2 px-3 min-h-[44px] flex items-center"
              >
                {link.name}
              </a>
            ))}
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={onOpenCart}
            className="relative p-2.5 text-white hover:text-gold transition-all hover:scale-110 glass rounded-2xl border border-gold/20 active:scale-90"
            aria-label={`Open shopping cart with ${cartCount} items`}
          >
            <ShoppingCart className="w-6 h-6 drop-shadow-md" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[11px] font-black w-6 h-6 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(31,122,90,0.8)] border border-primary/50" aria-label={`${cartCount} items in cart`}>
                {cartCount}
              </span>
            )}
          </button>
          
          <button
            className="md:hidden p-3 text-white glass rounded-2xl hover:bg-primary/50 transition-all border border-gold/20"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[60] bg-bg-dark/98 backdrop-blur-3xl md:hidden p-10 flex flex-col items-center justify-center gap-12 leaf-pattern"
          >
            <button
              className="absolute top-10 right-10 p-4 text-white hover:text-gold transition-all rounded-full glass-dark border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <X className="w-10 h-10" />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl sm:text-3xl font-serif font-black uppercase tracking-[0.2em] text-white hover:text-gold transition-all drop-shadow-xl py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col items-center gap-6 mt-16">
              <span className="text-gold text-sm tracking-[0.4em] font-black uppercase drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">Asia Leader Tea</span>
              <div className="flex gap-6 items-center">
                 <div className="w-12 h-px bg-gold/50" />
                 <Leaf className="w-6 h-6 text-primary drop-shadow-[0_0_5px_rgba(31,122,90,0.5)]" />
                 <div className="w-12 h-px bg-gold/50" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
