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
  width: 100%;
  color: #eee;
  background-color: hsla(144, 83%, 0%, 0.5);
  @media (max-width: 950px) {
    //CSS
    margin: 0;
    border-radius: 0;
  }
`
