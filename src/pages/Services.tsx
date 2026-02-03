import React from 'react';
import { Typography, Box, Grid, Card, CardContent, CardActionArea, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import GoldenRatioLayout from '../components/GoldenRatioLayout';
import Sidebar from '../components/Sidebar';
import data from '../assets/data.json';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SpaIcon from '@mui/icons-material/Spa';

const ServicesPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();

  const isZh = i18n.language === 'zh';

  const mainContent = (
    <Box sx={{ marginBottom: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{
        fontFamily: 'Playfair Display, serif',
        color: theme.palette.primary.main,
        marginBottom: 4,
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
        paddingBottom: 2
      }}>
        {t('nav.services')}
      </Typography>

      <Grid container spacing={4}>
        {data.services.map((service, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{
              backgroundColor: 'transparent',
              boxShadow: 'none',
              border: `1px solid rgba(26, 47, 35, 0.1)`,
              transition: 'transform 0.2s, background-color 0.2s',
              '&:hover': {
                transform: 'translateY(-2px)',
                backgroundColor: 'rgba(255, 255, 255, 0.4)'
              }
            }}>
              <CardActionArea onClick={() => navigate(`/services/${service.id}`)} sx={{ padding: 2 }}>
                <CardContent sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                  {/* Icon / Image Placeholder */}
                  <Box sx={{
                    minWidth: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(197, 160, 89, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <SpaIcon sx={{ fontSize: 32, color: theme.palette.secondary.main }} />
                  </Box>

                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="div" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', color: theme.palette.text.primary }}>
                      {isZh ? service.title.zh : service.title.en}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {isZh ? service.description.zh : service.description.en}
                    </Typography>
                    <Button
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        color: theme.palette.primary.main,
                        padding: 0,
                        textTransform: 'none',
                        fontSize: '1rem',
                        '&:hover': { backgroundColor: 'transparent', textDecoration: 'underline' }
                      }}
                    >
                      {isZh ? '了解更多' : 'Learn More'}
                    </Button>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <GoldenRatioLayout
      mainContent={mainContent}
      sidebarContent={<Sidebar />}
    />
  );
};

export default ServicesPage;