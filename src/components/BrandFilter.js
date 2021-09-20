import { itemsBrands } from "../assets/itemsList";
import { setBrands } from "../redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const BrandFilter = () => {
    const checked = useSelector(state => state.filter.brands)
    const dispatch = useDispatch();

    return (
        <div>
            {itemsBrands.map(brand => {
                return(
                    <div key={`${brand}Opt`} className='brand-option'>
                        <input
                            type='checkbox'
                            checked={checked[brand]}
                            onChange={e=> dispatch(setBrands({ brand: e.target.value }))}
                            value={brand}
                        />
                        <label>{brand}</label>
                    </div>
                )
            })}
        </div>
    )
}

export default BrandFilter;