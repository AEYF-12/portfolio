"use client";
// BlogPage.jsx
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const categories = ["All", "AI project", "Lifestyle", "Astronomy", "Programming"];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const blogs = [
    {
      id: 1,
      title: "My Academic minor project",
      excerpt: "Using MediaPipe Pose, YOLO v6, and StowFast to Detect Threats in Malls, My Real-Time AI Project.",
      category: "AI project",
      imageUrl: "/Ai.jpeg",
      slug: "academic-minor-project"
    },
    {
      id: 2,
      title: "The 400 Blows",
      excerpt: "Dive into minimalist living and mental clarity.",
      category: "Lifestyle",
      imageUrl: "/images/minimalist.jpg",
      slug: "the-400-blows"
    },
    {
      id: 3,
      title: "Shooting Stars",
      excerpt: "A closer look at celestial events and the night sky.",
      category: "Astronomy",
      imageUrl: "/images/astronomy.jpg",
      slug: "shooting-stars"
    },
    {
      id: 4,
      title: "Building a Real-time Chat Application",
      excerpt: "How I built a scalable chat application using Socket.io and React.",
      category: "Programming",
      imageUrl: "/images/chat-app.jpg",
      slug: "real-time-chat-app"
    },
    {
      id: 5,
      title: "Machine Learning Algorithms Explained",
      excerpt: "A deep dive into common ML algorithms for beginners.",
      category: "AI project",
      imageUrl: "/images/ml-algorithms.jpg",
      slug: "ml-algorithms-explained"
    },
  ];

  // Filter blogs based on category and search query
  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <div className="fixed inset-0 -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="min-h-screen text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6">My Blog</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Sharing my thoughts and experiences on technology, programming, and my journey as a CSE student.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-xl hover:shadow-purple-900/20 group" key={blog.id}>
                  <Link href={`/Blog/${blog.slug}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-0 group-hover:opacity-60 transition-opacity z-10" />
                      <div className="w-full h-full relative">
                        <Image 
                          src={blog.imageUrl}
                          alt={blog.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-600 text-white rounded-full mb-4">
                      {blog.category}
                    </span>
                    <Link href={`/Blog/${blog.slug}`} className="block">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                        {blog.title}
                      </h3>
                    </Link>
                    <p className="text-gray-400 mb-4 line-clamp-2">{blog.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <Link href={`/Blog/${blog.slug}`} className="text-sm text-purple-400 flex items-center group">
                        Read More
                        <svg
                          className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16">
              <svg
                className="w-16 h-16 text-gray-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="text-xl font-bold mb-2">No matching articles found</h3>
              <p className="text-gray-400">Try changing your search or filter criteria</p>
            </div>
          )}

          {/* Featured Post (Optional) */}
          {activeCategory === "All" && !searchQuery && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 border-b border-gray-700 pb-4">Featured Post</h2>
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 relative h-64 md:h-auto">
                    <Link href="/Blog/academic-minor-project" className="block h-full">
                      <div className="relative w-full h-full">
                        <Image
                          src="/Ai.jpeg"
                          alt="Featured Post"
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-600 text-white rounded-full mb-4">
                      Featured
                    </span>
                    <Link href="/Blog/academic-minor-project">
                      <h3 className="text-2xl font-bold mb-4 hover:text-purple-400 transition-colors">My Academic Minor Project: AI-Powered Threat Detection</h3>
                    </Link>
                    <p className="text-gray-400 mb-6">
                      Learn about my real-time AI project that uses MediaPipe Pose, YOLO v6, and StowFast to detect potential threats in shopping malls, improving security and response times.
                    </p>
                    <Link href="/Blog/academic-minor-project" className="inline-block">
                      <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                        Read Article
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;