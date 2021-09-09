import React from 'react';
import Item from './Item';
import itemsList from '../assets/itemsList';
import Filter from './Filter';
import { useSelector } from 'react-redux';

const requeriments = (element, filters) => {
    return (
        element.price >= filters.minPrice && 
        element.price <= filters.maxPrice && 
        element.ram >= filters.minRam &&
        element.storage > filters.minStorage &&
        filters.brands.includes(element.brand)
        );
}

const Catalog = () => {
    const filter = useSelector(state => state.filter)
    const filteredList = itemsList.filter(element => requeriments(element, filter));

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