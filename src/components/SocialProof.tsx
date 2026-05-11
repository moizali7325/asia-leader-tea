import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

const notifications = [
  { name: 'Ahmed from Karachi', product: 'TAIZ DUST CHAI', time: '2 minutes ago' },
  { name: 'Fatima from Lahore', product: 'HERBAL TEA PREMIUM', time: '5 minutes ago' },
  { name: 'Ali from Islamabad', product: 'DAIRY EVER INSTANT MILK', time: '8 minutes ago' },
  { name: 'Sara from Multan', product: 'DANEDAAR CHAI', time: '12 minutes ago' },
  { name: 'Usman from Peshawar', product: 'MILKOL Instant Milk Powder', time: '15 minutes ago' },
];

export default function SocialProof() {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 4000);
    };

    showNotification();
    const interval = setInterval(showNotification, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-28 md:bottom-24 left-4 z-50 max-w-xs"
        >
          <div className="glass-dark p-4 rounded-2xl border border-gold/30 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[11px] font-bold text-white">
                  {notifications[currentNotification].name}
                </p>
                <p className="text-[10px] text-gold font-medium">
                  purchased {notifications[currentNotification].product}
                </p>
                <p className="text-[9px] text-text-main opacity-60">
                  {notifications[currentNotification].time}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
