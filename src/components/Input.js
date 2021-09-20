import { useDispatch } from "react-redux";
import { setNewFilter } from "../redux/filterSlice";

const Input = ({defaultVal, name}) => {
    const dispatch = useDispatch();

    return (
        <input
            type='number'    
            name={name}
            min='0'
            max='99999'
            defaultValue={defaultVal}
            onChange={(e) => dispatch(setNewFilter({key: name, value: parseInt(e.target.value)}))}
        />
    )

}

export default Input;