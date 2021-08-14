import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <About />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
