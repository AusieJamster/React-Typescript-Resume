import { Box, Link, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';

import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';
import { blue } from '@mui/material/colors';

interface Job {
  position: {
    business: string;
    location: string;
    title: string;
    dateRange: string;
  };
  tasks: Array<{
    icon: {};
    label: string;
  }>;
}

const jobs: Array<Job> = [
  {
    position: {
      business: 'Arcane Software',
      location: 'Queensland, Australia',
      title: 'Founder',
      dateRange: '07/2021 - Present',
    },
    tasks: [
      { icon: <ArrowRight />, label: 'Arcane Software was launched after almost two years of freelance web development.' },
      { icon: <ArrowRight />, label: 'Official Wix Partner with Editor X expertise and Velo certification' },
      { icon: <ArrowRight />, label: 'UI/UX design to improve customer engagement on a variety of different sites, industries, and styles.' },
      { icon: <ArrowRight />, label: 'SEO enhancement to boost numerous client websites to rank one on Google' },
      { icon: <ArrowRight />, label: 'Maintained customer service over multiple projects' },
      {
        icon: <ArrowRight />,
        label: 'Developed, upgraded, migrated, and merged customer sites with the use of web design, JavaScript and the Velo framework.',
      },
      { icon: <ArrowRight />, label: 'Adobe XD experience to assist in the design process' },
      { icon: <ArrowRight />, label: 'Implemented API calls to assist in creating adaptive data and functionality.' },
      { icon: <ArrowRight />, label: 'Implemented and maintained Linux web servers via use of AWS.' },
    ],
  },
  {
    position: {
      business: 'Dinamix Care',
      location: 'Upper Mount Gravatt, Australia',
      title: 'Full Stack Developer',
      dateRange: '01/2021 - 12/2021',
    },
    tasks: [
      {
        icon: <ArrowRight />,
        label: 'Completed external website as well as complete staff portal in HTML, CSS, JavaScript, jQuery, Bootstrap, PHP, and minor libraries.',
      },
      { icon: <ArrowRight />, label: 'Maintained Linux web servers via use of Microsoft Azure' },
      { icon: <ArrowRight />, label: 'Completed code debugging and implemented fixes to resolve problems based on priority system.' },
      { icon: <ArrowRight />, label: 'Produced high-impact, user-friendly websites that accomplished all business goals.' },
      { icon: <ArrowRight />, label: 'Communicated with and gathered feedback from customers about progress updates and worked to resolve specific concerns.' },
      { icon: <ArrowRight />, label: 'Coordinated system installations, testing and code corrections.' },
    ],
  },
];

export default function Experience() {
  return (
    <Box component="section" sx={{ py: 10 }}>
      <Typography component="h2" id="experience" variant="h2" sx={{ py: 3 }}>
        Experience
      </Typography>
      <Box component="div" sx={{ my: 3, display: 'flex' }}>
        <Typography variant="body1">Full work history can be found on&nbsp;</Typography>
        <Link variant="body1" target="_blank" href="https://www.linkedin.com/in/jamie-brearley-938a03116/" underline="hover">
          my LinkedIn profile
        </Link>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, backgroundColor: blue[50] }} size="small" aria-label="a dense table">
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job.position.business}>
                <TableCell component="th" scope="row">
                  <Typography>{job.position.business}</Typography>
                  <Typography sx={{ fontWeight: 'bold' }}>{job.position.title}</Typography>
                  <Typography>{job.position.location}</Typography>
                  <Typography>{job.position.dateRange}</Typography>
                </TableCell>
                <TableCell component="th" scope="row">
                  <Box component="ul">
                    {job.tasks.map((task) => (
                      <ListItem key={task.label} sx={{ py: 0, minHeight: 32, color: 'rgba(0,0,0,.8)' }}>
                        <ListItemIcon sx={{ color: 'inherit' }}>{task.icon}</ListItemIcon>
                        <ListItemText primary={task.label} primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }} />
                      </ListItem>
                    ))}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box component="div" sx={{ my: 3, display: 'flex' }}>
        <Typography variant="body1">Full work history can be found on&nbsp;</Typography>
        <Link variant="body1" target="_blank" href="https://www.linkedin.com/in/jamie-brearley-938a03116/" underline="hover">
          my LinkedIn profile
        </Link>
      </Box>
    </Box>
  );
}
