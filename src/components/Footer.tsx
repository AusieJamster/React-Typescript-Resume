import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface FooterProps {
  description: string;
  title: string;
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ padding: '5px 10px' }}>
      Copyright © Jamie Brearley {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer({ description, title }: FooterProps) {
  return (
    <Box component="footer" sx={{ py: 6, justifyContent: 'space-between', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
      <Typography variant="h6" align="center" gutterBottom sx={{ padding: '5px 10px' }}>
        {title}
      </Typography>
      <Copyright />
      <Typography variant="subtitle1" align="center" color="text.secondary" component="p" sx={{ padding: '5px 10px' }}>
        {description}
      </Typography>
    </Box>
  );
}
