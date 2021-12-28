import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewFilter } from "../redux/filterSlice";
import { useState } from "react";
import Drop from "./Drop";
import styles from '../styles/serviceFilter.module.css';

const ServiceFilter = () => {
    const [show, setShow] = useState(true);
    const pickUpChecked = useSelector((state: any) => state.filter.pickUp);
    const shippingChecked = useSelector((state: any) => state.filter.shipping);
    const dispatch = useDispatch();

    return (
        <div className={styles.menu}>
            <Drop {...{ title: 'Service options', show, setShow }}/>
            {(show) ? (
                <div className={styles.options}>
                    <div className={styles.option}>
                        <input
                        type='checkbox'
                        checked={pickUpChecked}
                        onChange={() => dispatch(setNewFilter({ key: 'pickUp', value: !pickUpChecked }))}
                        />
                        <label>Pick Up</label>
                    </div>
                    <div className={styles.option}>
                        <input
                            type='checkbox'
                            checked={shippingChecked}
                            onChange={() => dispatch(setNewFilter({ key: 'shipping', value: !shippingChecked }))}
                        />
                        <label>Shipping </label>
                    </div>
                </div>) : null}
        </div>
    )

}

export default ServiceFilter;