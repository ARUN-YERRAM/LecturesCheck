// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./css/Sidebar.css";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <a href="/Home">Home</a>
                </li>
                {/* <li><a href="#news">News</a></li> */}
                <li class="dropdown">
                    <link href="javascript:void(0)" class="dropbtn">OS</link>
                    <div class="dropdown-content">
                        <link href="#">UNIT 1</link>
                        <link href="#">UNIT 2</link>
                        <link href="#">UNIT 3</link>
                    </div>
                </li>
                <li className="nav-item pe-3 ">
                     <a href='/UploadVideo'>
                        <button className="btn btn-dark font-monospace">Upload Video</button>
                    </a>
                        
                   

                </li>
                <li className="nav-item pe-3 ">
                    <Link to='/UploadPDF'>
                        <button className="btn btn-dark font-monospace">Upload PDF</button>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
