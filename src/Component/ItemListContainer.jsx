import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import data from '../Data.json'
import ItemList from './ItemList'
import Loading from './Loading'

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [datos, setDatos] = useState([]);
  const { categoria } = useParams();

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
      if(categoria){
        setDatos(res.filter((item)=>item.categoria === categoria))
      }else{
        setDatos(res)
      }
    })
  },[categoria])
  
  if(loading) { 
    return <Loading/>
  }


  return (
    <>      
      <ItemList datos={datos}/>
    </>
  )
}

export default ItemListContainer