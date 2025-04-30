import React from 'react';
import { motion } from 'framer-motion';
import UploadSection from './upload/UploadSection';
import PneumoniaInfo from './info/PneumoniaInfo';

const MainSection = () => {
  return (
    <main className="flex-grow">
      <motion.section
        className="container mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="text-center mb-12">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Pneumonia Detection from X-Ray Images
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Upload a chest X-ray image and our AI will analyze it to detect signs of pneumonia.
            Get instant results with confidence scores.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div 
            className="lg:col-span-7"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <UploadSection />
          </motion.div>
          
          <motion.div 
            className="lg:col-span-5"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <PneumoniaInfo />
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default MainSection;