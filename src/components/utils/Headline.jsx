import React from "react"
import styled from "styled-components"

const Headline = ({ title, id, isPost }) => {
  return (
    <StHeadline isPost={isPost}>
      <h2 id={id}>{title}</h2>
    </StHeadline>
  )
}

export default Headline
const StHeadline = styled.div`
  background-color: ${props =>
    props.isPost ? "rgba(186, 217, 84, 0.8)" : "hsla(0, 0%, 80%, 0.62)"};
  border-width: 1px 0 1px 0px;
  border-color: black;
  border-style: solid;
  transition: 0.3s;
  text-align: center;
  h2 {
    margin: 0;
    padding: 0.5em;
  }
  &:hover {
    background-color: rgba(186, 217, 84, 0.8);
  }
`
