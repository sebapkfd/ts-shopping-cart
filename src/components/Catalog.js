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
                        item={item}
                        onSelect={handleSelect}
                        key={item.id}
                    />
                )
            })}
        </div>
    )
}

export default Catalog;