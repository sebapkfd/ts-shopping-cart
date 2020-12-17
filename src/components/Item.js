import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const {item, onSelect} = props;
    console.log(item);
    return (
        <div>
            <Link to={{
                pathname: `/catalog/${item.id}`,
                state: { itemName: item.name}
            }}>
                <h1>{item.name}</h1>
            </Link>
        </div>
    )
}

export default Item;