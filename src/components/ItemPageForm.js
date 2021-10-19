import AddItemOptions from './AddItemOptions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { itemAdded } from '../redux/cartSlice';
import styles from '../styles/itemPage.module.css';

const ItemPageForm = ({ item }) => {
    const dispatch = useDispatch();

    const clickItem = (e) => {
        e.preventDefault();
        dispatch(itemAdded({...item, amount: parseInt(e.target.amount.value)}));
    }

    return (
        <form className={styles.form} onSubmit={(e) => clickItem(e)}>
            <AddItemOptions item={item} />
            <Link to='/shopping-cart/catalog'>
                <button className={styles.backButton}>
                    Back to catalog
                </button>
            </Link>
        </form>
    )
}

export default ItemPageForm;