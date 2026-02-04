import React, { useMemo } from 'react';
import { Typography, Box, Avatar, Chip, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import GoldenRatioLayout from '../components/GoldenRatioLayout';
import Sidebar from '../components/Sidebar';
import { getLocalizedValue } from '../i18n';
import data from '../assets/data.json';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DoctorDetail: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { name } = useParams<{ name: string }>();
  const currentLang = i18n.language.substring(0, 2);
  const doctors = data.doctors || [];

  const doctor = useMemo(() => {
    return doctors.find((d: any) => {
      const slug = d.name.en.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
      return slug === name;
    });
  }, [name, doctors]);

  if (!doctor) {
    return <Box sx={{ padding: 4 }}>Doctor not found</Box>;
  }

  // Determine avatar based on index (Hack for Zen theme continuity)
  // In a real app, this should be in data.json
  const index = doctors.indexOf(doctor);
  const avatarSrc = index === 0 ? `${import.meta.env.BASE_URL}images/zen-crane.png` : `${import.meta.env.BASE_URL}images/zen-deer.png`;

  const MainContent = (
    <Box>
      <Button
        component={Link}
        to="/about"
        startIcon={<ArrowBackIcon />}
        sx={{ marginBottom: 2, color: '#5d5d5d' }}
      >
        {t('nav.about')}
      </Button>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, marginBottom: 4 }}>
        <Avatar src={avatarSrc} sx={{ width: 100, height: 100, border: '1px solid #c5a059' }} />
        <Box>
          <Typography variant="h4" sx={{ fontFamily: 'Playfair Display, serif', color: '#1a2f23' }}>
            {getLocalizedValue(doctor.name, currentLang)}
          </Typography>
          {/* Render all titles */}
          {getLocalizedValue(doctor.titles, currentLang).map((title: string, i: number) => (
            <Typography key={i} variant="subtitle1" sx={{ color: '#5d5d5d' }}>
              {title}
            </Typography>
          ))}
        </Box>
      </Box>

      <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', color: '#1a2f23', borderBottom: '1px solid #c5a059', display: 'inline-block', paddingBottom: 1, marginTop: 2 }}>
        {currentLang === 'zh' ? '简介' : 'Biography'}
      </Typography>
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
        {getLocalizedValue(doctor.bio, currentLang)}
      </Typography>

      {getLocalizedValue(doctor.specialties, currentLang).length > 0 && (
        <>
          <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', color: '#1a2f23', borderBottom: '1px solid #c5a059', display: 'inline-block', paddingBottom: 1, marginTop: 4 }}>
            {currentLang === 'zh' ? '擅长治疗' : 'Specialties'}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {getLocalizedValue(doctor.specialties, currentLang).map((spec: string, i: number) => (
              <Chip key={i} label={spec} sx={{ backgroundColor: '#fdfaf5', border: '1px solid #1a2f23', color: '#1a2f23' }} />
            ))}
          </Box>
        </>
      )}
    </Box>
  );

  return <GoldenRatioLayout mainContent={MainContent} sidebarContent={<Sidebar />} />;
};

export default DoctorDetail;