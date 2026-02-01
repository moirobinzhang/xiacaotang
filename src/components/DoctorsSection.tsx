import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { t } from '../i18n';
import { Doctor } from '../types/Doctor';

const DoctorsSection: React.FC = () => {
  const doctors = t('doctors') as Doctor[];

  return (
    <Box sx={{ padding: '40px 0', width: '100%' }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        {t('doctorsTitle')}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {doctors.map((doctor, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: '300px', minWidth: '300px' }}>
              <CardMedia
                component="img"
                height="200"
                image={doctor.image}
                alt={doctor.name.en}
              />
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {doctor.name.en}
                </Typography>
                <Typography variant="subtitle1" component="p" gutterBottom>
                  {doctor.title.en}
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
                  {doctor.bio.en}
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