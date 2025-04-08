
"use client"
import React from 'react';

const Main = () => {
  return (
    <section className="relative min-h-screen text-white flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-12 md:py-20 overflow-hidden">

      {/* Left Section */}
      <div className="z-10 max-w-xl order-2 md:order-1 mt-8 md:mt-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Rahul Son Boro
        </h1>

        <p className="text-gray-300 mt-6 md:mt-8 border-l-2 border-gray-600 pl-4 text-sm sm:text-base">
          I'm a Computer Science Engineering student from India, passionate about coding, problem-solving, and building impactful tech projects.
        </p>
      </div>

      {/* Right Section */}
      <div className="relative z-10 order-1 md:order-2 w-full md:w-auto flex justify-center">
        <div className="relative w-fit">
          {/* Developer Image */}
          <img 
            src="./Untitled design-modified.png"
            alt="Developer"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] object-cover"
          />

          {/* Resume Icon */}
          <a
            href="./Rahul Son Boro (2).pdf"
            download
            className="absolute -left-4 sm:-left-8 md:-left-12 bottom-2 transform -translate-y-1/2 hover:bg-fuchsia-700 text-white px-6 py-6 rounded-full text-center text-lg font-bold shadow-lg flex flex-col items-center gap-1"
          >
            <img 
              src="./circle.png" 
              alt="Download CV" 
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40" 
            />
          </a>
        </div>
      </div>

      {/* Social Media Icons - Mobile (Bottom) */}
      <div className="md:hidden order-3 mt-8 w-full flex justify-center">
        <ul className="flex items-center gap-6">
          <li><a href="https://www.linkedin.com/in/rahul-son-boro-19680b212"><img className="w-6" src="./linkedin.png" alt="LinkedIn" /></a></li>
          <li><a href="https://github.com/AEYF-12"><img className="w-6" src="./github.png" alt="GitHub" /></a></li>
          <li><a href="https://discord.com/channels/@me"><img className="w-6" src="./discord.png" alt="Discord" /></a></li>
          <li><a href="https://www.instagram.com/rahulsonboro/"><img className="w-6" src="./instagram.png" alt="Instagram" /></a></li>
          <li><a href="https://x.com/rahulsonboro"><img className="w-6" src="./x.png" alt="X" /></a></li>
        </ul>
      </div>

      {/* Social Media Icons - Desktop (Right Side) */}
      <div className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 pr-4 lg:pr-6 z-10">
        <ul className="flex flex-col items-center gap-3 lg:gap-4">
          <li><a href="https://www.linkedin.com/in/rahul-son-boro-19680b212"><img className="w-6 lg:w-7" src="./linkedin.png" alt="LinkedIn" /></a></li>
          <li><a href="https://github.com/AEYF-12"><img className="w-6 lg:w-7" src="./github.png" alt="GitHub" /></a></li>
          <li><a href="https://discord.com/channels/@me"><img className="w-6 lg:w-7" src="./discord.png" alt="Discord" /></a></li>
          <li><a href="https://www.instagram.com/rahulsonboro/"><img className="w-6 lg:w-7" src="./instagram.png" alt="Instagram" /></a></li>
          <li><a href="https://x.com/rahulsonboro"><img className="w-6 lg:w-7" src="./x.png" alt="X" /></a></li>
        </ul>
      </div>
    </section>
  );
};

export default Main;