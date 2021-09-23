import { useDispatch } from "react-redux";
import { setNewFilter } from "../redux/filterSlice";
import formatStorage from "../functions/storageFormat";

const Select = ({list, name, options}) => {
    const dispatch = useDispatch();

    return (
        <select onChange={e => dispatch(setNewFilter({key: name, value: parseInt(e.target.value)}))}>
            {list.map(item => {
                let itemsPerOption = options.find(opt => opt[name] === item).amount;
                return <option value={`${item}`} key={`${item}Option`}>{formatStorage(item)} ({itemsPerOption})</option>
            })}
        </select>
    )
}

export default Select;