import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import DoctorsSection from './components/DoctorsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DoctorDetail from './pages/Doctor';
import { getLanguage } from './i18n';


const App: React.FC = () => {

  const [language, setLanguage] = useState(getLanguage());

  useEffect(() => {
    // 监听语言变化
    const handleLanguageChange = () => {
      setLanguage(getLanguage());
    };

    window.addEventListener('languageChange', handleLanguageChange);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ServicesSection />
              <DoctorsSection />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/doctor/:name" element={<DoctorDetail />} />
      </Routes>
    </Router>
  );
};

export default App;