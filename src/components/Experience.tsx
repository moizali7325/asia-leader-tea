import { motion } from 'motion/react';
import { GlassWater, Coffee, Heart } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-16 relative bg-bg-section leaf-pattern overflow-hidden border-y border-white/10">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/40 to-transparent -z-0" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        <div className="w-full lg:w-1/2 h-[500px] relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-[120px] scale-90" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full h-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1000&auto=format&fit=crop" 
              alt="Premium tea cup experience showcasing Asia Leader Tea's rich aroma and taste"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 to-transparent" />
          </motion.div>
          
          {/* Legend Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute top-10 left-10 glass-dark p-6 rounded-[24px] shadow-2xl border border-white/10"
          >
            <div className="flex items-center gap-4 text-white">
              <div className="w-4 h-4 rounded-full bg-gold shadow-[0_0_15px_rgba(212,175,55,0.6)] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-black italic drop-shadow-sm">Sensory Experience</span>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm uppercase tracking-[0.5em] font-black mb-6 block border-l-4 border-gold pl-4 drop-shadow-md">Sensory Journey</span>
            <h2 className="text-4xl md:text-6xl font-serif font-black mb-10 leading-[1.1] text-heading drop-shadow-xl">
              A Complete <br /> 
              <span className="text-gold-gradient italic">Ritual for the Senses</span>
            </h2>
            
            <p className="text-text-main text-xl font-medium leading-relaxed mb-12 opacity-90 drop-shadow-sm">
              Beyond the flavor, Asia Leader Tea is an invitation to slow down. From the first wisp of aromatic steam to the lingering golden aftertaste, it's an experience crafted for moments of reflection and connection.
            </p>

            <div className="space-y-12">
               <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all border border-white/10 group-hover:border-primary shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_20px_rgba(31,122,90,0.4)]">
                    <GlassWater className="w-8 h-8 group-hover:text-white text-gold transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif font-black text-2xl text-heading mb-2 group-hover:text-gold transition-colors">Visual Clarity</h4>
                    <p className="text-base text-text-main font-bold leading-relaxed opacity-70">Watch as the deep amber infusion unfolds with perfect transparency.</p>
                  </div>
               </div>

               <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all border border-white/10 group-hover:border-primary shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_20px_rgba(31,122,90,0.4)]">
                    <Coffee className="w-8 h-8 group-hover:text-white text-gold transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif font-black text-2xl text-heading mb-2 group-hover:text-gold transition-colors">Aromatic Bloom</h4>
                    <p className="text-base text-text-main font-bold leading-relaxed opacity-70">Inhale the complex notes of woody earth and floral undertones.</p>
                  </div>
               </div>

               <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all border border-white/10 group-hover:border-primary shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_20px_rgba(31,122,90,0.4)]">
                    <Heart className="w-8 h-8 group-hover:text-white text-gold transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif font-black text-2xl text-heading mb-2 group-hover:text-gold transition-colors">Full Body Feel</h4>
                    <p className="text-base text-text-main font-bold leading-relaxed opacity-70">Experience a smooth, velvety texture that coats the palate with warmth.</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
