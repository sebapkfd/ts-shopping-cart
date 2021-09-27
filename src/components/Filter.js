import { useDispatch, useSelector } from "react-redux";
import { clearFilter } from "../redux/filterSlice";
import { itemsStorage, itemsRam } from "../assets/itemsList";
import BrandFilter from "./BrandFilter";
import Input from "./Input";
import Select from "./Select";
import ServiceFilter from "./ServiceFilter";

const Filter = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.filter);

    const handleClear = (e) => {
        e.preventDefault();
        dispatch(clearFilter());
    }

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
            <label>Brands</label>
            <BrandFilter />
            <ServiceFilter />
            <button onClick={(e)=> handleClear(e)}>Clear</button>
        </form>
    )
}

export default Filter;