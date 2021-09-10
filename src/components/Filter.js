import { useState } from "react";
import { useDispatch } from "react-redux";
import { setValues } from "../redux/filterSlice";
import { initialState } from "../redux/filterSlice";

const Filter  = () => {
    const [values, setNewValues] = useState(initialState);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setValues({values}))
    }

    return (
        <form className={'filter'} onSubmit={e => handleSubmit(e)}>
            <input
                type='number'    
                name='minPrice'
                defaultValue={values.minPrice}
                min='0'
                onChange={e => setNewValues({...values, minPrice: parseInt(e.target.value)})}
            />
            <input
                type='number'    
                name='maxPrice'
                defaultValue={values.maxPrice}
                max='99999'
                onChange={e => setNewValues({...values, maxPrice: parseInt(e.target.value)})}
            />
            <select multiple onChange={e => setNewValues({...values, brands: [...values.brands, e.target.value]})}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <button type='submit'>Ok</button>
        </form>
    )
}

export default Filter;