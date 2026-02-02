import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import TestimonialsPage from './pages/Testimonials';
import DoctorDetail from './pages/Doctor';
import { getLanguage } from './i18n';


const App: React.FC = () => {

  useEffect(() => {
    // 监听语言变化
    const handleLanguageChange = () => {
      getLanguage();
    };

    window.addEventListener('languageChange', handleLanguageChange);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);


  return (
    <Suspense fallback="Loading...">
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/doctor/:name" element={<DoctorDetail />} />
          </Routes>
        </MainLayout>
      </Router>
    </Suspense>
  );
};

export default App;