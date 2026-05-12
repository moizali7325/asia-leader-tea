import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, ChevronDown, Leaf, Zap, Scale, Package, Coffee as CoffeeIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import { CATEGORIES, PRODUCTS } from '../constants';

interface ProductCardProps {
  product: any;
  onAddToCart: (p: any) => void;
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedWeight, setSelectedWeight] = useState(Object.keys(product.prices)[0]);
  const [quantity, setQuantity] = useState(1);

  const currentPrice = product.prices[selectedWeight];
  const totalPrice = currentPrice * quantity;

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      selectedWeight,
      currentPrice,
      quantity,
    });
  };

  const handleWhatsAppOrder = () => {
    const message = `Hello, I want to order:\n\nProduct: ${product.name}\nQuantity: ${quantity}\nWeight: ${selectedWeight}\nTotal Price: PKR ${totalPrice}`;
    const whatsappUrl = `https://wa.me/923229214000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="glass rounded-3xl overflow-hidden group h-full flex flex-col"
    >
      <div className="relative p-6 bg-gradient-to-br from-white/5 to-transparent">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl z-10 opacity-90"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest z-20 shadow-lg border border-primary/50">
          Exclusive
        </div>
      </div>

      <div className="flex-1 space-y-5 p-6">
        <h4 className={cn("text-2xl font-black font-serif group-hover:text-gold transition-colors", product.categoryId === 'milk' || product.categoryId === 'mixture' || product.categoryId === 'herbal' || product.categoryId === 'coffee' ? "" : "text-heading")} style={product.categoryId === 'milk' ? { color: '#60a5fa' } : product.categoryId === 'mixture' ? { color: '#D2B48C', textShadow: '0 0 20px rgba(210,180,140,0.3)' } : product.categoryId === 'dust' ? { color: '#E75480', textShadow: '0 0 20px rgba(231,84,128,0.3)' } : product.categoryId === 'danedar' ? { color: '#FFD700', textShadow: '0 0 20px rgba(255,215,0,0.3)' } : product.categoryId === 'herbal' ? { color: '#4ade80', textShadow: '0 0 20px rgba(74,222,128,0.3)' } : product.categoryId === 'coffee' ? { color: '#A1887F', textShadow: '0 0 20px rgba(161,136,127,0.3)' } : undefined}>{product.name}</h4>
        <p className="text-sm text-text-main font-medium line-clamp-2 leading-relaxed h-10 opacity-70">{product.description}</p>
        
        {/* Weight Selector */}
        <div className="space-y-3">
          <span className="text-[10px] uppercase font-black text-gold tracking-[0.2em]">Select Weight</span>
          <div className="flex gap-2">
            {Object.keys(product.prices).map((w) => (
              <button
                key={w}
                onClick={() => setSelectedWeight(w)}
                className={cn(
                  "flex-1 py-2.5 rounded-xl text-[14px] font-black border-2 transition-all duration-300",
                  selectedWeight === w 
                    ? "bg-primary text-white border-primary shadow-[0_0_15px_rgba(31,122,90,0.4)]" 
                    : "bg-transparent text-text-main border-gold/30 hover:border-gold hover:text-gold"
                )}
              >
                {w}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-black text-gold">PKR {totalPrice}</span>
            <span className="text-xs text-text-main opacity-60 block mt-1">PKR {currentPrice} × {quantity}</span>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase font-black text-gold tracking-[0.2em]">Quantity</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              className="w-10 h-10 rounded-xl bg-white/5 border border-gold/30 text-gold font-black text-xl hover:bg-gold hover:text-black transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
            >
              -
            </button>
            <span className="text-xl font-black text-heading min-w-[40px] text-center">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="w-10 h-10 rounded-xl bg-white/5 border border-gold/30 text-gold font-black text-xl hover:bg-gold hover:text-black transition-all duration-300 flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-primary hover:bg-primary/90 text-white font-black py-3 rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(31,122,90,0.3)] hover:shadow-[0_6px_20px_rgba(31,122,90,0.4)] flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            Add
          </button>
          <button
            onClick={handleWhatsAppOrder}
            className="flex-1 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-black py-3 rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(34,197,94,0.3)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.4)]"
          >
            WhatsApp
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products({ onAddToCart }: { onAddToCart: (p: any) => void }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showAllProducts, setShowAllProducts] = useState(true);

  const filteredProducts = activeCategory
    ? PRODUCTS.filter((p) => p.categoryId === activeCategory)
    : PRODUCTS;

  const iconMap: { [key: string]: any } = {
    Leaf,
    Zap,
    Scale,
    Package,
    Coffee: CoffeeIcon,
  };

  return (
    <section className="px-6 md:px-16 py-24 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black font-serif text-heading mb-4">
            Our <span className="text-gold-gradient">Premium</span> Collection
          </h2>
          <p className="text-text-main text-lg max-w-2xl mx-auto opacity-70">
            Discover our exclusive range of premium teas and products
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CATEGORIES.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Leaf;
            const isActive = activeCategory === cat.id;
            
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => {
                  setActiveCategory(isActive ? null : cat.id);
                  setShowAllProducts(false);
                }}
                className={cn(
                  "cursor-pointer p-8 rounded-3xl transition-all duration-500 group",
                  isActive 
                    ? "glass-dark shadow-[0_0_30px_rgba(31,122,90,0.3)] scale-[1.02] border-primary/50" 
                    : "glass hover:bg-white/10"
                )}
              >
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:-rotate-6",
                  isActive ? "bg-primary text-white shadow-inner" : "bg-white/5 text-gold border border-white/10 group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                )}>
                  {Icon && <Icon className="w-8 h-8" />}
                </div>
                <h3 className={cn("text-2xl font-serif font-black mb-3", isActive ? "text-gold-gradient" : "text-heading group-hover:text-gold transition-colors")} style={cat.id === 'milk' ? { color: '#60a5fa' } : cat.id === 'mixture' ? { color: '#D2B48C', textShadow: '0 0 20px rgba(210,180,140,0.3)' } : cat.id === 'dust' ? { color: '#E75480', textShadow: '0 0 20px rgba(231,84,128,0.3)' } : cat.id === 'danedar' ? { color: '#FFD700', textShadow: '0 0 20px rgba(255,215,0,0.3)' } : cat.id === 'herbal' ? { color: '#4ade80', textShadow: '0 0 20px rgba(74,222,128,0.3)' } : cat.id === 'coffee' ? { color: '#A1887F', textShadow: '0 0 20px rgba(161,136,127,0.3)' } : undefined}>
                  {cat.name}
                </h3>
                <p className={cn("text-sm leading-relaxed mb-6 font-medium", isActive ? "text-text-main" : "text-text-main opacity-70")}>
                  {cat.desc}
                </p>
                <div className={cn(
                   "flex items-center gap-2 text-xs font-black uppercase tracking-widest",
                   isActive ? "text-gold" : "text-primary group-hover:text-accent transition-colors"
                 )}>
                  {isActive ? 'Hide Products' : 'View Collection'}
                  <ChevronDown className={cn("w-5 h-5 transition-transform", isActive ? "rotate-180" : "")} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dropdown Section */}
        <AnimatePresence>
          {(activeCategory || showAllProducts) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="py-12 border-t border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                  {filteredProducts.map((product) => (
                    <ProductCard product={product} onAddToCart={onAddToCart} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All Button */}
        {!activeCategory && !showAllProducts && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAllProducts(true)}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-black px-12 py-4 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(31,122,90,0.3)] hover:shadow-[0_6px_30px_rgba(31,122,90,0.4)] text-lg"
            >
              View All Products
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}