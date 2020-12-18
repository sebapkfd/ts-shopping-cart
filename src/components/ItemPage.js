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

    return (
        <div>
            {/* <img src={photo} alt="xd"/> */}
            <h1>Name: {selectedItem.name}</h1>
            <h1>Price: {selectedItem.price}</h1>
            <form onSubmit={clickItem}>
                <input type="number" name="amount" defaultValue="1" min="1"></input>
                <button type="submit">Add to Cart</button>
            </form>
        </div>
    )
}

export default ItemPage;