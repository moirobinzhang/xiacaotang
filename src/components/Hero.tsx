import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getLocalizedValue } from '../i18n';
import rawData from '../assets/data.json';

interface CarouselImage {
  url: string;
  alt: { en: string; zh: string };
  description: { en: string; zh: string };
  servicename?: string;
}

interface DataStructure {
  en: { carouselImages: CarouselImage[] };
  zh: { carouselImages: CarouselImage[] };
}

const data: DataStructure = {
  en: {
    carouselImages: rawData.carouselImages.map((image, index) => ({
      ...image,
      url: `${import.meta.env.BASE_URL}${image.url.startsWith('/') ? image.url.substring(1) : image.url}`,
      description: image.description,
      alt: image.alt,
      servicename: rawData.services[index % rawData.services.length]?.id || 'acupuncture'
    })),
  },
  zh: {
    carouselImages: rawData.carouselImages.map((image, index) => ({
      ...image,
      url: `${import.meta.env.BASE_URL}${image.url.startsWith('/') ? image.url.substring(1) : image.url}`,
      description: image.description,
      alt: image.alt,
      servicename: rawData.services[index % rawData.services.length]?.id || 'acupuncture'
    })),
  },
};

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.substring(0, 2) as keyof DataStructure;
  const carouselImages = data[currentLang]?.carouselImages || [
    { url: '', alt: { en: '', zh: '' }, description: { en: '', zh: '' } },
  ];

  // Preload images for smoothness
  useEffect(() => {
    carouselImages.forEach((image) => {
      const img = new Image();
      img.src = image.url;
    });
  }, [carouselImages]);

  if (!Array.isArray(carouselImages) || carouselImages.length === 0) {
    return null;
  }

  return (
    <Box sx={{ position: 'relative', height: { xs: '45vh', md: '55vh' }, minHeight: { xs: '350px', md: '400px' }, overflow: 'hidden', width: '100%' }}>
      <Carousel
        animation="fade"
        duration={800}
        interval={6000}
        navButtonsAlwaysVisible
        indicatorIconButtonProps={{
          style: {
            color: '#A8C3A2',
            zIndex: 20,
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: '#4CAF50',
            zIndex: 20,
          },
        }}
        navButtonsWrapperProps={{
          style: {
            zIndex: 20,
          }
        }}
      >
        {carouselImages.map((item, index) => (
          <Box
            key={index}
            sx={{
              height: { xs: '45vh', md: '55vh' },
              minHeight: { xs: '350px', md: '400px' },
              width: '100%',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden'
            }}
          >
            <img
              src={item.url}
              alt={item.alt[currentLang]}
              loading="eager"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block'
              }}
            />
          </Box>
        ))}
      </Carousel>

      {/* Hero Content Overlay - Decoupled with high Z-Index */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      >
        <Box sx={{ textAlign: 'center', pointerEvents: 'auto', padding: { xs: '0 40px', md: '0 20px' }, maxWidth: '900px' }}>

          {/* Main Title (Brand Name) */}
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              color: '#fdfaf5',
              fontFamily: '"Montserrat", "Roboto", "Helvetica Neue", sans-serif',
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
              marginBottom: '16px',
              display: { xs: 'none', md: 'block' },
              letterSpacing: '0.02em'
            }}
          >
            {t('brandName')}
          </Typography>

          {/* Mobile Title */}
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              color: '#fdfaf5',
              fontFamily: '"Montserrat", "Roboto", "Helvetica Neue", sans-serif',
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
              marginBottom: '10px',
              display: { xs: 'block', md: 'none' },
              fontSize: '1.5rem',
              letterSpacing: '0.02em'
            }}
          >
            {t('brandName')}
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              color: '#fdfaf5',
              fontFamily: '"Noto Sans SC", "Microsoft YaHei", "PingFang SC", sans-serif',
              fontWeight: 500, // Medium weight as requested
              letterSpacing: '0.05em',
              textShadow: '1px 1px 3px rgba(0,0,0,0.6)',
              marginBottom: { xs: '20px', md: '32px' },
              lineHeight: 1.6,
              fontSize: { xs: '0.95rem', md: '1.5rem' }
            }}
          >
            {getLocalizedValue(
              {
                en: "Exquisite Skill for Your Well-being",
                zh: '医术精湛，润泽康宁',
              },
              currentLang
            )}
          </Typography>

          {/* Button */}
          <Button
            component={Link}
            to="/services"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#4CAF50',
              color: '#FFF',
              textTransform: 'none',
              fontSize: { xs: '0.9rem', md: '1.1rem' },
              padding: { xs: '8px 24px', md: '10px 32px' },
              borderRadius: '4px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
              '&:hover': {
                backgroundColor: '#388E3C',
              },
              fontFamily: '"Montserrat", "Roboto", "Noto Sans SC", sans-serif',
              fontWeight: 500
            }}
          >
            {getLocalizedValue(
              {
                en: "Learn More",
                zh: '了解更多',
              },
              currentLang
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;