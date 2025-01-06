import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import Rectangle from '../Rectangle/Rectangle';
import styles from "./Homepage.module.css";
const COLORS = ["#0B2441", "#133760", "#3D5877", "#1A3350", "#15212F"];

function Homepage(){

    const color = useMotionValue(COLORS[3]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #001123 50%, ${color})`;


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

            <div className={styles.container}>
            <h1 className={styles.hi}>HI THERE 👋 I&apos;M</h1>
            <h1 className={styles.name}>ANDREW EZZAT</h1>
            <h1 className={styles.hi}>I&apos;M A <span className={styles.bold}>SOFTWARE ENGINEER</span></h1>
            <div className={styles.hidden}>
                <Rectangle width="250px" height="20px" top="54%" left="44%" color="#ff5a1b" />
            </div>
            </div>


            <ul className={styles.icons}>
                <li className={styles.icon}>
                    <a className="icon-link" href="mailto:andrewezzatmn16@gmail.com" >
                    <MailIcon htmlColor="#EFECEC" />
                    </a>
                </li>
                <li className={styles.icon}>
                    <a className="icon-link" href="https://www.linkedin.com/in/andrew--ezzat/" target="_blank">
                    <LinkedInIcon htmlColor="#EFECEC" />
                    </a>
                </li>
                <li className={styles.icon}>
                    <a className="icon-link" href="https://github.com/andrewezzat21" target="_blank">
                    <GitHubIcon htmlColor="#EFECEC" />
                    </a>
                </li>
            </ul>
            <div className={styles.hidden}>

            <MouseOutlinedIcon className={styles.mouse}/>
            <motion.div className={styles.arrow} animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            <KeyboardArrowDownOutlinedIcon  />
            </motion.div>
            </div>
     

        </motion.section>
    );
}

export default Homepage;