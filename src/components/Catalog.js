import React from 'react';
import Item from './Item';
import itemsList from '../assets/itemsList';
import Filter from './Filter';

const filters = {
    brands: ['Asus', 'Acer', 'LG'],
    minPrice: 0,
    maxPrice: 99999,
    minRam: 0,
    minStorage: 0
}

const requeriments = (element) => {
    return (
        element.price >= filters.minPrice && 
        element.price <= filters.maxPrice && 
        element.ram >= filters.minRam &&
        element.storage > filters.minStorage &&
        filters.brands.includes(element.brand)
        );
}

const Catalog = () => {
    const filteredList = itemsList.filter(requeriments);

    return(
        <div>
            <Filter />
            <div className="catalog">
                {filteredList.map(item =>{
                    return (
                        <Item 
                            item={item}
                            key={item.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Catalog;