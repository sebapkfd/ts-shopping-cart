import { useDispatch } from "react-redux";
import { initialState, clearFilter, setNewFilter } from "../redux/filterSlice";
import { itemsStorage, itemsRam } from "../assets/itemsList";
import BrandFilter from "./BrandFilter";
import Input from "./Input";

const Filter  = () => {
    const dispatch = useDispatch();

    const handleClear = (e) => {
        e.preventDefault();
        dispatch(clearFilter());
    }

    return (
        <form className={'filter'}>
            <Input defaultVal={initialState.minPrice} name={'minPrice'}/>
            <Input defaultVal={initialState.maxPrice} name={'maxPrice'}/>
            <select onChange={e => dispatch(setNewFilter({key: 'minStorage', value: parseInt(e.target.value)}))}>
                {itemsStorage.map(item => {
                    return <option value={`${item}`} key={`${item}Option`}>{item}GB</option>
                })}
            </select>
            <select onChange={e => dispatch(setNewFilter({key: 'minRam', value: parseInt(e.target.value)}))}>
                {itemsRam.map(ram => {
                    return <option value={`${ram}`} key={`${ram}Option`}>{ram}GB</option>
                })}
            </select>
            <BrandFilter />
            <button type='submit'>Ok</button>
            <button onClick={(e)=> handleClear(e)}>Clear</button>
        </form>
    )
}

export default Filter;