import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import About from './pages/about';

function App() {
  return (
    <div class='App'>
      <Navbar/>

      <About/>
    </div>
  )
}

export default App;

// const colors = ['red', "white", "blue", "deeppink"] //|| 2
// return (
//   <div className="App">
//     {true && <p>that thing was true</p>}
//     { 2+ 2==5? <p>1984</p>: <p>reality</p>}
//     {colors.map(color=>(
//       <p style={{backgroundColor: color}}>{color}</p>

//     )
//     )}
//   </div>
// );