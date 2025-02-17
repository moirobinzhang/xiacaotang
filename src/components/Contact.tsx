import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { t } from '../i18n';

const Contact: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '20px 0' }}>
      <Container>
        <Typography variant="body1" align="center">
          {t('addresstext')} : {t('address')}
        </Typography>
        <Typography variant="body1" align="center">
          {t('phonetext')} : {t('phone')}
        </Typography>
        <Typography variant="body1" align="center">
          {t('mobiletext')} : {t('mobile')}
        </Typography>
      </Container>
    </Box>
  );
};

export default Contact;