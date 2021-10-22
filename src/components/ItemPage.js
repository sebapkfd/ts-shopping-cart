import React from 'react';
import { useParams } from 'react-router-dom';
import { itemsList } from '../assets/itemsList';
import { Redirect } from 'react-router';
import formatStorage from '../functions/storageFormat';
import ItemPageForm from './ItemPageForm';
import ItemAdded from './ItemAdded';
import processor from '../assets/icons/processor.png';
import ram from '../assets/icons/ram.png';
import storage from '../assets/icons/storage.png';
import shipment from '../assets/icons/shipment.png';
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
                <div>
                    <div className={styles.property}>
                        <img src={processor} alt="cpu"/>
                        <p>{item.cpu}</p>
                    </div>
                    <div className={styles.property}>
                        <img src={ram} alt="ram"/>
                        <p>{item.ram}GB {item.ramType}</p>
                    </div>
                    <div className={styles.property}>
                        <img src={storage} alt="storage"/>
                        <p>{formatStorage(item.storage)} {item.storageType}</p>
                    </div>
                    {(item.shipping) ? (
                        <div className={styles.property}>
                            <img src={shipment} alt="shipment"/>
                            <p>Shipment available</p>
                        </div>
                    ): null}
                    {(item.pickUp) ? (
                        <div className={styles.property}>
                            <span class="material-icons">storefront</span>
                            <p>Available in store</p>
                        </div>
                    ): null}
                    <ItemAdded id={item.id}/>
                </div>
                <ItemPageForm item={item}/>
            </div>
        </div>
    )
}

export default ItemPage;