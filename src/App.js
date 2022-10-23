import './App.css';
import Hello from "./cpn/1";
import Welcome from './cpn/2';
import styles from "./App.module.css";
// import World from './cpn/3';

function App() {
  return (
    <div className="App">
      <h3>props : properties</h3>
      <Hello age={10}/>
      <Hello age={20}/>
      <Hello age={30}/>
      
    </div>
  );
}

export default App;
