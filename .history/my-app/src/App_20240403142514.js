import './App.css';
import { Route, Routes } from 'react-router-dom';
import Learn from './components/Learn.js';
import About from './components/About.js';
import { Sidebar} from './components/sidebar.js'; // Import SidebarWithContentSeparator component


import Nav from './components/Nav.js';
// import Sidebar from "./components/sidebar.js";

function App() {
  return (
    <div className="App">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main content */}
      <Nav/>
      <div className="main-content">
        <Routes>
          <Route path='/' element={<Learn />} />
          <Route path='/about' element={<About />} />
          <Sidebar/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
