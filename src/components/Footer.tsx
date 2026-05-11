import { Leaf, Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-dark leaf-pattern border-t border-white/10 pt-32 pb-12 px-6 md:px-16 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-28">
          <div className="space-y-8">
            <div className="flex items-center gap-4 group">
              <Leaf className="text-gold w-12 h-12 group-hover:rotate-12 transition-transform drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
              <span className="text-2xl font-serif font-black tracking-wider uppercase text-heading drop-shadow-md">
                Asia Leader <span className="text-gold-gradient">Tea</span>
              </span>
            </div>
            <p className="text-text-main text-base leading-relaxed max-w-xs font-medium opacity-80 drop-shadow-sm">
              Elevating the luxury of tea enjoyment. Sourced sustainably from the heart of Asia, blended masterfully for your soul.
            </p>
            <div className="flex gap-4">
               {/* Social media links - add actual URLs when available */}
               <a href="https://www.instagram.com/asialeadartea2211" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(31,122,90,0.5)] border border-white/10 hover:border-primary hover:-translate-y-1" aria-label="Follow us on Instagram">
                    <Instagram className="w-6 h-6" />
               </a>
               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(31,122,90,0.5)] border border-white/10 hover:border-primary hover:-translate-y-1" aria-label="Follow us on Twitter">
                    <Twitter className="w-6 h-6" />
               </a>
               <a href="https://www.facebook.com/Asialeadera?rdid=REs9d3xEyXJ9aDbA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1PRP473tZ5%2F#" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(31,122,90,0.5)] border border-white/10 hover:border-primary hover:-translate-y-1" aria-label="Follow us on Facebook">
                    <Facebook className="w-6 h-6" />
               </a>
            </div>
          </div>

          <div>
             <h4 className="font-serif text-2xl font-black mb-10 text-heading drop-shadow-sm">Quick Explore</h4>
             <ul className="space-y-5">
                {[
                  { name: 'Tea Collection', href: '#products' },
                  { name: 'Heritage Story', href: '#about' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Tea Gardens', href: '#about' },
                  { name: 'Wholesale', href: '#products' }
                ].map(link => (
                   <li key={link.name}>
                     <a href={link.href} className="text-text-main hover:text-gold transition-all text-sm uppercase tracking-[0.3em] font-black opacity-70 hover:opacity-100">{link.name}</a>
                   </li>
                ))}
             </ul>
          </div>

          <div>
             <h4 className="font-serif text-2xl font-black mb-10 text-heading drop-shadow-sm">Newsletter</h4>
             <p className="text-text-main text-base mb-8 font-medium opacity-80">Join our exclusive circle for seasonal harvests and private briefings.</p>
             <div className="relative group">
                <label htmlFor="footer-email" className="sr-only">Email Address</label>
                <input 
                  id="footer-email"
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/5 border border-white/10 rounded-[24px] px-8 py-6 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all font-bold text-white placeholder:text-white/30 shadow-inner"
                  required
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                />
                <button 
                  type="button"
                  onClick={() => {
                    const input = document.getElementById('footer-email') as HTMLInputElement;
                    if (input && input.value && input.checkValidity()) {
                      toast.success('Newsletter subscription coming soon!');
                    } else if (input) {
                      toast.error('Please enter a valid email address');
                      input.focus();
                    }
                  }}
                  className="absolute right-3 top-3 bottom-3 bg-primary text-white px-8 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-accent shadow-[0_0_15px_rgba(31,122,90,0.4)] hover:shadow-[0_0_25px_rgba(31,122,90,0.6)] transition-all"
                  aria-label="Join our newsletter"
                >
                  Join
                </button>
             </div>
          </div>

          <div className="relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-[80px] -z-10" />
             <h4 className="font-serif text-2xl font-black mb-10 text-heading drop-shadow-sm">Headquarters</h4>
             <p className="text-text-main text-base leading-relaxed font-bold mb-8">
                Asia Leader Tea House<br />
                U.P Sarafa Bazar, Karachi<br />
                Pakistan
             </p>
             <div className="space-y-2 p-6 glass-dark rounded-3xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                <p className="text-gold-gradient text-xl font-black tracking-widest drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                  +92 322 9214000
                </p>
                <p className="text-[11px] uppercase font-black text-text-main opacity-50 tracking-[0.4em]">Master Support Line</p>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/10 gap-10 text-center md:text-left">
           <p className="text-[12px] uppercase tracking-[0.4em] text-text-main font-black opacity-50">
             © 2026 Asia Leader Tea. All Rights Reserved. Purely Transmitted.
           </p>

           <div className="flex items-center gap-12">
              <div className="flex gap-10 text-[12px] uppercase tracking-widest text-text-main font-black opacity-50">
                <a href="#" className="hover:text-gold hover:opacity-100 transition-all">Privacy</a>
                <a href="#" className="hover:text-gold hover:opacity-100 transition-all">Terms</a>
              </div>
              <button 
                onClick={scrollToTop}
                className="group w-16 h-16 rounded-[24px] bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(31,122,90,0.5)] hover:-translate-y-2 backdrop-blur-sm"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-8 h-8 text-white group-hover:scale-110 transition-all drop-shadow-md" />
              </button>
           </div>
        </div>
      </div>
    </footer>
  );
}
