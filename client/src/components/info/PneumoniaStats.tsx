import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const PneumoniaStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-gray-50 rounded-lg p-4 border border-gray-200"
    >
      <div className="flex items-center mb-3">
        <Activity className="h-5 w-5 text-primary-600 mr-2" />
        <h4 className="font-medium text-gray-800">Global Impact</h4>
      </div>
      
      <div className="grid grid-cols-2 gap-3 text-center">
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="bg-white p-3 rounded-md shadow-sm"
        >
          <div className="text-2xl font-bold text-primary-600">2.5M</div>
          <div className="text-xs text-gray-500">Annual Deaths</div>
        </motion.div>
        
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="bg-white p-3 rounded-md shadow-sm"
        >
          <div className="text-2xl font-bold text-primary-600">450M</div>
          <div className="text-xs text-gray-500">Cases Yearly</div>
        </motion.div>
        
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="bg-white p-3 rounded-md shadow-sm"
        >
          <div className="text-2xl font-bold text-primary-600">14%</div>
          <div className="text-xs text-gray-500">Child Deaths</div>
        </motion.div>
        
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="bg-white p-3 rounded-md shadow-sm"
        >
          <div className="text-2xl font-bold text-primary-600">80%</div>
          <div className="text-xs text-gray-500">Treatable Cases</div>
        </motion.div>
      </div>
      
      <p className="text-xs text-gray-500 mt-3 text-center">
        Source: World Health Organization
      </p>
    </motion.div>
  );
};

export default PneumoniaStats;