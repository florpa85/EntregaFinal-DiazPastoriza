import React from 'react'
import { useParams } from 'react-router-dom'
import{Card, Image, Stack, Button, CardBody, CardFooter, Text, Flex, Box, ButtonGroup, Heading, Divider, Wrap} from "@chakra-ui/react"
import ItemCount from './ItemCount';


const ItemDetail = ({productos}) => {

  const { id }= useParams();

  const filteredProducts = productos.filter((producto) => producto.id == id)

  return (
      <div>
          {filteredProducts.map((p) =>{
              return (
                <div key={p.id}>
                    <Card w='400px'  align='center'>

                      <CardBody>
                          <Box>
                           {p.imagen}
                          </Box>
                          <Stack mt='6' spacing='3'align='center'>
                            <Heading size='md'>
                              {p.nombre}
                            </Heading> 
                            <Text color='RGBA(0, 0, 0, 0.64)' fontSize='2xl'>
                              ${p.precio}
                            </Text>
                            <Text>
                              {p.descripcion} 
                            </Text>
                            <Text>
                              {p.category}
                            </Text>
                          </Stack>
                      </CardBody>

                      <Divider />

                      <CardFooter >
                          
                          <ButtonGroup spacing='2'>
                              <ItemCount/>
                              <Button variant='solid' colorschemeb='blackAlpha'>
                              Add to cart
                              </Button>
                           </ButtonGroup> 
                      </CardFooter>
                    </Card>
                </div>
              )
          })}
      </div>
  )
}

export default ItemDetail;