import React from 'react'
import Nav from "./Nav";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
        <div>
            <Nav/>
            <sidebar/>
            <h2>Welcome to the Home Page</h2>
            <p>This is the protected home page. Only logged-in users can access it.</p>
        </div>
    </>
    
  )
}

export default Home