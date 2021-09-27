import { itemsBrands } from "../assets/itemsList";
import { setBrands } from "../redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const BrandFilter = () => {
    const [showBrands, setShowBrands] = useState(true);
    const checked = useSelector(state => state.filter.brands);
    const dispatch = useDispatch();

    const expandLogo = <span className="material-icons">expand_more</span>
    const hideLogo = <span className="material-icons">expand_less</span>

    return (
        <div>
            <div onClick={() => setShowBrands(!showBrands)}>
                <label>Brands</label>
                {(showBrands) ? hideLogo : expandLogo}
            </div>
            {(showBrands) ? (itemsBrands.map(item => {
                return(
                    <div key={`${item.brand}Opt`} className='brand-option'>
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