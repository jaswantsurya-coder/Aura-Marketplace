export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  artisan: string;
  rating: number;
  reviews: number;
  isLimited?: boolean;
  details?: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}
