import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { itemRemoved } from "../redux/cartSlice";
import { changeAmount } from "../redux/cartSlice";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const display = useSelector(state => state.display.value);

    const removeitem = () => {
        dispatch(itemRemoved({id: item.id}));
    }

    const handleChange = (e) => {
        dispatch(changeAmount({id: item.id, amount: parseInt(e.target.value)}));
    }

    return (
        <div className={`${display}-cart__item`}>
            <Item item={item}/>
            <div className={'cart-item__options'}>
                <p>Amount</p>
                <input 
                    type="number" 
                    name="amount" 
                    defaultValue={item.amount} 
                    min="1"
                    max={item.stock}
                    onChange={e => handleChange(e)}
                    />
                <p>Total price: US$ {item.price*item.amount}</p>
                <button onClick={() => removeitem()}>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default CartItem;