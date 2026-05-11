// Centralized Type Definitions for Type Safety and Scalability

export interface Product {
  id: number;
  categoryId: string;
  name: string;
  description: string;
  image: string;
  prices: Record<string, number>;
  color: string;
}

export interface CartItem {
  id: string | number;
  name: string;
  currentPrice: number;
  image: string;
  quantity: number;
  selectedWeight: string;
  baseId?: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
}

export interface Order {
  id: string;
  customer: CustomerDetails;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered';
  createdAt: Date;
  updatedAt: Date;
}
