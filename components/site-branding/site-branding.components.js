import ThemeSwitcher from '../theme-switcher/theme-switcher.components';
import PhpIcon from '../../resources/images/php.svg';
import JsIcon from '../../resources/images/js.svg';
import MysqlIcon from '../../resources/images/mysql.svg';
import ReactIcon from '../../resources/images/reactjs.svg';
import LaravelIcon from '../../resources/images/laravel.svg';
import NodejsIcon from '../../resources/images/nodejs.svg';
import WordpressIcon from '../../resources/images/wordpress.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';

import styles from './site-branding.module.scss';


const SiteBranding = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    const switchTheme = () => {
        setTheme(theme === 'theme-light' ? 'theme-dark':'theme-light');
     }

    return (
        <section id="home" className={styles["site-branding"]}>
            <ThemeSwitcher clickHandler={switchTheme}>switch theme </ThemeSwitcher>
            <div className={styles["intro-text"]}>
                <h1 className={`${styles["site-title"]} ${styles["t-shadow-3d"]}`}>{`< Benoit Sentenac-Réou />`}</h1>
                <h2 className={styles["branding-title"]}>Création de site internet</h2>
                <h3 className={styles["t-shadow-3d"]}>Développeur Web freelance</h3>
            </div>
            <div className={styles["skills-icon"]}>
                <PhpIcon />
                <WordpressIcon />
                <LaravelIcon />
                <JsIcon />
                <ReactIcon />
                <NodejsIcon />
                <MysqlIcon />
            </div>
        </section>
    );
};

export default SiteBranding;