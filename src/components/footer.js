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
  margin: 0 0 25px 0;
  padding: 1em 1.5em;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  span {
    text-align: center;
  }
`
