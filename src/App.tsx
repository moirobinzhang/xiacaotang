import React, { Suspense, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { getLanguage } from './i18n';
import CanonicalLink from './components/CanonicalLink';

const HomePage = React.lazy(() => import('./pages/Home'));
const AboutPage = React.lazy(() => import('./pages/About'));
const ServicesPage = React.lazy(() => import('./pages/Services'));
const ServiceDetail = React.lazy(() => import('./pages/ServiceDetail'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const TestimonialsPage = React.lazy(() => import('./pages/Testimonials'));
const DoctorDetail = React.lazy(() => import('./pages/Doctor'));

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
          <CanonicalLink />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
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