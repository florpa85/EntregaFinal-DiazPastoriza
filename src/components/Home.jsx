import React from 'react'
import HomeImg from "../assets/Home.jpg"

const Home = () => {
  return (
    <>
    <div className="div_novedades">
      <h1 className="piezas_h1">Nuevas Piezas</h1>
      <h2 className="piezas_h2">100% Hechas a mano</h2>
    </div>
    <div className="back"><img src={HomeImg} alt="" /></div>
  
</>
  )
}

export default Home