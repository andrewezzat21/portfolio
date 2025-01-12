
import { motion } from "framer-motion";
import Line from "../../components/Line/Line";
import fadeIn from "../variants";
import styles from "./Skills.module.css";

function Skills(){



    return(
        <section className={styles.section}>
            
            <Line  width="100vw" height="0.1px" top="10vh" left="0em" color="#EFECEC" />    
            <Line  width="100vw" height="0.1px" top="90vh" left="0em" color="#EFECEC" />    

            <div className={styles.container}>
                <motion.h1 
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
                className={styles.title}>SKILLS</motion.h1>
                <motion.ul
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}} 
                className={styles.listItems}>
                    <li className={styles.listItem}><img src="src/assets/skills/java.svg"/>Java</li>
                    <li className={styles.listItem}><img src="src/assets/skills/springboot.svg"/>Spring Boot</li>
                    <li className={styles.listItem}><img src="src/assets/skills/javascript.svg"/>Javascript</li>
                    <li className={styles.listItem}><img src="src/assets/skills/react.svg"/>React</li>
                    <li className={styles.listItem}><img src="src/assets/skills/c++.svg"/>C++</li>
                    <li className={styles.listItem}><img src="src/assets/skills/mysql.svg"/>MySQL</li>
                    <li className={styles.listItem}><img src="src/assets/skills/git.svg"/>Git</li>
                    <li className={styles.listItem}><img src="src/assets/skills/docker.svg"/>Docker</li>
                </motion.ul>
            </div>


        </section>
    );
}

export default Skills;