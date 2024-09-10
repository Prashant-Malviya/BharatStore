import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-4">

      {/* Introduction Section */}

      <section className="text-center mb-12">
        <motion.h1
          className="text-4xl font-bold mb-4 flex flex-wrap justify-center items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        <p className='bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'>Welcome to </p>  <p className='bg-gradient-to-r from-purple-600 to-amber-400 bg-clip-text text-transparent'>BharatStore</p> 
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          BharatStore is your go-to platform for exploring a wide range of products and managing your shopping experience. Discover, filter, and sort products with ease, and enjoy a seamless shopping journey.
        </motion.p>
      </section>

      {/* Features Section */}

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="flex flex-wrap justify-center gap-8">

          {/* Feature 1 */}

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-full md:w-80"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2">Product Listings</h3>
            <p className="text-gray-600">
              Browse through a comprehensive list of products with detailed descriptions, images, and prices.
            </p>
          </motion.div>

          {/* Feature 2 */}

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-full md:w-80"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2">Filters & Sorting</h3>
            <p className="text-gray-600">
              Apply filters and sorting options to find exactly what you’re looking for in a matter of seconds.
            </p>
          </motion.div>

          {/* Feature 3 */}

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-full md:w-80"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-2">Interactive Forms</h3>
            <p className="text-gray-600">
              Use our interactive forms to manage your information, preferences, and more with ease.
            </p>
            <Link to="/step-form">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            Go to Form
          </button>
        </Link>
          </motion.div>

          {/* Feature 4 */}

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-full md:w-80"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h3 className="text-xl font-semibold mb-2">Read Posts</h3>
            <p className="text-gray-600">
              Explore our latest posts and articles for more insights and updates.
            </p>
            <Link to="/posts">
              <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 transition-colors">
                Read Posts
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Technologies Used</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-full md:w-80"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2">React</h3>
            <p className="text-gray-600">A JavaScript library for building user interfaces.</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-full md:w-80"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
            <p className="text-gray-600">A utility-first CSS framework for rapid UI development.</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-full md:w-80"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-2">Redux Toolkit</h3>
            <p className="text-gray-600">A toolset for efficient Redux development.</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}

      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Explore Now</h2>
        <p className="text-lg text-gray-700 mb-4">
          Ready to explore BharatStore? Click below to start browsing products and enjoy our features!
        </p>
        <Link to="/ecommerce">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            Go to Ecommerce
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
