import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'motion/react';
import { Toaster } from 'react-hot-toast';
import { ShoppingCart } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Cart from './components/Cart';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import Welcome from './components/Welcome';
import SkeletonLoader from './components/SkeletonLoader';
import SocialProof from './components/SocialProof';
import ErrorBoundary from './components/ErrorBoundary';
import MobileNav from './components/MobileNav';

// Lazy load heavy components for better performance
const Products = lazy(() => import('./components/Products'));
const Features = lazy(() => import('./components/Features'));
const Experience = lazy(() => import('./components/Experience'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Footer = lazy(() => import('./components/Footer'));

interface CartItem {
  id: string | number;
  name: string;
  currentPrice: number;
  image: string;
  quantity: number;
  selectedWeight: string;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Load cart from localStorage on mount
    const savedCart = localStorage.getItem('asiaLeaderTea_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to load cart:', e);
      }
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage on every change
    localStorage.setItem('asiaLeaderTea_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    // Simulate initial loading for 3D assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleWelcomeComplete = () => {
    localStorage.setItem('asiaLeaderTea_visited', 'true');
    setShowWelcome(false);
  };

  const handleAddToCart = (product: any) => {
    setCartItems((prev) => {
      const validatedQuantity = Math.min(99, Math.max(1, product.quantity));
      const validatedProduct = { ...product, quantity: validatedQuantity };
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        const newQuantity = Math.min(99, existingItem.quantity + validatedQuantity);
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      }
      return [...prev, validatedProduct];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string | number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.min(99, Math.max(1, item.quantity + delta));
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id: string | number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-bg-dark selection:bg-gold selection:text-black">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gold text-black px-4 py-2 rounded z-[9999] font-bold"
        >
          Skip to main content
        </a>
        
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#0d5f3f',
              color: '#ffffff',
              border: '1px solid #f9c449',
            },
            success: {
              iconTheme: {
                primary: '#f9c449',
                secondary: '#ffffff',
              },
            },
          }}
        />
        
        {/* Welcome/Landing Screen */}
        <AnimatePresence>
          {showWelcome && <Welcome onEnter={handleWelcomeComplete} />}
        </AnimatePresence>

        {/* Only show main content after welcome is complete */}
        {!showWelcome && (
          <>
            <Cursor />
            
            <Navbar cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} onOpenCart={() => setIsCartOpen(true)} />
            
            <main id="main-content">
              <Hero />
              <About />
              <Suspense fallback={
                <div className="px-6 md:px-16 py-20">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <SkeletonLoader />
                    <SkeletonLoader />
                    <SkeletonLoader />
                  </div>
                </div>
              }>
                <Features />
              </Suspense>
              <Suspense fallback={
                <div className="px-6 md:px-16 py-20">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SkeletonLoader />
                    <SkeletonLoader />
                    <SkeletonLoader />
                  </div>
                </div>
              }>
                <Products onAddToCart={handleAddToCart} />
              </Suspense>
              <Suspense fallback={<LoadingScreen />}>
                <Experience />
              </Suspense>
              <Suspense fallback={<LoadingScreen />}>
                <Testimonials />
              </Suspense>
            </main>

            <Suspense fallback={<LoadingScreen />}>
              <Footer />
            </Suspense>

            <Cart 
              isOpen={isCartOpen} 
              onClose={() => setIsCartOpen(false)} 
              items={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemove={handleRemoveItem}
            />
            
            <SocialProof />
            
            {/* Mobile Navigation */}
            <MobileNav 
              cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              onOpenCart={() => setIsCartOpen(true)}
              onOpenMenu={() => {}}
            />
          </>
        )}
      </div>
    </ErrorBoundary>
  );
}
