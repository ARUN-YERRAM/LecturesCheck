import Nav from "./components/Nav"
import Home from "./components/Home"
import Learn from "./components/Learn"
import Video from "./components/video"
import About from "./components/About";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>}/>
          <Route path="/file" element={<Files />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </div>
    </>
  )
}

export default App