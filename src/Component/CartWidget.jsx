import { Button } from '@chakra-ui/react'
import React from 'react'


const CartWidget = () => {
  return (
    <div>
        <Button colorScheme='green' className='carro'>      
            <span className="material-symbols-outlined"> shopping_cart</span>
        </Button>
    </div>
  )
}

export default CartWidget