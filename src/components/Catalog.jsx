import React from 'react';
import Item from './Item';
import itemsList from '../assets/itemsList';

const Catalog = () => {
    return(
        <div className="catalog">
            {itemsList.map(item =>{
                return (
                    <Item 
                        item={item}
                        key={item.id}
                    />
                )
            })}
        </div>
    )
}

export default Catalog;