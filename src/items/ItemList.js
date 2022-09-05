import React from 'react'


const ItemList = ({items}) => {
    console.log(items)
  return (
    <>
    
    <div className="d-flex flex-column border p-3" style={{width:"18rem"}} >
    <h3>{items.name}</h3>
    <p>${items.precio}</p>
    <p>{items.descripcion}</p>
    </div>
    
    </>
  )
}

export default ItemList