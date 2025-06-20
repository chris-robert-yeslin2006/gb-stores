"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { Menu, X } from 'lucide-react'; 

export default function Navbar() {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8eef3] px-4 sm:px-6 lg:px-10 py-3 bg-[#f8fafb]" style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}>
      
      {/* Logo */}
      <Link href="/" className="flex items-center gap-4 text-[#0e151b] hover:opacity-80 transition-opacity">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" />
            <path fillRule="evenodd" clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" />
          </svg>
        </div>
        <h2 className="text-[#0e151b] text-lg font-bold leading-tight tracking-[-0.015em]">Tech & Threads</h2>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link href="/gadgets" className="text-[#0e151b] text-sm font-medium leading-normal hover:text-[#1f89e0] transition-colors">Gadgets</Link>
          <Link href="/clothes" className="text-[#0e151b] text-sm font-medium leading-normal hover:text-[#1f89e0] transition-colors">Clothing</Link>
        </div>
        
        {/* Desktop Cart Button */}
        <Link href="/cart" className="relative flex items-center justify-center h-10 px-2.5 bg-[#e8eef3] hover:bg-[#d9e2ea] rounded-xl text-sm font-bold text-[#0e151b] gap-2 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z" />
          </svg>
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-[#1f89e0] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Menu & Cart */}
      <div className="md:hidden flex items-center gap-4">
        
        {/* Mobile Cart */}
        {/* <Link href="/cart" className="relative flex items-center justify-center h-10 w-10 bg-[#e8eef3] hover:bg-[#d9e2ea] rounded-xl transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z" />
          </svg>
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-[#1f89e0] text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </Link> */}
        <Link href="/cart" className="relative flex items-center justify-center h-10 px-2.5 bg-[#e8eef3] hover:bg-[#d9e2ea] rounded-xl text-sm font-bold text-[#0e151b] gap-2 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z" />
          </svg>
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-[#1f89e0] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </Link>

        {/* Mobile Menu Toggle */}
        <button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="flex items-center justify-center h-10 w-10 bg-[#e8eef3] hover:bg-[#d9e2ea] rounded-xl transition-colors"
  aria-label="Toggle mobile menu"
>
  {isMenuOpen ? (
    <X className="w-5 h-5 text-[#0e151b] transition-transform duration-300" />
  ) : (
    <Menu className="w-5 h-5 text-[#0e151b] transition-transform duration-300" />
  )}
</button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-5/6 bg-[#f8fafb] border border-[#e8eef3] rounded-xl shadow-md z-50">
          <div className="px-4 py-4 space-y-3">
            <Link href="/gadgets" onClick={() => setIsMenuOpen(false)} className="block text-[#0e151b] text-sm font-medium hover:text-[#1f89e0] transition-colors py-2">
              Gadgets
            </Link>
            <Link href="/clothes" onClick={() => setIsMenuOpen(false)} className="block text-[#0e151b] text-sm font-medium hover:text-[#1f89e0] transition-colors py-2">
              Clothing
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
