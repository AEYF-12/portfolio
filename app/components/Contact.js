'use client';

import React from 'react';

export default function ContactForm() {
  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden px-4 sm:px-6 py-16 sm:py-20 flex items-center justify-center">
      {/* Background gradients and shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-black via-[#1f013f] to-[#320066] opacity-60"></div>

      <div className="absolute -left-20 sm:left-[-150px] top-[10%] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-700 opacity-30 blur-2xl" />

      <div className="absolute right-2 sm:right-4 bottom-[15%] grid grid-cols-2 gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full opacity-40" />
        ))}
      </div>

      {/* Form Content */}
      <div className="w-full max-w-xl z-10">
        <h1 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-10 text-center sm:text-left">
          Contact me
        </h1>

        <form className="flex flex-col gap-5 sm:gap-6">
          <div>
            <label className="block mb-1 font-semibold text-sm sm:text-base">Full name *</label>
            <input
              type="text"
              placeholder="Enter your full name ..."
              className="w-full px-4 py-3 bg-[#1a082b] rounded-full text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-fuchsia-600 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-sm sm:text-base">Email *</label>
            <input
              type="email"
              placeholder="Enter your email ..."
              className="w-full px-4 py-3 bg-[#1a082b] rounded-full text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-fuchsia-600 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-sm sm:text-base">Message *</label>
            <textarea
              rows={4}
              placeholder="Enter your message ..."
              className="w-full px-4 py-3 bg-[#1a082b] rounded-2xl text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-fuchsia-600 resize-none text-sm sm:text-base"
            />
          </div>

          <button
            type="submit"
            className="self-center bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition-all text-sm sm:text-base"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Pink Arrow */}
      <div className="hidden sm:block absolute right-10 top-[65%]">
        <span className="text-fuchsia-500 text-3xl sm:text-4xl font-bold">&larr;</span>
      </div>

      {/* Bottom X shape */}
      <div className="absolute bottom-4 left-4 text-fuchsia-500">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </div>
    </section>
  );
}
