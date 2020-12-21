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

    const payItems = (e) => {
        if(totalToPay > 0){
            alert('Thanks for your purchase!');
            cleanItems(e);
        }
    }

    return(
        <div className="CartDiv">
            <div className="CartOptions">
                <h3>Total to pay: US$ {totalToPay}</h3>
                <button onClick={payItems}>Pay</button>
                <button onClick={cleanItems}>Clean</button>
            </div>
            <div className="CartItems">
                {selectedItems.map(item =>{
                    return (
                        <div key={item.id} className="CartItem">
                            <Item 
                                item={item}
                            />
                            <h3>Amount: {item.amount}</h3>
                            <h3>Total price: US$ {item.price*item.amount}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart;