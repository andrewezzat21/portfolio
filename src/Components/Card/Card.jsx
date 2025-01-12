/* eslint-disable react/prop-types */
import projectsData from "../../pages/Projects/projects-data.json";
import styles from "./Card.module.css";

export default function Card(props){

    const id = props.active;
    return(
        <>
            <div className={styles.projectContent}>
                <h1 className={styles.type}>{projectsData[id].type}</h1>
                <h1 className={styles.name}>{projectsData[id].name}</h1>
                <div className={styles.card}>
                    <p>{projectsData[id].description}</p>
                </div>
                <div className={styles.info}>
                    <div className={styles.icons}>
                        <a target="_blank" href={projectsData[id].info}>More Info</a>
                    </div>
                    <h3 className={styles.tech}>{projectsData[id].tech}</h3>
                </div>
            </div>
            <div className={styles.projectImage}>
                <img src={projectsData[id].img} />
            </div>
        </>
 

    );

}

