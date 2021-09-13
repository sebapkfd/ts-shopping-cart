import { itemsBrands } from "../assets/itemsList";
import { setBrands } from "../redux/filterSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const brandsChecked = {
    Asus : true,
    Acer: true,
    LG: true,
    Razer: true,
    MSI: true
}

const BrandFilter = () => {
    const [checked, setChecked] = useState(brandsChecked);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        const brand = e.target.value;
        dispatch(setBrands({ brand }));
        setChecked({...checked, [brand]: !checked[brand]})
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