import NavBar from './Component/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import ItemListContainer from './Component/ItemListContainer';
import Footer from './Component/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Component/Main';
import ItemDetailContainer from "./Component/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
    <ChakraProvider>


      <NavBar/>

      <Routes>
      <Route exact path="/" element={<Main/>}/>
      <Route exact path="/catalogo" element={<ItemListContainer/>}/>
      <Route exact path="/categoria/:categoria" element={<ItemListContainer/>} />
      <Route exact path="/Item/:id" element={<ItemDetailContainer/>}/>
      </Routes>

      <Footer/>
    
    
    </ChakraProvider>
    </BrowserRouter>
  )
}

export default App