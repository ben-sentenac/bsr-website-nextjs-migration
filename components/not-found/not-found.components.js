import styles from './not-found.module.scss';
const NotFound = () => {
    return (
        <section className={styles["not-found-container"]}>
            <div className="not-found">
                <h1>404</h1>
                <h2>Page introuvable</h2>
                <a href="/">retour à l'accueil</a>
            </div>
        </section>
    );
};

export default NotFound;