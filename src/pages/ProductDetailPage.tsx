import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Star, Truck, Shield, RotateCcw, Plus, Minus } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Product not found
          </h2>
          <Link to="/products" className="text-amber-600 hover:text-amber-700">
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 0) {
      alert('Please select a size');
      return;
    }
    if (!selectedColor && product.colors.length > 0) {
      alert('Please select a color');
      return;
    }

    addItem({
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize || 'One Size',
      color: selectedColor || product.colors[0] || 'Default',
      quantity
    });
  };

  const features = [
    { icon: Truck, title: 'Free Shipping', description: 'On orders over $100' },
    { icon: Shield, title: 'Secure Payment', description: '100% secure checkout' },
    { icon: RotateCcw, title: 'Easy Returns', description: '30-day return policy' },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-8"
        >
          <Link
            to="/products"
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Products
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden">
              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? 'border-amber-500'
                        : 'border-slate-200 dark:border-slate-600 hover:border-amber-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Badges */}
            <div className="flex gap-2">
              {product.isNew && (
                <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                  New Arrival
                </span>
              )}
              {product.isBestseller && (
                <span className="bg-amber-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                  Bestseller
                </span>
              )}
            </div>

            {/* Title and Rating */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-slate-300'}
                    />
                  ))}
                  <span className="text-sm text-slate-600 dark:text-slate-400 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-slate-900 dark:text-white">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-slate-500 dark:text-slate-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm px-2 py-1 rounded-full font-medium">
                  Save ${product.originalPrice - product.price}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Size:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <motion.button
                      key={size}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg font-medium transition-all ${
                        selectedSize === size
                          ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400'
                          : 'border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-amber-400'
                      }`}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Color:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <motion.button
                      key={color}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-lg font-medium transition-all ${
                        selectedColor === color
                          ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400'
                          : 'border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-amber-400'
                      }`}
                    >
                      {color}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Quantity:</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-slate-300 dark:border-slate-600 rounded-lg">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Minus size={16} />
                  </motion.button>
                  <span className="px-4 py-2 text-slate-900 dark:text-white font-medium">
                    {quantity}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Plus size={16} />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Add to Cart
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 border border-slate-300 dark:border-slate-600 rounded-xl hover:border-amber-500 transition-colors"
              >
                <Heart size={24} className="text-slate-600 dark:text-slate-400" />
              </motion.button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-200 dark:border-slate-700">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <feature.icon size={20} className="text-amber-600 dark:text-amber-400" />
                  </div>
                  <h4 className="font-medium text-slate-900 dark:text-white text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;