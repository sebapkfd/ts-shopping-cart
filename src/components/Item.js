import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const {item} = props;
    return (
        <Link to={`/shopping-cart/catalog/${item.id}`}>
            <div className="item-card">
                <div className="item-card__img">
                    <img src={`${item.imgSrc}`} alt={`${item.name}`} />
                </div>
                <div className="item-card__info">
                    <h3>{item.name}</h3>
                    <h3>US$ {item.price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Item;