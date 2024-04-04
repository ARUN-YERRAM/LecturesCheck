import Nav from "./components/Navbar.js"
import Home from "./components/Home"
import Learn from "./components/Learn"
import Video from "./components/video"
import About from "./"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </div>
    </>
  )
}

export default App