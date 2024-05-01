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
                    <a href="javascript:void(0)" class="dropbtn">OS</a>
                    <div class="dropdown-content">
                        <a href="#">UNIT 1</a>
                        <a href="#">UNIT 2</a>
                        <a href="#">UNIT 3</a>
                    </div>
                </li>
                <br/>
                <li class="dropdown">
                    <Link to="javascript:void(0)" class="dropbtn">DBMS</=>
                    <div class="dropdown-content">
                        <a href="#">UNIT 1</a>
                        <a href="#">UNIT 2</a>
                        <a href="#">UNIT 3</a>
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

