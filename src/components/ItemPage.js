import React from 'react';
import { useParams } from 'react-router-dom';
import { itemAdded } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import itemsList from '../assets/itemsList';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import AddButton from './AddButton';

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

    const defaultAmount = (item.amount === 0) ? 1: item.amount;
    const storage = (item.storage >= 1024) ? `${item.storage/1024}TB`: `${item.storage}GB`;

    return (
        <div className='item-page'>
            <div className="item-page__img">
                <img src={`${item.imgSrc}`} alt={`${item.name}`} />
            </div>
            <div className="item-page__info">
                <h2>Computer's Specs</h2>
                <br></br>
                <h3>Name: {item.name}</h3>
                <h4>Processor: {item.cpu}</h4>
                <h4>RAM: {item.ram}GB {item.ramType}</h4>
                <h4>Storage: {storage} {item.storageType}</h4>
                <h3>Price: US$ {item.price}</h3>
                <form onSubmit={clickItem}>
                    <input type="number" name="amount" defaultValue={defaultAmount} min="1"/>
                    <AddButton id={id} />
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