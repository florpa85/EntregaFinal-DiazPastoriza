import {useContext} from 'react'
import{ Button, Flex, Box, Spacer, HStack} from "@chakra-ui/react"
import { CartContext } from '../context/ShoppingCartContext'
import React from 'react'

const ItemCount=({p, qty}) => {

  const {cart, setCart}= useContext(CartContext)

  const sumar =()=>{
    const productDuplicado =cart.find((item)=> item.id === p.id)
    
      setCart(cart.map((item)=> (item.id === p.id ? {...p, qty : productDuplicado.qty+ 1}: item)))
    
  }
  const restar =()=>{
    const productDuplicado =cart.find((item)=> item.id === p.id)
    productDuplicado.qty !==1 &&
      setCart(cart.map((item)=> (item.id === p.id ? {...p, qty : productDuplicado.qty- 1}: item)))
  }

    

   
  
   
  
  return (
    <Flex>
          <HStack maxW='400px'>
                                <Button onClick={restar}>-</Button>
                                <Spacer/>
                                <Box>{p.qty}</Box>
                                <Spacer/>
                                <Button onClick={sumar}>+</Button>
                            </HStack>
     
    </Flex>
  )
}

export default React.memo(ItemCount);