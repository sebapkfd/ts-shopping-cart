import { useDispatch } from "react-redux";
import { setNewFilter } from "../redux/filterSlice";
import formatStorage from "../functions/storageFormat";

const Select = ({itemsList, name}) => {
    const dispatch = useDispatch();

    return (
        <select onChange={e => dispatch(setNewFilter({key: name, value: parseInt(e.target.value)}))}>
            {itemsList.map(item => {
                return <option value={`${item}`} key={`${item}Option`}>{formatStorage(item)}</option>
            })}
        </select>
    )
}

export default Select;