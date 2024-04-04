// import logo from './logo.svg';
import './App.css';
import { Route,Routes} from 'react-router-dom';
import Learn from './components/Learn.js'

function App() {
  return (
  <div className="App">
  {/* <Nav/> */}
  <div>
    <Routes>
      <Route path='/' element={ <Law/>}/>
    <Routes/>

    </div>
    </div>
  );
}

export default App;
