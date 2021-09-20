import { useDispatch } from "react-redux";
import { initialState, clearFilter } from "../redux/filterSlice";
import { itemsStorage, itemsRam } from "../assets/itemsList";
import BrandFilter from "./BrandFilter";
import Input from "./Input";
import Select from "./Select";

const Filter = () => {
    const dispatch = useDispatch();

    const handleClear = (e) => {
        e.preventDefault();
        dispatch(clearFilter());
    }

    return (
        <form className={'filter'}>
            <label>Min price</label>
            <Input defaultVal={initialState.minPrice} name={'minPrice'} />
            <label>Max price</label>
            <Input defaultVal={initialState.maxPrice} name={'maxPrice'} />
            <label>Storage</label>
            <Select itemsList={itemsStorage} name={'minStorage'} />
            <label>RAM</label>
            <Select itemsList={itemsRam} name={'minRam'} />
            <label>Brands</label>
            <BrandFilter />
            <button onClick={(e)=> handleClear(e)}>Clear</button>
        </form>
    )
}

export default Filter;