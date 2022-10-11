import { useState } from 'react';

import styles from  './navigation.module.scss';



const Navigation = () => {
    const [ visible, setVisible ] = useState(false);

    const toggleNavbar = (e) => {
        setVisible(!visible);
    }
    return (
        <header className={styles["site-header"]}>
            <div onClick={ toggleNavbar } className={styles["hamburger"]}>
                <span className={styles["hamburger-span"]}></span>
                <span className={styles["hamburger-span"]}></span>
                <span className={styles["hamburger-span"]}></span>
            </div>
            <nav className={`${styles["main-navbar"]} ${ visible ? styles["visible"] :  ''}`}>
                <a className={styles["nav-link"]} href="#home">Home</a>
                <a className={styles["nav-link"]} href="#about">About</a>
                <a className={styles["nav-link"]} href="#portfolio">Portfolio</a>
                <a className={styles["nav-link"]} href="#tarifs">Tarifs</a>
                <a className={styles["nav-link"]} href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Navigation;