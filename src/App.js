import React, { useState } from 'react';
import {
  Box,
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Nav from './components/Nav'
import About from './components/About/'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
// import ProjectList from './components/ProjectList';

function App() {
  const [project] = useState([
    {
      name: 'MERN',
      category: 'portfolio',
      link: 'https://boiling-headland-75602.herokuapp.com/',
      img: '../../assets/portfolio/0.jpeg'
    },
    {
      name: 'Javascript',
      category: 'portfolio',
      link: 'https://scochran31.github.io/myPassword/'
    },
    {
      name: 'Node.js',
      category: 'portfolio',
      link: 'https://github.com/scochran31/team-profile-creator'
    },
    {
      name: 'Express.js',
      category: 'portfolio',
      link: 'https://safe-bastion-32691.herokuapp.com/'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(project[0].name);

  return (
    <ChakraProvider theme={theme}>
      <Nav
        categories={project}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <Box>
        <>
          <About />
          <Portfolio currentCategory={currentCategory} />
        </>
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
