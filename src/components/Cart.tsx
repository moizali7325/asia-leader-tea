import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, Leaf, MessageSquare } from 'lucide-react';
import { WHATSAPP_NUMBER, CURRENCY } from '../constants';
import toast from 'react-hot-toast';
import DOMPurify from 'dompurify';

interface CartItem {
  id: string | number;
  name: string;
  currentPrice: number;
  image: string;
  quantity: number;
  selectedWeight: string;
}

export default function Cart({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemove 
}: { 
  isOpen: boolean; 
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string | number, delta: number) => void;
  onRemove: (id: string | number) => void;
}) {
  const [lastOrderTime, setLastOrderTime] = useState(0);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);
  
  const validateForm = () => {
    if (!customerDetails.name || customerDetails.name.trim().length < 2) {
      toast.error('Please enter a valid name (min 2 characters)');
      return false;
    }
    if (!customerDetails.phone || !/^[0-9+]{10,15}$/.test(customerDetails.phone)) {
      toast.error('Please enter a valid phone number (10-15 digits)');
      return false;
    }
    if (!customerDetails.address || customerDetails.address.trim().length < 5) {
      toast.error('Please enter a valid address (min 5 characters)');
      return false;
    }
    return true;
  };
  
  const subtotal = items.reduce((acc, item) => {
    return acc + item.currentPrice * item.quantity;
  }, 0);

  const handleWhatsAppOrderAll = () => {
    const now = Date.now();
    if (now - lastOrderTime < 5000) {
      toast.error('Please wait 5 seconds before ordering again');
      return;
    }

    setLastOrderTime(now);
    setIsProcessingOrder(true);

    const orderId = `ALT-${Date.now().toString(36).toUpperCase()}`;
    const itemList = items.map(item => `- ${DOMPurify.sanitize(item.name)} (${DOMPurify.sanitize(item.selectedWeight)}) x${item.quantity} = PKR ${item.currentPrice * item.quantity}`).join('\n');
    
    let message = `📦 *NEW ORDER - ${orderId}*

🛍️ *Order Items:*
${itemList}

💰 *Total: ${CURRENCY} ${subtotal}*

📅 *Order Date:* ${new Date().toLocaleDateString()}
*Asia Leader Tea*`;

    if (customerDetails.name || customerDetails.phone || customerDetails.address) {
      message = `📦 *NEW ORDER - ${orderId}*

👤 *Customer Details:*
${customerDetails.name ? `Name: ${DOMPurify.sanitize(customerDetails.name)}\n` : ''}
${customerDetails.phone ? `Phone: ${DOMPurify.sanitize(customerDetails.phone)}\n` : ''}
${customerDetails.address ? `Address: ${DOMPurify.sanitize(customerDetails.address)}\n` : ''}

🛍️ *Order Items:*
${itemList}

💰 *Total: ${CURRENCY} ${subtotal}*

📅 *Order Date:* ${new Date().toLocaleDateString()}
*Asia Leader Tea*`;
    }

    const encodedMessage = encodeURIComponent(message);

    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
      toast.success('Opening WhatsApp for your order');
      setIsProcessingOrder(false);
    }, 1000);
  };

  const handleDirectCheckout = () => {
    if (items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    const orderId = `ALT-${Date.now().toString(36).toUpperCase()}`;
    const itemList = items.map(item => `- ${DOMPurify.sanitize(item.name)} (${DOMPurify.sanitize(item.selectedWeight)}) x${item.quantity} = PKR ${item.currentPrice * item.quantity}`).join('\n');
    
    let message = `📦 *NEW ORDER - ${orderId}*

🛍️ *Order Items:*
${itemList}

💰 *Total: ${CURRENCY} ${subtotal}*

📅 *Order Date:* ${new Date().toLocaleDateString()}
*Asia Leader Tea*`;

    if (customerDetails.name || customerDetails.phone || customerDetails.address) {
      message = `📦 *NEW ORDER - ${orderId}*

👤 *Customer Details:*
${customerDetails.name ? `Name: ${DOMPurify.sanitize(customerDetails.name)}\n` : ''}
${customerDetails.phone ? `Phone: ${DOMPurify.sanitize(customerDetails.phone)}\n` : ''}
${customerDetails.address ? `Address: ${DOMPurify.sanitize(customerDetails.address)}\n` : ''}

🛍️ *Order Items:*
${itemList}

💰 *Total: ${CURRENCY} ${subtotal}*

📅 *Order Date:* ${new Date().toLocaleDateString()}
*Asia Leader Tea*`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    toast.success('Opening WhatsApp for direct checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-bg-dark border-l border-white/10 z-[101] flex flex-col shadow-2xl leaf-pattern"
          >
            <div className="p-8 flex items-center justify-between border-b border-white/10 glass-dark">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-[20px] bg-primary flex items-center justify-center text-white shadow-[0_0_15px_rgba(31,122,90,0.6)] border border-white/20">
                   <ShoppingBag className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-black text-heading drop-shadow-sm">Selection Bag</h2>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-text-main font-black opacity-50">
                    {items.length} Masterpiece Items
                  </span>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-3 hover:bg-white/10 rounded-full transition-all text-white hover:text-gold hover:scale-110 active:scale-90"
                aria-label="Close shopping cart"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <Leaf className="w-20 h-20 mb-6 text-gold opacity-20 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                  <p className="font-serif italic text-3xl text-heading mb-4 drop-shadow-sm">Your bag is empty.</p>
                  <p className="text-sm uppercase tracking-[0.4em] text-text-main font-black opacity-40 mb-8">Explore our legacy collections.</p>
                  <button 
                    onClick={onClose}
                    className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-accent transition-all"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-6 group glass p-6 rounded-[32px] border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all card-shadow shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-[60px] -z-0 blur-xl group-hover:bg-primary/20 transition-colors" />
                    
                    <div className="w-28 h-28 rounded-2xl bg-white/5 p-3 overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10 border border-white/5">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] opacity-90" />
                    </div>
                    <div className="flex-1 space-y-3 relative z-10 flex flex-col justify-center">
                       <div className="flex justify-between items-start">
                         <div className="space-y-1">
                            <h4 className="font-serif font-black text-xl text-heading leading-tight group-hover:text-gold transition-colors">{item.name}</h4>
                            <span className="text-[11px] uppercase font-black text-gold tracking-widest drop-shadow-sm">{item.selectedWeight}</span>
                         </div>
                         <button 
                          onClick={() => onRemove(item.id)}
                          className="text-white/30 hover:text-red-400 transition-all p-2 hover:bg-white/5 rounded-xl border border-transparent hover:border-red-400/30"
                         >
                           <Trash2 className="w-5 h-5" />
                         </button>
                       </div>
                       <div className="flex items-center justify-between">
                          <p className="text-white font-black text-xl drop-shadow-md">{CURRENCY} {item.currentPrice}</p>
                          <div className="flex items-center gap-4 bg-white/5 rounded-xl px-3 py-1.5 border border-white/10">
                             <button onClick={() => onUpdateQuantity(item.id, -1)} className="p-1 hover:text-gold text-white transition-colors"><Minus className="w-4 h-4" /></button>
                             <span className="text-sm font-black w-6 text-center text-heading">{item.quantity}</span>
                             <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-1 hover:text-gold text-white transition-colors"><Plus className="w-4 h-4" /></button>
                          </div>
                       </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-10 border-t border-white/10 space-y-8 glass-dark shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
                {/* Free Delivery Progress Bar */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase font-black text-gold tracking-[0.2em]">
                      {subtotal >= 2000 ? '🎉 Free delivery unlocked!' : `Add PKR ${2000 - subtotal} more for free delivery`}
                    </span>
                    <span className="text-[10px] font-black text-text-main opacity-60">{Math.min(100, Math.round((subtotal / 2000) * 100))}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-gold to-gold-hover"
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, (subtotal / 2000) * 100)}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <span className="text-[12px] uppercase tracking-[0.4em] text-text-main font-black opacity-60">Final Estimate</span>
                  <span className="text-4xl font-serif font-black text-gold-gradient drop-shadow-lg">{CURRENCY} {subtotal}</span>
                </div>

                {/* Customer Details Form */}
                <AnimatePresence>
                  {showCustomerForm && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-4 overflow-hidden"
                    >
                      <div>
                        <label className="text-[10px] uppercase font-black text-gold tracking-[0.2em] block mb-2">Full Name</label>
                        <input
                          type="text"
                          value={customerDetails.name}
                          onChange={(e) => setCustomerDetails({...customerDetails, name: DOMPurify.sanitize(e.target.value)})}
                          placeholder="Enter your full name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-black text-gold tracking-[0.2em] block mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={customerDetails.phone}
                          onChange={(e) => setCustomerDetails({...customerDetails, phone: DOMPurify.sanitize(e.target.value)})}
                          placeholder="Enter your phone number"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-black text-gold tracking-[0.2em] block mb-2">Delivery Address</label>
                        <textarea
                          value={customerDetails.address}
                          onChange={(e) => setCustomerDetails({...customerDetails, address: DOMPurify.sanitize(e.target.value)})}
                          placeholder="Enter your delivery address"
                          rows={2}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-all resize-none"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="space-y-4">
                  <button 
                    onClick={handleWhatsAppOrderAll}
                    disabled={isProcessingOrder}
                    className="whatsapp-btn w-full py-5 rounded-[24px] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessingOrder ? (
                      <>
                        <svg className="animate-spin w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="text-lg font-black tracking-wide">Processing...</span>
                      </>
                    ) : (
                      <>
                        <MessageSquare className="w-7 h-7" />
                        <span className="text-lg font-black tracking-wide">Secure WhatsApp Order</span>
                      </>
                    )}
                  </button>
                  
                  <button 
                    onClick={() => setShowCustomerForm(!showCustomerForm)}
                    className="w-full py-3 border border-white/20 text-white font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white/5 transition-all text-xs"
                  >
                    {showCustomerForm ? 'Hide Details Form' : 'Add Customer Details'}
                  </button>
                  
                  <button 
                    onClick={handleDirectCheckout}
                    className="w-full py-5 border border-white/20 text-white font-black uppercase tracking-[0.3em] rounded-[24px] flex items-center justify-center gap-4 hover:bg-primary hover:border-primary transition-all shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(31,122,90,0.5)] text-sm group"
                  >
                    Direct Checkout <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <p className="text-[11px] text-center opacity-40 uppercase tracking-[0.3em] font-black border-t border-white/10 pt-6 text-text-main">
                  Elite delivery across all Pakistan 
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
