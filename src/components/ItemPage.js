import React from 'react';
import {useParams} from 'react-router-dom';

const ItemPage = (props) => {
    const {items, onSelect} = props;
    const {id} = useParams();
    const selectedItem = items.filter(item => item.id === id)[0];
    
    const clickItem = (e) => {
        e.preventDefault();
        const pickedItem = {
            name: selectedItem.name,
            amount: parseInt(e.target.amount.value)
        }
        onSelect(pickedItem);
    }

    const defaultAmount = (selectedItem.amount === 0) ? 1: selectedItem.amount;

    return (
        <div className='ItemPage'>
            <div className="ItemImgDiv">
                <img src={`${selectedItem.imgSrc}`} alt={`${selectedItem.name}`} />
            </div>
            <div className="ItemInfoDiv">
                <h3>Name: {selectedItem.name}</h3>
                <h3>Price: ${selectedItem.price}</h3>
                <form onSubmit={clickItem}>
                    <input type="number" name="amount" defaultValue={defaultAmount} min="1"></input>
                    <button type="submit" className="HomeButton">Add to Cart</button>
                </form>
            </div>
        </div>
    )
}

export default ItemPage;