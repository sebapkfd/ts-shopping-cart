import styles from '../styles/filter.module.css';

const Drop = ({ values: { title, show, setShow } }) => {
    const expandLogo = <span className="material-icons">expand_more</span>
    const hideLogo = <span className="material-icons">expand_less</span>
    
    return (
        <div onClick={() => setShow(!show)} className={styles.drop}>
            <p>{title}</p>
            {(show) ? hideLogo : expandLogo}
        </div>
    )
}

export default Drop;

