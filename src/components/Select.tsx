import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewFilter } from "../redux/filterSlice";
import formatStorage from "../functions/storageFormat";
import { startCase } from "lodash";
import styles from '../styles/filter.module.css';

interface Values {
    list: any[],
    name: string
}

const Select = ({ list, name }: Values) => {
    const dispatch = useDispatch();
    const defaultValue = useSelector((state: any) => state.filter[name]);
    
    return (
        <div className={styles.input}>
            <label>{startCase(name)}</label>
            <select 
                defaultValue={defaultValue} 
                onChange={e => dispatch(setNewFilter({key: name, value: parseInt(e.target.value)}))}>
                {list.map(item => {
                    return <option value={`${item[name]}`} key={`${item[name]}Option`}>
                        {formatStorage(item[name])} ({item.amount})
                    </option>
                })}
            </select>
        </div>
    )
}

export default Select;