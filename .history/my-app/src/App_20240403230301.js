import Nav from "./components/Navbar.js"
import Pricing from "./components/Pricing"
import Learn from "./components/Learn"
import Video from "./components/video"
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