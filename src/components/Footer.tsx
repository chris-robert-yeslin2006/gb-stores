import { ChevronRight } from 'lucide-react';
import React, { useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebookF } from 'react-icons/fa';

function Footer() {
    
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [formStatus, setFormStatus] = useState("idle");
  return (
    <div><footer className="bg-gradient-to-br from-[#fffcfc] to-[#f2f6fa] text-[#0e151b] py-12 px-4 sm:px-6 border-t border-[#d9e2ea]">
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
              support@gbstores.com
            </a>
          </div>
          
          <div className="flex items-center gap-4 group">
            <div className="p-2 rounded-lg bg-[#1f89e0]/10 group-hover:bg-[#1f89e0]/20 transition-colors">
              <FaPhoneAlt className="text-[#1f89e0] w-4 h-4" />
            </div>
            <a 
              href="tel:+91 93457 52778" 
              className="text-[#4a5568] hover:text-[#1f89e0] transition-colors font-medium"
            >
              +91 93457 52778
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
        © {new Date().getFullYear()} GB stores. All rights reserved.
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
                    const res = await fetch("https://formspree.io/f/mvgrbzdg", {
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
        )}</div>
  )
}

export default Footer