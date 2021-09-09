import React from 'react';
import Item from './Item';
import itemsList from '../assets/itemsList';
import Filter from './Filter';
import { useSelector } from 'react-redux';

const requeriments = (element, filter) => {
    return (
        element.price >= filter.minPrice && 
        element.price <= filter.maxPrice && 
        element.ram >= filter.minRam &&
        element.storage > filter.minStorage &&
        filter.brands.includes(element.brand)
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