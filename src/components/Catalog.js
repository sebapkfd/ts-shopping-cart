import React from 'react';
import Item from './Item';

const Catalog = (props) => {
    const {items} = props;

    return(
        <div className="CatalogDiv">
            {items.map(item =>{
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