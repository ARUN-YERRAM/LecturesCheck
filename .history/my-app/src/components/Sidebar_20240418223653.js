import React from 'react';
import { Link } from 'react-router-dom';
// import FileUpload from './FileUpload';
import "./sidebar.css";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>

                <li>
                    <a href="/about">About Us</a>
                </li>
                {/* <li><a href="#news">News</a></li> */}
                <li class="dropdown">
                    <Link o="javascript:void(0)" class="dropbtn">OS</Link>
                    <div class="dropdown-content">
                        <Link to="#">UNIT 1</Link>
                        <Link to="#">UNIT 2</Link>
                        <a href="#">UNIT 3</a>
                    </div>
                </li>
                <br/>
                <li class="dropdown">
                    <Link to="javascript:void(0)" class="dropbtn">DBMS</Link>
                    <div class="dropdown-content">
                        <Link to="#">UNIT 1</Link>
                        <Link to="#">UNIT 2</Link>
                        <Link to="#">UNIT 3</Link>
                    </div>
                </li>

                <li className="nav-item pe-3 ">
                    <Link to='/video'>
                        <button className="btn btn-primary dark ">Upload Video</button>
                    </Link>
                </li>

                <li className="nav-item pe-3 ">
                    <Link to='/FileUpload'>
                        <button className="btn btn-primary dark">Upload PDF</button>
                    </Link>
                </li>

            </ul>
        </div>
    );
}

export default Sidebar;

