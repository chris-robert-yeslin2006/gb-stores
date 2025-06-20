'use client'
import { gadgets } from '@/data/products';
import ProductCard from '@/components/ProductCard';

import Footer from '@/components/Footer';


export default function GadgetsPage() {
  
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8fafb]" style={{fontFamily: '"Work Sans", "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            
            {/* Header Section */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-[#0e151b] text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] mb-4">
                Latest Gadgets
              </h1>
              <p className="text-[#507695] text-sm sm:text-base lg:text-lg font-normal leading-normal max-w-2xl mx-auto">
                Discover cutting-edge technology and innovative gadgets that make life easier and more exciting
              </p>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 sm:gap-6 p-4">
              {gadgets.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {/* Bottom Decoration */}
            <div className="mt-12 mb-5 text-center">
              <div className="inline-block px-6 py-3 bg-white rounded-xl border border-[#e7eef4] shadow-sm">
                <span className="text-[#507695] text-sm font-normal leading-normal">
                  {gadgets.length} Amazing Gadgets Available
                </span>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}