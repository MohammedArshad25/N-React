import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    console.log(cartItems)

    const handleClear = () => {
        dispatch(clearCart())
    }

 return (
    <div className="cart-wrapper">
            {cartItems.length === 0  ? <div> cart is empty </div> :
            <button className="clear-cart-btn" onClick={handleClear}>Clear Cart</button>}

    </div>
  )
}


export default Cart;
