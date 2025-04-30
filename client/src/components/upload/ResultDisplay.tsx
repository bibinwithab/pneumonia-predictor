import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { PredictionResult } from './UploadSection';

interface ResultDisplayProps {
  result: PredictionResult;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  const isPneumonia = result.prediction === 'pneumonia';
  const confidencePercentage = result.confidence;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-lg p-4 ${
        isPneumonia ? 'bg-error-50 border border-error-100' : 'bg-success-50 border border-success-100'
      }`}
    >
      <div className="flex items-start">
        <div className={`rounded-full p-2 ${
          isPneumonia ? 'bg-error-100 text-error-600' : 'bg-success-100 text-success-600'
        }`}>
          {isPneumonia ? (
            <AlertTriangle className="h-6 w-6" />
          ) : (
            <CheckCircle className="h-6 w-6" />
          )}
        </div>
        
        <div className="ml-3">
          <h4 className={`font-bold text-lg ${
            isPneumonia ? 'text-error-600' : 'text-success-600'
          }`}>
            {isPneumonia ? 'Pneumonia Detected' : 'No Pneumonia Detected'}
          </h4>
          
          <p className="text-gray-600 text-sm mt-1">
            {isPneumonia 
              ? 'The analysis indicates signs consistent with pneumonia.' 
              : 'The analysis indicates a normal chest X-ray without signs of pneumonia.'}
          </p>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-700 mb-1">
          <span>Confidence</span>
          <span className="font-medium">{confidencePercentage}%</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${confidencePercentage}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`h-full rounded-full ${
              isPneumonia 
                ? 'bg-error-500' 
                : 'bg-success-500'
            }`}
          ></motion.div>
        </div>
      </div>
      
      <p className="mt-4 text-xs text-gray-500">
        Note: This is an AI-assisted analysis and should not replace professional medical diagnosis.
      </p>
    </motion.div>
  );
};

export default ResultDisplay;