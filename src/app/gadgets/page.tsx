'use client'
import { gadgets } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';


export default function GadgetsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [formStatus, setFormStatus] = useState("idle");
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
            <div className="mt-12 text-center">
              <div className="inline-block px-6 py-3 bg-white rounded-xl border border-[#e7eef4] shadow-sm">
                <span className="text-[#507695] text-sm font-normal leading-normal">
                  {gadgets.length} Amazing Gadgets Available
                </span>
              </div>
            </div>
            {/* Footer */}
        <footer className="bg-gradient-to-br from-[#ffffff] to-[#f2f6fa] text-[#0e151b] py-12 px-4 sm:px-6 border-t border-[#d9e2ea]">
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
          </div>
        </div>
      </div>
    </div>
  );
}