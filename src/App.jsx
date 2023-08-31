import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import ShoppingCartContext from "./context/ShoppingCartContext"
import CartContent from "./components/CartContent"
import Checkout from './components/Checkout'






const App=() => {

  return (
  <>

     {  <BrowserRouter>
     
          <ShoppingCartContext>
            

              
              <NavBar/>
              
              <Routes>
              
                <Route exact path= "/" element={<Home />}/>
                <Route exact path= "/cart" element={<CartContent/>}/>
                <Route exact path= "/category/:categoryId" element={<ItemListContainer />}/>
                <Route exact path= "/item/:id" element={<ItemDetailContainer />}/>
                <Route exact path= "/formulario" element={<Checkout/>}/> 
                
                

              </Routes>

          </ShoppingCartContext>
            
        </BrowserRouter> 
      } 
    </>
  )
}

export default App