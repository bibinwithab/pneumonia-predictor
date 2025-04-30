import React from 'react';
import { motion } from 'framer-motion';
import { Settings as Lungs, AlertCircle, BookOpen, Heart, Activity, Users } from 'lucide-react';
import PneumoniaStats from './PneumoniaStats';

const PneumoniaInfo = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-6" id="about">About Pneumonia</h3>
      
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="flex items-start">
            <div className="bg-primary-100 p-2 rounded-lg mr-3">
              <AlertCircle className="h-5 w-5 text-primary-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-1">What is Pneumonia?</h4>
              <p className="text-gray-600 text-sm">
                Pneumonia is an infection that inflames the air sacs in one or both lungs. 
                The air sacs may fill with fluid or pus, causing symptoms such as cough with phlegm, 
                fever, chills, and difficulty breathing.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex items-start">
            <div className="bg-primary-100 p-2 rounded-lg mr-3">
              <Lungs className="h-5 w-5 text-primary-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-1">Symptoms</h4>
              <p className="text-gray-600 text-sm">
                Common symptoms include chest pain when breathing or coughing, fatigue, 
                fever, sweating, shaking chills, shortness of breath, and a cough that may 
                produce phlegm.
              </p>
            </div>
          </div>
        </motion.div>
        
        <PneumoniaStats />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-start">
            <div className="bg-primary-100 p-2 rounded-lg mr-3">
              <Users className="h-5 w-5 text-primary-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-1">Risk Groups</h4>
              <p className="text-gray-600 text-sm">
                Pneumonia can affect anyone, but it's most serious for infants, young children, 
                people older than 65, and people with underlying health problems or weakened 
                immune systems.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex items-start">
            <div className="bg-primary-100 p-2 rounded-lg mr-3">
              <Heart className="h-5 w-5 text-primary-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-1">Prevention</h4>
              <p className="text-gray-600 text-sm">
                Get vaccinated, practice good hygiene by washing hands regularly, avoid smoking, 
                maintain a strong immune system with healthy lifestyle choices, and seek treatment 
                early when respiratory symptoms appear.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 pt-4 border-t border-gray-100"
          id="resources"
        >
          <h4 className="font-medium text-gray-800 mb-3 flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-primary-600" />
            Additional Resources
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://www.who.int/health-topics/pneumonia" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                World Health Organization (WHO)
              </a>
            </li>
            <li>
              <a href="https://www.cdc.gov/pneumonia/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                Centers for Disease Control and Prevention (CDC)
              </a>
            </li>
            <li>
              <a href="https://www.lung.org/lung-health-diseases/lung-disease-lookup/pneumonia" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                American Lung Association
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default PneumoniaInfo;