
import Line from "../../components/Line/Line";
import styles from "./Skills.module.css";


function Skills(){



    return(
        <section className={styles.section}>
            
            <Line  width="100vw" height="0.1px" top="10vh" left="0em" color="#EFECEC" />    
            <Line  width="100vw" height="0.1px" top="90vh" left="0em" color="#EFECEC" />    

            <div className={styles.container}>
                <h1 className={styles.title}>SKILLS</h1>
                <ul className={styles.listItems}>
                    <li className={styles.listItem}><img src="src/assets/skills/java.svg"/>Java</li>
                    <li className={styles.listItem}><img src="src/assets/skills/springboot.svg"/>Spring Boot</li>
                    <li className={styles.listItem}><img src="src/assets/skills/javascript.svg"/>Javascript</li>
                    <li className={styles.listItem}><img src="src/assets/skills/react.svg"/>React</li>
                    <li className={styles.listItem}><img src="src/assets/skills/c++.svg"/>C++</li>
                    <li className={styles.listItem}><img src="src/assets/skills/mysql.svg"/>MySQL</li>
                    <li className={styles.listItem}><img src="src/assets/skills/git.svg"/>Git</li>
                    <li className={styles.listItem}><img src="src/assets/skills/docker.svg"/>Docker</li>
                </ul>
            </div>


        </section>
    );
}

export default Skills;