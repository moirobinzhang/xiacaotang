import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';
import { t } from '../i18n';
import { Image } from "../types/Image";


const Hero: React.FC = () => {

  const carouselImages = t('carouselImages') as Image[];

  if (carouselImages == null || carouselImages.length == 0) {
    return null;
  }

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
        {carouselImages.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundImage: `url(${item.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              width: '100%',
            }}
          >
            {/* 文字背景遮罩 */}
            <Box
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.1)', // 半透明黑色遮罩
                padding: '20px',
                borderRadius: '8px',
              }}
            >
              <Container>
                <Typography variant="h5" component="p" gutterBottom sx={{ color: '#FFF' }}>
                  {item.description.slice(0, 60) + "..."}
                </Typography>
                <Button
                  style={{ textTransform: 'none' }}
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#4CAF50', color: '#FFF' }}
                >
                  <Link to={"/services/" + item.servicename} style={{ textDecoration: 'none', color: '#FFF' }}>
                    {item.alt}
                  </Link>
                </Button>
              </Container>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;