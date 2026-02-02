import React from 'react';
import { Container } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ minHeight: '100vh', padding: '16px' }}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;