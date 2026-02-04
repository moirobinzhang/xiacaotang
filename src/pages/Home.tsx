import React from 'react';
import { Box } from '@mui/material';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';

const HomePage: React.FC = () => {

  return (
    <Box>
      <Hero />

      <ServicesSection />
    </Box>
  );
};

export default HomePage;