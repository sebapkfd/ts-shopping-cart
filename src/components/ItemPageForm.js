import AddButton from "./AddButton";
import { useDispatch } from 'react-redux';
import { itemAdded } from '../redux/cartSlice';
import styles from '../styles/itemPage.module.css';
import { Link } from "react-router-dom";

const ItemPageForm = ({ item }) => {
    const dispatch = useDispatch();

    const clickItem = (e) => {
        e.preventDefault();
        dispatch(itemAdded({...item, amount: parseInt(e.target.amount.value)}));
    }

    return (
        <form className={styles.form} onSubmit={(e) => clickItem(e)}>
            <input type="number" name="amount" defaultValue={1} min="1" max={item.stock}/>
            <AddButton id={item.id} />
            <Link to='/shopping-cart/catalog'>
                <button className={styles.backButton}>
                <span class="material-icons">chevron_left</span>
                    Back to catalog
                </button>
            </Link>
        </form>
    );
}

export default ItemPageForm;