import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
// import Form from "react-bootstrap/Form"
// import Button from "react-bootstrap/Button"
// import FormControl from "react-bootstrap/FormControl"

const Header = ({ siteTitle }) => (
  <header>
    <Nav className="justify-content-center fixed-top bg-light">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="#port">
        Portfolio
      </Link>
      <Nav.Link href="/appList">GitHub Demo Apps</Nav.Link>
    </Nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
