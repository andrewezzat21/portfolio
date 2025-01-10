import { useState } from "react";
import Line from "../../components/Line/Line";
import Tab from "../../components/Tab/Tab";
import styles from "./Experience.module.css";
import TabsData from "./experience-data.json";


  

export default function Experience(){

    const [tabs, setTabs] = useState(TabsData);
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
        return <Tab key={tab.id} id={tab.id} toggle={toggleTab} isActive={tab.isActive} name={tab.company}/>
    })

    const list = tabs[active].list.map((item, index) => {
        return <li key={index} className={styles.listItem}>{item}</li>
    })

    return(
        <section className={styles.section}>
            <Line  width="100vw" height="0.1px" top="10vh" left="0em" color="#EFECEC" />    
            <Line  width="100vw" height="0.1px" top="90vh" left="0em" color="#EFECEC" />    

            


            <div className={styles.header}>
                <h1 className={styles.title}>EXPERIENCE</h1>
            </div>

            <div className={styles.container}>
                <div className={styles.tabs}>
                    {tabElements}
                </div>
                <div className={styles.content}>
                    <div className={styles.logocontainer}>
                        <h1 className={styles.position}>{tabs[active].position} @ <span className={styles.hl}>{tabs[active].company}</span></h1>
                        <img className={styles.companylogo}src={tabs[active].logo} />
                    </div>
                    <h2 className={styles.date}>{tabs[active].date}</h2>
                    <p className={styles.description}>{tabs[active].description}</p>
                    <ul className={styles.list}>
                        {list}
                    </ul>
                </div>
            </div>

        </section>
    );
}
