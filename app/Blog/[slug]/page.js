import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';

// This would typically come from an API or database
const blogPosts = {
  "academic-minor-project": {
    id: 1,
    title: "My Academic minor project",
    content: `
      <h2>Using MediaPipe Pose, YOLO v6, and StowFast to Detect Threats in Malls</h2>
      <p>This project was developed as part of my academic minor project. The goal was to create a real-time threat detection system for shopping malls using computer vision technologies.</p>
      
      <h3>The Challenge</h3>
      <p>Shopping malls face various security challenges, from theft to more serious threats. Traditional security measures often rely on human operators monitoring CCTV feeds, which can be inefficient and prone to human error.</p>
      
      <h3>The Solution</h3>
      <p>We developed a system that combines:</p>
      <ul>
        <li><strong>MediaPipe Pose:</strong> For real-time human pose estimation</li>
        <li><strong>YOLO v6:</strong> For object detection and classification</li>
        <li><strong>StowFast:</strong> For efficient data processing and storage</li>
      </ul>
      
      <h3>Implementation Details</h3>
      <p>The system processes video feeds in real-time, identifying potential threats based on predefined patterns of behavior. When a threat is detected, the system alerts security personnel and provides relevant information about the situation.</p>
      
      <h3>Results</h3>
      <p>The prototype demonstrated significant improvements in threat detection accuracy and response time compared to traditional methods. The system was able to identify various threat scenarios with a high degree of accuracy.</p>
      
      <h3>Future Improvements</h3>
      <p>We plan to enhance the system with:</p>
      <ul>
        <li>Improved accuracy through additional training data</li>
        <li>Integration with existing security systems</li>
        <li>Mobile application for security personnel</li>
      </ul>
    `,
    category: "AI project",
    imageUrl: "/Ai.jpeg",
    date: "April 15, 2023"
  },
  "the-400-blows": {
    id: 2,
    title: "The 400 Blows",
    content: `
      <h2>Dive into minimalist living and mental clarity</h2>
      <p>In today's fast-paced world, many of us find ourselves overwhelmed by the sheer amount of stuff we own and the constant demands on our attention. This article explores the benefits of minimalist living and how it can lead to greater mental clarity and well-being.</p>
      
      <h3>What is Minimalism?</h3>
      <p>Minimalism is not about deprivation or living with nothing. It's about intentionally living with only the things that add value to your life. It's about removing the excess to make room for what truly matters.</p>
      
      <h3>The Benefits of Minimalism</h3>
      <ul>
        <li><strong>Reduced Stress:</strong> Less stuff means less to manage, clean, and worry about.</li>
        <li><strong>Increased Focus:</strong> With fewer distractions, you can concentrate on what's important.</li>
        <li><strong>Better Finances:</strong> Buying less means saving more.</li>
        <li><strong>Environmental Impact:</strong> Consuming less reduces your environmental footprint.</li>
      </ul>
      
      <h3>How to Start Your Minimalist Journey</h3>
      <p>Begin with a small area of your home and gradually expand. Ask yourself if each item brings you joy or serves a purpose. If not, consider donating, selling, or recycling it.</p>
      
      <h3>Digital Minimalism</h3>
      <p>Minimalism isn't just about physical possessions. Digital clutter can be just as overwhelming. Consider decluttering your digital life by organizing files, unsubscribing from unnecessary emails, and setting boundaries for technology use.</p>
      
      <h3>Conclusion</h3>
      <p>Minimalism is a personal journey that looks different for everyone. The goal is not to live with as little as possible, but to live with intention and purpose, focusing on what truly matters to you.</p>
    `,
    category: "Lifestyle",
    imageUrl: "/images/minimalist.jpg",
    date: "March 22, 2023"
  },
  "shooting-stars": {
    id: 3,
    title: "Shooting Stars",
    content: `
      <h2>A closer look at celestial events and the night sky</h2>
      <p>The night sky has fascinated humans for millennia. From ancient civilizations using the stars for navigation to modern astronomers discovering distant galaxies, our relationship with the cosmos continues to evolve.</p>
      
      <h3>What are Shooting Stars?</h3>
      <p>Contrary to their name, shooting stars are not actually stars at all. They are meteoroids—small pieces of rock or debris from space—that enter Earth's atmosphere and burn up, creating a streak of light across the night sky.</p>
      
      <h3>Meteor Showers</h3>
      <p>Meteor showers occur when Earth passes through the debris trail left by a comet. Some of the most famous meteor showers include:</p>
      <ul>
        <li><strong>Perseids:</strong> Visible in August, originating from the comet Swift-Tuttle</li>
        <li><strong>Leonids:</strong> Visible in November, originating from the comet Tempel-Tuttle</li>
        <li><strong>Geminids:</strong> Visible in December, originating from the asteroid 3200 Phaethon</li>
      </ul>
      
      <h3>How to Observe Meteor Showers</h3>
      <p>For the best viewing experience:</p>
      <ul>
        <li>Find a dark location away from city lights</li>
        <li>Allow your eyes to adjust to the darkness (about 20-30 minutes)</li>
        <li>Look up at the sky and be patient</li>
        <li>Bring a comfortable chair or blanket to lie on</li>
      </ul>
      
      <h3>Other Celestial Events</h3>
      <p>Beyond meteor showers, the night sky offers many other wonders:</p>
      <ul>
        <li><strong>Eclipses:</strong> Solar and lunar eclipses</li>
        <li><strong>Planetary Alignments:</strong> When planets appear close together in the sky</li>
        <li><strong>Auroras:</strong> Colorful light displays in the polar regions</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Whether you're an experienced astronomer or just beginning to explore the night sky, there's always something new to discover. Take the time to look up and marvel at the wonders of the universe.</p>
    `,
    category: "Astronomy",
    imageUrl: "/images/astronomy.jpg",
    date: "February 10, 2023"
  },
  "real-time-chat-app": {
    id: 4,
    title: "Building a Real-time Chat Application",
    content: `
      <h2>How I built a scalable chat application using Socket.io and React</h2>
      <p>Real-time communication has become an essential part of modern web applications. In this article, I'll walk through the process of building a scalable chat application using Socket.io for real-time communication and React for the frontend.</p>
      
      <h3>The Technology Stack</h3>
      <ul>
        <li><strong>Frontend:</strong> React, Redux, Material-UI</li>
        <li><strong>Backend:</strong> Node.js, Express</li>
        <li><strong>Real-time Communication:</strong> Socket.io</li>
        <li><strong>Database:</strong> MongoDB</li>
        <li><strong>Authentication:</strong> JWT</li>
      </ul>
      
      <h3>Setting Up the Project</h3>
      <p>The first step was to set up the project structure and install the necessary dependencies. We used Create React App for the frontend and initialized a Node.js project for the backend.</p>
      
      <h3>Implementing Socket.io</h3>
      <p>Socket.io was the key technology that enabled real-time communication. We set up event listeners for:</p>
      <ul>
        <li>User connection/disconnection</li>
        <li>Message sending/receiving</li>
        <li>Typing indicators</li>
        <li>Online status updates</li>
      </ul>
      
      <h3>Building the User Interface</h3>
      <p>The UI was designed to be intuitive and responsive, with features including:</p>
      <ul>
        <li>User authentication</li>
        <li>Friend list</li>
        <li>Chat windows</li>
        <li>Message history</li>
        <li>Typing indicators</li>
      </ul>
      
      <h3>Scaling Considerations</h3>
      <p>To ensure the application could handle a large number of users, we implemented:</p>
      <ul>
        <li>Message pagination</li>
        <li>Database indexing</li>
        <li>Connection pooling</li>
        <li>Load balancing</li>
      </ul>
      
      <h3>Challenges and Solutions</h3>
      <p>One of the biggest challenges was handling reconnection scenarios when users lost internet connection. We implemented a robust reconnection strategy that preserved message history and user state.</p>
      
      <h3>Conclusion</h3>
      <p>Building a real-time chat application was a challenging but rewarding experience. The project demonstrated the power of Socket.io for real-time communication and the importance of considering scalability from the beginning.</p>
    `,
    category: "Programming",
    imageUrl: "/images/chat-app.jpg",
    date: "January 5, 2023"
  },
  "ml-algorithms-explained": {
    id: 5,
    title: "Machine Learning Algorithms Explained",
    content: `
      <h2>A deep dive into common ML algorithms for beginners</h2>
      <p>Machine learning is transforming industries and creating new opportunities across the globe. This article provides an introduction to some of the most common machine learning algorithms, explaining how they work and when to use them.</p>
      
      <h3>What is Machine Learning?</h3>
      <p>Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. It focuses on developing computer programs that can access data and use it to learn for themselves.</p>
      
      <h3>Supervised Learning Algorithms</h3>
      <p>Supervised learning algorithms learn from labeled training data to make predictions about new, unseen data.</p>
      
      <h4>Linear Regression</h4>
      <p>Linear regression is used for predicting a continuous value based on one or more input variables. It assumes a linear relationship between the input variables and the output.</p>
      
      <h4>Logistic Regression</h4>
      <p>Despite its name, logistic regression is used for classification problems, not regression. It predicts the probability of an event occurring.</p>
      
      <h4>Decision Trees</h4>
      <p>Decision trees make decisions by splitting data into subsets based on feature values. They are easy to understand and interpret, making them popular for both classification and regression tasks.</p>
      
      <h4>Random Forest</h4>
      <p>Random forest is an ensemble method that combines multiple decision trees to improve accuracy and reduce overfitting.</p>
      
      <h4>Support Vector Machines (SVM)</h4>
      <p>SVM finds the optimal hyperplane that maximally separates the classes in the feature space.</p>
      
      <h3>Unsupervised Learning Algorithms</h3>
      <p>Unsupervised learning algorithms find patterns in unlabeled data without predefined outcomes.</p>
      
      <h4>K-Means Clustering</h4>
      <p>K-means clustering partitions data into K clusters based on similarity. It's widely used for customer segmentation, image compression, and document clustering.</p>
      
      <h4>Hierarchical Clustering</h4>
      <p>Hierarchical clustering creates a tree of clusters, showing the relationships between different groups.</p>
      
      <h4>Principal Component Analysis (PCA)</h4>
      <p>PCA reduces the dimensionality of data by finding the directions of maximum variance.</p>
      
      <h3>Neural Networks</h3>
      <p>Neural networks are inspired by the human brain and consist of layers of interconnected nodes (neurons).</p>
      
      <h4>Convolutional Neural Networks (CNN)</h4>
      <p>CNNs are particularly effective for image recognition tasks, using convolutional layers to detect features in images.</p>
      
      <h4>Recurrent Neural Networks (RNN)</h4>
      <p>RNNs are designed to work with sequential data, making them suitable for tasks like natural language processing and time series analysis.</p>
      
      <h3>Conclusion</h3>
      <p>Understanding these fundamental machine learning algorithms is the first step toward becoming proficient in the field. Each algorithm has its strengths and weaknesses, and the key to success is choosing the right one for your specific problem.</p>
    `,
    category: "AI project",
    imageUrl: "/images/ml-algorithms.jpg",
    date: "December 18, 2022"
  }
};

// This function is required for static site generation with Next.js
export function generateStaticParams() {
  // Return an array of objects with the slug parameter for each blog post
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

// This function receives the params from generateStaticParams
export default function BlogPost({ params }) {
  const { slug } = params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="fixed inset-0 -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <div className="min-h-screen text-white flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-xl mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/Blog" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Back to Blog
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="fixed inset-0 -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="min-h-screen text-white">
        <div className="container mx-auto px-4 py-16">
          <Link href="/Blog" className="inline-flex items-center text-purple-400 mb-8 hover:text-purple-300 transition-colors">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Back to Blog
          </Link>
          
          <article className="bg-gray-800 rounded-xl overflow-hidden shadow-xl">
            <div className="relative h-64 md:h-96">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
            
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-600 text-white rounded-full mr-4">
                  {post.category}
                </span>
                <span className="text-gray-400 text-sm">{post.date}</span>
              </div>
              
              <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
              
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>
        </div>
      </div>
    </>
  );
} 