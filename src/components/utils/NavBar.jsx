import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavBar = ({ siteTitle }) => {
  return (
    <StNavBar>
      <Link to="#logo" id="logo">
        {siteTitle}
      </Link>
      <Link to="#">Home</Link>
      <Link to="#wid">What I Do</Link>
      <Link to="#wik">What I Know</Link>
      <Link to="#port">Portfolio</Link>
      <a href="http://iomier.github.io/appList/">Github Demo</a>
    </StNavBar>
  )
}
const StNavBar = styled.nav`
  padding: 2em 1.5em;

  a {
    color: white;
    display: block;
    float: left;
    margin: 0 0.5em;
    text-decoration: none;
    position: relative;
    top: 50%;
    transform: perspective(1px) translateY(-50%);
  }
  .pullRight {
    float: right;
  }
  #logo {
    font-size: 1.2em;
    font-weight: 600;
    color: #bada55;
  }
  a:hover {
    color: #bada55;
  }
`
export default NavBar
