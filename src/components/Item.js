import React from 'react';
import ItemPage from './ItemPage';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const {item} = props;
    return (
        <div>
            <Link to={{
                pathname: `/catalog/${item.id}`,
                ItemName: { itemName: item.name}
            }}>
                <h1>Name: {item.name}</h1>
                <h1>Price: {item.price}</h1>
            </Link>
        </div>
    )
}

export default Item;