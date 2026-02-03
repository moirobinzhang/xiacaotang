import React from 'react';
import { Box, Typography, Grid, Link, useTheme, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import data from '../assets/data.json';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { clinic } = data;

  return (
    <Box sx={{
      backgroundColor: theme.palette.background.default, // Parchment background
      color: theme.palette.text.primary, // Ink text
      padding: '64px 0 32px',
      borderTop: `1px solid ${theme.palette.secondary.main}`, // Subtle Gold line
    }}>
      <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 'lg', margin: '0 auto', padding: '0 24px' }}>
        <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="h6" gutterBottom sx={{
            fontFamily: 'Playfair Display, serif',
            color: theme.palette.primary.main,
            borderBottom: `2px solid ${theme.palette.secondary.main}`,
            display: 'inline-block',
            paddingBottom: '4px',
            marginBottom: '16px'
          }}>
            {t('footer.addressTitle') || 'Location'}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1, color: 'inherit' }}>
            {clinic.name}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1, color: 'inherit' }}>
            {clinic.address}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1, color: 'inherit' }}>
            {t('footer.phone')}: {clinic.phone}
          </Typography>
          <Typography variant="body2" sx={{ color: 'inherit', display: 'none' }}>
            {t('footer.email')}: {clinic.email}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="h6" gutterBottom sx={{
            fontFamily: 'Playfair Display, serif',
            color: theme.palette.primary.main,
            borderBottom: `2px solid ${theme.palette.secondary.main}`,
            display: 'inline-block',
            paddingBottom: '4px',
            marginBottom: '16px'
          }}>
            {t('footer.quickLinksTitle') || 'Quick Links'}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: { xs: 'center', sm: 'flex-start' } }}>
            <Link href="/about" color="inherit" underline="hover" sx={{ transition: 'color 0.2s', '&:hover': { color: theme.palette.secondary.main } }}>
              {t('nav.about')}
            </Link>
            <Link href="/services" color="inherit" underline="hover" sx={{ transition: 'color 0.2s', '&:hover': { color: theme.palette.secondary.main } }}>
              {t('nav.services')}
            </Link>
            <Link href="/contact" color="inherit" underline="hover" sx={{ transition: 'color 0.2s', '&:hover': { color: theme.palette.secondary.main } }}>
              {t('nav.contact')}
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="h6" gutterBottom sx={{
            fontFamily: 'Playfair Display, serif',
            color: theme.palette.primary.main,
            borderBottom: `2px solid ${theme.palette.secondary.main}`,
            display: 'inline-block',
            paddingBottom: '4px',
            marginBottom: '16px'
          }}>
            {t('footer.hoursTitle') || 'Hours'}
          </Typography>
          <Typography variant="body2" sx={{ color: 'inherit', marginBottom: 0.5 }}>
            {t('footer.monday') || 'Mon'}: {clinic.fulldayhours}
          </Typography>
          <Typography variant="body2" sx={{ color: 'inherit', marginBottom: 0.5 }}>
            {t('footer.tuesday') || 'Tue'}: {clinic.fulldayhours}
          </Typography>
          <Typography variant="body2" sx={{ color: 'inherit', marginBottom: 0.5 }}>
            {t('footer.wednesday') || 'Wed'}: {clinic.fulldayhours}
          </Typography>
          <Typography variant="body2" sx={{ color: 'inherit', marginBottom: 0.5 }}>
            {t('footer.thursday') || 'Thu'}: {clinic.fulldayhours}
          </Typography>
          <Typography variant="body2" sx={{ color: 'inherit', marginBottom: 0.5 }}>
            {t('footer.friday') || 'Fri'}: {clinic.fulldayhours}
          </Typography>
          <Typography variant="body2" sx={{ color: 'inherit', marginBottom: 0.5 }}>
            {t('footer.saturday') || 'Sat'}: {clinic.halfdayhours}
          </Typography>
          <Typography variant="body2" sx={{ color: 'inherit', marginBottom: 0.5 }}>
            {t('footer.sunday') || 'Sun'}: {clinic.closedhours}
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ margin: '32px auto', maxWidth: 'lg', opacity: 0.3, borderColor: theme.palette.primary.main }} />

      <Typography variant="body2" align="center" sx={{ color: 'rgba(44, 44, 44, 0.6)', fontFamily: 'Playfair Display, serif' }}>
        {t('footer.copyright')}
      </Typography>
    </Box>
  );
};

export default Footer;