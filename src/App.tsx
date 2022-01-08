import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { Container } from '@mui/material';

import Header from './components/Header';
import Footer from './components/Footer';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CardSection from './components/CardSection';
import Accomplishments from './components/Accomplishments';
import FAQs from './components/FAQs';
import { useScrollPosition } from './controllers/useScrollPosition';

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      h1: {
        fontSize: '3.75rem',
      },
      h2: {
        fontSize: '3rem',
      },
      h3: {
        fontSize: '2.25rem',
      },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: {},
            style: {
              borderRadius: '30px',
            },
          },
        ],
      },
    },
  })
);

const education = [
  {
    imageURL: 'https://www.jstor.org/iiif/2020/06/24/20/7212bf71-3890-4f9f-b68a-02fa81902159_deflate.tif/full/450,/0/default.webp',
    imageAlt: 'Q.U.T Logo',
    target: 'https://www.qut.edu.au/',
    title: "Bachelor's Degree in Games And Interactive Entertainment",
    description: 'Queensland University of Technology',
    year: '2016',
  },
  {
    imageURL: 'https://upskillwise.com/wp-content/uploads/2020/08/pluralsight-banner.png',
    imageAlt: 'PluralSight',
    target: 'https://app.pluralsight.com/profile/jamie-brearley',
    title: "Jamie Brearley's Pluralsight",
    description: 'Pluralsight which displays componency in many tools used for the purpose of development',
    year: '',
  },
];

const projects = [
  {
    imageURL: 'https://www.accesseap.com.au/images/Linkedin-Logo.png',
    imageAlt: 'Linked in Logo',
    target: 'https://www.linkedin.com/in/jamie-brearley-938a03116/',
    title: 'LinkedIn',
    description: 'Jamie Brearley',
    year: '',
  },
  {
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/2560px-Unity_Technologies_logo.svg.png',
    imageAlt: 'Unity Logo',
    target: 'https://drive.google.com/file/d/1dY8j0N7hSVM1aH9q3lEaA6yoU58IHMoU/view?usp=sharing',
    title: 'Game Portfolio',
    description: 'Games created with C# inside the Unity Game Engine',
    year: '2015 to 2018',
  },
  {
    imageURL: 'https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png',
    imageAlt: 'Git Hub Logo',
    target: 'https://github.com/ausiejamster',
    title: "Jamie Brearley's GitHub",
    description: 'Public Git repositories which displays componency in many areas of the development environment',
    year: '2016 to Present',
  },
  {
    imageURL: 'https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png',
    imageAlt: 'Git Hub Logo',
    target: 'https://github.com/jamiebrearley',
    title: "Arcane Software's GitHub",
    description: 'These public Git repositories continue to display componency in many areas of the development environment',
    year: '2016 to Present',
  },
];

export default function App() {
  const scrollToElement = (id: string) => {
    const yOffset = -70;
    const element = document.getElementById(id);
    const y = (element?.getBoundingClientRect().top ?? 0) + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const body = document.body,
    html = document.documentElement;
  body.style.margin = '0';
  body.style.backgroundColor = `hsl(0, 100%, 98%)`;

  useScrollPosition(({ prevPos, currPos }) => {
    let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    let positionFromTop = (-currPos + 64) / height; //64 being header height
    positionFromTop = Math.min(Math.max(positionFromTop, 0), 1); // clamp the percentage for errors
    positionFromTop = Math.ceil(positionFromTop * 360);
    body.style.backgroundColor = `hsl(${positionFromTop}, 100%, 98%)`;
  });

  return (
    <ThemeProvider theme={theme}>
      <Header title="Jamie Brearley" scrollFunc={scrollToElement}></Header>
      <Container id="container" maxWidth="lg">
        <main>
          <Summary
            description="A Full Stack Developer well-versed in numerous programming tools and languages. Remarkable technical abilities developed over 3 years of experience. Experienced in creating user-centric products responsive for both desktop and mobile platforms. Talented in working in TypeScript/JavaScript, jQuery, PHP, ReactJS, NodeJS and more."
            title="Full Stack React Developer"
            scrollFunc={scrollToElement}
          />
          <Skills />
          <Experience />
          <CardSection _id="education" title="Education" cards={education} />
          <Accomplishments />
          <CardSection _id="projects" title="Websites, Porfolios, Profiles" cards={projects} />
          <FAQs />
        </main>
        <Footer description="Created with React and TypeScript" title="Jamie Brearley"></Footer>
      </Container>
    </ThemeProvider>
  );
}
