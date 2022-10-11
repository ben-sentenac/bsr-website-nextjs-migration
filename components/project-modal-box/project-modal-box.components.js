import styles from './project-modal-box.module.scss';

const ProjectModalBox = ({ visible,clickHandler, project }) => {
    const { description,skills, image, url } = project;
    const { tasks, title } = description;
    return (
        <div className={`${styles["project-modal-box"]} ${ visible ? styles["visible"] : '' }`}>
                <div className="project-body-container" onClick={ clickHandler }>
                    <div className={styles["remove-btn"]}>&#10005;</div>
                    <h3 className="project-title">{ title }</h3>
                    <p>
                        { skills }
                    </p>
                    {  tasks.map((task,index) =><ul key={ index }>
                        <li>{ task }</li>
                    </ul>)}
                    <div className={styles["modal-background-image"]} style={{ backgroundImage: `url(${image})` }} ></div>
                    <div className="project-link">
                        <a rel="noreferrer" target="_blank" title={url} href={ url }>visiter le site web</a>
                    </div>
                </div>
            </div>
    );
};

export default ProjectModalBox;