import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <>
      {/* <CustomLink to="/signup">Signup</CustomLink> */}
      </>
    </div>
  )
}



// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }
export default Home