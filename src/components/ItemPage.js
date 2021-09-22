import React from 'react';
import { useParams } from 'react-router-dom';
import { itemAdded } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import itemsList from '../assets/itemsList';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import AddButton from './AddButton';
import formatStorage from '../functions/storageFormat';
import AddItemOptions from './AddItemOptions';

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
        <div className='item-page'>
            <div className="item-page__img">
                <img src={`${item.imgSrc}`} alt={`${item.name}`} />
            </div>
            <div className="item-page__info">
                <h3>{item.name}</h3>
                <p>Processor: {item.cpu}</p>
                <p>RAM: {item.ram}GB {item.ramType}</p>
                <p>Storage: {formatStorage(item.storage)} {item.storageType}</p>
                <p>Price: US$ {item.price}</p>
                <p>Stock: {item.stock}</p>
                <form onSubmit={(e) => clickItem(e)}>
                    <AddItemOptions item={item} />
                    <Link to='/shopping-cart/catalog'>
                        <button>
                            Back to catalog
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default ItemPage;