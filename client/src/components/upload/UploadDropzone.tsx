import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';

interface UploadDropzoneProps {
  onDrop: (acceptedFiles: File[]) => void;
  onFileSelect: (file: File) => void;
}

const UploadDropzone: React.FC<UploadDropzoneProps> = ({ onDrop, onFileSelect }) => {
  const [isDragging, setIsDragging] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        onDrop(Array.from(e.dataTransfer.files));
        e.dataTransfer.clearData();
      }
    },
    [onDrop]
  );

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileSelect(e.target.files[0]);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center
        transition-colors duration-200 ${
          isDragging
            ? 'border-primary-500 bg-primary-50'
            : 'border-gray-300 hover:border-primary-400 bg-gray-50 hover:bg-gray-100'
        }`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{ minHeight: '300px' }}
    >
      <motion.div
        animate={{ scale: isDragging ? 1.05 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="mb-4 bg-primary-100 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center">
          <Upload className="h-8 w-8 text-primary-600" />
        </div>
        <h4 className="text-lg font-medium text-gray-700 mb-2">Upload X-Ray Image</h4>
        <p className="text-gray-500 mb-4 max-w-xs mx-auto">
          Drag and drop your chest X-ray image here, or click to browse files
        </p>
        
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleButtonClick}
          className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
        >
          Browse Files
        </motion.button>
        
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
          className="hidden"
        />
        
        <p className="mt-4 text-xs text-gray-400">
          Supported formats: JPG, PNG, DICOM
        </p>
      </motion.div>
    </motion.div>
  );
};

export default UploadDropzone;