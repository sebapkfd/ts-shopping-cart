import { useDispatch } from "react-redux";
import { setNewFilter } from "../redux/filterSlice";

const Select = ({itemsList, name}) => {
    const dispatch = useDispatch();

    return (
        <select onChange={e => dispatch(setNewFilter({key: name, value: parseInt(e.target.value)}))}>
            {itemsList.map(item => {
                return <option value={`${item}`} key={`${item}Option`}>{item}GB</option>
            })}
        </select>
    )
}

export default Select;