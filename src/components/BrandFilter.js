import { itemsBrands } from "../assets/itemsList";
import { setBrands } from "../redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const BrandFilter = () => {
    const checked = useSelector(state => state.filter.brands);
    const dispatch = useDispatch();

    return (
        <div>
            {itemsBrands.map(item => {
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
            })}
        </div>
    )
}

export default BrandFilter;