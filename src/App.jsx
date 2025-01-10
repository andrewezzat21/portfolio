import styles from "./App.module.css";
// import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
// import Homepage from "./pages/Homepage/Homepage";

function App() {

  return (
    <>
      <div className={styles.container}>
        <Experience />
      </div>
    </>

  );
}

export default App
