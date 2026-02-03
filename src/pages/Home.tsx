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
      <Box sx={{
        backgroundColor: 'background.default',
        padding: { xs: '32px 16px', md: '40px 24px' }, // Reduced padding
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
      }}>
        <Container maxWidth="lg">
          <Typography
            variant="h5" // Smaller font size
            align="center"
            sx={{
              color: 'primary.main',
              fontFamily: 'Playfair Display, serif',
              position: 'relative',
              lineHeight: 1.6,
              maxWidth: '900px',
              margin: '0 auto',
            }}
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