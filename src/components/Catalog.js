import React from 'react';
import Item from './Item';
import listofItems from './listofItems';

const Catalog = () => {

    return(
        <div className="catalog">
            {listofItems.map(item =>{
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