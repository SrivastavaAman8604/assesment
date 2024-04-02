
import './App.css';
import Card from './Component/Card';
import PopulationGraph from './Component/Graph';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
      Hello react
      <Navbar/>
      <PopulationGraph/>
      <Card/>
    </div>
  );
}

export default App;
