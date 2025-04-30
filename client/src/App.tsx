import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import MainSection from './components/MainSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AnimatePresence>
        <Header />
        <MainSection />
        <Footer />
      </AnimatePresence>
    </div>
  );
}

export default App;