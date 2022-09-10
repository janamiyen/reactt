import React from 'react'
import ItemCount from './ItemCount'

const ItemList = ({items}) => {
    console.log(items)

  return (
    <>
    
    <div className="d-flex flex-column border p-3" style={{width:"18rem"}} >
    <h3>{items.name}</h3>
   <div><img src={ process.env.PUBLIC_URL + '/img/' + items.imagen} alt={items.name} className="imgBurgerS"/></div> 
    <p>${items.precio}</p>
    <p>{items.descripcion}</p>
   <div><ItemCount stock='8' initial='1'/></div>
    </div>
    
    </>
  )
}

export default ItemList