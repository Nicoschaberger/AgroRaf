import { useState, useEffect } from 'react'
import { Image, Box } from '@chakra-ui/react'
import { useParams } from "react-router-dom"
import data from '../Data.json'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { category } = useParams();

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
        setLoading(false);
      }, 2000);
    });
  };
  
  useEffect(()=>{
    getDatos()
    .then((res)=> {
      if(category){
        setDatos(res.filter((item)=>item.category === category))
      }else{
        setDatos(res)
      }
    })
  },[category])
  return (
    <>
      <Box className='foto'>
        <Image src='../Img/logo.png' alt='foto ilustrativa' />
      </Box>

      <ItemList datos={datos}/>
    
    </>
  )
}

export default ItemListContainer