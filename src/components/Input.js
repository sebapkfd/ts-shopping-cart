import { useDispatch } from "react-redux";
import { setNewFilter } from "../redux/filterSlice";
import { startCase } from "lodash";
import styles from '../styles/filter.module.css';

const Input = ({ defaultVal, name }) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.filterInput}>
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