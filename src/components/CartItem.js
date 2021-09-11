import Item from "./Item";
import { useDispatch } from "react-redux";
import { itemRemoved } from "../redux/cartSlice";

const CartItem = (props) => {
    const {item} = props;
    const dispatch = useDispatch();

    const removeitem = (id) => {
        dispatch(itemRemoved({id}))
    }

    return (
        <div className="cart-item">
            <Item item={item}/>
            <h3>Amount: {item.amount}</h3>
            <h3>Total price: US$ {item.price*item.amount}</h3>
            <button onClick={() => removeitem(item.id)}>
                Remove
            </button>
        </div>
    )
}

export default CartItem;