import React from 'react'

const ItemListContainer = (props) => {
 
    return (
      <>
<h2>{props.name} </h2>
<p>Precio: {props.precio} </p>
<p> {props.descripcion} </p>
     <hr />
      </>
    );
  }
export default ItemListContainer