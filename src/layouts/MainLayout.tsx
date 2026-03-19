import React from 'react';
import { Container, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopNav from '../components/TopNav';

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <TopNav />
      <Container maxWidth="lg" component="main" sx={{ flexGrow: 1, padding: '16px', display: 'flex', flexDirection: 'column' }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;