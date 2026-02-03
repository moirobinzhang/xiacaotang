import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { t, getLocalizedValue } from '../i18n';
import { useTranslation } from 'react-i18next';
import { Doctor } from '../types/Doctor';
import data from '../assets/data.json';

const DoctorsSection: React.FC = () => {
  const { i18n } = useTranslation();
  const doctorsData = data.doctors as unknown as Doctor[];

  if (!Array.isArray(doctorsData) || doctorsData.length === 0) {
    return null;
  }

  return (
    <Box sx={{ padding: '40px 0', width: '100%' }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        {t('doctorsTitle')}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {doctorsData.map((doctor, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: '300px', minWidth: '300px' }}>
              <CardMedia
                component="img"
                height="200"
                image={`${import.meta.env.BASE_URL}${doctor.image.startsWith('/') ? doctor.image.substring(1) : doctor.image}`}
                alt={getLocalizedValue(doctor.name, i18n.language)}
              />
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {getLocalizedValue(doctor.name, i18n.language)}
                </Typography>
                <Typography variant="subtitle1" component="p" gutterBottom>
                  {(getLocalizedValue(doctor.titles, i18n.language) as string[])[0]}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  gutterBottom
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {getLocalizedValue(doctor.bio, i18n.language)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DoctorsSection;