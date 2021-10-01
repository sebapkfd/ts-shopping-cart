import { useDispatch } from "react-redux";
import { setNewFilter } from "../redux/filterSlice";
import { startCase } from "lodash";

const Input = ({ defaultVal, name }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <label>{startCase(name)}</label>
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