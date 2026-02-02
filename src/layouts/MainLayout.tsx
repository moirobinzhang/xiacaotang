import React from 'react';
import { Container, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout: React.FC = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        {location.pathname === '/' ? (
          <>{children}</>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              {children}
            </Grid>
            <Grid item xs={12} md={4}>
              {/* Sidebar content like Business Hours and Social Media */}
            </Grid>
          </Grid>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;