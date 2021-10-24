import logo from './logo.svg';
import './App.css';

function App() {
  const colors = ['red', "white", "blue", "deeppink"] //|| 2
  return (
    <div className="App">
      {true && <p>that thing was true</p>}
      { 2+ 2==5? <p>1984</p>: <p>reality</p>}
      {colors.map(color=>(
        <p style={{backgroundColor: color}}>{color}</p>

      )
      )}
    </div>
  );
}

export default App;
