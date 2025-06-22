export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: 'men' | 'women' | 'accessories' | 'shoes';
  sizes: string[];
  colors: string[];
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    price: 89,
    originalPrice: 120,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Navy', 'Gray'],
    description: 'A timeless essential crafted from premium organic cotton. This versatile t-shirt combines comfort with style.',
    features: ['100% Organic Cotton', 'Pre-shrunk', 'Reinforced seams', 'Breathable fabric'],
    rating: 4.8,
    reviews: 124,
    isNew: true
  },
  {
    id: '2',
    name: 'Elegant Silk Dress',
    price: 299,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1445697/pexels-photo-1445697.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Burgundy', 'Emerald'],
    description: 'An exquisite silk dress that effortlessly transitions from day to evening wear.',
    features: ['100% Mulberry Silk', 'Hand-finished seams', 'Adjustable straps', 'Dry clean only'],
    rating: 4.9,
    reviews: 89,
    isBestseller: true
  },
  {
    id: '3',
    name: 'Designer Leather Jacket',
    price: 459,
    originalPrice: 599,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown', 'Tan'],
    description: 'A classic leather jacket crafted from premium cowhide with attention to every detail.',
    features: ['Premium cowhide leather', 'YKK zippers', 'Quilted lining', 'Multiple pockets'],
    rating: 4.7,
    reviews: 156,
    isBestseller: true
  },
  {
    id: '4',
    name: 'Luxury Handbag',
    price: 329,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'accessories',
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Tan', 'Navy'],
    description: 'An elegant handbag that combines functionality with timeless style.',
    features: ['Italian leather', 'Gold-plated hardware', 'Multiple compartments', 'Adjustable strap'],
    rating: 4.6,
    reviews: 78
  },
  {
    id: '5',
    name: 'Premium Sneakers',
    price: 189,
    originalPrice: 229,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'shoes',
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Black', 'Gray', 'Navy'],
    description: 'High-performance sneakers designed for both style and comfort.',
    features: ['Memory foam insole', 'Breathable mesh', 'Rubber outsole', 'Lightweight construction'],
    rating: 4.5,
    reviews: 203,
    isNew: true
  },
  {
    id: '6',
    name: 'Cashmere Sweater',
    price: 249,
    originalPrice: 319,
    image: 'https://images.pexels.com/photos/7679717/pexels-photo-7679717.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/7679717/pexels-photo-7679717.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5710082/pexels-photo-5710082.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Gray', 'Black', 'Camel'],
    description: 'Luxuriously soft cashmere sweater perfect for any occasion.',
    features: ['100% Cashmere', 'Hand-knitted', 'Pill-resistant', 'Dry clean recommended'],
    rating: 4.9,
    reviews: 67,
    isBestseller: true
  },
  {
    id: '7',
    name: 'Classic Denim Jeans',
    price: 129,
    originalPrice: 169,
    image: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'men',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Dark Blue', 'Light Blue', 'Black', 'Gray'],
    description: 'Premium denim jeans with a perfect fit and timeless appeal.',
    features: ['Premium denim', 'Stretch comfort', 'Reinforced pockets', 'Fade-resistant'],
    rating: 4.4,
    reviews: 312
  },
  {
    id: '8',
    name: 'Statement Earrings',
    price: 79,
    originalPrice: 99,
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1445697/pexels-photo-1445697.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'accessories',
    sizes: ['One Size'],
    colors: ['Gold', 'Silver', 'Rose Gold'],
    description: 'Bold statement earrings that add glamour to any outfit.',
    features: ['18k gold plated', 'Hypoallergenic', 'Lightweight design', 'Gift box included'],
    rating: 4.7,
    reviews: 45,
    isNew: true
  }
];