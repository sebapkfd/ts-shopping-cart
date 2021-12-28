import React from 'react';
import { useSelector } from 'react-redux';
import { itemsList } from '../assets/itemsList';
import requeriments from '../functions/requirements';
import Item from './Item';
import Filter from './Filter';
import Display from './Display';
import styles from '../styles/catalog.module.css';

const Catalog = () => {
    const filter = useSelector((state: any) => state.filter);
    const display = useSelector((state: any) => state.display.value);
    const filteredList = itemsList.filter(element => requeriments(element, filter));

    return(
        <div className={styles.page}>
            <div className={styles.filterSection}>
                <Filter />
            </div>
            <div className={styles.itemsSection}>
                <Display />
                <div className={styles[display]}>
                    {filteredList.map(item => {
                        return (
                            <Item 
                                item={item}
                                key={item.id}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Catalog;