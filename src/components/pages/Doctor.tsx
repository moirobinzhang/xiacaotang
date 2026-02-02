import React from 'react';
import { Box, Typography } from '@mui/material';
import { t } from '../../i18n';
import { Doctor } from '../../types/Doctor';

const DoctorComponent: React.FC = () => {
  const doctors = t('doctors') as Doctor[];

  return (
    <Box>
      <Typography variant="h4">{t('doctorsTitle')}</Typography>
      {doctors.map((doctor) => (
        <Box key={doctor.id}>
          <Typography variant="h5">{doctor.name.en}</Typography>
          <Typography>{doctor.bio.en}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default DoctorComponent;