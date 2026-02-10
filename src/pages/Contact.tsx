import React from 'react';
import { Typography, Box, Button, Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import GoldenRatioLayout from '../components/GoldenRatioLayout';
import Sidebar from '../components/Sidebar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalParkingIcon from '@mui/icons-material/LocalParking';

// Fix for default marker icon issues in React Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const position: [number, number] = [43.56519, -79.7009841];
  const clinicName = "夏草堂 XIA‘s TCM";
  const address = "1675 The Chase #24b, Mississauga, ON L5M 5Y7";
  const phone = "+1 905-848-1552";

  const mainContent = (
    <Box sx={{ marginBottom: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{
        fontFamily: 'Playfair Display, serif',
        color: theme.palette.primary.main,
        marginBottom: 4,
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
        paddingBottom: 2
      }}>
        {t('nav.contact') || 'Contact Us'}
      </Typography>

      {/* Map Section */}
      <Paper elevation={0} sx={{
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: '4px',
        overflow: 'hidden',
        marginBottom: 4,
        height: '400px'
      }}>
        <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <Marker position={position}>
            <Popup>
              <strong style={{ fontFamily: 'Playfair Display, serif' }}>{clinicName}</strong><br />
              Professional TCM & Acupuncture
            </Popup>
          </Marker>
        </MapContainer>
      </Paper>

      {/* Contact Info Section */}
      <Box sx={{
        backgroundColor: '#fdfaf5',
        border: `1px solid rgba(26, 47, 35, 0.1)`,
        padding: 4,
        borderRadius: '4px'
      }}>
        <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', color: theme.palette.text.primary, marginBottom: 3 }}>
          {t('footer.addressTitle') || 'Location & Contact'}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: 2 }}>
              <LocationOnIcon sx={{ color: theme.palette.secondary.main, marginRight: 2, marginTop: '4px' }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                  {t('footer.addressTitle') || 'Address'}
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
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
                        color: theme.palette.primary.main,
                        borderBottom: `1px solid ${theme.palette.primary.main}`,
                        opacity: 0.8
                      }
                    }}
                  >
                    {address}
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: 2 }}>
              <PhoneIcon sx={{ color: theme.palette.secondary.main, marginRight: 2, marginTop: '4px' }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                  {t('footer.phone') || 'Phone'}
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                  {phone}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: 2 }}>
              <LocalParkingIcon sx={{ color: theme.palette.secondary.main, marginRight: 2, marginTop: '4px' }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                  {t('contact.parking')}
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                  {t('contact.parkingDetail')}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: 3 }}>
          <Button
            variant="outlined"
            color="primary"
            href="https://www.google.com/maps/search/?api=1&query=Xia%27s+Herbal+%26+Acupuncture+Health+Centre+Mississauga"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: 'rgba(26, 47, 35, 0.05)',
                borderColor: theme.palette.primary.dark
              }
            }}
          >
            {t('contact.getDirections')}
          </Button>
        </Box>
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

export default ContactPage;