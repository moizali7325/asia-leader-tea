// API Service Layer - Future-ready for backend integration

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  items: Array<{
    productId: string;
    name: string;
    weight: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  prices: Record<string, number>;
  category: string;
  inStock: number;
}

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = (import.meta as any).env?.VITE_API_URL || '/api';
  }

  async createOrder(order: Omit<Order, 'id' | 'status' | 'createdAt'>): Promise<Order> {
    // Future: POST to backend
    // const response = await fetch(`${this.baseUrl}/orders`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(order)
    // });
    // return response.json();
    
    // Current: Return mock order
    return {
      ...order,
      id: `ORD-${Date.now()}`,
      status: 'pending',
      createdAt: new Date(),
    };
  }

  async getProducts(): Promise<Product[]> {
    // Future: GET from backend
    // const response = await fetch(`${this.baseUrl}/products`);
    // return response.json();
    
    // Current: Return empty array (products are in constants.ts)
    return [];
  }

  async trackOrder(orderId: string): Promise<Order> {
    // Future: GET order status
    // const response = await fetch(`${this.baseUrl}/orders/${orderId}`);
    // return response.json();
    
    throw new Error('Order tracking not implemented yet');
  }
}

export const apiService = new ApiService();
