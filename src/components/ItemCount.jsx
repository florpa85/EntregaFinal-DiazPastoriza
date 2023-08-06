import {useEffect,useState} from 'react'
import{Menu, MenuButton, MenuList, Button, MenuItem, Flex, Box, Spacer, Heading, HStack, Container} from "@chakra-ui/react"

function ItemCount() {
    const [contador, setContador]= useState(0)
    const sumar =()=>{ setContador(contador +1)}
    const restar =()=>{
        if (contador>0)
        setContador(contador -1)}
    const reset =()=>{ setContador(0)}   
  return (
    <Flex>
         <Container centerContent > 
         <HStack maxW='400px'>
            <Button onClick={sumar}>+</Button>
            <Spacer/>
            <Box>{contador}</Box>
            <Spacer/>
            <Button onClick={restar}>-</Button>
        </HStack>
        
        
        </Container> 
     
    </Flex>
  )
}

export default ItemCount