import React from "react";
import { itemsBrands } from "../assets/itemsList";
import { setBrands } from "../redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Drop from "./Drop";
import styles from '../styles/serviceFilter.module.css'

const BrandFilter = () => {
    const [show, setShow] = useState(true);
    const checked = useSelector((state: any) => state.filter.brands);
    const dispatch = useDispatch();

    return (
        <div>
            <Drop {...{title: 'Brands', show, setShow}}/>
            {(show) ? (itemsBrands.map(item => {
                return(
                    <div key={`${item.brand}Opt`} className={styles.option}>
                        <input
                            type='checkbox'
                            checked={checked[item.brand]}
                            onChange={e=> dispatch(setBrands({ brand: e.target.value }))}
                            value={item.brand}
                        />
                        <label>{item.brand} ({item.amount})</label>
                    </div>
                )
            })) : null }
        </div>
    )
}

export default BrandFilter;