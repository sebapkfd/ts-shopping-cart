import { useDispatch, useSelector } from "react-redux";
import { setNewFilter } from "../redux/filterSlice";
import { useState } from "react";

const ServiceFilter = () => {
    const [showServices, setShowServices] = useState(true)
    const pickUpChecked = useSelector(state => state.filter.pickUp);
    const shippingChecked = useSelector(state => state.filter.shipping);
    const dispatch = useDispatch();

    const expandLogo = <span className="material-icons">expand_more</span>
    const hideLogo = <span className="material-icons">expand_less</span>

    return (
        <div className={'service-filter'}>
            <div onClick={() => setShowServices(!showServices)}>
                <label>Service options</label>
                {(showServices) ? hideLogo : expandLogo}
            </div>
            {(showServices) ? (
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