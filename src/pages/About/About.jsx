import Line from "../../components/Line/Line";
import styles from "./About.module.css";
import profileImg from "/src/assets/avatar.png";

function About(){



    return(
        <section className={styles.section}>
            
            <Line  width="100vw" height="0.1px" top="10vh" left="0em" color="#EFECEC" />    
            <Line  width="100vw" height="0.1px" top="90vh" left="0em" color="#EFECEC" />    

            <div className={styles.container}>
                <img className={styles.avatar} src={profileImg} alt="avatar" />
            </div>
            <div className={styles.text}>
                <h1 className={styles.title}>ABOUT ME</h1>
                <p className={styles.about}>
                Hello, my name is Andrew, and I&apos;m a recent Computer Science graduate from Assiut University. I&apos;m also a Software Engineer with strong skills in <span className={styles.hl}>Java</span> and <span className={styles.hl}>Spring Boot</span>
                , developed through internships and personal projects.
                </p>
                <p className={styles.about}>I have a strong passion for <span className={styles.hl}>competitive programming</span>, I spent over 4 years competing in top-tier programming contests like ECPC and ACPC, solving complex problems with C++ to sharpen my problem-solving skills. 
                With over <span className={styles.hl}>2,700 problems</span> solved on Codeforces.
                </p>
            </div>
            {/* <div className={styles.rectangle}>
                <Rectangle width='150px' height='80vh' top='20%' left='5%' color='#ff5a1b'/>
            </div> */}
        </section>
    );
}

export default About;