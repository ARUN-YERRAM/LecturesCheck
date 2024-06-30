// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
// import FileUpload from './FileUpload';
import "./Sidebar.css";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about">
                        <button className = "btn btn-dark font-monospace">About us</button>
                    </Link>
                </li>


                {/* <li><a href="#news">News</a></li> */}
                <li class="dropdown">
                    <Link class="dropbtn">Video</Link>
                    {/* <div class="dropdown-content"> */}
                        {/* <Link to="/OUnit1">UNIT 1</Link> */}
                        {/* <Link to="/OUnit2">UNIT 2</Link> */}
                        {/* <Link to="/OUnit3">UNIT 3</Link> */}
                    {/* </div> */}
                    
                </li>
                <br/>

                <li class="dropdown">
                    <Link class="dropbtn">DBMS</Link>
                    <div class="dropdown-content">
                        <Link to="/DUnit1">UNIT 1</Link>
                        <Link to="/DUnit2">UNIT 2</Link>
                        <Link to="/DUnit3">UNIT 3</Link>
                    </div>
                    
                </li>

                {/* <li>
                    <Link to="/VideoUploader">
                        <button className = "btn btn-dark font-monospace">Video Summarizer</button>
                    </Link>
                </li> */}


                {/* <li className="nav-item pe-3 ">
                     <Link to='/videoUpload'>
                        <button className="btn btn-dark font-monospace">Upload Video</button>
                    </Link>
                </li>

                <li className="nav-item pe-3 ">
                    <Link to='/fileUpload'>
                        <button className="btn btn-dark font-monospace">Upload PDF</button>
                    </Link>
                </li> */}
            </ul>
        </div>
    );
}

export default Sidebar;

