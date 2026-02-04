import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';

const Navbar: React.FC = () => {
  const { i18n, t } = useTranslation();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setAnchorEl(null);
    setMobileOpen(false);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = ['home', 'about', 'services', 'testimonials', 'contact'];

  const drawer = (
    <Box onClick={toggleMobileMenu} sx={{ textAlign: 'center', backgroundColor: theme.palette.background.default, height: '100%' }}>
      <Typography variant="h6" sx={{ my: 2, fontFamily: 'Playfair Display, serif', color: theme.palette.primary.main }}>
        Xiacaotang
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton component={Link} to={item === 'home' ? '/' : `/${item}`} sx={{ textAlign: 'center' }}>
              <ListItemText
                primary={t(`nav.${item}`)}
                primaryTypographyProps={{
                  fontFamily: 'Playfair Display, serif',
                  color: theme.palette.primary.main
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', padding: 2, gap: 2 }}>
            <Button onClick={() => handleLanguageChange('en')} sx={{ color: theme.palette.text.primary }}>EN</Button>
            <Button onClick={() => handleLanguageChange('zh')} sx={{ color: theme.palette.text.primary }}>中文</Button>
          </Box>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" color="transparent">
      <Toolbar sx={{ display: 'flex', alignItems: 'center', padding: '16px 24px', justifyContent: 'space-between' }}>
        <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 2, textDecoration: 'none' }}>
          <Box
            component="img"
            src={`${import.meta.env.BASE_URL}images/logo-enso-optimized.png`}
            alt="Xia's Herbal & Acupuncture Health Centre 夏草堂"
            width="50"
            height="50"
            sx={{
              height: '50px',
              width: '50px',
              mixBlendMode: 'multiply', // Makes white background transparent on parchment
              filter: 'contrast(1.2)' // Enhances the ink look
            }}
          />
        </Box>

        {/* Desktop Nav */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '32px', alignItems: 'center' }}>
          {navItems.map((page) => (
            <Button
              key={page}
              component={Link}
              to={page === 'home' ? '/' : `/${page}`}
              sx={{
                fontSize: '1.05rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                color: theme.palette.primary.main,
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '0%',
                  height: '2px',
                  bottom: '4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: theme.palette.secondary.main,
                  transition: 'width 0.3s ease-out'
                },
                '&:hover:after': {
                  width: '80%'
                }
              }}
            >
              {t(`nav.${page}`)}
            </Button>
          ))}
          <Box sx={{ marginLeft: '16px' }}>
            <Button
              onClick={handleMenuOpen}
              sx={{
                fontWeight: 600,
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: '50%', // Stamp style
                minWidth: '40px',
                width: '40px',
                height: '40px',
                padding: 0,
              }}
            >
              {i18n.language.toUpperCase()}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  backgroundColor: theme.palette.background.paper,
                  boxShadow: '0 4px 20px rgba(26, 47, 35, 0.1)',
                  border: `1px solid ${theme.palette.secondary.main}`,
                }
              }}
            >
              <MenuItem onClick={() => handleLanguageChange('en')} sx={{ fontFamily: 'Playfair Display' }}>English</MenuItem>
              <MenuItem onClick={() => handleLanguageChange('zh')} sx={{ fontFamily: 'Noto Serif SC' }}>中文</MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Mobile Nav Toggle */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleMobileMenu}
          sx={{ display: { md: 'none' }, color: theme.palette.primary.main }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={toggleMobileMenu}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, backgroundColor: '#fdfaf5' },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;