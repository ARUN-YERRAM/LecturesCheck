import React from 'react'
// import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Nav from "./components/Nav";

const Home = () => {
  return (
    <>

            
        <div>
            <Nav/>
            <h2>Welcome to the Home Page</h2>
            <p>This is the protected home page. Only logged-in users can access it.</p>
        </div>
        
    </>
    
  )
}

export default Home
