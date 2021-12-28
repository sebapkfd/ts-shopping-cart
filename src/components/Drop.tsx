import React from "react";
import styles from '../styles/filter.module.css';

interface Values {
    title: string,
    show: boolean,
    setShow: (value: boolean) => void,
}

const Drop = ({ title, show, setShow }: Values ) => {
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

