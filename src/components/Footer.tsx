import React from 'react';
import { Box, Grid, Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// Icons removed per request
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import data from '../assets/data.json';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { clinic } = data;
  const location = useLocation();
  const isHome = location.pathname === '/';

  if (!isHome) {
    return (
      <Box sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: '16px 0',
        borderTop: `1px solid ${theme.palette.secondary.main}`,
      }}>
        <Typography variant="body2" align="center" sx={{ color: 'rgba(44, 44, 44, 0.6)', fontFamily: 'Playfair Display, serif' }}>
          {t('footer.copyright')}
        </Typography>
      </Box>
    );
  }

  return (
    <Box className="footer-section" sx={{
      backgroundColor: theme.palette.background.default, // Parchment background
      color: theme.palette.text.primary, // Ink text
      padding: '0px 0 10px !important', // Zero padding top, small padding bottom
      marginTop: '0px !important',
      width: '100%',
      overflow: 'hidden', // Prevent container overflow
      borderTop: `1px solid ${theme.palette.secondary.main}`, // Subtle Gold line
    }}>
      <Grid container columnSpacing={8} rowSpacing={{ xs: 4, sm: 0 }} justifyContent="center" alignItems="flex-start" sx={{ maxWidth: '1000px', margin: '0 auto', padding: '24px 24px 0', width: '100%' }}>

        <Grid item xs={12} sm={5} sx={{
          display: 'block',
          textAlign: { xs: 'center', sm: 'left' },
          paddingLeft: { xs: '0 !important', sm: 'inherit' },
          marginLeft: { xs: '0 !important', sm: 'inherit' }
        }}>
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
          <Box sx={{ display: 'block', width: '100%', maxWidth: '100% !important' }}>
            <Typography variant="body1" sx={{
              color: 'inherit',
              fontWeight: 500,
              whiteSpace: 'normal !important',
              wordBreak: 'break-word !important',
              overflowWrap: 'break-word !important',
              maxWidth: '100% !important',
              width: '100%',
              fontSize: { xs: '1rem', sm: '1rem' },
              lineHeight: 1.4,
              display: 'block !important',
              marginBottom: '12px',
              textAlign: { xs: 'center', sm: 'left' }
            }}>
              {t('brandName')}
            </Typography>

            <Box sx={{
              display: 'block',
              width: '100%',
              maxWidth: '100% !important',
              textAlign: { xs: 'center', sm: 'left' },
              marginBottom: '8px'
            }}>
              <Typography variant="body2" sx={{
                lineHeight: 1.6,
                whiteSpace: 'normal !important',
                wordBreak: 'break-word !important',
                overflowWrap: 'break-word !important',
                textAlign: { xs: 'center', sm: 'left' },
                display: 'block'
              }}>
                <a
                  href="https://maps.google.com/?q=1675%20The%20Chase%20%2324b,%20Mississauga,%20ON%20L5M%205Y7"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {clinic.address}
                </a>
              </Typography>
            </Box>

            <Box sx={{
              display: 'block',
              width: '100% !important',
              maxWidth: '100% !important',
              textAlign: { xs: 'center', sm: 'left' },
              marginBottom: '8px'
            }}>
              <Typography variant="body2" sx={{ lineHeight: 1.6, display: 'block', textAlign: { xs: 'center', sm: 'left' } }}>
                <a href={`tel:${clinic.mobile.replace(/-/g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {clinic.mobile}
                </a>
              </Typography>
            </Box>

            <Box sx={{
              display: 'block',
              width: '100% !important',
              maxWidth: '100% !important',
              textAlign: { xs: 'center', sm: 'left' },
              marginBottom: '8px'
            }}>
              <Typography variant="body2" sx={{ lineHeight: 1.6, display: 'block', textAlign: { xs: 'center', sm: 'left' } }}>
                <a href={`tel:${clinic.phone.replace(/-/g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {clinic.phone}
                </a>
              </Typography>
            </Box>

            <Box sx={{ display: 'none' }}>
              <Typography variant="body2">{clinic.email}</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={5} sx={{
          display: 'block',
          textAlign: { xs: 'center', sm: 'left' },
          paddingLeft: { xs: '0 !important', sm: 'inherit' },
          marginLeft: { xs: '0 !important', sm: 'inherit' }
        }}>
          <Box sx={{ display: 'block', width: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{
              fontFamily: 'Playfair Display, serif',
              color: theme.palette.primary.main,
              borderBottom: `2px solid ${theme.palette.secondary.main}`,
              display: 'inline-block',
              paddingBottom: '4px',
              marginBottom: '16px'
            }}>
              {t('footer.hours.title')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'inherit', marginBottom: 0.5, lineHeight: 1.6, display: 'block' }}>
              {t('footer.hours.monFri')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'inherit', marginBottom: 0.5, lineHeight: 1.6, display: 'block' }}>
              {t('footer.hours.sat')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'inherit', marginBottom: 1.5, lineHeight: 1.6, display: 'block' }}>
              {t('footer.hours.sun')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'inherit', fontStyle: 'italic', opacity: 0.9, display: 'block' }}>
              {t('footer.hours.appointment')}
            </Typography>
          </Box>
        </Grid>

      </Grid>

      <Divider sx={{ margin: '10px auto', maxWidth: 'lg', opacity: 0.3, borderColor: theme.palette.primary.main }} />

      <Typography variant="body2" align="center" sx={{ color: 'rgba(44, 44, 44, 0.6)', fontFamily: 'Playfair Display, serif' }}>
        {t('footer.copyright')}
      </Typography>
    </Box>
  );
};

export default Footer;