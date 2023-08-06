import React from 'react'
import{Card, Image, Stack, Button, CardBody, CardFooter, Text, Flex, Box, ButtonGroup, Heading, Divider, Wrap} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Item =({
  nombre,
  imagen,
  id,
  category
}) =>{



  return (
    <>
    <Flex spacing='30px' align='center' templatecolumns='repeat(5, 1fr)' >
        <Card w='400px'  align='center'>
          <CardBody>
            <Box>
              {imagen}
            </Box>
            <Stack mt='6' spacing='3'align='center'>
              <Heading size='md'>
                {nombre}
              </Heading>
              <Text>
                {category}
              </Text>
            </Stack>
          </CardBody>

          <Divider />

          <CardFooter >
            <Link to={`/item/${id}`}>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorschemeb='blackAlpha'>
                  Detail
                </Button>
              </ButtonGroup>
            </Link>
          </CardFooter>
        </Card>
    </Flex>
    </>
  )
}

export default Item