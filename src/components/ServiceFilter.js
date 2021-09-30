import { useDispatch, useSelector } from "react-redux";
import { setNewFilter } from "../redux/filterSlice";
import { useState } from "react";
import Drop from "./Drop";

const ServiceFilter = () => {
    const [show, setShow] = useState(true);
    const pickUpChecked = useSelector(state => state.filter.pickUp);
    const shippingChecked = useSelector(state => state.filter.shipping);
    const dispatch = useDispatch();

    return (
        <div className={'service-filter'}>
        <Drop values={{ title: 'Brands', show, setShow }}/>
            {(show) ? (
                <div className={'service-options'}>
                    <div>
                        <input
                        type='checkbox'
                        checked={pickUpChecked}
                        onChange={() => dispatch(setNewFilter({ key: 'pickUp', value: !pickUpChecked }))}
                        />
                        <label>Pick Up</label>
                    </div>
                    <div>
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