import React from 'react';

const Item = (props) => {
    const {name, price, id, onSelect} = props;

    const clickItem = (e) => {
        e.preventDefault();
        const amount = parseInt(e.target.amount.value);
        onSelect({name, amount});
    }

    return (
        <div>
            <h1>{name}</h1>
            <h1>${price}</h1>
            <form onSubmit={clickItem}>
                <input type="number" name="amount" defaultValue="1" min="1"></input>
                <button type="submit">Add to Cart</button>
            </form>
        </div>
    )
}

export default Item;