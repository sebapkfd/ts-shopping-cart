import { itemsBrands } from "../assets/itemsList";
import { addBrand } from "../redux/filterSlice";
import { useDispatch } from "react-redux";

const BrandFilter = () => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(addBrand({ brand: e.target.value}));
    }


    return (
        <div>
            {itemsBrands.map(brand => {
                return(
                    <div key={`${brand}Opt`}>
                        <input
                            type='checkbox'
                            onClick={e=> handleClick(e)}
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