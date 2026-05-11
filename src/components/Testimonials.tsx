import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Rahman',
    role: 'Tea Enthusiast',
    content: 'The Strong Danedar is my go-to every morning. The aroma is literally life-changing. It’s what actual tea should taste like.',
    rating: 5
  },
  {
    name: 'Haris Khan',
    role: 'Food Blogger',
    content: 'Asia Leader Tea captures the authentic taste of the East. The packaging is premium and the blend is consistently excellent.',
    rating: 5
  },
  {
    name: 'Emily Chen',
    role: 'Sommelier',
    content: 'Impressive complexity for a daily tea. The Awami mixture has a beautiful depth that pairs perfectly with milk or honey.',
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-16 bg-bg-section leaf-pattern relative border-t border-white/10">
       <div className="absolute inset-0 bg-gradient-to-b from-bg-dark to-transparent opacity-50 pointer-events-none" />
       <div className="max-w-7xl mx-auto relative z-10">
         <div className="text-center mb-28">
            <span className="inline-block text-gold text-sm uppercase tracking-[0.5em] font-black mb-6 px-6 py-2 border border-gold/20 rounded-full w-fit mx-auto shadow-[0_0_15px_rgba(212,175,55,0.1)] backdrop-blur-md">Voices of Tradition</span>
            <h2 className="text-4xl md:text-7xl font-serif font-black text-heading leading-[1.1] drop-shadow-2xl">Trusted by <br /><span className="text-gold-gradient italic">Thousands</span></h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-14 rounded-[56px] relative group card-shadow hover:scale-[1.03] transition-all duration-500 border border-white/10 hover:border-gold/30 hover:bg-white/10"
              >
                <Quote className="absolute top-12 right-12 w-20 h-20 text-gold opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700 blur-[2px] group-hover:blur-0" />
                
                <div className="flex gap-2 mb-10 relative z-10">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-gold fill-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                  ))}
                </div>

                <p className="text-white text-xl font-medium leading-relaxed mb-12 italic opacity-90 relative z-10 drop-shadow-md">
                  "{review.content}"
                </p>

                <div className="flex items-center gap-6 pt-10 border-t border-white/10 relative z-10">
                   <div className="w-16 h-16 rounded-[20px] bg-primary flex items-center justify-center font-serif text-white text-2xl font-black shadow-[0_0_15px_rgba(31,122,90,0.6)] group-hover:bg-accent transition-colors border border-white/20">
                     {review.name[0]}
                   </div>
                   <div>
                     <h5 className="font-serif font-black text-gold text-xl mb-1 drop-shadow-sm">{review.name}</h5>
                     <span className="text-[11px] uppercase tracking-[0.3em] text-text-main font-black opacity-70">{review.role}</span>
                   </div>
                </div>
              </motion.div>
            ))}
         </div>
       </div>
    </section>
  );
}
