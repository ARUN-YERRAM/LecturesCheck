import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/home" className="site-title">
        LecturesCheck
      </Link>
      {/* <CustomLink to="/signup">Signup</CustomLink> */}
      <ul>
        {/* <CustomLink to="/sidebar">Menu</CustomLink> */}
        <Link to="/about">About</Link> 
        <Link to="/upload">Upload </Link> 
        {/* <CustomLink to="/video">Upload Video</CustomLink> */}
        {/* <CustomLink to="/file">Upload Files</CustomLink> */}
        {/* <CustomLink to="/signin">Signin</CustomLink> */}
        {/* <CustomLink to="/signup">Signup</CustomLink> */}

      </ul>
    </nav>
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