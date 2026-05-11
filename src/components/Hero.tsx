import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-20 bg-bg-dark">
      {/* Background Decor */}
      <div className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[180px] -z-10" />
      
      {/* Content - Left Side */}
      <div className="w-full md:w-1/2 z-10 text-center md:text-left pt-12 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
             <div className="h-[2px] w-12 bg-gold" />
             <span className="text-gold text-sm md:text-base uppercase tracking-[0.5em] font-black">
               Organic & Pure 1992
             </span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-black leading-[1.1] mb-6 sm:mb-8 text-white tracking-tight">
            Nature's <br /> 
            <span className="text-gold italic">Finest</span> Sip
          </h1>
          
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-lg mb-8 sm:mb-12 mx-auto md:mx-0 font-medium leading-relaxed">
            Sourced from elite high-altitude gardens, Asia Leader Tea brings you an unmatched tradition of flavor, health, and purity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start w-full">
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-accent transition-all w-full sm:w-auto text-center"
              aria-label="View our premium tea collections"
            >
              Shop Collection <ArrowRight className="w-5 h-5 inline ml-2" />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 border-2 border-gold text-gold font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-primary hover:text-white transition-all w-full sm:w-auto"
              aria-label="Learn about our heritage and legacy"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Heritage
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Image Section - Right Side */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-full relative flex items-center justify-center p-2 md:p-8">
        <div className="relative w-full h-full max-h-[500px] md:max-h-[600px]">
          {/* Banner Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-bg-dark border-2 border-gold/30 rounded-2xl md:rounded-3xl p-2 md:p-4 shadow-2xl h-full overflow-hidden relative"
            style={{ backgroundColor: '#0b0f0c' }}
          >
            <img 
              src={IMAGES.BANNER}
              alt="Premium tea collection from Asia Leader Tea - showcasing our finest organic tea blends"
              className="w-full h-full object-cover rounded-xl md:rounded-2xl"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 to-transparent" />
          </motion.div>
        </div>
      </div>

      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] opacity-60 text-white drop-shadow-lg bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
      </motion.div>
    </section>
  );
}
