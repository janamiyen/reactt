import ItemList from './ItemList'
import React, { useState, useEffect } from 'react'
import { customFecth } from './utils/customfetch'
import data from '../data.json'
import { useParams } from 'react-router-dom'


let ItemListContainer = (props) => {
const {categoria} =  useParams ()
console.log (categoria)
  let [element, setElement] = useState([])

  useEffect(() => {
    customFecth(data)
      .then(data => {
        if (categoria) {
          setElement(data.filter(item => item.categoria == categoria))
        } else {
          setElement(data)  
        }
      })
  },[categoria] );
console.log(element)
  return (
    <div className='p-7 d-inline-flex flex-wrap gap-3 order-3' id="dataBurger">
      {element.map((item, index) => <ItemList items={item} key={index} />)}
    </div>
  );

}


export default ItemListContainer




