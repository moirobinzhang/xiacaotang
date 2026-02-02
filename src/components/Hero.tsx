import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
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
    carouselImages: rawData.carouselImages.map((image) => ({
      ...image,
      description: image.description,
      alt: image.alt,
    })),
  },
  zh: {
    carouselImages: rawData.carouselImages.map((image) => ({
      ...image,
      description: image.description,
      alt: image.alt,
    })),
  },
};

const Hero: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.substring(0, 2) as keyof DataStructure;
  const carouselImages = data[currentLang]?.carouselImages || [
    { url: '', alt: { en: '', zh: '' }, description: { en: '', zh: '' } },
  ];

  if (!Array.isArray(carouselImages) || carouselImages.length === 0) {
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
              position: 'relative',
            }}
          >
            {/* 文字背景遮罩 */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h3"
                align="center"
                sx={{ color: '#fdfaf5', fontFamily: 'Playfair Display, serif', padding: '0 20px' }}
              >
                {getLocalizedValue(
                  {
                    en: 'Xiacaotang TCM Clinic — Exquisite Skill for Your Well-being.',
                    zh: '夏草堂中医针灸诊所——医术精湛，润泽康宁',
                  },
                  currentLang
                )}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.1)', // 半透明黑色遮罩
                padding: '20px',
                borderRadius: '8px',
              }}
            >
              <Container>
                <Typography variant="h5" component="p" gutterBottom sx={{ color: '#FFF' }}>
                  {getLocalizedValue(item.description, currentLang)?.slice(0, 60) + "..."}
                </Typography>
                <Button
                  style={{ textTransform: 'none' }}
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#4CAF50', color: '#FFF' }}
                >
                  <Link to={"/services/" + item.servicename} style={{ textDecoration: 'none', color: '#FFF' }}>
                    {item.alt[currentLang]}
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