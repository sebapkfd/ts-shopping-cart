import AddButton from "./AddButton";
import { useDispatch } from 'react-redux';
import { itemAdded } from '../redux/cartSlice';
import { useHistory } from "react-router";
import styles from '../styles/itemPage.module.css';

const ItemPageForm = ({ item }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const clickItem = (e) => {
        e.preventDefault();
        dispatch(itemAdded({...item, amount: parseInt(e.target.amount.value)}));
    }

    return (
        <form className={styles.form} onSubmit={(e) => clickItem(e)}>
            <input type="number" name="amount" defaultValue={1} min="1" max={item.stock}/>
            <AddButton id={item.id} />
                <button className={styles.backButton} onClick={() =>history.goBack()}>
                    <span class="material-icons">chevron_left</span>
                    Back
                </button>
        </form>
    );
}

export default ItemPageForm;