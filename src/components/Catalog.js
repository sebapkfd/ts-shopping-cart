import React from 'react';
import { useSelector } from 'react-redux';
import { itemsList } from '../assets/itemsList';
import requeriments from '../functions/requirements';
import Item from './Item';
import Filter from './Filter';
import Display from './Display';

const Catalog = () => {
    const filter = useSelector(state => state.filter);
    const display = useSelector(state => state.display.value);
    const filteredList = itemsList.filter(element => requeriments(element, filter));

    return(
        <div className='catalog-page'>
            <Filter />
            <Display />
            <div className={`catalog-${display}`}>
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