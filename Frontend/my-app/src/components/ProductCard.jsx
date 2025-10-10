import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

// ProductCard Component
const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 group overflow-hidden"
    >
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {product.badge}
        </span>
      )}

      {/* Wishlist (static icon placeholder) */}
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-pink-600 transition"
        title="Add to Wishlist"
      >
        <FaHeart className="w-5 h-5" />
      </button>

      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <div className="overflow-hidden rounded-t-2xl">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-5">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-pink-600 transition">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <p className="text-xl font-bold text-pink-600 mt-3">{product.price}</p>

        {/* View Details Button */}
        <Link
          to={`/product/${product.id}`}
          className="block text-center mt-5 bg-pink-600 text-white font-semibold py-2 rounded-full hover:bg-pink-700 transition shadow-md"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
