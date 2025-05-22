import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
              <span className="text-sm font-normal block">Diploma Final Project</span>
            </h1>
            <p className="leading-relaxed text-sm sm:text-base mb-4">
              To promote Assamese cinema by developing a regional movie recommendation system that provides targeted suggestions based on user preferences.
            </p>
            <ul className="text-sm sm:text-base list-inside mb-2">
              <li className="font-medium">🛠️ Key Features:</li>
              <li>✅ Custom, Hand-Curated Dataset: Featuring Assamese movies including titles, genres, cast, and descriptions.</li>
              <li>✅ Content-Based Filtering: Recommends movies similar to the user&apos;s choice using content-related attributes.</li>
              <li>✅ Machine Learning Techniques Used:</li>
            </ul>
            <ol className="list-disc list-inside text-sm sm:text-base ml-4 mb-4">
              <li>TF-IDF Vectorizer: Extracts key features from movie metadata.</li>
              <li>Cosine Similarity: Calculates similarity scores between movies.</li>
              <li>Difflib: Handles fuzzy matching for user-input movie names.</li>
            </ol>
            <p className="text-sm sm:text-base">
              🎯 <strong>Outcome:</strong> Boosts visibility of Assamese films and enhances user engagement with meaningful recommendations.
            </p>
          </div>
          <div className="md:w-1/2 w-full mb-6 md:mb-0 flex justify-center">
            <div className="w-full max-w-md rounded overflow-hidden shadow-lg">
              <Image
                src="/movie recommendation system.jpg"
                alt="movie system"
                width={500}
                height={350}
                className="object-cover object-center rounded w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Section 2 */}
      <section className="text-white body-font">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="md:w-1/2 w-full mb-6 md:mb-0 flex justify-center">
            <div className="w-full max-w-md rounded overflow-hidden shadow-lg">
              <Image
                src="/web-developments.jpg"
                alt="web development"
                width={500}
                height={350}
                className="object-cover object-center rounded w-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-gray-300">
              LEARNING PROJECTS | WEB-BASED DEVELOPMENT.
            </h1>
            <p className="leading-relaxed text-sm sm:text-base">
              Explored and practiced modern web development by building and cloning various websites, and implementing full-stack applications using trending technologies.
            </p>
            <ul className="text-sm sm:text-base list-inside mb-2">
              <li className="font-medium">🛠️ Hands-On Projects:</li>
              <li className='text-sm'><strong>🔁 Web Page Cloning:</strong> Cloned popular UIs like Spotify, Twitter (X), and others to understand layout structure, responsiveness, and component reusability.</li>
              <li>⚙️ Tech Stack Used:</li>
            </ul>
            <ol className="list-disc list-inside text-sm sm:text-base ml-4 mb-4">
              <li>Frontend: React, Next.js, Redux</li>
              <li>Backend: Node.js, Express.js</li>
              <li>Additional Tools: REST APIs, JSON, and basic authentication features</li>
            </ol>
            <p className="text-sm sm:text-base">
              🎯 <strong>Learning Outcomes:</strong>
            </p>
            <ul className="list-disc list-inside text-sm">
              <li>Strengthened understanding of component-based architecture, state management, and server-side development.</li>
              <li>Gained practical experience in building responsive, interactive, and scalable web applications.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Section 3 */}
      <section className="text-white body-font">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-gray-300">
              REAL-TIME FACIAL EXPRESSION ANALYSIS & BODY MOVEMENT MONITORING FOR CONSUMER SATISFACTION AND THREAT DETECTION IN COMMERCIAL MALLS
              <br className="hidden lg:inline-block" />
              <span className="text-sm font-normal block">B.Tech Minor Project</span>
            </h1>
            <ul className="text-sm sm:text-base list-inside mb-2">
              <li className="font-medium">📌 Objective:</li>
              <p>To develop an AI-powered surveillance system for commercial malls that performs:</p>
              <li className='list-disc'>Facial Emotion Detection to understand customer satisfaction in real-time.</li>
              <li className='list-disc'>Threat Detection to identify and prevent potential product theft or suspicious behavior.</li>
            </ul>
            <ol className="list-disc list-inside text-sm sm:text-base ml-4 mb-4">
              <li>TF-IDF Vectorizer: Extracts key features from movie metadata.</li>
              <li>Cosine Similarity: Calculates similarity scores between movies.</li>
              <li>Difflib: Handles fuzzy matching for user-input movie names.</li>
            </ol>
            <p className="text-sm sm:text-base">
              🎯 <strong>Outcome:</strong> Boosts visibility of Assamese films and enhances user engagement with meaningful recommendations.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="w-full max-w-md rounded overflow-hidden shadow-lg">
              <Image
                src="/shopping-malls.jpg"
                alt="shopping mall"
                width={500}
                height={350}
                className="object-cover object-center rounded w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Project;
