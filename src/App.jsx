import NavBar from './Component/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import ItemListContainer from './Component/ItemListContainer';
import Footer from './Component/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Component/Main';
import ItemDetailContainer from "./Component/ItemDetailContainer";
import Person from './Component/Person';

const App = () => {
  return (
    <BrowserRouter>
    <ChakraProvider>


      <NavBar/>

      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/catalogo" element={<ItemListContainer/>}/>
      <Route path="/categoria/:categoria" element={<ItemListContainer/>} />
      <Route path="/Item/:id" element={<ItemDetailContainer/>}/>
      <Route path='/Person' element={<Person/>}/>
      </Routes>

      <Footer/>
    
    
    </ChakraProvider>
    </BrowserRouter>
  )
}

export default App