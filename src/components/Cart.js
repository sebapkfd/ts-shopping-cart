import React from 'react';
import { clearCart } from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import Display from './Display';
import styles from '../styles/cart.module.css';

const Cart = () => {
    const selectedItems = useSelector(state => state.cart)
    const prices = selectedItems.map(item => item.price*item.amount);
    const totalToPay = (prices.length > 0) ? prices.reduce((acc, cv) => acc + cv) : 0;
    const dispatch = useDispatch();
    const display = useSelector(state => state.display.value);

    const cleanItems = (e) => {
        e.preventDefault();
        dispatch(clearCart());
    }

    const payItems = (e) => {
        if(totalToPay > 0){
            alert('Thanks for your purchase!');
            cleanItems(e);
        }
    }

    return (
        <div className={styles.page}>
            <div className={styles.options}>
                <h3>Total to pay: US$ {totalToPay}</h3>
                <button onClick={payItems} className={styles.button}>Pay</button>
                <button onClick={cleanItems} className={styles.button}>Clean</button>
            </div>
            <Display />
            <div className={styles[`${display}Items`]}>
                {selectedItems.map(item =>{
                    return <CartItem item={item} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default Cart;