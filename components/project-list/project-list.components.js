import { useState,useEffect } from 'react';
import ProjectModalBox from '../project-modal-box/project-modal-box.components';
import { getProjectDocument } from '../../utils/firebase.utils';
import styles from './project-list.module.scss';

const Project = ({ project }) => {
    const [ visible, setVisible] = useState(false);
    
    const handleClick = (e) => {
        setVisible(!visible);
    }
    useEffect(() => {
        visible && document.body.classList.add('scroll-hidden');
        return () => {
          document.body.classList.remove('scroll-hidden');
        }
      }, [visible])
    return (
        <>
            <div onClick= { handleClick }  className={`${styles["project-container"]} box box-transform`}>
                <div className={styles["background-image"]} style={{ backgroundImage: `url(${project.image})` }} ></div>
                <div className={styles["project-body-container"]}>
                    <h3 className={styles["project-title"]}>{project.name}</h3>
                    <p>
                        {project.skills}
                    </p>
                </div>
            </div>
           <ProjectModalBox clickHandler={ handleClick } project={ project } visible={ visible } />
        </>
    );
}

const Projects = ({ projects }) => {
    return (
        <div className={styles["projects-list"]}>
            {
                projects.map(project => <Project key={project.id} project={project} />)
            }
        </div>
    );
}



export default Projects;