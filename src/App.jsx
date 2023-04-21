import React from 'react';
import NavBar from './Component/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import ItemListContainer from './Component/ItemListContainer';
import Footer from './Component/Footer';

const App = () => {
  return (
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer/>
      <Footer/>
    </ChakraProvider>
  )
}

export default App