import { FaShoppingCart } from 'react-icons/fa';
function CartWidget() {
    return (
        <a href='carito'>
        <FaShoppingCart style={{color: 'white', fontSize: '35px', background: 'rgb(33, 37, 41)', }} />
        </a>
     
    )
}

export default CartWidget;