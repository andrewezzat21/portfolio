import styles from "./App.module.css";
import About from "./Components/About/About";
import Homepage from "./Components/Homepage/Homepage";

import Line from "./Components/Line/Line";
function App() {

  return (
    <>




    <div className={styles.container}>
      <Line  width="100vw" height="0.1px" top="10vh" left="0em" color="#EFECEC" />    
      <Line  width="100vw" height="0.1px" top="90vh" left="0em" color="#EFECEC" /> 
      <Line  width="100vw" height="0.1px" top="110vh" left="0em" color="#EFECEC" />    
      <Line  width="100vw" height="0.1px" top="190vh" left="0em" color="#EFECEC" />    


      <Homepage/>
      <About/>
    </div>

    </>

  );
}

export default App
