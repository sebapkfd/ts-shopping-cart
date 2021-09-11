import { useSelector } from "react-redux";
import { selectItemById } from "../redux/cartSlice";

const AddButton = (props) => {
    const { id } = props;
    const isAdded = useSelector(state => selectItemById(state, id));
    const text = (isAdded) ? 'Item Added' : 'Add to cart';

    return (
        <button type="submit">
            {text}
        </button>
    )
}

export default AddButton;