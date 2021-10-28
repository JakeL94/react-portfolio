import logo from './logo.svg';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/navbar';
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
import Portfolio from './pages/Portfolio/portfolio';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div class='App'>
      <Navbar/>

      <Switch>
      <Route exact path='/' component={About} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/contact' component={Contact} />
      </Switch>

      <Footer/>
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