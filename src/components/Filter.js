import { useState } from "react";
import { useDispatch } from "react-redux";
import { setValues } from "../redux/filterSlice";

const values = {
    brands: ['Asus', 'Acer', 'LG'],
    minPrice: 1000,
    maxPrice: 2000,
    minRam: 16,
    minStorage: 512
}

const Filter  = () => {
    const [minPrice, setMinPrice] = useState(0);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setValues({ values}))
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