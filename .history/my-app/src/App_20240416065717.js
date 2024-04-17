import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Upload from "./components/FileUpload";
import App1 from "./App1";
import { Menu, MenuItem } from "react-pro-sidebar";
// import MenuRoundedIcon from '@material-ui/icons/MenuRounded'; // Import MenuRoundedIcon
import { useProSidebar } from 'react-pro-sidebar';


function App() {
  const { collapseSidebar } = useProSidebar();
  
  return (
    <>
      <Nav />

      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar className="app">
          <Menu>
            <MenuItem
              component={<Link to="/" className="link" />} // Ensure you import Link from react-router-dom
              className="menu1"
              icon={
                <MenuRoundedIcon
                  onClick={() => {
                    collapseSidebar();
                  }}
                />
              }
            />
            <MenuItem className="menu1">
              <h2>MENU</h2>
            </MenuItem>
            <MenuItem> Dashboard </MenuItem>
            <MenuItem> Invoices </MenuItem>
            <MenuItem> Charts </MenuItem>
            <MenuItem> Wallets </MenuItem>
            <MenuItem> Transactions </MenuItem>
            <MenuItem> Settings </MenuItem>
            <MenuItem> Logout </MenuItem>
          </Menu>
        </Sidebar>
      </div>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fileUpload" element={<Upload />} />
          <Route path="/video" element={<App1 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
