import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewFilter } from "../redux/filterSlice";

const Filter  = () => {
    const [minPrice, setMinPrice] = useState(0);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setNewFilter({ key: 'minPrice', value: parseInt(minPrice)}))
    }

    return (
        <form className={'filter'} onSubmit={e => handleSubmit(e)}>
            <input
                type='number'    
                name='minPrice'
                value={minPrice}
                onChange={e => setMinPrice(e.target.value)}
            />
            <button type='submit'>Ok</button>
        </form>
    )
}

export default Filter;