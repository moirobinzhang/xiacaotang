import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { t } from '../i18n';

const carouselItems = [
  {
    image: '/images/hero-bg.jpg', // 替换为竹子相关的图片
    alt: 'Image 1',
  },
  {
    image: '/images/slide_tcm.jpg', // 替换为竹子相关的图片
    alt: 'Image 2',
  },
  {
    image: '/images/hero-bg1.jpg', // 替换为竹子相关的图片
    alt: 'Image 3',
  },
];

const HeroSection: React.FC = () => {
  return (
    <Box sx={{ position: 'relative', height: '400px', overflow: 'hidden', width: '100%' }}>
      <Carousel
        animation="fade"
        interval={5000}
        navButtonsAlwaysVisible
        indicatorIconButtonProps={{
          style: {
            color: '#A8C3A2', // 竹子淡绿色
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: '#4CAF50', // 强调绿色
          },
        }}
      >
        {carouselItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#333', // 深灰色文字
              textAlign: 'center',
              width: '100%',
            }}
          >
            <Container>
              <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#333' }}>
                {t('welcome')}
              </Typography>
              <Typography variant="h5" component="p" gutterBottom sx={{ color: '#333' }}>
                {t('description')}
              </Typography>
              <Button variant="contained" size="large" sx={{ backgroundColor: '#4CAF50', color: '#FFF' }}>
                {t('learnMore')}
              </Button>
            </Container>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default HeroSection;