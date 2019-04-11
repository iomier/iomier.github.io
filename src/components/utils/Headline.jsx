import React from "react"
import styled from "styled-components"

const Headline = ({ title, id }) => {
  return (
    <StHeadline>
      <h2 id={id}>{title}</h2>
    </StHeadline>
  )
}

export default Headline
const StHeadline = styled.div`
  background-color: #eee;
  transition: 0.3s;
  text-align: center;
  h2 {
    margin: 0;
    padding: 0.5em;
  }
  &:hover {
    background-color: #bada55;
  }
`
