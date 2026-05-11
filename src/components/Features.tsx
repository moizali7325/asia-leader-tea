import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Wind, Crown, Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { IMAGES } from '../constants';

const FEATURES = [
  { 
    icon: <Leaf className="w-6 h-6" />, 
    title: '100% Organic Estates', 
    desc: 'Our tea is sourced from high-altitude gardens that follow strict organic practices, free from synthetic additives.',
    details: 'Each leaf is harvested at the peak of freshness, ensuring maximum nutrient retention and pure flavor profiles that are both sustainable and ethically sourced.',
    image: IMAGES.TEA_PLANTATION
  },
  { 
    icon: <Wind className="w-6 h-6" />, 
    title: 'Aromatic Mastery', 
    desc: 'A therapeutic scent profile designed to transition your mood and clarify your mind.',
    details: 'The unique oxidation process results in floral undertones and a smooth finish that lingers, creating a full sensory experience with every steep.',
    image: IMAGES.TEA_STEAM
  },
  { 
    icon: <Crown className="w-6 h-6" />, 
    title: 'Imperial Selection', 
    desc: 'Only the top choice buds from the first flush are selected for our premium collections.',
    details: 'We implement a triple-stage quality check, ensuring that only the boldest colors and most resilient leaves reach our packaging, guaranteeing consistency and excellence.',
    image: IMAGES.TEA_LEAVES_PILE
  },
  { 
    icon: <Globe className="w-6 h-6" />, 
    title: 'Legacy & Heritage', 
    desc: 'Celebrating centuries of tea culture with a modern approach to packaging and ritual.',
    details: 'Our brand bridges the gap between ancient tea traditions and contemporary luxury, bringing the world\'s finest blends to modern connoisseurs worldwide.',
    image: IMAGES.TEA_CEREMONY
  },
];

function FeatureItem({ feature, index, isOpen, onToggle }: { feature: any, index: number, isOpen: boolean, onToggle: () => void }) {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Tree Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 block" />
      
      {/* Connector Node */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="absolute left-4 md:left-1/2 top-10 w-6 h-6 rounded-full border-4 border-primary bg-bg-dark -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(31,122,90,0.5)]"
      />

      <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        <div className="w-full md:w-1/2 p-4 md:p-4">
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`cursor-pointer glass p-10 rounded-[40px] border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all card-shadow relative group overflow-hidden ${isOpen ? 'ring-2 ring-gold/20 bg-white/10 scale-[1.02]' : ''}`}
            onClick={onToggle}
          >
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] -z-0 group-hover:bg-primary/20 transition-colors blur-xl" />

            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-black/40 rounded-2xl flex items-center justify-center text-gold shadow-inner border border-white/10 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-3xl font-serif font-black tracking-tight text-heading group-hover:text-gold transition-colors">{feature.title}</h3>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                className="text-gold"
              >
                <ChevronDown className="w-8 h-8" />
              </motion.div>
            </div>
            
            <p className="text-text-main text-lg leading-relaxed mb-2 font-medium relative z-10">
              {feature.desc}
            </p>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden border-t border-white/10 mt-8 pt-8 relative z-10"
                >
                  <p className="text-white font-bold text-base leading-relaxed italic glass-dark p-6 rounded-2xl border border-white/10 opacity-90">
                    {feature.details}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        <div className="md:w-1/2 px-16 py-10 hidden md:flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-80 rounded-3xl overflow-hidden relative card-shadow border border-white/10"
          >
            <img 
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 md:px-16 bg-bg-dark leaf-pattern overflow-hidden border-t border-white/10 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-bg-section to-transparent opacity-80 -z-0" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-28">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold text-sm uppercase tracking-[0.5em] font-black block mb-6 px-6 py-2 border border-gold/20 rounded-full w-fit mx-auto shadow-[0_0_15px_rgba(212,175,55,0.1)] backdrop-blur-md"
          >
            Scientific Selection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-black text-heading drop-shadow-2xl"
          >
            Root of <span className="text-gold-gradient italic">Quality</span>
          </motion.h2>
        </div>

        <div className="space-y-12 md:space-y-0 relative">
          {/* Mobile tree line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px bg-white/10 -translate-x-1/2 block md:opacity-50" />
          
          {FEATURES.map((feature, i) => (
            <FeatureItem 
              key={i} 
              feature={feature} 
              index={i} 
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
