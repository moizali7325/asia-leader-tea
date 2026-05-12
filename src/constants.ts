export const IMAGES = {
  LOGO: '/images/Logo Final.tif',
  LOGO_OLD: '/logo.jpeg',
  BANNER: '/images/banner.jpeg',
  IMAGE_1: '/images/1.jpeg',
  IMAGE_3: '/images/3.jpeg',
  IMAGE_4: '/images/4.jpeg',
  IMAGE_5: '/images/5.jpeg',
  IMAGE_6: '/images/6.jpeg',
  IMAGE_7: '/images/7.jpeg',
  IMAGE_8: '/images/8.jpeg',
  IMAGE_9: '/images/9.jpeg',
  IMAGE_10: '/images/10.jpeg',
  IMAGE_11: '/images/11.jpeg',
  IMAGE_12: '/images/12.jpeg',
  IMAGE_13: '/images/13.jpeg',
  IMAGE_14: '/images/14.jpeg',
  IMAGE_15: '/images/15.jfif',
  IMAGE_16: '/images/16.jfif',
  IMAGE_17: '/images/17.jfif',
  IMAGE_88: '/images/88.jpeg',
  ASIA_HOTEL_BLEND: '/images/asia-hotel-blend.jpeg',
  STRONG_DANEDAR: '/images/WhatsApp Image 2026-04-17 at 9.59.38 PM.jpeg',
  STRONG_TASTE_DUST: '/images/WhatsApp Image 2026-04-17 at 10.01.21 PM.jpeg',
  MILKOL: '/images/WhatsApp Image 2026-04-17 at 10.07.17 PM.jpeg',
  AWAMI_MIXTURE: '/images/WhatsApp Image 2026-04-17 at 10.08.00 PM.jpeg',
  TAIZ_STRONG_DUST: '/images/WhatsApp Image 2026-04-17 at 10.10.22 PM.jpeg',
  CHOCOLATE_TEA: '/images/WhatsApp Image 2026-04-17 at 10.09.06 PM.jpeg',
  DAIRY_EVER: '/images/WhatsApp Image 2026-04-17 at 10.01.21 PM.jpeg',
  TEA_CUP: 'https://images.unsplash.com/photo-1544787210-2211d44b565a?q=80&w=1000&auto=format&fit=crop',
  TEA_LEAF: 'https://images.unsplash.com/photo-1597481499750-3e6b21643c12?q=80&w=500&auto=format&fit=crop',
  TEA_PLANTATION: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1000&auto=format&fit=crop',
  TEA_POURING: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1000&auto=format&fit=crop',
  TEA_STEAM: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1000&auto=format&fit=crop',
  TEA_GARDEN: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=1000&auto=format&fit=crop',
  TEA_CEREMONY: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1000&auto=format&fit=crop',
  TEA_BLENDS: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=1000&auto=format&fit=crop',
  TEA_CUP_SET: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1000&auto=format&fit=crop',
  TEA_LEAVES_PILE: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=1000&auto=format&fit=crop',
};

export const CATEGORIES = [
  {
    id: 'danedar',
    name: 'Tea',
    desc: 'The gold standard of aromatic tea, sourced from elite gardens.',
    icon: 'Leaf'
  },
  {
    id: 'dust',
    name: 'Kashmiri Chai',
    desc: 'Bold, robust, and full-bodied for those who seek high intensity.',
    icon: 'Zap'
  },
  {
    id: 'mixture',
    name: 'CHOCOLATE TEA',
    desc: 'Perfectly balanced blends for traditional and unique tastes.',
    icon: 'Scale'
  },
  {
    id: 'milk',
    name: 'MILK PRODUCTS',
    desc: 'Premium instant milk powder enriched with essential nutrients.',
    icon: 'Package'
  },
  {
    id: 'herbal',
    name: 'HERBAL TEA',
    desc: 'Natural herbal blends for wellness and relaxation.',
    icon: 'Leaf'
  },
  {
    id: 'coffee',
    name: 'COFFEE',
    desc: 'Rich and aromatic coffee blends for the perfect brew.',
    icon: 'Coffee'
  }
];

