import React from 'react';
import { Container } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopNav from '../components/TopNav';

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <TopNav />
      <Container maxWidth="lg" sx={{ minHeight: '100vh', padding: '16px' }}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;