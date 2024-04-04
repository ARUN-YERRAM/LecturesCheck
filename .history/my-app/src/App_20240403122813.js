// import logo from './logo.svg';
import './App.css';
import { Route,Routes} from 'react-router-dom';
import Learn from './components/Learn.js'
import Nav from './components/Nav.js';
function App() {
  return (
  <div className="App">
  {/* <Nav/> */}
  <div>
    <Routes>
      <Route path='/' element={ <Learn/>}/>

    </Routes>

    </div>
    </div>
  );
}

export default App;
