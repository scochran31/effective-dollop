import React, { useState } from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Nav from './components/Nav'
import About from './components/About/'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <About />
      <Portfolio />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
