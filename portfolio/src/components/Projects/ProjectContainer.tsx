import { FC } from "react";
import styles from "./ProjectContainer.module.css"

const ProjectContainer: FC = () =>{
    return(
        <article className={styles.projectContainer}>
            <h1>Projetos:</h1>
            <div className={styles.projectContent}>
                
            </div>
        </article>
    )
}

export default ProjectContainer