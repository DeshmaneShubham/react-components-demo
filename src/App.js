
import './App.css';
import Home from './Home';
import Props from './Props';
import PropsByFunction from './PropsByFunction';

function App() {
  return (
    <div className="App">
      <Props nav="Shubham" vay={27}/>
      <PropsByFunction nav="Ram" vay={27}/>
        <Home/>
      
    </div>
  );
}

export default App;
