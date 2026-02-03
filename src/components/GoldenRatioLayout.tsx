import React, { ReactNode } from 'react';
import { Box, Container, Grid } from '@mui/material';

interface GoldenRatioLayoutProps {
    mainContent: ReactNode;
    sidebarContent: ReactNode;
}

const GoldenRatioLayout: React.FC<GoldenRatioLayoutProps> = ({ mainContent, sidebarContent }) => {
    return (
        <Box sx={{ backgroundColor: 'background.default', minHeight: '80vh', padding: '40px 0' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Main Content (Left/Top) - approx 66% */}
                    <Grid item xs={12} md={8}>
                        <Box>
                            {mainContent}
                        </Box>
                    </Grid>

                    {/* Sidebar (Right/Bottom) - approx 33% */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ position: { md: 'sticky' }, top: '20px' }}>
                            {sidebarContent}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default GoldenRatioLayout;
