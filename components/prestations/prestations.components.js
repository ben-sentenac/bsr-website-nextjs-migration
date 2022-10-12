import PRESTATION_DATA  from '../../static-data/prestations.data';
import SectionTitle from '../section-title/section-title.components';
import styles from  './prestations.module.scss';

export const Prices = () => {
    return (
        <section id="tarifs" className={styles["prices-container"]}>
        <SectionTitle title="Tarifs" />
        <PrestationList prestations={PRESTATION_DATA} />
    </section>
    )
}

export const PrestationList = ({ prestations }) => {
    return (
        <div className={styles["prestations"]}>
            {
                prestations.map(prestation => <Prestation key={prestation.id} {...prestation} /> )
            }
        </div>
    );
};


export const Prestation = ({ id,name,techno,price }) => {

    return(
        <div className={`${styles["prestation"]} ${styles["div" + id]} box box-transform`}>
            <h3>{ name }</h3>
            <div>{ techno }</div>
            <div className={styles["prestation-price"]}>{ price }</div>
        </div>
    );
};