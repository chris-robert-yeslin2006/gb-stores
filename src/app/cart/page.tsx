"use client";

import { useCart } from '../../hooks/useCart';
import { useState } from 'react';
import CartModal from '../../components/CartModal';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gradient-to-br from-[#f8fafb] to-[#f0f6fa]" style={{fontFamily: '"Work Sans", "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 lg:px-40 flex flex-1 justify-center py-8">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-block p-1 bg-gradient-to-r from-[#1f89e0] to-[#2d9cdb] rounded-2xl mb-6">
                <div className="bg-white rounded-xl px-6 py-3">
                  <svg className="w-8 h-8 text-[#1f89e0] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H17M9 19a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-[#0e151b] text-xl sm:text-4xl lg:text-2xl font-black leading-tight tracking-[-0.033em] mb-4">
                Your Shopping Cart
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1f89e0] to-[#2d9cdb] rounded-full mx-auto"></div>
            </div>
            
            {cart.length === 0 ? (
              /* Empty Cart State */
              <div className="text-center py-12 sm:py-20">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-xl border border-[#e7eef4]/50 max-w-md mx-auto transform hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#f0f2f5] to-[#e7eef4] rounded-full flex items-center justify-center shadow-inner">
                      <svg className="w-12 h-12 text-[#507695]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H17M9 19a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z"></path>
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#1f89e0] to-[#2d9cdb] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">0</span>
                    </div>
                  </div>
                  <h3 className="text-[#0e151b] text-xl sm:text-2xl font-bold leading-tight tracking-[-0.015em] mb-4">
                    Your cart is empty
                  </h3>
                  <p className="text-[#507695] text-sm sm:text-base font-normal leading-normal mb-8">
                    Looks like you haven't added anything to your cart yet
                  </p>
                  <Link 
                    href="/" 
                    className="group flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-gradient-to-r from-[#1f89e0] to-[#2d9cdb] text-[#f8fafb] text-base font-bold leading-normal tracking-[0.015em] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="truncate group-hover:scale-105 transition-transform">Continue Shopping</span>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Cart Summary Badge */}
                <div className="flex justify-center mb-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-[#e7eef4]/50">
                    <span className="text-[#507695] text-sm font-medium">
                      {cart.reduce((total, item) => total + item.quantity, 0)} items in cart
                    </span>
                  </div>
                </div>

                {/* Cart Items */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-[#e7eef4]/50 overflow-hidden">
                  <div className="p-4 sm:p-6 space-y-4">
                    {cart.map((item, index) => (
                      <div
  key={item.id}
  className="group bg-gradient-to-r from-[#f8fafb] to-[#f0f6fa] border border-[#e7eef4]/70 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:border-[#1f89e0]/20"
>
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div className="flex items-start gap-4 sm:gap-6">
      {/* Zoomable Product Image */}
      <div className="relative group w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-xl border border-[#e7eef4] shadow-sm flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-center">
        <h3 className="text-[#0e151b] text-lg sm:text-xl font-bold leading-tight tracking-[-0.015em] mb-1">
          {item.name}
        </h3>
        <p className="text-[#507695] text-sm sm:text-base font-normal leading-normal">
          ${item.price.toFixed(2)} each
        </p>
      </div>
    </div>

    {/* Quantity & Price Controls */}
    <div className="flex items-center justify-between sm:justify-end gap-4">
      {/* Quantity Controls */}
      <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-xl border border-[#e7eef4]/70 shadow-lg overflow-hidden">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-10 h-10 flex items-center justify-center text-[#507695] hover:text-[#1f89e0] hover:bg-gradient-to-r hover:from-[#1f89e0]/10 hover:to-[#2d9cdb]/10 transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
          </svg>
        </button>
        <div className="px-4 py-2 bg-gradient-to-r from-[#1f89e0]/5 to-[#2d9cdb]/5">
          <span className="text-[#0e151b] font-bold text-base min-w-[3rem] text-center block">
            {item.quantity}
          </span>
        </div>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-10 h-10 flex items-center justify-center text-[#507695] hover:text-[#1f89e0] hover:bg-gradient-to-r hover:from-[#1f89e0]/10 hover:to-[#2d9cdb]/10 transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>

      {/* Price & Remove */}
      <div className="flex items-center gap-4">
        <div className="text-center">
          <span className="text-[#0e151b] text-xl sm:text-xl font-black leading-tight tracking-[-0.033em] bg-gradient-to-r from-[#1f89e0] to-[#2d9cdb] bg-clip-text text-transparent">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="group p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 hover:scale-110"
        >
          <svg
            className="w-5 h-5 group-hover:rotate-12 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

                    ))}
                  </div>
                </div>

                {/* Total and Checkout */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-[#e7eef4]/50 p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="text-center sm:text-left">
                      <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#1f89e0] to-[#2d9cdb] rounded-full"></div>
                        <p className="text-[#507695] text-sm sm:text-base font-medium leading-normal">
                          Total Amount
                        </p>
                      </div>
                      <p className="text-[#0e151b] text-xl sm:text-xl font-black leading-tight tracking-[-0.033em] bg-gradient-to-r from-[#1f89e0] to-[#2d9cdb] bg-clip-text text-transparent">
                        ${totalPrice.toFixed(2)}
                      </p>
                    </div>

                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="group flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-gradient-to-r from-[#1f89e0] to-[#2d9cdb] text-[#f8fafb] text-base font-bold leading-normal tracking-[0.015em] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <svg className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="group-hover:scale-105 transition-transform">Proceed to Checkout</span>
                    </button>
                  </div>
                </div>


              </div>
            )}

            {/* Footer */}
            <footer className=" mb-8 bg-gradient-to-br from-[#fbfafa] to-[#f2f6fa] text-[#0e151b] py-12 px-4 sm:px-6 border-t  mt-8 border-[#d9e2ea]">
    <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
        
        {/* Contact Information */}
        <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#0e151b] mb-6">Get in Touch</h3>
            <div className="space-y-4">
            <div className="flex items-center gap-4 group">
                <div className="p-2 rounded-lg bg-[#1f89e0]/10 group-hover:bg-[#1f89e0]/20 transition-colors">
                <FaEnvelope className="text-[#1f89e0] w-4 h-4" />
                </div>
                <a 
                href="mailto:support@techthreads.com" 
                className="text-[#4a5568] hover:text-[#1f89e0] transition-colors font-medium"
                >
                support@techthreads.com
                </a>
            </div>
            
            <div className="flex items-center gap-4 group">
                <div className="p-2 rounded-lg bg-[#1f89e0]/10 group-hover:bg-[#1f89e0]/20 transition-colors">
                <FaPhoneAlt className="text-[#1f89e0] w-4 h-4" />
                </div>
                <a 
                href="tel:+919876543210" 
                className="text-[#4a5568] hover:text-[#1f89e0] transition-colors font-medium"
                >
                +91 98765 43210
                </a>
            </div>
            </div>
        </div>

        {/* Social Media & Support */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
            {/* Social Links */}
            <div>
            <h4 className="text-sm font-semibold text-[#0e151b] mb-3">Follow Us</h4>
            <div className="flex gap-3">
                <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-white/60 hover:bg-[#1f89e0] transition-all duration-300 shadow-sm hover:shadow-md border border-[#d9e2ea]/50"
                aria-label="Instagram"
                >
                <FaInstagram className="w-5 h-5 text-[#1f89e0] group-hover:text-white transition-colors" />
                </a>
                <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-white/60 hover:bg-[#1f89e0] transition-all duration-300 shadow-sm hover:shadow-md border border-[#d9e2ea]/50"
                aria-label="Facebook"
                >
                <FaFacebookF className="w-5 h-5 text-[#1f89e0] group-hover:text-white transition-colors" />
                </a>
            </div>
            </div>

            {/* Customer Care Button */}
            <div className="flex flex-col items-start sm:items-end">
            <h4 className="text-sm font-semibold text-[#0e151b] mb-3">Need Help?</h4>
            <button
                onClick={() => setIsModalOpen(true)}
                className="group px-8 py-3 rounded-xl bg-[#1f89e0] text-white font-semibold hover:bg-[#1a7bc8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
            >
                Customer Care
                <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m-4-4l4 4-4 4" />
                </svg>
            </button>
            </div>
        </div>
        </div>

        {/* Divider */}
        <div className="my-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#d9e2ea] to-transparent"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-[#6b7280]">
            © {new Date().getFullYear()} Tech & Threads. All rights reserved.
        </div>
        
        
        </div>
    </div>
    </footer>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-xl p-6 rounded-xl shadow-xl relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
              >
                ✕
              </button>
              <h2 className="text-xl font-bold text-[#0e151b] mb-4">Contact Customer Care</h2>

              {/* Formspree Form */}
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);
                  try {
                    const res = await fetch("https://formspree.io/f/xkgbzqon", {
                      method: "POST",
                      headers: { Accept: "application/json" },
                      body: formData,
                    });

                    if (res.ok) {
                      setFormStatus("success");
                      (form as HTMLFormElement).reset();
                    } else {
                      setFormStatus("error");
                    }
                  } catch {
                    setFormStatus("error");
                  }
                }}
                className="space-y-4"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-[#f0f4f8] text-[#0e151b] border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-[#1f89e0]"
                />

                <textarea
                  name="message"
                  required
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-[#f0f4f8] text-[#0e151b] border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-[#1f89e0]"
                />

                <button
                  type="submit"
                  className="w-full bg-[#1f89e0] hover:bg-[#1a7bc8] text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center group hover:scale-105 hover:shadow-lg"
                >
                  Send Message
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Status Message */}
                {formStatus === "success" && (
                  <p className="text-green-600 text-sm text-center">✅ Message sent successfully!</p>
                )}
                {formStatus === "error" && (
                  <p className="text-red-600 text-sm text-center">❌ Something went wrong. Try again.</p>
                )}
              </form>
            </div>
          </div>
        )}

            <CartModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}