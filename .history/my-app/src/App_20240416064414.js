import {Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav"
import Home from "./components/Home"
// import File from "./components/File"
// import Video from "./components/video"
import About from "./components/About";
// import Signin from "./components/Signin";
// import Signup from "./components/Signup";
// import Sidebar from "./components/Sidebar";
import Upload from "./components/FileUpload";
// import Video from "./components/Video";
import App1 from "./App1";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";



  
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <Menu>
          <MenuItem
            component={<Link to="/" className="link" />}
            className="menu1"
            icon={
              <MenuRoundedIcon
                onClick={() => {
                  collapseSidebar();
                }}
              />
            }
          >
            <h2>QUICKPAY</h2>
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );



function App() {
  const { collapseSidebar } = useProSidebar();
  return (
    <>
      <Nav />

    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <Menu>
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
      {/* <h1>WELCOME TO QUICKPAY</h1> */}
    </div>


    

      <div className="container">
      {/* <Sidebar/> */}
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          {/* <Route path="/signin" element={<Signin/>}/> */}
          {/* <Route path="/signup" element={<Signup/>}/> */}
          <Route path="/fileUpload" element={<Upload/>}/>
          {/* <Route path="/Video" element={<Video/>}/> */}
          {/* <App1/> */}
          <Route path="/video" element={<App1/>}/>
        </Routes>

      </div>
    </>
  )
}


export default App;
