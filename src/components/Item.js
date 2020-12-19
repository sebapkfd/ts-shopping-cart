import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const {item} = props;
    return (
        <div>
            <div className="ItemCardDiv">
                <img src={`${item.imgSrc}`} alt={`${item.name}`} />
            </div>
            <div className="ItemCardInfo">
                <Link to={`/catalog/${item.id}`}>
                    <h3>Name: {item.name}</h3>
                    <h3>Price: {item.price}</h3>
                </Link>
            </div>
        </div>
    )
}

export default Item;