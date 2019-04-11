import PropTypes from "prop-types"
import NavBar from "./utils/NavBar"
import React from "react"
import styled from "styled-components"
const Header = ({ siteTitle }) => (
  <StHeader>
    <NavBar siteTitle={siteTitle} />
  </StHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
const StHeader = styled.header`
  color: #eee;
  background-color: Black;
  margin: 25px 0 0 0;
  padding: 2em 1.5em;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
