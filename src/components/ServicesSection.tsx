import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getLocalizedValue } from '../utils/i18nHelper';
import data from '../assets/data.json';

interface Service {
  title: { en: string; zh: string };
  description: { en: string; zh: string };
}

interface DataStructure {
  services: Service[];
  clinic?: { services: Service[] };
}

const ServicesSection: React.FC = () => {
  const { i18n } = useTranslation();
  const servicesData = data as unknown as DataStructure;
  const services = servicesData.services || servicesData.clinic?.services || [];

  const currentLang = i18n.language.substring(0, 2);

  return (
    <Box sx={{ padding: '40px 0' }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ color: '#1a2f23', fontFamily: 'Playfair Display, serif' }}
      >
        {getLocalizedValue({ en: 'Our Services', zh: '服务项目' }, currentLang)}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service: Service, index: number) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: '#1a2f23', fontFamily: 'Playfair Display, serif' }}
                >
                  {getLocalizedValue(service.title, currentLang)}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '16px' }}>
                  {getLocalizedValue(service.description, currentLang)}
                </Typography>
              </CardContent>
              <Box sx={{ padding: '16px' }}>
                <Button
                  variant="contained"
                  component={Link}
                  to={`/services#${index}`}
                  sx={{ backgroundColor: '#1a2f23', color: '#fdfaf5' }}
                >
                  {getLocalizedValue({ en: 'Learn More', zh: '了解更多' }, currentLang)}
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;