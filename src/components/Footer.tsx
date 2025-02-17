import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { t } from '../i18n';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#A8C3A2', color: '#333', padding: '20px 0', width: '100%' }}>
      <Container>
        <Typography variant="body1" align="center" gutterBottom>
          <strong>{t('monday')} - {t('friday')} : {t('fulldayhours')} </strong>
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          <strong>{t('saturday')} : {t('halfdayhours')} </strong>
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          <strong>{t('sunday')} : {t('closedhours')}</strong>
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          <strong>{t('appointment')}</strong>
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          <strong>{t('insurance')}</strong>
        </Typography>
        <Typography variant="body1" align="center">
          {t('copyright')} {(new Date().getFullYear())} {t('name')}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;