import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import Line from "../../components/Line/Line";
import fadeIn from "../variants.js";
import styles from "./About.module.css";
import profileImg from "/src/assets/avatar.png";
const COLORS = ["#0B2441", "#133760", "#3D5877", "#1A3350", "#15212F"];
function About(){

    const color = useMotionValue(COLORS[3]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 100%, #031224 50%, ${color})`;
    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 5,
            repeat: Infinity,
            repeatType: 'mirror'
        });
    }, );



    return(
        <motion.section className={styles.section} style={{backgroundImage}}>
            
            <Line  width="100vw" height="0.1px" top="10vh" left="0em" color="#EFECEC" />    
            <Line  width="100vw" height="0.1px" top="90vh" left="0em" color="#EFECEC" />    

            <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className={styles.container}>
                <img className={styles.avatar} src={profileImg} alt="avatar" />
            </motion.div>
            <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className={styles.text}>
                <h1 className={styles.title}>ABOUT ME</h1>
                <p className={styles.about}>
                Hello, my name is Andrew, and I&apos;m a recent Computer Science graduate from Assiut University. I&apos;m also a Software Engineer with strong skills in <span className={styles.hl}>Java</span> and <span className={styles.hl}>Spring Boot</span>
                , developed through internships and personal projects.
                </p>
                <p className={styles.about}>I have a strong passion for <span className={styles.hl}>competitive programming</span>, I spent over 4 years competing in top-tier programming contests like ECPC and ACPC, solving complex problems with C++ to sharpen my problem-solving skills. 
                With over <span className={styles.hl}>2,700 problems</span> solved on Codeforces.
                </p>
            </motion.div>
            {/* <div className={styles.rectangle}>
                <Rectangle width='150px' height='80vh' top='20%' left='5%' color='#ff5a1b'/>
            </div> */}
        </motion.section>
    );
}

export default About;