import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        LecturesCheck
      </Link>
      <ul>
        <CustomLink to="/about">About</CustomLink> 
        <CustomLink to="/video">Upload Video</CustomLink>
        <CustomLink to="/file">Upload Files</CustomLink>
        <CustomLink to="/signin">Signin"</CustomLink>
        <CustomLink to="/signin">Signup"</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}