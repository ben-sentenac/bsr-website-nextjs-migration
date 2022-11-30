import { useContext } from "react";
import { ProjectsContext } from "../../context/project.context";
import Projects from "../project-list/project-list.components";
import SectionTitle from "../section-title/section-title.components";

import styles from './portfolio.module.scss';


const Portfolio = () => {
    const { projects,loading } = useContext(ProjectsContext);
    return (
        <section id="portfolio" className={styles["portfolio-container"]}>
                <SectionTitle title="Quelques projets..." />
                {loading ? <p>loading data</p> : <Projects projects={projects} />}
        </section>
    )
};

Portfolio.getStaticProps = async () => {
    console.log('executing serversideProps');
}



export default Portfolio;