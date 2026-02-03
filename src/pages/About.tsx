import React from 'react';
import { Typography, Box, Avatar, Grid, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import GoldenRatioLayout from '../components/GoldenRatioLayout';
import Sidebar from '../components/Sidebar';
import { getLocalizedValue } from '../i18n';
import data from '../assets/data.json';

const AboutUs: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.substring(0, 2);
  const doctors = data.doctors || [];

  // Manual mapping of avatars to doctors for Zen aesthetic
  const getAvatar = (index: number) => {
    return index === 0 ? '/images/zen-crane.png' : '/images/zen-deer.png';
  };

  const toSlug = (name: string) => {
    return name.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
  };

  const MainContent = (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', color: '#1a2f23', borderBottom: '1px solid #c5a059', paddingBottom: '16px' }}>
        {t('nav.about')}
      </Typography>

      {/* Mission */}
      <Typography variant="h6" paragraph sx={{ fontStyle: 'italic', color: '#5d5d5d', marginBottom: '32px' }}>
        {t('about.mission')}
      </Typography>

      {/* Doctor List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {doctors.map((doctor: any, index: number) => (
          <Box key={index} sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 3,
            alignItems: 'center',
            padding: '24px',
            border: '1px solid rgba(26, 47, 35, 0.05)',
            borderRadius: '4px',
            backgroundColor: '#fdfaf5',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: '#1a2f23',
              transform: 'translateY(-2px)'
            }
          }}>
            <Avatar
              src={getAvatar(index)}
              alt="Zen Avatar"
              sx={{ width: 120, height: 120, border: '1px solid #c5a059', backgroundColor: 'transparent' }}
              component={Link}
              to={`/doctor/${toSlug(doctor.name.en)}`}
              style={{ textDecoration: 'none' }}
            />
            <Box sx={{ flex: 1, textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography
                variant="h5"
                component={Link}
                to={`/doctor/${toSlug(doctor.name.en)}`}
                sx={{
                  fontFamily: 'Playfair Display, serif',
                  color: '#1a2f23',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline', color: '#c5a059' }
                }}
              >
                {getLocalizedValue(doctor.name, currentLang)}
              </Typography>
              <Typography variant="body2" sx={{ color: '#5d5d5d', marginTop: '8px', marginBottom: '16px' }}>
                {getLocalizedValue(doctor.titles, currentLang)[0]}
              </Typography>
              <Typography variant="body1" sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
              }}>
                {getLocalizedValue(doctor.bio, currentLang)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );

  return <GoldenRatioLayout mainContent={MainContent} sidebarContent={<Sidebar />} />;
};

export default AboutUs;