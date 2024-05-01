import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import About from "./components/About";
import FileUpload from "./components/FileUpload";
import VideoUpload from "./components/Video";



function App() {
  
  return (
    <>

      <div className="container">

      
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/fileUpload" element={<FileUpload />} />
          <Route path="/videoUpload" element={<VideoUpload />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
