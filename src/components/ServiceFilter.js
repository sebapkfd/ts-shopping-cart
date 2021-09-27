import { useDispatch, useSelector } from "react-redux";
import { setNewFilter } from "../redux/filterSlice";

const ServiceFilter = () => {
    const pickUpChecked = useSelector(state => state.filter.pickUp);
    const shippingChecked = useSelector(state => state.filter.shipping);
    const dispatch = useDispatch();

    return (
        <div className={'service-filter'}>
            <label>Service options</label>
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
        </div>
    )

}

export default ServiceFilter;