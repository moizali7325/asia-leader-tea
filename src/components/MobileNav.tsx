import { motion, AnimatePresence } from 'motion/react';
import { Home, ShoppingBag, MessageSquare, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface MobileNavProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenMenu: () => void;
}

export default function MobileNav({ cartCount, onOpenCart, onOpenMenu }: MobileNavProps) {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'cart', icon: ShoppingBag, label: 'Cart', count: cartCount },
    { id: 'whatsapp', icon: MessageSquare, label: 'Order' },
    { id: 'menu', icon: Menu, label: 'Menu' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-bg-dark/95 backdrop-blur-xl border-t border-gold/20 px-4 py-2 pb-6">
        <div className="flex justify-around items-center">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id === 'cart') onOpenCart();
                  if (tab.id === 'menu') onOpenMenu();
                  if (tab.id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
                  if (tab.id === 'whatsapp') {
                    const productsSection = document.getElementById('products');
                    if (productsSection) {
                      productsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="relative flex flex-col items-center gap-1 p-3 min-w-[70px] rounded-2xl transition-all duration-300 group"
              >
                <div className={`relative ${isActive ? 'text-gold' : 'text-text-main opacity-60 group-hover:opacity-100'}`}>
                  <Icon className="w-6 h-6" />
                  {tab.count !== undefined && tab.count > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-primary/50">
                      {tab.count}
                    </span>
                  )}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-wider ${isActive ? 'text-gold' : 'text-text-main opacity-60'}`}>
                  {tab.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/5 rounded-2xl -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
