import React from 'react';
import Item from './Item';
import { clearCart, itemRemoved } from '../redux/cartSlide';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const selectedItems = useSelector(state => state.cart)
    const prices = selectedItems.map(item => item.price*item.amount);
    const totalToPay = (prices.length > 0) ? prices.reduce((acc, cv) => acc + cv) : 0;
    const dispatch = useDispatch();

    const cleanItems = (e) => {
        e.preventDefault();
        dispatch(clearCart())
    }

    const payItems = (e) => {
        if(totalToPay > 0){
            alert('Thanks for your purchase!');
            cleanItems(e);
        }
    }

    const removeitem = (id) => {
        dispatch(itemRemoved({ id }))
    }

    return(
        <div className="cart">
            <div className="cart__options">
                <h3>Total to pay: US$ {totalToPay}</h3>
                <button onClick={payItems}>Pay</button>
                <button onClick={cleanItems}>Clean</button>
            </div>
            <div className="cart__items">
                {selectedItems.map(item =>{
                    return (
                        <div key={item.id} className="cart-item">
                            <Item item={item}/>
                            <h3>Amount: {item.amount}</h3>
                            <h3>Total price: US$ {item.price*item.amount}</h3>
                            <button onClick={() => removeitem(item.id)}>
                                Remove
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart;