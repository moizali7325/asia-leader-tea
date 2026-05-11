import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <motion.div 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-cream flex flex-col items-center justify-center p-6 text-center"
    >
      <motion.div
        animate={{ 
          rotateY: [0, 360],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="mb-8"
      >
        <Leaf className="text-primary w-20 h-20 filter drop-shadow-lg" />
      </motion.div>
      
      <div className="space-y-6">
        <h2 className="text-primary font-serif text-4xl font-black tracking-widest uppercase italic">Asia Leader Tea</h2>
        <div className="w-64 h-[2px] bg-primary/5 mx-auto relative overflow-hidden rounded-full">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gold w-full"
          />
        </div>
        <p className="text-text-main/40 text-xs uppercase tracking-[0.5em] font-bold">Refining Heritage...</p>
      </div>
    </motion.div>
  );
}
