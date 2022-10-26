import styles from './prestation-modal-box.module.scss';


const PrestationModalBox = ({ clickHandler, visible, prestationDetails }) => {

    const { details,name,techno } = prestationDetails;

    return (
        <div className={`${styles["prestation-modal-box"]} ${ visible ? styles['visible'] : '' }`}>
                <div onClick={ clickHandler } className={styles["remove-btn"]}>&#10005;</div>
                <div className={styles["device"]}>
                    <div className={styles["content"]}>
                        <article className={styles["prestation-modal-article"]}>
                            <h2>{ name }</h2>
                            <p>Site développé avec <strong>{ techno }</strong></p>
                            <ul>
                                {
                                    details.filter(detail => detail.id !== 5).map((detail,i) => <li key={ i }>{ detail }</li>)
                                }
                            </ul>
                        </article>
                    </div>
                </div>
        </div>
    );
};


export default PrestationModalBox;