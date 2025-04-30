import React from 'react';
import { motion } from 'framer-motion';
import { Settings as Lungs } from 'lucide-react';

const Header = () => {
  return (
    <motion.header
      className="bg-white border-b border-gray-200 shadow-sm py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Lungs className="h-8 w-8 text-primary-600" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">PneumoScan</h1>
            <p className="text-xs text-gray-600">AI-Powered Pneumonia Detection</p>
          </div>
        </motion.div>
        
        <motion.nav 
          className="hidden md:flex space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">Home</a>
          <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">About Pneumonia</a>
          <a href="#resources" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">Resources</a>
        </motion.nav>
        
        <motion.button
          className="md:hidden text-gray-700 focus:outline-none"
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;