import React from 'react';
import { useParams } from 'react-router-dom';
import { itemsList } from '../assets/itemsList';
import { Redirect } from 'react-router';
import formatStorage from '../functions/storageFormat';
import styles from '../styles/itemPage.module.css';
import ItemPageForm from './ItemPageForm';

const ItemPage = () => {
    const { id } = useParams();
    const item = itemsList.find(item =>item.id === id);

    if (!item) {
        return <Redirect to='/shopping-cart/catalog'/>
    }

    return (
        <div className={styles.page}>
            <div className={styles.imgSection}>
                <img src={`${item.imgSrc}`} alt={`${item.name}`} />
            </div>
            <div className={styles.infoSection}>
                <p className={styles.name}>{item.name}</p>
                <p>Price: US$ {item.price}</p>
                <p>Processor: {item.cpu}</p>
                <p>RAM: {item.ram}GB {item.ramType}</p>
                <p>Storage: {formatStorage(item.storage)} {item.storageType}</p>
                <p>Stock: {item.stock}</p>
                <p>Shipment available: {(item.shipping) ? 'Yes' : 'No'}</p>
                <p>Store pickup: {(item.pickUp) ? 'Yes' : 'No'}</p>
                <ItemPageForm item={item}/>
            </div>
        </div>
    )
}

export default ItemPage;