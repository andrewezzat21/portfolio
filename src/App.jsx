import styles from "./App.module.css";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Homepage from "./pages/Homepage/Homepage";
import Projects from "./pages/Projects/Projects";
function App() {

  return (
    <>
      <div className={styles.container}>
        <Homepage />
        <About />
        <Experience />
        <Projects />
      </div>
    </>

  );
}

export default App
