import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { t, setLanguage, getLanguage } from '../i18n';
import { getLocalizedValue } from '../utils/i18nHelper';
import { LanguageType } from '../types/LanguageType';

const Navbar: React.FC = () => {
  const [language, setLanguageState] = useState<LanguageType>(getLanguage());

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    const newLanguage = event.target.value as LanguageType;
    setLanguage(newLanguage);
    setLanguageState(newLanguage);
  };

  useEffect(() => {
    // Re-render on language change
  }, [language]);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#A8C3A2' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#333' }}>
          {getLocalizedValue(t('name'), language)}
        </Typography>
        <Button color="inherit" href="/" sx={{ color: '#333', whiteSpace: 'nowrap' }}>
          {getLocalizedValue(t('home'), language)}
        </Button>
        <Button color="inherit" href="/about" sx={{ color: '#333', whiteSpace: 'nowrap' }}>
          {getLocalizedValue(t('about'), language)}
        </Button>
        <Button color="inherit" href="/services" sx={{ color: '#333', whiteSpace: 'nowrap' }}>
          {getLocalizedValue(t('services'), language)}
        </Button>
        <Button color="inherit" href="/contact" sx={{ color: '#333', whiteSpace: 'nowrap' }}>
          {getLocalizedValue(t('contact'), language)}
        </Button>
        <Button color="inherit" href="/testimonials" sx={{ color: '#333', whiteSpace: 'nowrap' }}>
          {getLocalizedValue(t('testimonials'), language)}
        </Button>
        <Select
          value={language}
          onChange={handleLanguageChange}
          sx={{ color: '#333', ml: 2 }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="zh">中文</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;