import CartWidget from "./CartWidget"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, Flex, Box, Spacer } from '@chakra-ui/react'




const NavBar = () => {
  return (
    <>
    <Box p='6'>  
  <Flex>
    <Box />
    <img className="logo" src="../Img/logo.png" alt="logo" />
    <Spacer />
    <Box  p='1'/>
    <Menu>
    <MenuButton as={Button} colorScheme='green' className="main">
      Categorias
    </MenuButton>
    <MenuList>
        <MenuItem>Ban Mar</MenuItem>
        <MenuItem>Volonte</MenuItem>
        <MenuItem>Zanini</MenuItem>
        <MenuItem>Ever Wear</MenuItem>
    </MenuList>
  </Menu>  
    <Spacer />
    <Box/>
      <CartWidget/>
  </Flex>
    </Box>
  </>
   )
}

export default NavBar