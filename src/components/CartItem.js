import Item from "./Item";
import { useDispatch } from "react-redux";
import { itemRemoved } from "../redux/cartSlice";
import { changeAmount } from "../redux/cartSlice";

const CartItem = (props) => {
    const {item} = props;
    const dispatch = useDispatch();

    const removeitem = () => {
        dispatch(itemRemoved({id: item.id}))
    }

    const handleChange = (e) => {
        dispatch(changeAmount({id: item.id, amount: parseInt(e.target.value)}))
    }

    return (
        <div className="cart-item">
            <Item item={item}/>
            <h3>Amount</h3>
            <input 
                type="number" 
                name="amount" 
                defaultValue={item.amount} 
                min="1"
                onChange={e => handleChange(e)}
                />
            <h3>Total price: US$ {item.price*item.amount}</h3>
            <button onClick={() => removeitem()}>
                Remove
            </button>
        </div>
    )
}

export default CartItem;