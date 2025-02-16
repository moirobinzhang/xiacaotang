import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { t } from '../i18n';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#A8C3A2', color: '#333', padding: '20px 0', width: '100%' }}>
      <Container>
        <Typography variant="body1" align="center" gutterBottom>
          <strong>{t('address')}</strong>
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          <strong>{t('hours')}</strong>
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          <strong>{t('insurance')}</strong>
        </Typography>
        <Typography variant="body1" align="center">
          {t('footerText')}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;