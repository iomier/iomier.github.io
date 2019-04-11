import React from "react"
import pic2 from "../images/pic2.jpg"
import styled, { keyframes } from "styled-components"
import SocialBar from "./utils/SocialBar"
const Hero = props => {
  return (
    <>
      <StHero>
        <h2>Carpe Diem</h2>
      </StHero>
      <SocialBar />
    </>
  )
}

export default Hero
const focusBck = keyframes`
0% {
    letter-spacing: 1em;
    transform: translateZ(300px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    transform: translateZ(12px);
    filter: blur(0);
    opacity: 1;
  }`
const StHero = styled.div`
  background-color: #bada55;
  width: inherit;
  height: 60vh;
  padding: 0;
  background-image: url(${pic2});
  background-position: top;
  background-size: cover;
  h2 {
    color: white;
    margin: auto;
    font-size: 3em;
    display: table;
    position: relative;
    top: 40%;
    transform: perspective(1px) translateY(-50%);
    animation: ${focusBck} 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s both;
  }
`
