import React from 'react';
import { Box, Typography, Card, CardActionArea, CardContent } from '@mui/material';

const projects = [
  {
    title: 'Dinamix Care - Staff Portal',
    description:
      "As the only developer on this project I have built Dinamix Care a Staff Portal. This portal authenticates through Microsoft Azure AD to only allow company employees access to the site while being able to automatically obtain any required variables. This system was designed to provide a centrialised point where employees would be able to submit, review and download their reports. These reports are automatically generated and emailed to the employee's email address as a pdf document. Technologies included within this project are as follows: HTML, CSS, JavaScript, Bootstrap, jQuery, fpdf and some other minor modules.",
  },
  {
    title: 'Dinamix Care - Public Website',
    description:
      "Dinamix Care's external website was created with the use of HTML, CSS, JavaScript, jQuery, PHP and Bootstrap. While ultising these technologies, I have been able to include a standardise form, effective SEO, dynamic pages, parallax image animations and more. As a NDIS service provider accessibility is very important, which has caused me to add growth animation and dynamic font sizing to all pages. This is of course on top of all the alt text and aria labeling standard accessibility practise.",
  },
  { title: 'Skytank', description: 'Mobile game built with C# in the Unity game engine' },
  { title: 'Escape from Hades', description: 'Mobile game also built with C# in the Unity game engine.' },
];

export default function Accomplishments() {
  return (
    <Box component="section" sx={{ py: 10 }}>
      <Typography component="h2" id="accomplishments" variant="h2" sx={{ py: 3 }}>
        Accomplishments
      </Typography>
      <Box component="div" sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {projects.map((project) => (
          <Card key={project.title} sx={{ width: '100%', m: 1 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
