import React from "react"

// import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
// import Form from "react-bootstrap/Form"
// import Button from "react-bootstrap/Button"
// import FormControl from "react-bootstrap/FormControl"
import { Link } from "gatsby"

const navBar = ({ data }) => {
  return (
    <Nav defaultActivekey="/home" className="flex-column">
      <Link className="nav-link" to="/">
        Active
      </Link>
      <Link className="nav-link" to="/third-post">
        Post
      </Link>
      <Link className="nav-link disabled" to="/third-post">
        Post
      </Link>
    </Nav>
  )
}

export default navBar
