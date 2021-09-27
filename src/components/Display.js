import { useDispatch } from "react-redux";
import { setDisplay } from "../redux/displaySlice";

const Display = () => {
    const dispatch = useDispatch();
    const tableIcon = <span className="material-icons">apps</span>
    const listIcon = <span className="material-icons">view_list</span>

    return(
        <div className='display'>
            <button onClick={() => dispatch(setDisplay({newDisplay: 'table'}))}>{tableIcon}</button>
            <button onClick={() => dispatch(setDisplay({newDisplay: 'list'}))}>{listIcon}</button>
        </div>
    )
}

export default Display;