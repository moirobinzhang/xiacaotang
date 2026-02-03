import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';

const TopNav: React.FC = () => {
    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <Box sx={{
            backgroundColor: '#f0ebe0', // Slightly darker parchment for contrast
            borderBottom: `1px solid ${theme.palette.secondary.main}`,
            padding: '8px 0',
            textAlign: 'center' // Center align mission text
        }}>
            <Container maxWidth="lg">
                <Typography variant="caption" sx={{ color: '#5d5d5d', fontStyle: 'italic', display: 'block' }}>
                    {t('home.clinicIntro')}
                </Typography>
            </Container>
        </Box>
    );
};

export default TopNav;
