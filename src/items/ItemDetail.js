import React from 'react';
import ItemCount from "./ItemCount";





const ItemDetail = ({ item }) => {

    return (
        <>
            <div className="d-flex flex-column border p-3" style={{ width: "18rem" }} >
                <h3>{item.name}</h3>
                <img src={process.env.PUBLIC_URL + '/img/' + item.imagen} alt={item.name} className="imgBurgerS" />
                <p className="parrafo">${item.precio}</p>
                <p className="parrafo">{item.descripcion}</p>
                <ItemCount stock={item.stock} initial='1' />
            </div>

        </>
    )
}
export default ItemDetail;