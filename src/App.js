import './App.css';
import Hello from "./cpn/1";
import Welcome from './cpn/2';
import styles from "./App.module.css";
// import World from './cpn/3';

function App() {
  return (
    <div className="App">
      <Hello />
      <div className={styles.box}>App</div>
    </div>
  );
}

export default App;
