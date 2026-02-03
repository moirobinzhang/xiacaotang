import { Box, Typography } from '@mui/material';
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
                <Typography variant="body2" paragraph>{clinic.address}</Typography>
                <Typography variant="body2" paragraph>{t('footer.phone')}: {clinic.phone}</Typography>
            </Box>
        </Box>
    );
};

export default Sidebar;
