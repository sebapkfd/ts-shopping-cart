import { useDispatch } from "react-redux";
import { setDisplay } from "../redux/displaySlice";

const Display = () => {
    const dispatch = useDispatch();

    return(
        <div className='display'>
            <button onClick={() => dispatch(setDisplay({newDisplay: 'table'}))}>Table</button>
            <button onClick={() => dispatch(setDisplay({newDisplay: 'list'}))}>List</button>
        </div>
    )
}

export default Display;