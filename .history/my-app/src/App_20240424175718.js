import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import Nav from "./components/Nav";
// import Nav from "./components/Nav";
// import Sidebar from "./components/Sidebar";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import About from "./components/About";
import fileUpload from "./components/FileUpload";
// import App1 from "./App1";
import VideoUpload from "./components/Video";



function App() {
  
  return (
    <>
      {/* <Nav /> */}
      {/* <Sidebar/> */}

      <div className="container">

      
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/fileUpload" element={<Upload />} />
          <Route path="/videoUpload" element={<App1 />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
