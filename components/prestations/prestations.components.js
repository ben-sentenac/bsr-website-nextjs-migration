import PRESTATION_DATA  from '../../static-data/prestations.data';
import SectionTitle from '../section-title/section-title.components';
import PrestationModalBox from '../prestation-modal-box/prestation-modal-box.components';
import styles from  './prestations.module.scss';
import { useState } from 'react';

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
                prestations.map(prestation => <Prestation key={prestation.id} prestation={ prestation } /> )
            }
        </div>
    );
};


export const Prestation = ({ prestation }) => {

    const [ visible, setVisible ] = useState(false);

    const { id,price,name,techno } = prestation;

    const handleClick = () => {
        setVisible(!visible);
    }

    return(
        <>
        <div onClick={ handleClick } className={`${styles["prestation"]} ${styles["div" + id]} box box-transform`}>
            <h3>{ name }</h3>
            <div>{ techno }</div>
            <div className={styles["prestation-price"]}>{ price }</div>
        </div>
        <PrestationModalBox clickHandler={ handleClick } prestationDetails={ prestation }  visible={ visible } />
        </>
    );
};