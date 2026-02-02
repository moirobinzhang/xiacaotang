import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Hero />
      <Box sx={{ backgroundColor: '#fdfaf5', padding: '40px 20px' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: '#1a2f23', fontFamily: 'Playfair Display, serif' }}
          >
            {t('home.clinicIntro')}
          </Typography>
        </Container>
      </Box>
      <ServicesSection />
    </Box>
  );
};

export default HomePage;