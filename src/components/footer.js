import React from "react"
import styled from "styled-components"

function footer() {
  return (
    <StFooter>
      © {new Date().getFullYear()}, Built with
      <a href="https://www.gatsbyjs.org"> Gatsby</a>
    </StFooter>
  )
}

export default footer

const StFooter = styled.footer`
  color: #eee;
  background-color: Black;
  padding: 1em 1.5em;

  span {
    text-align: center;
  }
`
