import { itemsBrands } from "../assets/itemsList";
import { setBrands } from "../redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Drop from "./Drop";

const BrandFilter = () => {
    const [show, setShow] = useState(true);
    const checked = useSelector(state => state.filter.brands);
    const dispatch = useDispatch();

    return (
        <div>
            <Drop values={{ title: 'Brands', show, setShow }}/>
            {(show) ? (itemsBrands.map(item => {
                return(
                    <div key={`${item.brand}Opt`} className={'option'}>
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