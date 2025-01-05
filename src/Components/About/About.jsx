import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import Rectangle from '../Rectangle/Rectangle';
import styles from "./About.module.css";
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
        
        <h1 className={styles.title}>ABOUT ME</h1>
        <p className={styles.about}>
        Hello, my name is Andrew, and I&apos;m a recent Computer Science graduate from Assiut University. I&apos;m also a Software Engineer with strong skills in <span className={styles.hl}>Java</span> and <span className={styles.hl}>Spring Boot</span>
        , developed through internships and personal projects.
        </p>
        <p className={styles.about}>I have a strong passion for <span className={styles.hl}>competitive programming</span>, I spent over 4 years competing in top-tier programming contests like ECPC and ACPC, solving complex problems with C++ to sharpen my problem-solving skills. 
        With over <span className={styles.hl}>2,700 problems</span> solved on Codeforces.
        </p>


        <div className={styles.rectangle}>
            <Rectangle width='100px' height='80vh' top='20%' left='5%' color='#FC6736'/>
        </div>

        </motion.section>
    );
}

export default About;