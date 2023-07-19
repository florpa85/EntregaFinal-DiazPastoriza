import React from 'react'
import{Flex, Box, Spacer, Heading, HStack} from "@chakra-ui/react"
import icon from '../assets/icon.png'


const CartWidget = () => {
  return (
    <Flex>
      <HStack spacing='5px'>
        <Box size='30px'>
          <img src={icon} alt="icon" /> 
        </Box>
        <Box p="15px">0</Box>
      </HStack>
    </Flex>
  )
}

export default CartWidget