
import './App.css';
import {Routes, Route} from "react-router-dom";
// import LoginForm from './components/LoginForm';
import Home from './components/Home';
import About from './components/About';
import FileUpload from './components/FileUpload';
// import VideoUpload from './components/Video'; 
// import Unit1 from './components/OS/Unit1';
// import Unit2 from './components/OS/Unit2';
// import Unit3 from './components/OS/Unit3';
// import DUnit1 from './components/DBMS/Unit1';
// import DUnit2 from './components/DBMS/Unit2';
// import DUnit3 from './components/DBMS/Unit3';
import Lot from './components/Lot.js';
import Navbar from '.Navbar';
// import VideoUploader from './components/VideoUploader';
function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        {/* <Route path='/' element={<LoginForm/>}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/fileUpload' element={<FileUpload/>}/>
        {/* <Route path='/videoUpload'  element={<VideoUpload/>}/> */}
        {/* <Route path='/OUnit1' element={<Unit1/>}/> */}
        {/* <Route path='/OUnit2' element={<Unit2/>}/> */}
        {/* <Route path='/OUnit3' element={<Unit3/>}/> */}
        {/* <Route path='/DUnit1' element={<DUnit1/>}/> */}
        {/* <Route path='/DUnit2' element={<DUnit2/>}/> */}
        {/* <Route path='/DUnit3' element={<DUnit3/>}/> */}
        <Route path='/Lot' element={<Lot/>}/>
        {/* <Route path='/VideoUploader' element={<VideoUploader/>}/> */}
        
      </Routes>
    </div>

    
  );
}

export default App;



