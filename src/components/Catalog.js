import React from 'react';
import Item from './Item';

const Catalog = (props) => {

    const {items, pickItem} = props;

    const handleSelect = (itemSelected) =>{
        pickItem(itemSelected);
    }

    return(
        <div>
            {items.map(item =>{
                return (
                    <Item 
                        name={item.name}
                        price={item.price}
                        onSelect={handleSelect}
                        key={item.id}
                    />
                )
            })}
        </div>
    )
}

export default Catalog;