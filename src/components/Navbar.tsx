import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang); // Update global i18n state
    setAnchorEl(null);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1a2f23' }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{ height: '50px', width: 'auto', marginRight: '16px' }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Button
            color="inherit"
            href="/"
            sx={{ color: '#fdfaf5', fontSize: '1.1rem', fontWeight: 600, textTransform: 'none', minWidth: 'auto', padding: '0 15px' }}
          >
            {t('nav.home')}
          </Button>
          <Button
            color="inherit"
            href="/about"
            sx={{ color: '#fdfaf5', fontSize: '1.1rem', fontWeight: 600, textTransform: 'none', minWidth: 'auto', padding: '0 15px' }}
          >
            {t('nav.about')}
          </Button>
          <Button
            color="inherit"
            href="/services"
            sx={{ color: '#fdfaf5', fontSize: '1.1rem', fontWeight: 600, textTransform: 'none', minWidth: 'auto', padding: '0 15px' }}
          >
            {t('nav.services')}
          </Button>
          <Button
            color="inherit"
            href="/testimonials"
            sx={{ color: '#fdfaf5', fontSize: '1.1rem', fontWeight: 600, textTransform: 'none', minWidth: 'auto', padding: '0 15px' }}
          >
            {t('nav.testimonials')}
          </Button>
          <Button
            color="inherit"
            href="/contact"
            sx={{ color: '#fdfaf5', fontSize: '1.1rem', fontWeight: 600, textTransform: 'none', minWidth: 'auto', padding: '0 15px' }}
          >
            {t('nav.contact')}
          </Button>
        </Box>
        <div>
          <Button color="inherit" onClick={handleMenuOpen} sx={{ color: '#fdfaf5' }}>
            {i18n.language.toUpperCase()}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
            <MenuItem onClick={() => handleLanguageChange('zh')}>中文</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;