import React from 'react';
import Item from './Item';

const Catalog = (props) => {

    const {items} = props;
    const amounts = items.map(item => item.amount);
    const amountInCart = amounts.reduce((acc, cv) => acc + cv);

    return(
        <div>
            <h1>In cart: {amountInCart}</h1>
            {items.map(item =>{
                return (
                    <Item 
                        item={item}
                        key={item.id}
                    />
                )
            })}
        </div>
    )
}

export default Catalog;