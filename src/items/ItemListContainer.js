import ItemList from './ItemList'
import React, { useState, useEffect } from 'react'
import { customFecth } from './utils/customfetch'



let ItemListContainer = (props) => {

  let data = [
    {
      id: 0,
      name: "Ckrusty Burger",
      precio: 45,
      descripcion: "Quizás sean las dos hamburguesas de carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla y la frescura de la lechuga o el crocante del pepino, lo que la hace la hamburguesa más famosa del mundo. Un sabor único.",
      imagen: "burger.jpg",
      stock: 7,
    },
    {
      id: 1,
      name: "Happy Burger",
      precio: 55,
      descripcion: "La belleza radica en la simpleza de las cosas. Una hamburguesa que no se anda con vueltas. La perfecta combinación entre la mejor carne 100% vacuna y dos quesos que lo rodean, junto con el toque del kétchup, mostaza y la cebolla fresca.",
      imagen: "burger3.jpg",
      stock: 8,
    },
    {
      id: 2,
      name: "Burger King",
      precio: 70,
      descripcion: "Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza.",
      imagen: "burger2.jpg",
      stock: 3,
    },
    {
      id: 3,
      name: "Burger Bootstrap",
      precio: 70,
      descripcion: "Una hamburguesa que sabe de sensaciones. La textura del pollo hace un gran equipo con la suavidad de la mayonesa y un colchón de lechuga.",
      imagen: "burger5.jpg",
      stock: 7,
    },
    {
      id: 4,
      name: "Burger Bootstrap",
      precio: 90,
      descripcion: "Una hamburguesa que sabe de sensaciones. La textura del pollo hace un gran equipo con la suavidad de la mayonesa y un colchón de lechuga.",
      imagen: "burger5.jpg",
      stock: 3,
    },
    {
      id: 5,
      name: "Burger Bootstrap",
      precio: 90,
      descripcion: "Una hamburguesa que sabe de sensaciones. La textura del pollo hace un gran equipo con la suavidad de la mayonesa y un colchón de lechuga.",
      imagen: "burger5.jpg",
      stock: 2,
    },
  ]


  let [element, setElement] = useState([])

  useEffect(() => {
    customFecth(data)
      .then(data => {
        setElement(data)
      })
  }, [])

  return (
    <div className='p-7 d-inline-flex gap-3 order-3' id="dataBurger">
      {element.map((item, index) => <ItemList items={item} key={index} />)}
    </div>
  );

}


export default ItemListContainer




