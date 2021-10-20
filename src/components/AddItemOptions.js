import AddButton from "./AddButton";
import styles from '../styles/itemPage.module.css';

const AddItemOptions = ({ item }) => {
    return (item.stock > 0) ? (
        <div className={styles.addOption}>
            <input type="number" name="amount" defaultValue={1} min="1" max={item.stock}/>
            <AddButton id={item.id} />
        </div>
    ): null;

}

export default AddItemOptions;