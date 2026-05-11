import { motion } from 'motion/react';
import { IMAGES } from '../constants';
import { Award, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: <Award className="w-5 h-5" />, title: 'Premium Blend', desc: 'Expertly selected leaves from high-altitude gardens.' },
    { icon: <ShieldCheck className="w-5 h-5" />, title: 'Traditional Craft', desc: 'Processed with decades of artisan techniques.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Instant Energy', desc: 'A rich robust flavor that awakens your senses.' },
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-16 overflow-hidden relative bg-bg-section leaf-pattern">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent -z-0" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24 relative z-10">
        <div className="w-full md:w-1/2 relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="aspect-square rounded-[40px] overflow-hidden relative card-shadow border border-white/10"
          >
            <img 
              src={IMAGES.TEA_PLANTATION}
              alt="Premium tea plantation from high-altitude gardens in Asia - Asia Leader Tea"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />
          </motion.div>
          
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-6 -right-6 glass-dark p-8 rounded-[32px] hidden lg:block max-w-[300px] border border-gold/20 shadow-2xl"
          >
            <h4 className="font-serif text-2xl text-gold-gradient mb-3 italic font-black">Legacy of Taste</h4>
            <p className="text-sm text-text-main font-medium leading-relaxed opacity-90">
              Founded with a passion for the perfect cup, Asia Leader Tea has become a symbol of hospitality across the continent.
            </p>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm uppercase tracking-[0.5em] font-black mb-6 block border-l-4 border-gold pl-4 drop-shadow-md">Our Heritage</span>
            <h2 className="text-4xl md:text-6xl font-serif font-black mb-10 leading-[1.1] text-heading drop-shadow-xl">
              Crafting the <br /> 
              <span className="text-gold-gradient italic">Leader's Choice</span>
            </h2>
            <div className="space-y-6 text-text-main text-lg font-medium leading-relaxed mb-12 opacity-90 drop-shadow-sm">
              <p>
                At Asia Leader Tea, we don't just sell tea; we share a tradition of excellence. Every leaf is handpicked and sorted to ensure that only the most premium quality reaches your cup.
              </p>
              <p>
                Our journey began in the lush green valleys where the soil is rich and the air is pure. Today, we bring that freshness to your homes, one perfect cup at a time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-primary shrink-0 transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-black font-serif text-xl text-heading mb-2 leading-tight group-hover:text-gold transition-colors">{item.title}</h5>
                    <p className="text-sm text-text-main font-medium leading-relaxed opacity-70">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
