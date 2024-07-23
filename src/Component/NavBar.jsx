import CartWidget from "./CartWidget"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import 'animate.css';

const NavBar = () => {
  return (
    <>
    <Box p='6'>  
      <Flex>
    <Box />
    <Link to={"/"}>
      <img className="animate__fadeInDownBig" src="../Img/logo.png" alt="logo" />
    </Link>
    <Spacer />
    <Box  p='1'/>
    <Menu>
      <MenuButton as={Button} color='green' className="main">
        Categorias
      </MenuButton>
      <MenuList>

        <Link to={`/categoria/${"BanMar"}`}>
          <MenuItem>Ban Mar</MenuItem>
        </Link>

        <Link to={`/categoria/${"Volonte"}`}>
          <MenuItem>Volonte</MenuItem>
        </Link>

        <Link to={`/categoria/${"Zanini"}`}>
          <MenuItem>Zanini</MenuItem>
        </Link>

        <Link to={`/categoria/${"EverWear"}`}>  
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