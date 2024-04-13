import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
const Home = () => {
  return (
    <div>
      <>
      <CustomLink to="/signup">Signup</CustomLink>
      </>
    </div>
  )
}

export default Home
