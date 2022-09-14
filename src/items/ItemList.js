import React, {  } from 'react'
import { } from 'react-bootstrap'
import ItemCount from './ItemCount'



const ItemList = ({items}) => {

  return (
    <>
    
    <div className="d-flex flex-column border p-3" style={{width:"18rem"}} >
    <h3>{items.name}</h3>
   <img src={ process.env.PUBLIC_URL + '/img/' + items.imagen} alt={items.name} className="imgBurgerS"/> 
    <p className="parrafo">${items.precio}</p>
    <p className="parrafo">{items.descripcion}</p>
   <ItemCount stock='8' initial='1'/>
    </div>
    </>
  )
}

export default ItemList 