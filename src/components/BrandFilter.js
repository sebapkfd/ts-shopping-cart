import { itemsBrands } from "../assets/itemsList";
import { setBrands } from "../redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const BrandFilter = () => {
    const checked = useSelector(state => state.filter.brands)
    const dispatch = useDispatch();

    const handleClick = (e) => {
        const brand = e.target.value;
        dispatch(setBrands({ brand }));
    }

    return (
        <div>
            {itemsBrands.map(brand => {
                return(
                    <div key={`${brand}Opt`}>
                        <input
                            type='checkbox'
                            checked={checked[brand]}
                            onChange={e=> handleClick(e)}
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