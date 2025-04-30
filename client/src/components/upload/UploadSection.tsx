import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import UploadDropzone from './UploadDropzone';
import ResultDisplay from './ResultDisplay';
import { uploadXRayImage } from '../../services/api';

export interface PredictionResult {
  prediction: string;
  confidence: number;
  timestamp: string;
}

const UploadSection = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<PredictionResult | null>(null);

  const handleFileSelect = (file: File) => {
    setError(null);
    
    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file');
      return;
    }
    
    // Size validation (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size exceeds 10MB limit');
      return;
    }
    
    setSelectedFile(file);
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      handleFileSelect(acceptedFiles[0]);
    }
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setResult(null);
    setError(null);
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const result = await uploadXRayImage(selectedFile);
      setResult(result);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred while analyzing the image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 overflow-hidden">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">X-Ray Analysis</h3>
      
      <AnimatePresence mode="wait">
        {!selectedFile ? (
          <UploadDropzone
            key="dropzone" 
            onDrop={handleDrop} 
            onFileSelect={handleFileSelect}
          />
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="relative">
              <div className="aspect-square max-h-96 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center">
                {previewUrl ? (
                  <img 
                    src={previewUrl} 
                    alt="X-ray preview" 
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <div className="text-gray-400 flex flex-col items-center">
                    <ImageIcon size={48} />
                    <span>Loading preview...</span>
                  </div>
                )}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={clearSelection}
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md text-gray-500 hover:text-red-500"
                aria-label="Remove image"
              >
                <X size={20} />
              </motion.button>
            </div>
            
            <div className="text-sm text-gray-600 flex items-center justify-between">
              <div>
                <span className="font-medium">File:</span> {selectedFile.name}
              </div>
              <div>
                <span className="font-medium">Size:</span> {(selectedFile.size / 1024).toFixed(1)} KB
              </div>
            </div>
            
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-error-600 text-sm bg-error-50 p-3 rounded-lg"
              >
                {error}
              </motion.div>
            )}
            
            {result && <ResultDisplay result={result} />}
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              onClick={handleSubmit}
              className={`w-full py-3 px-4 flex items-center justify-center rounded-lg text-white font-medium transition-colors 
                ${result ? 'bg-accent-600 hover:bg-accent-700' : 'bg-primary-600 hover:bg-primary-700'} 
                ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </>
              ) : result ? (
                'Analyze Again'
              ) : (
                <>
                  <Upload className="mr-2 h-5 w-5" />
                  Analyze X-Ray
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UploadSection;