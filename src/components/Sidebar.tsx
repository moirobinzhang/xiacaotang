import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { useTranslation } from 'react-i18next';
import data from '../assets/data.json';

const Sidebar: React.FC = () => {
    const { t } = useTranslation();
    const { clinic } = data;

    const CardStyle = {
        padding: '24px',
        border: '1px solid rgba(26, 47, 35, 0.1)',
        borderRadius: '4px',
        backgroundColor: '#fdfaf5', // Light parchment
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Insurance Info */}
            <Box sx={CardStyle}>
                <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', color: '#1a2f23' }}>
                    {t('insurance.title') || 'Insurance'}
                </Typography>
                <Typography variant="body2" sx={{ color: '#2c2c2c', lineHeight: 1.6 }}>
                    {t('insurance.desc') || 'We accept Corporate Insurance and Car Insurance (ICBC).'}
                </Typography>
            </Box>

            {/* Quick Info */}
            <Box sx={CardStyle}>
                <Typography variant="h6" gutterBottom sx={{
                    fontFamily: 'Playfair Display, serif',
                    color: '#1a2f23',
                    borderBottom: '2px solid #c5a059',
                    display: 'inline-block',
                    paddingBottom: '4px',
                    marginBottom: '16px'
                }}>
                    {t('footer.hoursTitle') || 'Hours'}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 0.5 }}>{t('footer.monday')}: {clinic.fulldayhours}</Typography>
                <Typography variant="body2" sx={{ marginBottom: 0.5 }}>{t('footer.tuesday')}: {clinic.fulldayhours}</Typography>
                <Typography variant="body2" sx={{ marginBottom: 0.5 }}>{t('footer.wednesday')}: {clinic.fulldayhours}</Typography>
                <Typography variant="body2" sx={{ marginBottom: 0.5 }}>{t('footer.thursday')}: {clinic.fulldayhours}</Typography>
                <Typography variant="body2" sx={{ marginBottom: 0.5 }}>{t('footer.friday')}: {clinic.fulldayhours}</Typography>
                <Typography variant="body2" sx={{ marginBottom: 0.5 }}>{t('footer.saturday')}: {clinic.halfdayhours}</Typography>
                <Typography variant="body2" sx={{ marginBottom: 0.5 }}>{t('footer.sunday')}: {clinic.closedhours}</Typography>
            </Box>

            {/* Contact */}
            <Box sx={CardStyle}>
                <Typography variant="h6" gutterBottom sx={{
                    fontFamily: 'Playfair Display, serif',
                    color: '#1a2f23',
                    borderBottom: '2px solid #c5a059',
                    display: 'inline-block',
                    paddingBottom: '4px',
                    marginBottom: '16px'
                }}>
                    {t('footer.addressTitle') || 'Contact'}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, marginBottom: 2 }}>
                    <LocationOnIcon fontSize="small" sx={{ color: '#1a2f23', mt: 0.3 }} />
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                        <Box
                            component="a"
                            href="https://www.google.com/maps/search/?api=1&query=Xia%27s+Herbal+%26+Acupuncture+Health+Centre+Mississauga"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: 'inherit',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                borderBottom: '1px solid transparent',
                                '&:hover': {
                                    color: '#1a2f23',
                                    borderBottom: '1px solid #1a2f23',
                                    opacity: 0.8
                                }
                            }}
                        >
                            {clinic.address}
                        </Box>
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, marginBottom: 1 }}>
                    <PhoneIcon fontSize="small" sx={{ color: '#1a2f23' }} />
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                        <a href={`tel:${clinic.mobile.replace(/-/g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                            {clinic.mobile}
                        </a>
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <PhoneIcon fontSize="small" sx={{ color: '#1a2f23' }} />
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                        <a href={`tel:${clinic.phone.replace(/-/g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                            {clinic.phone}
                        </a>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;
