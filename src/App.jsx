import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Conctact from './components/Conctact'
import Cart from './components/Cart'




const App=() => {

  return (
    <BrowserRouter>
      
      <NavBar/>
      
      <Routes>
      
        <Route exact path= "/" element={<Home />}/>
        <Route exact path= "/about" element={<About />}/>
        <Route exact path= "/contact" element={<Conctact />}/>
        <Route exact path= "/cart" element={<Cart />}/>
        <Route exact path= "/category/:category" element={<ItemListContainer />}/>
        <Route exact path= "/item/:id" element={<ItemDetailContainer />}/>



      </Routes>
         
    </BrowserRouter>
  )
}

export default App