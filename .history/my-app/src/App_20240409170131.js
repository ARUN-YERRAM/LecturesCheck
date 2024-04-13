import { Route, Routes } from "react-router-dom"
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


export default App
