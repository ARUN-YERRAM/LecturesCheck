// import logo from './logo.svg';
import './App.css';
import { Route,Routes} from 'react-router-dom';
import Learn from './components/Learn.js'
import About from './components/About.js';
// import Nav from './components/Nav.js';
function App() {
  return (
  <div className="App">
  {/* <Nav/> */}
  <div>
    <Routes>
      <Route path='/' element={ <Learn/>}/>
      <Route path='/About' element={<About}

    </Routes>

    </div>
    </div>
  );
}

export default App;
