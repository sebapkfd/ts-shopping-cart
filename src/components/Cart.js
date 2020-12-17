import React from 'react';
import Item from './Item';

const Cart = (props) => {

    const {items} = props;

    const selectedItems = items.filter( item => item.amount > 0);

    return(
        <div>
            {selectedItems.map(item =>{
                return (
                    <div key={item.id}>
                        <Item 
                        name={item.name}
                        price={item.price}
                        />
                        <h2>Total price: {item.price*item.amount}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart;