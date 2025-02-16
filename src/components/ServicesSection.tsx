import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { t } from '../i18n';

const ServicesSection: React.FC = () => {
  const services = t('services');

  return (
    <Box sx={{ padding: '40px 0' }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        {t('servicesTitle')}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service: any, index: number) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1" component="p">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;