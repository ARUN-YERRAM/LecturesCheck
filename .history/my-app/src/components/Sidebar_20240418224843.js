import React from 'react';
import { Link } from 'react-router-dom';
// import FileUpload from './FileUpload';
import "./sidebar.css";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about">About Us</Link>
                </li>
                {/* <li><a href="#news">News</a></li> */}
                <li class="dropdown">
                    <Link o="javascript:void(0)" class="dropbtn">OS</Link>
                    <div class="dropdown-content">
                    <Link to="OS1st">UNIT 1</Link>
                    <Link to="OS2nd">UNIT 2</Link>
                    <Link to="OS3rd">UNIT 3</Link>
                    <Link to="OS4th">UNIT 4</Link>
                    <Link to="OS5th">UNIT 5</Link>
                    </div>
                </li>
                <br/>
                <li class="dropdown">
                    <Link to="javascript:void(0)" class="dropbtn">DBMS</Link>
                    <div class="dropdown-content">
                        <Link to="DBMS1st">UNIT 1</Link>
                        <Link to="2nd">UNIT 2</Link>
                        <Link to="3rd">UNIT 3</Link>
                        <Link to="4th">UNIT 4</Link>
                        <Link to="5th">UNIT 5</Link>
                        {/* <Link to="1st">UNIT 1</Link> */}
                    </div>
                </li>

                <li className="nav-item pe-3 ">
                    <Link to='/FileUpload'>
                        <button className="btn btn-primary dark">Upload PDF</button>
                    </Link>
                </li>

                <li className="nav-item pe-3 ">
                    <Link to='/video'>
                        <button className="btn btn-primary dark ">Upload Video</button>
                    </Link>
                </li>



            </ul>
        </div>
    );
}

export default Sidebar;

