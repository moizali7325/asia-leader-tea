import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Leaf, ShoppingCart, Sparkles } from 'lucide-react';

interface WelcomeProps {
  onEnter: () => void;
}

export default function Welcome({ onEnter }: WelcomeProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const howItWorks = [
    { 
      title: 'Sourcing & Selection', 
      description: 'We source the finest tea leaves from premium gardens, ensuring only the highest quality reaches your cup.' 
    },
    { 
      title: 'Crafting & Blending', 
      description: 'Our master blenders create unique combinations using traditional techniques passed down through generations.' 
    },
    { 
      title: 'Freshness Delivered', 
      description: 'Sealed for freshness, our teas are delivered directly to your doorstep, preserving their natural aroma and taste.' 
    }
  ];

  const selectedTeas = [
    { name: 'Jasmine Green', category: 'Best Seller', price: 'PKR 450' },
    { name: 'Earl Grey Premium', category: 'Luxury', price: 'PKR 520' },
    { name: 'Chai Masala', category: 'Popular', price: 'PKR 380' },
    { name: 'Oolong Special', category: 'Exclusive', price: 'PKR 480' },
    { name: 'Green Tea Pure', category: 'Organic', price: 'PKR 350' },
    { name: 'Black Tea Classic', category: 'Traditional', price: 'PKR 320' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[2000] overflow-auto"
      style={{ backgroundColor: '#0a2e1f' }}
    >
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-20 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 left-20 w-96 h-96 rounded-full"
            style={{ 
              background: 'radial-gradient(circle, rgba(249, 196, 73, 0.2) 0%, transparent 70%)',
              filter: 'blur(100px)'
            }}
          />
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-20 right-20 w-80 h-80 rounded-full"
            style={{ 
              background: 'radial-gradient(circle, rgba(13, 95, 63, 0.15) 0%, transparent 70%)',
              filter: 'blur(80px)'
            }}
          />
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center max-w-5xl mx-auto relative z-10"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="inline-block relative"
            >
              <div className="absolute inset-0 blur-2xl" style={{ background: 'radial-gradient(circle, rgba(249, 196, 73, 0.4) 0%, transparent 70%)' }} />
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-2" style={{ borderColor: 'rgba(249, 196, 73, 0.5)' }}>
                <Leaf className="w-8 h-8 md:w-10 md:h-10" style={{ color: '#f9c449' }} />
              </div>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f9c449 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            We craft premium tea
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-12 max-w-3xl mx-auto"
            style={{ color: '#ffffff', fontFamily: 'Poppins, sans-serif', lineHeight: '1.6' }}
          >
            Premium organic tea, crafted with precision and built for connoisseurs. We transform nature's finest leaves into exceptional tea experiences.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(201, 169, 97, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onEnter}
            className="relative px-8 py-4 md:px-12 md:py-5 rounded-full overflow-hidden group inline-flex items-center gap-3"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f9c449 100%)',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            <span className="text-base md:text-lg font-bold text-primary tracking-widest uppercase">
              Start your tea journey
            </span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 rounded-full flex justify-center pt-2"
            style={{ borderColor: 'rgba(249, 196, 73, 0.3)' }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-3 rounded-full"
              style={{ backgroundColor: 'rgba(249, 196, 73, 0.6)' }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* HOW IT WORKS Section */}
      <div className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4" style={{ 
            background: 'linear-gradient(135deg, #7C2D12 0%, #c9a961 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontFamily: 'Poppins, sans-serif'
          }}>
            HOW IT WORKS
          </h2>
          <p className="text-lg md:text-xl" style={{ color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
            Comprehensive journey to tea excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-2xl border backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(13, 95, 63, 0.1)',
                borderColor: 'rgba(201, 169, 97, 0.2)'
              }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(249, 196, 73, 0.2)' }}>
                <span className="text-2xl font-black" style={{ color: '#f9c449' }}>{index + 1}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
                {item.title}
              </h3>
              <p className="text-base md:text-lg" style={{ color: '#ffffff', opacity: 0.8, fontFamily: 'Poppins, sans-serif', lineHeight: '1.6' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SELECTED TEAS Section */}
      <div className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4" style={{ 
            background: 'linear-gradient(135deg, #7C2D12 0%, #c9a961 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontFamily: 'Poppins, sans-serif'
          }}>
            SELECTED TEAS
          </h2>
          <p className="text-lg md:text-xl" style={{ color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
            Teas that define excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedTeas.map((tea, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative p-6 md:p-8 rounded-2xl border backdrop-blur-sm cursor-pointer"
              style={{
                backgroundColor: 'rgba(13, 95, 63, 0.1)',
                borderColor: 'rgba(201, 169, 97, 0.2)'
              }}
            >
              <div className="absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full"
                style={{ backgroundColor: 'rgba(249, 196, 73, 0.2)', color: '#f9c449' }}
              >
                {tea.category}
              </div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(249, 196, 73, 0.1)' }}>
                <Leaf className="w-8 h-8" style={{ color: '#f9c449' }} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
                {tea.name}
              </h3>
              <p className="text-base md:text-lg font-bold" style={{ color: '#f9c449', fontFamily: 'Poppins, sans-serif' }}>
                {tea.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="py-20 px-4 sm:px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6" style={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #f9c449 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Let's brew something serious
          </h2>
          <p className="text-lg md:text-xl mb-8" style={{ color: '#ffffff', fontFamily: 'Poppins, sans-serif', lineHeight: '1.6' }}>
            Ready to start your tea journey? Get in touch and let's create an exceptional tea experience together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(249, 196, 73, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onEnter}
            className="relative px-8 py-4 md:px-12 md:py-5 rounded-full overflow-hidden group inline-flex items-center gap-3"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f9c449 100%)',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            <span className="text-base md:text-lg font-bold text-primary tracking-widest uppercase">
              Get Started
            </span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="py-8 px-4 sm:px-6 md:px-8 border-t" style={{ borderColor: 'rgba(201, 169, 97, 0.2)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: '#ffffff', opacity: 0.6, fontFamily: 'Poppins, sans-serif' }}>
            © 2024 Asia Leader Tea. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" style={{ color: '#f9c449' }} />
            <span className="text-sm font-bold" style={{ color: '#f9c449', fontFamily: 'Poppins, sans-serif' }}>
              Premium Organic Tea Since 1992
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
