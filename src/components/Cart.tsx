import React from 'react';
import { clearCart } from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import Display from './Display';
import styles from '../styles/cart.module.css';

const Cart = () => {
    const selectedItems = useSelector((state: any) => state.cart)
    const prices = selectedItems.map((item: any) => item.price*item.amount);
    const totalToPay = (prices.length > 0) ? prices.reduce((acc: number, cv: number) => acc + cv) : 0;
    const dispatch = useDispatch();
    const display = useSelector((state: any) => state.display.value);

    const cleanItems = (e: any) => {
        e.preventDefault();
        dispatch(clearCart());
    }

    const payItems = (e: any) => {
        if(totalToPay > 0){
            alert('Thanks for your purchase!');
            cleanItems(e);
        }
    }

    return (
        <div className={styles.page}>
            <div className={styles.options}>
                <p>Total to pay: US$ {totalToPay}</p>
                <button onClick={payItems} className={styles.button}>Pay</button>
                <button onClick={cleanItems} className={styles.button}>Clean</button>
            </div>
            {(selectedItems.length > 0) ? <Display /> : null}
            {(selectedItems.length > 0) ? (
                <div className={styles[display]}>
                    {selectedItems.map((item: any) =>{
                        return <CartItem item={item} key={item.id} />
                    })}
                </div>
            ): null}
        </div>
    )
}

export default Cart;