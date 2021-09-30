import { useDispatch } from "react-redux";
import { setNewFilter } from "../redux/filterSlice";

const Input = ({ defaultVal, name }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <label>{name}</label>
            <input
                type='number'    
                name={name}
                min='0'
                max='10000'
                defaultValue={defaultVal}
                onChange={(e) => dispatch(setNewFilter({key: name, value: parseInt(e.target.value)}))}
            />
        </div>
    )

}

export default Input;