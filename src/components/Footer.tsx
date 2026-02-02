import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getLocalizedValue } from '../utils/i18nHelper';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.substring(0, 2);
  const clinicData = {
    address: {
      en: '123 TCM Street, Mississauga, Ontario',
      zh: '中医街123号, 密西沙加, 安大略省',
    },
    email: 'contact@yourclinic.com', // Replace with dynamic email
  };

  return (
    <Box sx={{ backgroundColor: '#1a2f23', color: '#f7f3e8', padding: '40px 0' }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ color: '#f7f3e8 !important' }}>
            {t('footer.addressTitle')}
          </Typography>
          <Typography variant="body2" sx={{ color: '#f7f3e8 !important' }}>
            {getLocalizedValue(clinicData.address, currentLang)}
          </Typography>
          <Typography variant="body2" sx={{ color: '#f7f3e8 !important' }}>
            {t('footer.phone')}
          </Typography>
          <Typography variant="body2" sx={{ color: '#f7f3e8 !important' }}>
            {t('footer.email')}: {clinicData.email}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ color: '#f7f3e8 !important' }}>
            {t('footer.quickLinksTitle')}
          </Typography>
          <Link href="/about" color="inherit" underline="hover" sx={{ color: '#f7f3e8 !important' }}>
            {t('footer.quickLinkAbout')}
          </Link>
          <br />
          <Link href="/services" color="inherit" underline="hover" sx={{ color: '#f7f3e8 !important' }}>
            {t('footer.quickLinkServices')}
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body2" align="center" sx={{ color: '#f7f3e8 !important' }}>
            {t('footer.copyright')}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;