import React from 'react'
import Item from './Item'


const ItemList = ({productos}) => {
  return (
    <>
    {productos.map((p) =>{
        return(
           <Item
                key={p.id}
                nombre={p.nombre}
                descripcion={p.descripcion}
                precio={p.precio}
                imagen={p.imagen}
                id={p.id}
                stock={p.stock}
                />
        )
    })
    
    }
    
    </>
  )
}

export default ItemList