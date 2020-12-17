import React from 'react';
import Item from './Item';

const Cart = (props) => {

    const {items, onClean} = props;
    const selectedItems = items.filter( item => item.amount > 0);

    const cleanItems = (e) => {
        e.preventDefault();
        onClean();
    }

    return(
        <div>
            <button onClick={cleanItems}>Clean</button>
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