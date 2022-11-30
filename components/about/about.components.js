import SectionTitle from '../section-title/section-title.components';
import Portrait from '../../resources/images/ben.svg';

import styles from  './about.module.scss';

const About = () => {
    return (
        <section id="about" className={styles["about-container"]}>
            <div className={styles["about-right"]}>
            <SectionTitle title="En quelques mots..." />
                <p className={styles["introducing"]}>
                Développeur freelance, 5 ans d’expériences, spécialisé dans la conception et la réalisation de site internet. 
                Vous avez une idée, vous souhaitez développer votre visibilité sur le web ? 
                Buvons un café et parlons ensemble de votre projet!
                </p>
                <div className={styles["resume"]}>
                    <div className="link">
                        <a download target="_blank" rel="noreferrer noopener" media="print" href="/uploads/cv/Benoit_Sentenac_Réou_CV.pdf">Curriculum Vitae</a>
                    </div>
                </div>
            </div>
            <div className={`${styles["about-left"]} box-transform`}>
                <Portrait className={styles["portrait"]} />
            </div>
        </section>
    );
};


export default About;