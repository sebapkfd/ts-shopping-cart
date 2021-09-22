import React from 'react';
import Item from './Item';
import itemsList from '../assets/itemsList';
import Filter from './Filter';
import { useSelector } from 'react-redux';
import requeriments from '../functions/requirements';

const Catalog = () => {
    const filter = useSelector(state => state.filter);
    const filteredList = itemsList.filter(element => requeriments(element, filter));

    return(
        <div className='catalog-page'>
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