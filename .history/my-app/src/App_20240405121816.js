import Nav from "./components/Nav"
import Home from "./components/Home"
import File from "./components/File"
import Video from "./components/video"
import About from "./components/About";
import Signin from './components/Signin';

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
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/login" element={<</Route>}
        </Routes>
      </div>
    </>
  )
}

export default App