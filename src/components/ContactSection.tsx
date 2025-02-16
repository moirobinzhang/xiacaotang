import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const ContactSection: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '40px 0' }}>
      <Container>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          联系我们
        </Typography>
        <Typography variant="body1" align="center">
          地址: 123 中医街, 城市, 国家
        </Typography>
        <Typography variant="body1" align="center">
          电话: +123 456 7890
        </Typography>
        <Typography variant="body1" align="center">
          邮箱: info@tcmclinic.com
        </Typography>
      </Container>
    </Box>
  );
};

export default ContactSection;