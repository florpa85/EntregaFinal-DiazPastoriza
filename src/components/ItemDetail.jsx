import {useContext} from 'react'
import{Card, Stack, Container, CardBody, CardFooter, Text, Button, Box, ButtonGroup, Heading, Divider} from "@chakra-ui/react"
import { CartContext } from '../context/ShoppingCartContext';
import React from 'react'




const ItemDetail = ({productos}) => {

 const {cart,setCart}= useContext (CartContext);


    const buyProducts =(productos)=>{
        const productDuplicado =cart.find((item)=> item.id === productos.id);

        if(productDuplicado){
          setCart(cart.map((item)=> (item.id === productos.id ? {...productos, qty : productDuplicado.qty+ 1}: item)))
        }else{
      
        setCart([...cart, productos]);
      }


  }

  return (   
          <div  key={productos.id}>
              <div className='itemDet'>

                  <Card w='400px'  align='center'>
                      <CardBody>
                          <Box>
                              <img src={productos.img} alt="" /> 
                          </Box>
                          <Stack mt='6' spacing='3'align='center'>
                            <Heading size='md'>
                                {productos.name}
                            </Heading> 
                            <Text color='RGBA(0, 0, 0, 0.64)' fontSize='2xl'>
                               ${productos.price}
                            </Text>
                            <Text>
                                {productos.description} 
                            </Text>
                                {productos.categoryId}
                          </Stack>
                      </CardBody>

                      <Divider />

                      <CardFooter >
                          <ButtonGroup spacing='2'>
                              <Container centerContent > 
                          
                                <Button onClick={()=> buyProducts(productos)
                                        } >Add To Cart</Button>
                
                              </Container> 
                           </ButtonGroup> 
                      </CardFooter>
                  </Card>
              </div>
          </div>
  )
       
}

export default React.memo(ItemDetail);