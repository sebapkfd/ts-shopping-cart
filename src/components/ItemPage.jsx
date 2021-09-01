import React from 'react';
import { useParams } from 'react-router-dom';
import { itemAdded } from '../redux/cartSlide';
import { useDispatch } from 'react-redux';
import itemsList from '../assets/itemsList';

const ItemPage = () => {
    const {id} = useParams();
    const selectedItem = itemsList.find(item =>item.id === id);
    const dispatch = useDispatch();
    
    const clickItem = (e) => {
        e.preventDefault();
        dispatch(itemAdded({...selectedItem, amount: parseInt(e.target.amount.value)}));
    }

    const defaultAmount = (selectedItem.amount === 0) ? 1: selectedItem.amount;

    return (
        <div className='item-page'>
            <div className="item-page__img">
                <img src={`${selectedItem.imgSrc}`} alt={`${selectedItem.name}`} />
            </div>
            <div className="item-page__info">
                <h2>Computer's Specs</h2>
                <br></br>
                <h3>Name: {selectedItem.name}</h3>
                <h4>Processor: {selectedItem.cpu}</h4>
                <h4>RAM: {selectedItem.ram}</h4>
                <h4>Storage: {selectedItem.storage}</h4>
                <h3>Price: US$ {selectedItem.price}</h3>
                <form onSubmit={clickItem}>
                    <input type="number" name="amount" defaultValue={defaultAmount} min="1"/>
                    <button type="submit">Add to Cart</button>
                </form>
            </div>
        </div>
    )
}

export default ItemPage;