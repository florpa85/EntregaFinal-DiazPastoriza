import React from 'react'
import{Menu, MenuButton, MenuList, Button, MenuItem, Flex, Box, Spacer, Heading, HStack} from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import logo from "../assets/logo.png"


function NavBar() {
  return (
    <Flex bg='gray.300'>
        
          <Box p='5'>
            <img src={logo} alt="logo" />
          </Box>

          <Spacer />
          
          <HStack spacing='35px'>
            <Box>
              <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      MENU
                  </MenuButton>
                  <MenuList>
                      <MenuItem>Shop</MenuItem>
                      <MenuItem>Nosotros</MenuItem>
                      <MenuItem>Experiencias Urania</MenuItem>
                  </MenuList>
              </Menu>
            </Box>

            <Spacer />

            <Box>
              <CartWidget/>
            </Box>
          </HStack>
            
    </Flex>
  )
}

export default NavBar