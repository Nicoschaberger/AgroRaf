import { Container } from "@chakra-ui/react";
import Item from './Item';

const ItemList = ({ datos }) => {
  return (
    <>
        <Container>
            {datos?.map((dat) => (
                <Item
                    key={dat.id}
                    id={dat.id}
                    name={dat.name}
                    imagen={dat.imagen}
                    categoria={dat.categoria}
                    descripcion={dat.descripcion}
                />
              ))
            }

        </Container>    
    </>
  )
}

export default ItemList