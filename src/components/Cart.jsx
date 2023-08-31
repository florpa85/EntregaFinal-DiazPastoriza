import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import ItemCount from './ItemCount'

const Cart = () => {

  const {cart, setCart}=useContext(CartContext);

    const borrarProducto=(id)=>{
      
      const foundId = cart.find((e)=> e.id === id);

      const NuevoCart = cart.filter((e)=>{
        return e !== foundId
    })

    setCart(NuevoCart);

  }
  return cart.map((p)=>{
    
    return (
      <>
        <div  key={p.id}>
          <div className='cartContent'>
            <img className='cartImg' src={p.img} alt=""/>
            <h2 className='cartName'>{p.name}</h2>
              <ItemCount p={p} qty ={p.qty}/>
            <h4 className='cartName'>subtotal: {p.price* p.qty}</h4>
            <h3 className='buttonX' onClick={()=> borrarProducto(p.id)}>X</h3>
          </div>
          
        </div>
      
      </> 

    )
    
  })


}
export default Cart