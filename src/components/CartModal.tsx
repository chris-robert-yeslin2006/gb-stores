"use client";

import { useCart } from '../hooks/useCart';
import { useState } from 'react';

export default function CartModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { cart, clearCart, totalPrice } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('Submitting...');

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const productNames = cart.map(item => `${item.name} (x${item.quantity})`).join(", ");
      formData.append('Products', productNames);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyVIccqwhe-S5Gs5YAM3L6cBYgF6paB5AO0UgD_yTA5KuwcUKPU4mpFH0Ha9i0ZnnnrWA/exec",
        {
          method: "POST",
          body: new URLSearchParams(Array.from(formData.entries()) as string[][]),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (!response.ok) throw new Error("Failed to submit form");

      setMessage('Order placed successfully!');
      clearCart();
      setTimeout(() => {
        onClose();
        setMessage('');
      }, 2000);
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while placing the order.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" style={{fontFamily: '"Work Sans", "Noto Sans", sans-serif'}}>
      <div className="bg-white shadow-2xl rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-[#e7eef4]">
        {/* Header */}
        <div className="relative bg-[#1f89e0] p-6 text-white">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-xl transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <h2 className="text-[#f8fafb] text-2xl sm:text-3xl font-black leading-tight tracking-[-0.033em]">Checkout</h2>
          <p className="text-white/80 text-sm sm:text-base font-normal leading-normal mt-1">Complete your order</p>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)] bg-[#f8fafb]">
          {cart.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#f0f2f5] rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-[#507695]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H17M9 19a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z"></path>
                </svg>
              </div>
              <h3 className="text-[#0e151b] text-lg font-bold leading-tight tracking-[-0.015em] mb-2">Your cart is empty</h3>
              <p className="text-[#507695] text-sm sm:text-base font-normal leading-normal">Add some items to proceed with checkout</p>
            </div>
          ) : (
            <>
              {/* Cart Items Summary */}
              <div className="mb-6">
                <h3 className="text-[#0e151b] text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Order Summary</h3>
                <div className="bg-white rounded-xl p-4 space-y-3 max-h-40 overflow-y-auto border border-[#e7eef4]">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center text-sm">
                      <span className="text-[#0e151b] font-medium">{item.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-[#507695]">x{item.quantity}</span>
                        <span className="text-[#1f89e0] font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-[#e7eef4]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#0e151b] text-lg font-bold leading-tight tracking-[-0.015em]">Total:</span>
                    <span className="text-[#0e151b] text-2xl font-black leading-tight tracking-[-0.033em]">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Checkout Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#0e151b] text-sm font-bold leading-normal mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      name="Name" 
                      required 
                      className="w-full p-3 bg-white border border-[#e7eef4] rounded-xl focus:ring-2 focus:ring-[#1f89e0] focus:border-transparent transition-all duration-200 text-[#0e151b]"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0e151b] text-sm font-bold leading-normal mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      name="Email" 
                      required 
                      className="w-full p-3 bg-white border border-[#e7eef4] rounded-xl focus:ring-2 focus:ring-[#1f89e0] focus:border-transparent transition-all duration-200 text-[#0e151b]"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[#0e151b] text-sm font-bold leading-normal mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="Phone" 
                    className="w-full p-3 bg-white border border-[#e7eef4] rounded-xl focus:ring-2 focus:ring-[#1f89e0] focus:border-transparent transition-all duration-200 text-[#0e151b]"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-[#0e151b] text-sm font-bold leading-normal mb-2">Delivery Address *</label>
                  <textarea 
                    name="Address" 
                    required 
                    rows={3}
                    className="w-full p-3 bg-white border border-[#e7eef4] rounded-xl focus:ring-2 focus:ring-[#1f89e0] focus:border-transparent transition-all duration-200 resize-none text-[#0e151b]"
                    placeholder="Enter your complete delivery address"
                  />
                </div>
                
                <input type="hidden" name="Products" value={cart.map(item => `${item.name} (x${item.quantity})`).join(", ")} />

                {message && (
                  <div className={`p-4 rounded-xl text-center font-medium ${
                    message.includes('success') 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : message.includes('error')
                      ? 'bg-red-50 text-red-700 border border-red-200'
                      : 'bg-blue-50 text-[#1f89e0] border border-blue-200'
                  }`}>
                    {message}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#1f89e0] hover:bg-[#1a7bc8] text-[#f8fafb] font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Place Order</span>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}