import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import data from '../data.json'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [item, setItem] = useState({})
  useEffect(() => {
    let promise = new Promise((resolve, reject) => {
      resolve(data)
    })
    promise.then(data => setItem(...data.filter(item => item.id == id )))

  }, []);
  return (
    
      <ItemDetail
        item={item}
      />
    
  );
}
export default ItemDetailContainer;