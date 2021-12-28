import React from "react";
import { useDispatch } from "react-redux";
import { setDisplay } from "../redux/displaySlice";
import styles from '../styles/display.module.css';

const Display = () => {
    const dispatch = useDispatch();
    const tableIcon = <span className="material-icons">apps</span>
    const listIcon = <span className="material-icons">view_list</span>

    return(
        <div className={styles.container}>
            <button onClick={() => dispatch(setDisplay({newDisplay: 'table'}))}>{tableIcon}</button>
            <button onClick={() => dispatch(setDisplay({newDisplay: 'list'}))}>{listIcon}</button>
        </div>
    )
}

export default Display;