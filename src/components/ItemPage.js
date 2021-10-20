import React from 'react';
import { useParams } from 'react-router-dom';
import { itemsList } from '../assets/itemsList';
import { Redirect } from 'react-router';
import formatStorage from '../functions/storageFormat';
import ItemPageForm from './ItemPageForm';
import processor from '../assets/icons/processor.png';
import ram from '../assets/icons/ram.png';
import storage from '../assets/icons/storage.png';
import styles from '../styles/itemPage.module.css';

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
                <p className={styles.price}>US$ {item.price}</p>
                <div className={styles.property}>
                    <img src={processor} alt="cpu"/>
                    <p>{item.cpu}</p>
                </div>
                <div className={styles.property}>
                    <img src={ram} alt="cpu"/>
                    <p>{item.ram}GB {item.ramType}</p>
                </div>
                <div className={styles.property}>
                    <img src={storage} alt="cpu"/>
                    <p>{formatStorage(item.storage)} {item.storageType}</p>
                </div>
                {/* <p>Stock: {item.stock}</p>
                <p>Shipment available: {(item.shipping) ? 'Yes' : 'No'}</p>
                <p>Store pickup: {(item.pickUp) ? 'Yes' : 'No'}</p> */}
                <ItemPageForm item={item}/>
            </div>
        </div>
    )
}

export default ItemPage;