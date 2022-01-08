import MenuIcon from '@mui/icons-material/Menu';
import { Button, Box, Toolbar, Container, Link, useMediaQuery, useTheme, IconButton, Menu, MenuItem } from '@mui/material';
import { useState, MouseEvent } from 'react';

interface HeaderProps {
  title: string;
  scrollFunc: Function;
}

const sections = [
  { title: 'Summary', url: 'container' },
  { title: 'Skills', url: 'skills' },
  { title: 'Experience', url: 'experience' },
  { title: 'Education', url: 'education' },
  { title: 'Accomplishments', url: 'accomplishments' },
  { title: 'Portfolio', url: 'projects' },
  { title: 'FAQs', url: 'faqs' },
];

export default function Header({ title, scrollFunc }: HeaderProps) {
  const theme = useTheme();
  const windowLarge = useMediaQuery(theme.breakpoints.up('lg'));

  // handle toggle menu button
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      component="header"
      sx={{ position: 'fixed', top: 0, backgroundColor: 'white', width: '100vw', borderBottom: 1, borderColor: 'divider', zIndex: 1000, m: 0 }}
    >
      <Container>
        <Toolbar sx={{ justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} sx={{ minWidth: '160px', fontSize: '1.1rem' }}>
            {title}
          </Button>
          <Toolbar component="nav" variant="dense" sx={{ justifyContent: 'space-between', flexWrap: 'wrap', display: windowLarge ? 'flex' : 'none' }}>
            {sections.map((section) => (
              <Button key={section.title} onClick={() => scrollFunc(section.url)} sx={{ color: 'black', px: 1.5 }}>
                {section.title.toUpperCase()}
              </Button>
            ))}
          </Toolbar>
          {/* <Box component="div" sx={{ display: 'flex', flexWrap: 'nowrap' }}> */}
          <Link key="email" component="a" target="_blank" sx={{ minWidth: '130px', m: 1, textDecoration: 'none' }} href="mailto:jamiekbrearley@gmail.com">
            <Button variant="outlined">Get in touch</Button>
          </Link>
          <IconButton
            color="primary"
            sx={{ justifyContent: 'space-between', flexWrap: 'wrap', display: windowLarge ? 'none' : 'flex' }}
            id="menu-button"
            aria-controls={open ? 'section-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="section-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'menu-button',
            }}
          >
            {sections.map((section) => (
              <MenuItem
                key={section.title + '-toggle'}
                onClick={() => {
                  scrollFunc(section.url);
                  handleClose();
                }}
              >
                {section.title.toUpperCase()}
              </MenuItem>
            ))}
          </Menu>
          {/* </Box> */}
        </Toolbar>
      </Container>
    </Box>
  );
}
