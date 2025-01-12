import styles from "./App.module.css";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Homepage from "./pages/Homepage/Homepage";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
function App() {

  return (
    <>
      <div className={styles.container}>
        <Homepage />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </>

  );
}

export default App
