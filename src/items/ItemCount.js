import { useState } from "react";


const ItemCount = ({ stock, initial }) => {
   

    const [count, setCount] = useState(1);

    let maxProducts = stock;
  

    const addHandler = () => {
        if (!(count >= maxProducts)) {
            setCount(count + 1);
        }
    }

    const reduceItems = () => {
        if (!(count <= initial)) {
            setCount(count - 1);
        }
    }

    return (

        <div className="ContainerItemCount">
            <button type="button" className="buttonItemCount" onClick={reduceItems}>-</button>
            <strong>{count}  </strong>
            <button type="button" className="buttonItemCount" onClick={addHandler}>+</button>
        </div>

    )
}

export default ItemCount;