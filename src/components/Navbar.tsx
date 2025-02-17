import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { t, setLanguage, getLanguage } from '../i18n';
import { LanguageType } from '../types/LanguageType';

const Navbar: React.FC = () => {
  const [language, setLanguageState] = useState<LanguageType>(getLanguage());

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    const newLanguage = event.target.value as LanguageType;
    setLanguage(newLanguage);
    setLanguageState(newLanguage); // 更新状态以触发重新渲染
  };

  useEffect(() => {
    // 当 language 状态变化时，强制重新渲染
  }, [language]);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#A8C3A2' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#333' }}>
          {t('name')}
        </Typography>
        <Button color="inherit" href="/" sx={{ color: '#333', whiteSpace: 'nowrap' }}> {/* 防止文本换行 */}
          {t('home')}
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