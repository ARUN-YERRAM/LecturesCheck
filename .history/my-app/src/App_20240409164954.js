import { Route, Routes } from "react-router-dom"
import React from 'react';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import ChartComponent from './ChartComponent';



import Nav from "./components/Nav"
import Home from "./components/Home"
// import File from "./components/File"
// import Video from "./components/video"
import About from "./components/About";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Sidebar from "./components/Sidebar";
import Upload from "./components/upload";



function App() {

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Nav />
      <div className="container">

      {/* <div className="app-container">
      <h1 className="app-header">Lecture Material Uploader</h1>
        <Upload/>
      </div> */}
          


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          {/* <Route path="/file" element={<File />} /> */}
          {/* <Route path="/video" element={<Video />} /> */}
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          {/* <Route path="/sidebar" element={<Sidebar/>}/> */}
          <Route path="/upload" element={<Upload/>}/>

          {/* <UploadForm /> */}

        </Routes>
      </div>
    </>
  )
}


export default App;
