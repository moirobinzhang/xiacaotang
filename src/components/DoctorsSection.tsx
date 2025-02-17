import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { t } from '../i18n';
import { Link } from 'react-router-dom';
import { DoctorType } from '../types/Clinic';

const DoctorsSection: React.FC = () => {
  const doctors = t('doctors') as DoctorType[];

  return (
    <Box sx={{ padding: '40px 0', width: '100%' }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        {t('doctorsTitle')}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {doctors.map((doctor: DoctorType, index: number) => (
          <Grid item key={index} xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: '300px', minWidth: '300px' }}> {/* 设置固定宽度 */}
              <CardMedia
                component="img"
                height="200"
                image={doctor.image}
                alt={doctor.name}
              />
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {doctor.name}
                </Typography>
                <Typography variant="subtitle1" component="p" gutterBottom>
                  {doctor.title}
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
                  {doctor.bio}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`/doctor/${doctor.id}`}
                >
                  {t('learnMore')}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DoctorsSection;