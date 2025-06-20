"use client";

import { Product } from '../data/products';
import { useCart } from '../hooks/useCart';
import { useState } from 'react';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    addToCart(product);
    
    // Brief loading state for visual feedback
    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

  return (
    <div className="flex flex-col gap-3 pb-3 group" style={{fontFamily: '"Work Sans", "Noto Sans", sans-serif'}}>
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
          style={{
            backgroundImage: `url("${product.image}")`
          }}
        >
          {/* Overlay that appears on hover */}
          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 rounded-xl flex items-center justify-center opacity-0 hover:opacity-100">
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`px-4 py-2 bg-white/90 backdrop-blur-sm text-[#0e151b] rounded-lg font-medium text-sm hover:bg-white transition-all duration-300 transform translate-y-2 hover:translate-y-0 ${
                isAdding ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
              }`}
            >
              {isAdding ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Adding...
                </span>
              ) : (
                'Add to Cart'
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <p className="text-[#0e151b] text-base font-medium leading-normal group-hover:text-[#1f89e0] transition-colors duration-300">
          {product.name}
        </p>
        <p className="text-[#507695] text-sm font-normal leading-normal">
          ${product.price.toFixed(2)}
        </p>
      </div>

      {/* Alternative: Add to Cart Button Below (if you prefer) */}
      {/* Uncomment this section if you want the button below the product info instead of on hover */}
      {/*
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`w-full mt-2 flex items-center justify-center gap-2 bg-[#1f89e0] text-white py-2 px-4 rounded-lg font-medium text-sm hover:bg-[#1a7bc8] transition-colors duration-300 ${
          isAdding ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
        }`}
      >
        {isAdding ? (
          <>
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Adding...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H17M9 19a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z"></path>
            </svg>
            Add to Cart
          </>
        )}
      </button>
      */}
    </div>
  );
}