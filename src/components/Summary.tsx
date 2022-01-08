import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { CardActionArea, Link } from '@mui/material';

interface SummaryProps {
  title: string;
  description: string;
  scrollFunc: Function;
}

export default function Summary({ title, description, scrollFunc }: SummaryProps) {
  const theme = useTheme();
  const windowLarge = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box component="section" sx={{ my: 15, display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: windowLarge ? 'nowrap' : 'wrap' }}>
      <Box component="div" id="summary" sx={{ p: 1 }}>
        <Typography component="h1" variant="h1" align="center" gutterBottom sx={{ padding: '5px 10px' }}>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p" sx={{ padding: '5px 10px' }}>
          {description}
        </Typography>
        <Box component="div" sx={{ my: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Link key="email" component="a" target="_blank" sx={{ minWidth: '130px', m: 2, textDecoration: 'none' }} href="mailto:jamiekbrearley@gmail.com">
            <Button variant="contained">Email Me</Button>
          </Link>
          <Button
            variant="outlined"
            sx={{ minWidth: '130px', m: 2, textDecoration: 'none' }}
            onClick={() => {
              scrollFunc('projects');
            }}
          >
            Profiles
          </Button>
        </Box>
      </Box>
      <Box component="div" sx={{ p: 1 }}>
        <CardActionArea sx={{ borderRadius: '20px' }}>
          <img style={{ maxWidth: '100vw', width: 500, borderRadius: 20 }} src={'/profilePicture.jpg'} alt="placeholder" />
        </CardActionArea>
      </Box>
    </Box>
  );
}
