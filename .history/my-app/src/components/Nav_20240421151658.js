import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        LecturesCheck
      </Link>
      {/* <CustomLink to="/signup">Signup</CustomLink> */}
      <ul>
        {/* <CustomLink to="/sidebar">Menu</CustomLink> */}
        {/* <Link to="/about">About</Link>  */}
        {/* <Link to="/fileUpload">Files </Link>  */}
        {/* <Link to="/video">Videos</Link> */}
        {/* <CustomLink to="/file">Upload Files</CustomLink> */}
        {/* <CustomLink to="/signin">Signin</CustomLink> */}
        {/* <CustomLink to="/signup">Signup</CustomLink> */}

      </ul>

    </nav>





    </nav>
  )
}