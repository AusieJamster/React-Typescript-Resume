import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Done } from '@mui/icons-material';

const frontSkills = [
  { icon: <Done />, label: 'HTML/CSS including Bootstrap' },
  { icon: <Done />, label: 'TypeScript/JavaScript' },
  { icon: <Done />, label: 'jQuery' },
  { icon: <Done />, label: 'ReactJS' },
  { icon: <Done />, label: 'SEO and the customer journey' },
  { icon: <Done />, label: 'Flutter for mobile app development' },
  { icon: <Done />, label: 'API with Fetch and AJAX' },
];

const backSkills = [
  { icon: <Done />, label: 'NodeJS' },
  { icon: <Done />, label: 'PHP and Laravel' },
  { icon: <Done />, label: 'SQL with phpmyadmin' },
  { icon: <Done />, label: 'Version Control with Git/GitHub' },
  { icon: <Done />, label: 'Amazon Web Services' },
  { icon: <Done />, label: 'Microsoft Azure' },
];

const otherSkills = [
  { icon: <Done />, label: 'Differential & integral calculus and matrix calculations' },
  { icon: <Done />, label: 'Mentoring junior developers' },
  { icon: <Done />, label: 'C# including Unity Game Engine' },
];

export default function Skills() {
  return (
    <Box component="section" sx={{ py: 10 }}>
      <Typography component="h2" id="skills" variant="h2" sx={{ py: 3 }}>
        Skills
      </Typography>
      <Box component="div" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', flexGrow: 1 }}>
        <DisplaySkills title="Front End" skills={frontSkills} />
        <DisplaySkills title="Back End" skills={backSkills} />
        <DisplaySkills title="Other" skills={otherSkills} />
      </Box>
    </Box>
  );
}

interface DisplayProps {
  title: string;
  skills: Array<{
    icon: {};
    label: string;
  }>;
}

function DisplaySkills({ skills, title }: DisplayProps) {
  return (
    <Box component="ul" sx={{ minWidth: '300px', width: '45%' }}>
      <Typography variant="h6" sx={{ p: 1 }}>
        {title}
      </Typography>
      {skills.map((skill) => (
        <ListItem key={skill.label} sx={{ py: 0, minHeight: 32, color: 'rgba(0,0,0,.8)' }}>
          <ListItemIcon sx={{ color: 'inherit' }}>{skill.icon}</ListItemIcon>
          <ListItemText primary={skill.label} primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }} />
        </ListItem>
      ))}
    </Box>
  );
}
