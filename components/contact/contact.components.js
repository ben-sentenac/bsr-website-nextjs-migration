import SectionTitle from '../section-title/section-title.components';
import styles from './contact.module.scss';


const Contact = () => {
    return (
        <section id="contact" className={styles["contact-container"]}>
            <SectionTitle title="Contact" />
            <h4 title="Benoit Sentenac-Réou artisan du web" className={styles["contact-title"]}>Benoit Sentenac-Réou <strong>artisan du web</strong></h4>
            <strong>developpeur web freelance - 09000 Foix - France</strong>
            <h4>CONTACTEZ-MOI POUR TOUTE DEMANDE DE TARIF OU DE DEVIS CONCERNANT LA RÉALISATION DE SITES WEB EN FREELANCE</h4>
            <strong>N° SIRET:849 368 808 00010</strong>
            <p>ben09.dev@gmail.com</p>
            <p>06-70-36-92-61</p>
        </section>
    );
};

export default Contact;