import React from 'react'
import Cart from './Cart'
import CartTotal from './CartTotal'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Link } from 'react-router-dom'
import{ Button } from "@chakra-ui/react"

const CartContent = () => {

  const{setCart}= useContext(CartContext)

    const vaciarCarrito =()=>{
      setCart([]);
    }
  
  return (
    <>
    <Cart/>
    <div className='cartContent2'>
    <CartTotal/>
      <Link to={"/formulario"}>
              <Button>Finalizar compra</Button>
      </Link>
              <Button onClick={()=> vaciarCarrito()}>vaciar </Button>
    </div>
    </>
  )
}

export default CartContent