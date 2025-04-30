import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      className="mt-auto bg-gray-900 text-white py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-5">
          <div>
            <h3 className="text-lg font-semibold mb-4">PneumoScan</h3>
            <p className="text-gray-400 text-sm">
              An AI-powered tool to help detect pneumonia from chest X-rays.
              This is for educational purposes only and should not replace professional medical advice.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="hover:text-primary-400 transition-colors duration-200">About Pneumonia</a></li>
              <li><a href="#resources" className="hover:text-primary-400 transition-colors duration-200">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
            <p className="text-gray-400 text-sm">
              This tool is not a substitute for professional medical advice, diagnosis, or treatment.
              Always seek the advice of your physician or other qualified health provider with any questions.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;