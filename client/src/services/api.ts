import axios from 'axios';
import { PredictionResult } from '../components/upload/UploadSection';

const API_URL = 'http://localhost:8000';

export const uploadXRayImage = async (file: File): Promise<PredictionResult> => {
  try {
    const formData = new FormData();
    formData.append('image', file);
    
    const response = await axios.post<PredictionResult>(
      `${API_URL}/predict-pneumonia`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    
    return response.data;
  } catch (error) {
    console.error('Error uploading X-ray image:', error);
    
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Failed to analyze the X-ray image');
    }
    
    throw new Error('Network error: Unable to connect to the analysis service');
  }
};

export const checkApiStatus = async (): Promise<boolean> => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.status === 200;
  } catch (error) {
    console.error('API status check failed:', error);
    return false;
  }
};