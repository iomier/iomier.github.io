import React from "react"
import styled from "styled-components"
import spinner from "../../assets/spinner.svg"
const Spinner = () => {
  return (
    <StSpinner>
      <img src={spinner} alt="loading spinner" style={{ size: "80px" }} />
      <h4>Loading like a champ!!</h4>
    </StSpinner>
  )
}

export default Spinner

const StSpinner = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 1em;
`
