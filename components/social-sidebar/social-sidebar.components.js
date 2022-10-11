import Phone from '../../resources/images/phone.svg';
import Mail from '../../resources/images/mail.svg';
import Linkedin from '../../resources/images/link.svg';
import Git from '../../resources/images/git.svg';

import styles from './social-sidebar.module.scss';


const SocialSidebar = ({ className }) => (
    <div className={`${styles["socials"]} ${styles[className] ?? ''}`}>
        <div className={styles["social-link"]}>
            <Phone />
        </div>
        <div className={styles["social-link"]}>
            <Mail />
        </div>
        <div className={styles["social-link"]}>
            <Linkedin />
        </div>
        <div className={styles["social-link"]}>
            <Git />
        </div>

    </div>
);


export default SocialSidebar;