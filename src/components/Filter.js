import { useDispatch, useSelector } from "react-redux";
import { clearFilter } from "../redux/filterSlice";
import { itemsStorage, itemsRam } from "../assets/itemsList";
import BrandFilter from "./BrandFilter";
import Input from "./Input";
import Select from "./Select";
import ServiceFilter from "./ServiceFilter";
import { useState } from "react";

const Filter = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.filter);
    const [showBrands, setShowBrands] = useState(true);

    const handleClear = (e) => {
        e.preventDefault();
        dispatch(clearFilter());
    }

    const expandLogo = <span class="material-icons">expand_more</span>
    const hideLogo = <span class="material-icons">expand_less</span>

    return (
        <form className={'filter'}>
            <label>Min price</label>
            <Input defaultVal={state.minPrice} name={'minPrice'} />
            <label>Max price</label>
            <Input defaultVal={state.maxPrice} name={'maxPrice'} />
            <label>Storage</label>
            <Select list={itemsStorage} name={'storage'} />
            <label>RAM</label>
            <Select list={itemsRam} name={'ram'} />
            <div onClick={() => setShowBrands(!showBrands)}>
                <label>Brands</label>{(showBrands) ? hideLogo : expandLogo}
            </div>
            {(showBrands) ? <BrandFilter /> : null}
            <ServiceFilter />
            <button onClick={(e)=> handleClear(e)}>Clear</button>
        </form>
    )
}

export default Filter;