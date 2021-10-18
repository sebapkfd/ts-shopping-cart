import React from 'react';
import { useParams } from 'react-router-dom';
import { itemAdded } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { itemsList } from '../assets/itemsList';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import formatStorage from '../functions/storageFormat';
import AddItemOptions from './AddItemOptions';
import styles from '../styles/itemPage.module.css';

const ItemPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const item = itemsList.find(item =>item.id === id);

    if (!item) {
        return <Redirect to='/shopping-cart/catalog'/>
    }
    
    const clickItem = (e) => {
        e.preventDefault();
        dispatch(itemAdded({...item, amount: parseInt(e.target.amount.value)}));
    }

    return (
        <div className={styles.page}>
            <div className={styles.imgSection}>
                <img src={`${item.imgSrc}`} alt={`${item.name}`} />
            </div>
            <div className={styles.infoSection}>
                <p className={styles.name}>{item.name}</p>
                <p>Processor: {item.cpu}</p>
                <p>RAM: {item.ram}GB {item.ramType}</p>
                <p>Storage: {formatStorage(item.storage)} {item.storageType}</p>
                <p>Price: US$ {item.price}</p>
                <p>Stock: {item.stock}</p>
                <p>Shipment available: {(item.shipping) ? 'Yes' : 'No'}</p>
                <p>Store pickup: {(item.pickUp) ? 'Yes' : 'No'}</p>
                <form className={styles.form} onSubmit={(e) => clickItem(e)}>
                    <AddItemOptions item={item} />
                    <Link to='/shopping-cart/catalog'>
                        <button className={styles.backButton}>
                            Back to catalog
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default ItemPage;