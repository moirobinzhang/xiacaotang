import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { t } from '../i18n';
import { Doctor } from '../types/Doctor';

const DoctorDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const doctors = t('doctors') as Doctor[];
  const doctor = doctors.find((d: Doctor) => d.id === name);

  if (!doctor) {
    return <Typography variant="h4">Doctor not found</Typography>;
  }

  return (
    <Box sx={{ padding: '40px 0', width: '100%' }}>
      <Container>
        <Grid container spacing={4}>
          {/* 左侧：医生介绍 */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              {doctor.name}
            </Typography>
            <Typography variant="subtitle1" component="p" gutterBottom>
              {doctor.title}
            </Typography>
            <Typography variant="body1" component="p">
              {doctor.fullBio}
            </Typography>
          </Grid>
          {/* 右侧：诊所信息 */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: '20px', backgroundColor: '#f5f5f5', width: '100%' }}>
              <Typography variant="h6" gutterBottom>
                {t('contactTitle')}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>{t('address')}</strong>
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>{t('monday')} - {t('friday')} : {t('fulldayhours')} </strong>
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>{t('saturday')} : {t('halfdayhours')} </strong>
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>{t('sunday')} : {t('closedhours')}</strong>
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>{t('appointment')}</strong>
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>{t('insurance')}</strong>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DoctorDetail;