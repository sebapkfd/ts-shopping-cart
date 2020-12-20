import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const {item} = props;
    return (
        <Link to={`/catalog/${item.id}`}>
            <div className="ItemCardDiv">
                <div className="ItemCardImg">
                    <img src={`${item.imgSrc}`} alt={`${item.name}`} />
                </div>
                <div className="ItemCardInfo">
                    <h3>Name: {item.name}</h3>
                    <h3>Price: ${item.price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Item;