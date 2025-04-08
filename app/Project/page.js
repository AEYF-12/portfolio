import React from 'react';
import Navbar from '../components/Navbar';

const Project = () => {
  return (
    <div>
      <Navbar />
      {/* Background */}
      <div className="fixed inset-0 -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />

      {/* Project Section 1 */}
      <section className="text-white body-font">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-gray-300">
              ASSAMESE MOVIE RECOMMENDATION SYSTEM USING MACHINE LEARNING.
              <br className="hidden lg:inline-block" />
              <span className="text-sm font-normal"> Diploma Final Project</span>
            </h1>
            <p className="leading-relaxed text-sm sm:text-base">
              To promote Assamese cinema by developing a regional movie recommendation system that provides targeted suggestions...
            </p>
          </div>
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <img
              className="object-cover object-center rounded w-full max-w-md mx-auto"
              alt="movie system"
              src="./movie recommendation system.jpg"
            />
          </div>
        </div>
      </section>

      {/* Project Section 2 */}
      <section className="text-white body-font">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <img
              className="object-cover object-center rounded w-full max-w-md mx-auto"
              alt="web development"
              src="./web-developments.jpg"
            />
          </div>
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-gray-300">
              LEARNING PROJECTS | WEB-BASED DEVELOPMENT.
            </h1>
            <p className="leading-relaxed text-sm sm:text-base">
              Explored and practiced modern web development by building and cloning various websites...
            </p>
          </div>
        </div>
      </section>

      {/* Project Section 3 */}
      <section className="text-white body-font">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-gray-300">
              Real-Time Facial Expression Analysis & Body Movement Monitoring...
              <br className="hidden lg:inline-block" />
              <span className="text-sm font-normal"> B.Tech Minor Project</span>
            </h1>
            <p className="leading-relaxed text-sm sm:text-base">
              The project focuses on leveraging real-time facial expression analysis and body movement monitoring...
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <img
              className="object-cover object-center rounded w-full max-w-md mx-auto"
              alt="shopping mall"
              src="./shopping-malls.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
