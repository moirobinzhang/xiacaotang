import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Box, List, ListItem, ListItemIcon, ListItemText, Divider, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CircleIcon from '@mui/icons-material/Circle';
import data from '../assets/data.json';
import GoldenRatioLayout from '../components/GoldenRatioLayout';
import Sidebar from '../components/Sidebar';

const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { t, i18n } = useTranslation();
    const theme = useTheme();
    const navigate = useNavigate();
    const [service, setService] = useState<any>(null);

    const isZh = i18n.language === 'zh';

    useEffect(() => {
        if (id) {
            const foundService = data.services.find((s: any) => s.id === id);
            setService(foundService);
        }
    }, [id]);

    if (!service) {
        return (
            <GoldenRatioLayout
                mainContent={
                    <Box sx={{ padding: '40px', textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', color: theme.palette.text.secondary }}>
                            Service not found.
                        </Typography>
                        <Button
                            startIcon={<ArrowBackIcon />}
                            onClick={() => navigate('/services')}
                            sx={{ marginTop: 2, color: theme.palette.primary.main }}
                        >
                            Back to Services
                        </Button>
                    </Box>
                }
                sidebarContent={<Sidebar />}
            />
        );
    }

    const mainContent = (
        <Box sx={{ marginBottom: 4 }}>
            <Button
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate('/services')}
                sx={{
                    marginBottom: 2,
                    color: theme.palette.text.secondary,
                    '&:hover': { backgroundColor: 'transparent', color: theme.palette.primary.main }
                }}
            >
                {t('nav.services') || 'Services'}
            </Button>

            <Typography variant="h3" component="h1" gutterBottom sx={{
                fontFamily: 'Playfair Display, serif',
                color: theme.palette.primary.main,
                borderBottom: `1px solid ${theme.palette.secondary.main}`,
                paddingBottom: 2,
                marginBottom: 3
            }}>
                {isZh ? service.title.zh : service.title.en}
            </Typography>

            {/* Hero Image */}
            {service.image && (
                <Box component="img" src={service.image} alt={isZh ? service.title.zh : service.title.en} sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'cover',
                    borderRadius: '4px', // Slight rounding
                    marginBottom: 4,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                }} />
            )}

            {/* Full Description */}
            <Typography variant="body1" paragraph sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: theme.palette.text.primary,
                marginBottom: 4
            }}>
                {isZh ? service.fullDescription.zh : service.fullDescription.en}
            </Typography>

            {/* Benefits Section - Zen Card Style */}
            <Box sx={{
                backgroundColor: '#fdfaf5', // Light parchment
                border: `1px solid rgba(26, 47, 35, 0.1)`, // Subtle ink border
                padding: 4,
                marginTop: 4
            }}>
                <Typography variant="h5" gutterBottom sx={{
                    fontFamily: 'Playfair Display, serif',
                    color: theme.palette.primary.main,
                    marginBottom: 2
                }}>
                    {isZh ? '主要益处' : 'Key Benefits'}
                </Typography>
                <Divider sx={{ opacity: 0.2, marginBottom: 2, borderColor: theme.palette.primary.main }} />
                <List>
                    {(isZh ? service.benefits.zh : service.benefits.en).map((benefit: string, index: number) => (
                        <ListItem key={index} sx={{ paddingLeft: 0 }}>
                            <ListItemIcon sx={{ minWidth: '32px' }}>
                                <CircleIcon sx={{ fontSize: '8px', color: theme.palette.secondary.main }} />
                            </ListItemIcon>
                            <ListItemText
                                primary={benefit}
                                primaryTypographyProps={{
                                    sx: { fontSize: '1.05rem', color: theme.palette.text.primary }
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );

    return (
        <GoldenRatioLayout
            mainContent={mainContent}
            sidebarContent={<Sidebar />}
        />
    );
};

export default ServiceDetail;
