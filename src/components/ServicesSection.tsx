import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { getLocalizedValue } from '../utils/i18nHelper';
import { t } from '../i18n';
import { Service } from '../types/Service';

const ServicesSection: React.FC = () => {
  const services = t('services') as Service[];
  const lang = t('lang');

  return (
    <Box sx={{ padding: '40px 0' }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        {getLocalizedValue(t('servicesTitle'), lang)}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {getLocalizedValue(service.title, lang)}
                </Typography>
                <Typography variant="body1" component="p">
                  {getLocalizedValue(service.description, lang)}
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