import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const CartTotal = () => {
  
    const {total} =useContext(CartContext)
  
  return (
    <div>
        <h3>Total: {total}$ </h3>
    </div>
  )
}

export default CartTotal