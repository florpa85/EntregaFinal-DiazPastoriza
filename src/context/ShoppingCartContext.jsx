import {createContext, useState} from 'react'



export const CartContext = createContext()

export const ShoppingCartProvider =({children}) => {

    const[cart, setCart]= useState([])
    
    const total = cart.reduce((acc,e)=> acc + e.price* e.qty, 0)
   
    const itemsTotal = cart.reduce((acc,e)=> acc + e.qty,0 )
   
    

    return(

        <CartContext.Provider value={{cart, setCart, total, itemsTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider