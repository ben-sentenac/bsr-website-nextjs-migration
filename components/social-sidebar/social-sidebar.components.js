import Phone from '../../resources/images/phone.svg';
import Mail from '../../resources/images/mail.svg';
import Linkedin from '../../resources/images/link.svg';
import Git from '../../resources/images/git.svg';

import styles from './social-sidebar.module.scss';


const SocialSidebar = ({ className,theme }) => (
    <div className={`${styles["socials"]} ${styles[theme]} ${styles[className] ?? ''}`}>
        <div className={styles["social-link"]}>
            <a target="_blank" href="https://www.linkedin.com/in/benoit-sentenac-r%C3%A9ou-91b566193/"><Linkedin /></a>
        </div>
        <div className={styles["social-link"]}>
           <a target="_blank" href="https://github.com/ben-sentenac/"><Git /></a>
        </div>

    </div>
);


export default SocialSidebar;