import React from 'react';
import Item from './Item';

const Cart = (props) => {

    const {items, onClean} = props;
    const selectedItems = items.filter( item => item.amount > 0);
    const prices = items.map(item => item.price*item.amount);
    const totalToPay = prices.reduce((acc, cv) => acc + cv);

    const cleanItems = (e) => {
        e.preventDefault();
        onClean();
    }

    const payItems = () => {
        if(totalToPay > 0){
            alert('Thanks for your purchase!');
        }
    }

    return(
        <div>
            <button onClick={payItems}>Pay</button>
            <button onClick={cleanItems}>Clean</button>
            <h1>Total to pay: {totalToPay}</h1>
            {selectedItems.map(item =>{
                return (
                    <div key={item.id}>
                        <Item 
                            item={item}
                        />
                        <h2>Amount: {item.amount}</h2>
                        <h2>Total price: {item.price*item.amount}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart;