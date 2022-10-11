import styles from './theme-switcher.module.scss';

const ThemeSwitcher = ({ clickHandler,children }) => {

    return (
        <button onClick={ clickHandler } className={styles["button"]}>
            { children }
        </button>
    );
};

export default ThemeSwitcher;