export const PRODUCTS = [
  {
    id: 1,
    categoryId: 'danedar',
    name: 'Taiz Strong Dust Chai',
    description: 'Prime Quality Blend for a refreshing morning start.',
    image: IMAGES.STRONG_DANEDAR,
    prices: { '250g': 420, '500g': 820, '1kg': 1640 },
    color: '#1f7a5a'
  },
  {
    id: 8,
    categoryId: 'danedar',
    name: 'ASIA STRONG MIXTURE',
    description: 'Premium quality classic tea blend for the perfect cup.',
    image: IMAGES.IMAGE_1,
    prices: { '250g': 420, '500g': 820, '1kg': 1640 },
    color: '#1f7a5a'
  },
  {
    id: 9,
    categoryId: 'danedar',
    name: 'Strong Danedar Chai',
    description: 'Premium quality classic tea blend with exceptional taste.',
    image: IMAGES.IMAGE_3,
    prices: { '250g': 420, '500g': 820, '1kg': 1640 },
    color: '#1f7a5a'
  },
  {
    id: 10,
    categoryId: 'danedar',
    name: 'SUPER MIXTURE',
    description: 'Premium quality classic tea blend for the perfect cup.',
    image: IMAGES.IMAGE_4,
    prices: { '250g': 360, '500g': 700, '1kg': 1400 },
    color: '#1f7a5a'
  },
  {
    id: 11,
    categoryId: 'danedar',
    name: 'AWAMI MIXTURE',
    description: 'Premium quality classic tea blend for everyday use.',
    image: IMAGES.IMAGE_5,
    prices: { '250g': 320, '500g': 620, '1kg': 1200 },
    color: '#1f7a5a'
  },
  {
    id: 12,
    categoryId: 'danedar',
    name: 'SUPER DUST',
    description: 'Premium quality classic tea blend with rich aroma.',
    image: IMAGES.IMAGE_6,
    prices: { '250g': 360, '500g': 720, '1kg': 1400 },
    color: '#1f7a5a'
  },
  {
    id: 23,
    categoryId: 'danedar',
    name: 'Asia Hotel Blend',
    description: 'Premium hotel quality tea blend for exceptional taste.',
    image: IMAGES.ASIA_HOTEL_BLEND,
    prices: { '1kg': 1500 },
    color: '#1f7a5a'
  },
  {
    id: 19,
    categoryId: 'mixture',
    name: 'CHOCOLATE TEA PREMIUM',
    description: 'Premium chocolate tea blend for a rich and indulgent taste.',
    image: IMAGES.IMAGE_14,
    prices: { '100g': 190, '200g': 380 },
    color: '#0a2e23'
  },
  {
    id: 18,
    categoryId: 'dust',
    name: 'Kashmiri Chai Special',
    description: 'Premium herbal tea blend for health and wellness.',
    image: IMAGES.IMAGE_13,
    prices: { '35g': 160, '70g': 300 },
    color: '#d4af37'
  },
  {
    id: 7,
    categoryId: 'milk',
    name: 'MILKOL Instant Milk Powder',
    description: 'High-quality instant milk powder enriched with Iron, Vitamins, and Calcium for optimal nutrition.',
    image: IMAGES.MILKOL,
    prices: { '500g': 850, '1kg': 1700 },
    color: '#3b82f6'
  },
  {
    id: 13,
    categoryId: 'milk',
    name: 'DAIRY EVER INSTANT MILK',
    description: 'High-quality instant milk powder for all your dairy needs.',
    image: IMAGES.IMAGE_8,
    prices: { '250g': 430, '500g': 850, '1kg': 1700 },
    color: '#f59e0b'
  },
  {
    id: 15,
    categoryId: 'milk',
    name: 'FULL CREAM MILK POWDER',
    description: 'High-quality instant milk powder for optimal nutrition.',
    image: IMAGES.IMAGE_10,
    prices: { '250g': 390, '500g': 770, '1kg': 1540 },
    color: '#f59e0b'
  },
  {
    id: 16,
    categoryId: 'milk',
    name: 'Premium Milk Powder Standard',
    description: 'High-quality instant milk powder for everyday use.',
    image: IMAGES.IMAGE_11,
    prices: { '250g': 340, '500g': 680, '1kg': 1360 },
    color: '#f59e0b'
  },
  {
    id: 20,
    categoryId: 'herbal',
    name: 'Green Tea',
    description: 'Natural herbal tea blend with soothing and refreshing properties.',
    image: IMAGES.IMAGE_15,
    prices: { '125g': 200, '250g': 400, '1kg': 1500 },
    color: '#4ade80'
  },
  {
    id: 21,
    categoryId: 'herbal',
    name: 'Lemon Grass',
    description: 'Special herbal blend with unique flavor and aroma.',
    image: IMAGES.IMAGE_16,
    prices: { '200g': 250, '400g': 500, '1kg': 1200 },
    color: '#34d399'
  },
  {
    id: 22,
    categoryId: 'coffee',
    name: 'Premium Coffee Blend',
    description: 'Rich and aromatic premium coffee for the perfect brew.',
    image: IMAGES.IMAGE_17,
    prices: { '25g': 380, '50g': 750, '1kg': 1500 },
    color: '#6F4E37'
  }
];

export const WHATSAPP_NUMBER = (import.meta as any).env?.VITE_WHATSAPP_NUMBER || '923229214000';
export const CURRENCY = 'PKR';
