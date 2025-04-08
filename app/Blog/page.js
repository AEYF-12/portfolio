"use client";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const blogPosts = [
  {
    id: 1,
    title: 'My Academic minor project',
    image: './Ai.jpeg',
    category: 'AI project',
    description: 'Using MediaPipe Pose, YOLOv8, and SlowFast to Detect Threats in Malls – My Real-Time AI Project',
    fullContent: "Hey everyone! I’m currently working on a really exciting and ambitious project as part of my academic journey..."
  },
  {
    id: 2,
    title: 'The 400 Blows',
    image: 'https://dummyimage.com/721x401',
    category: 'Lifestyle',
    description: 'Dive into minimalist living and mental clarity.',
    fullContent: "Hey everyone!"
  },
  {
    id: 3,
    title: 'Shooting Stars',
    image: 'https://dummyimage.com/722x402',
    category: 'Astronomy',
    description: 'A closer look at celestial events and the night sky.',
    fullContent: 'Learn about meteor showers...'
  },
  {
    id: 4,
    title: 'The 400 Blows',
    image: 'https://dummyimage.com/721x401',
    category: 'Lifestyle',
    description: 'Dive into minimalist living and mental clarity.',
    fullContent: 'Discover how simplifying your life...'
  }
];

// Modal
const Modal = ({ show, onClose, content }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto relative shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">{content.title}</h2>
        <p className="text-gray-700 text-sm sm:text-base whitespace-pre-line">{content.fullContent}</p>
      </div>
    </div>
  );
};

// BlogCard
const BlogCard = ({ post, onLearnMore }) => (
  <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
    <div className="h-full border border-gray-700 bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <img className="h-48 w-full object-cover" src={post.image} alt={post.title} />
      <div className="p-6">
        <h2 className="tracking-widest text-xs font-medium text-indigo-400 mb-1">{post.category}</h2>
        <h1 className="text-lg font-semibold text-white mb-2">{post.title}</h1>
        <p className="text-gray-300 text-sm mb-4">{post.description}</p>
        <button
          className="text-indigo-500 inline-flex items-center hover:underline"
          onClick={() => onLearnMore(post)}
        >
          Learn More
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

// Main Blog Component
const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleLearnMore = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  return (
    <>
      <Navbar />
      <div className="fixed inset-0 -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
      <section className="text-white body-font">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">My Blogs</h2>
          <div className="flex flex-wrap -m-4">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} onLearnMore={handleLearnMore} />
            ))}
          </div>
        </div>
        <Modal show={showModal} onClose={closeModal} content={selectedPost || {}} />
      </section>
    </>
  );
};

export default Blog;
