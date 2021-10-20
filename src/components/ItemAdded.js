import { useSelector } from "react-redux";
import { selectItemById } from "../redux/cartSlice";
import ok from '../assets/icons/ok.png';
import styles from '../styles/itemPage.module.css';

const ItemAdded = ({ id }) => {
    const isAdded = useSelector(state => selectItemById(state, id));

    return (isAdded) ? (
        <div className={styles.property}>
            <img src={ok} alt="ok"/>
            <p>Item Added to the cart</p>
        </div>
    ) : null;
}

export default ItemAdded;