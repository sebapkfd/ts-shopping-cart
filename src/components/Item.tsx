import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../styles/item.module.css';

const Item = ({ item }: any) => {
    const display = useSelector((state: any) => state.display.value);    

    return (
        <Link to={`/ts-shopping-cart/catalog/${item.id}`}>
            <div className={styles[`${display}Card`]}>
                <div className={styles[`${display}CardImg`]}>
                    <img src={`${item.imgSrc}`} alt={`${item.name}`} />
                </div>
                <div className={styles[`${display}CardInfo`]}>
                    <h3>{item.name}</h3>
                    <p className={styles.price}>US$ {item.price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item;