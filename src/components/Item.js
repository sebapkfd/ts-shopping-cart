import React from 'react';

const Item = (props) => {
    const {name, price, id, onSelect} = props;

    const clickItem = () => {
        onSelect(name);
    }

    return (
        <div onClick={clickItem}>
            <h1>{name}</h1>
            <h1>${price}</h1>
        </div>
    )
}

export default Item;