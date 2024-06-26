// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
// import FileUpload from './FileUpload';
import "./sidebar.css";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                {/* <li><a href="#news">News</a></li> */}
                <li class="dropdown">
                    {/* <a href="javascript:void(0)" class="dropbtn">OS</a>
                    <div class="dropdown-content">
                        <a href="#">UNIT 1</a>
                        <a href="#">UNIT 2</a>
                        <a href="#">UNIT 3</a>
                    </div> */}
                    
                </li>

                <li>
                    <Link to="/about">
                        <button className = "btn btn-dark font-monospace">About us</button>
                    </Link>
                </li>


                <li className="nav-item pe-3 ">
                     <Link to='/videoUpload'>
                        <button className="btn btn-dark font-monospace">Upload Video</button>
                    </Link>
                </li>

                <li className="nav-item pe-3 ">
                    <Link to='/fileUpload'>
                        <button className="btn btn-dark font-monospace">Upload PDF</button>
                    </Link>

                    {/* <li class="nav-item link"> */}
                        {/* <Link class="nav-link col" to="/FAQ">FAQS</Link> */}
                    {/* </li> */}
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;

