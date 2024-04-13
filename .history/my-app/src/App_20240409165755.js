import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Visual from ""./components/Visual";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
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
    <Router>
      <div>
        <Nav />
        <div className="container">
          <h1 className="app-header">My React App</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/upload" element={<Upload/>}/>
            <Route path="/chart" element={<Visual chartData={chartData} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
