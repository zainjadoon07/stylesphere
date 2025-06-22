import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Star, Eye } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            New
          </span>
        )}
        {product.isBestseller && (
          <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            Bestseller
          </span>
        )}
        {product.originalPrice && (
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            Sale
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-white dark:bg-slate-700 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors"
        >
          <Heart size={16} className="text-slate-600 dark:text-slate-300" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-white dark:bg-slate-700 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors"
        >
          <Eye size={16} className="text-slate-600 dark:text-slate-300" />
        </motion.button>
      </div>

      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-1 mb-2">
          <Star size={14} className="text-amber-400 fill-current" />
          <span className="text-sm text-slate-600 dark:text-slate-400">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
          {product.name}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-slate-900 dark:text-white">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-slate-500 dark:text-slate-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <Link to={`/product/${product.id}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300"
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;