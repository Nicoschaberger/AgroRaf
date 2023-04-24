import CartWidget from "./CartWidget"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from "react-router-dom"




const NavBar = () => {
  return (
    <>
    <Box p='6'>  
      <Flex>
    <Box />
    <Link to={"/"}>
      <img className="logo" src="../Img/logo.png" alt="logo" />
    </Link>
    <Spacer />
    <Box  p='1'/>
    <Menu>
      <MenuButton as={Button} colorScheme='green' className="main">
        Categorias
      </MenuButton>
      <MenuList>

        <Link to={"/catalogo"}>
          <MenuItem>Catalogo</MenuItem>
        </Link>

        <Link to={`/category/${"BanMar"}`}>
          <MenuItem>Ban Mar</MenuItem>
        </Link>

        <Link to={`/category/${"Volonte"}`}>
          <MenuItem>Volonte</MenuItem>
        </Link>

        <Link to={`/category/${"Zanini"}`}>
          <MenuItem>Zanini</MenuItem>
        </Link>

        <Link to={`/category/${"EverWear"}`}>  
          <MenuItem>Ever Wear</MenuItem>
        </Link>

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