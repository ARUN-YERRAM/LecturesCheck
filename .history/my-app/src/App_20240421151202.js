import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Upload from "./components/FileUpload";
import App1 from "./App1";
// import { Menu, MenuItem } from "react-pro-sidebar";
// import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
 // Import MenuRoundedIcon

// import { useProSidebar } from 'react-pro-sidebar';


function App() {
  // const { collapseSidebar } = useProSidebar();
  
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
          {/* <Sidebar/> */}
        </Routes>
        
      </div>
    </>
  );
}

export default App;