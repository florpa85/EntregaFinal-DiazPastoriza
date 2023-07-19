
import React from 'react'
import{Flex, Box, Container} from "@chakra-ui/react"

const ItemListContainer = ({greeting}) => {
  return (
    <Flex>
        <Container maxW='100%' bg='gray.200' centerContent fontSize={30}>
 
  {greeting}
  
</Container>
        
    </Flex>
  )
}

export default ItemListContainer