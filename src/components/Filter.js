import { useDispatch, useSelector } from "react-redux";
import { clearFilter } from "../redux/filterSlice";
import { itemsStorage, itemsRam } from "../assets/itemsList";
import BrandFilter from "./BrandFilter";
import Input from "./Input";
import Select from "./Select";
import ServiceFilter from "./ServiceFilter";
import { useState } from "react";
import Drop from "./Drop";
import styles from '../styles/filter.module.css';

const Filter = () => {
    const [show, setShow] = useState(window.innerWidth > 600);
    const state = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const handleClear = (e) => {
        e.preventDefault();
        dispatch(clearFilter());
    }

    return (
        <form className={styles.container}>
            <Drop values={{ title: 'Filter by', show, setShow }}/>
            {(show) ? (
                <div className={styles.content}>
                    <Input defaultVal={state.minPrice} name={'minPrice'} />
                    <Input defaultVal={state.maxPrice} name={'maxPrice'} />
                    <Select list={itemsStorage} name={'storage'} />
                    <Select list={itemsRam} name={'ram'} />
                    <BrandFilter />
                    <ServiceFilter />
                    <button onClick={(e)=> handleClear(e)}>Clear</button>
                </div>
            ): null}
        </form>
    )
}

export default Filter;