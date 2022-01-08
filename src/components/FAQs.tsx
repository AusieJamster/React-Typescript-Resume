import { Box, Typography } from '@mui/material';
import React from 'react';

const faqs = [{ question: 'COVID-19 Vaccination Status', answer: 'Fully Vaccinated' }];

export default function FAQs() {
  return (
    <Box component="section" sx={{ py: 10 }}>
      <Typography component="h2" id="faqs" variant="h2" sx={{ py: 3 }}>
        Frequently Asked Questions
      </Typography>
      {faqs.map((element) => (
        <Box key={element.question} component="div" sx={{ mb: 3 }}>
          <Typography gutterBottom variant="h6" component="div">
            {element.question}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
            {element.answer}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
