import SectionTitle from '../section-title/section-title.components';
import Portrait from '../../resources/images/ben.svg';

import styles from  './about.module.scss';

const About = () => {
    return (
        <section id="about" className={styles["about-container"]}>
            <div className={styles["about-right"]}>
            <SectionTitle title="About" />
                <p className={styles["introducing"]}>
                    Hello, Je suis Benoit Sentenac-Réou mais même ma maman m'appelle ben!
                    Je suis développeur web et je suis là pour vous aider à réaliser vos projets!
                    passioneé par le code et les défis je suis toujours curieux d'apprendre de nouvelles choses...
                </p>
                <div className={styles["resume"]}>
                    <div className="link">
                        <a href="/#">Curriculum Vitae</a>
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