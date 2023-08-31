import { useContext } from 'react'
import{Flex, Box, HStack} from "@chakra-ui/react"
import icon from '../assets/icon.png'
import { CartContext } from '../context/ShoppingCartContext'

const CartWidget = () => {

  const {itemsTotal} = useContext(CartContext)

  return (

    <Flex>
      <HStack spacing='5px'>
        <Box size='5px'>
          <img src={icon} alt="icon" /> 
        </Box>
        <Box p="15px">{itemsTotal} </Box>
      </HStack>
    </Flex>

  )
}

export default CartWidget