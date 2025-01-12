import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../../components/Card/Card";
import Line from "../../components/Line/Line";
import Tab from "../../components/Tab/Tab";
import fadeIn from "../variants.js";
import styles from "./Projects.module.css";
import ProjectsData from "./projects-data.json";

export default function Projects(){

    const [tabs, setTabs] = useState(ProjectsData);
    const [active, setActive] = useState(0);


    const toggleTab = function(id){
        const newTabs = tabs;
        if(newTabs[id].isActive === true) return;
        setTabs(prevTabs => prevTabs.map(tab => {
            return tab.id === id ? {...tab, isActive:true} : {...tab, isActive:false}
        }))
        setActive(id);
    }


    const tabElements = tabs.map((tab) => {
        return <Tab key={tab.id} id={tab.id} toggle={toggleTab} isActive={tab.isActive} name={tab.name}/>
    })



    return(
        <section className={styles.section}>
            <Line  width="100vw" height="0.1px" top="10vh" left="0em" color="#EFECEC" />    
            <Line  width="100vw" height="0.1px" top="90vh" left="0em" color="#EFECEC" />    

            <div className={styles.container}>
                <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
                className={styles.title}>PROJECTS</motion.h1>

                <motion.div 
                variants={fadeIn("left", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
                className={styles.mainSection}>
                    <div className={styles.tabs}>
                        {tabElements}
                    </div>
                    <div className={styles.projectsContainer}>
                        <Card active={active}/>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
