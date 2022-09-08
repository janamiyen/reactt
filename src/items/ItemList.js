import React from 'react'
import ItemCount from './ItemCount'

const ItemList = ({items}) => {
    console.log(items)

  return (
    <>
    
    <div className="d-flex flex-column border p-3" style={{width:"18rem"}} >
    <a href='Home'>{items.imagen} </a>
    <h3>{items.name}</h3>
    <p>${items.precio}</p>
    <p>{items.descripcion}</p>
   <div><ItemCount stock='8' initial='1'/></div>
    </div>
    
    </>
  )
}

export default ItemList