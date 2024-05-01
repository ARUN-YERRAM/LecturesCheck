import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import Nav from "./components/Nav";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
// import Sidebar from "./components/Sidebar";
import Upload from "./components/FileUpload";
import App1 from "./App1";




function App() {
  
  return (
    <>
      <Nav />

      {/* <Sidebar/> */}

      <div className="container">

      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fileUpload" element={<Upload />} />
          <Route path="/videoUpload" element={<App1 />} />
          
        </Routes>
        
      </div>
    </>
  );
}

export default App;
