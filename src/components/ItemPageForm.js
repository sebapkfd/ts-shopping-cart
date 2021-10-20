import AddItemOptions from './AddItemOptions';
import { useDispatch } from 'react-redux';
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
        </form>
    )
}

export default ItemPageForm;