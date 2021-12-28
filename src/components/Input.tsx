import React from "react";
import { useDispatch } from "react-redux";
import { setNewFilter } from "../redux/filterSlice";
import { startCase } from "lodash";
import styles from '../styles/filter.module.css';

interface Values {
    defaultVal: number,
    name: string
}

const Input = ({ defaultVal, name }: Values) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.input}>
            <label>{startCase(name)}</label>
            <input
                type='number'    
                name={name}
                min='0'
                max='3000'
                defaultValue={defaultVal}
                onChange={(e) => dispatch(setNewFilter({key: name, value: parseInt(e.target.value)}))}
            />
        </div>
    )

}

export default Input;