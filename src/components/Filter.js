import { useDispatch } from "react-redux";
import { initialState, clearFilter, setNewFilter } from "../redux/filterSlice";
import { itemsStorage, itemsRam } from "../assets/itemsList";
import BrandFilter from "./BrandFilter";
import Input from "./Input";
import Select from "./Select";

const Filter  = () => {
    const dispatch = useDispatch();

    const handleClear = (e) => {
        e.preventDefault();
        dispatch(clearFilter());
    }

    return (
        <form className={'filter'}>
            <Input defaultVal={initialState.minPrice} name={'minPrice'} />
            <Input defaultVal={initialState.maxPrice} name={'maxPrice'} />
            <Select itemsList={itemsStorage} name={'minStorage'} />
            <Select itemsList={itemsRam} name={'minRam'} />
            <BrandFilter />
            <button type='submit'>Ok</button>
            <button onClick={(e)=> handleClear(e)}>Clear</button>
        </form>
    )
}

export default Filter;