import Nav from "./components/Nav"
import Home from "./components/Home"
import File from "./components/File"
import Video from "./components/video"
import About from "./components/About";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Sidebar from "./components/Sidebar";

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/file" element={<File />} />
          <Route path="/video" element={<Video />} />
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/sidebar" element={<Sidebar/>}/>

          <UploadForm />

        </Routes>
      </div>
    </>
  )
}









export default App