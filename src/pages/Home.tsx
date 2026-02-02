import React from 'react';
import { Box, Typography } from '@mui/material';
import { t } from '../i18n';
import DoctorsSection from '../components/DoctorsSection';
import ServicesSection from '../components/ServicesSection';

const HomePage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        {t('welcomeMessage')}
      </Typography>
      <ServicesSection />
      <DoctorsSection />
    </Box>
  );
};

export default HomePage;