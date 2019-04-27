import React, { useState } from "react"
import pic2 from "../images/pic2.jpg"
import styled, { keyframes } from "styled-components"
import SocialBar from "./utils/SocialBar"
import Header from "./header"

const Hero = props => {
  const [quote, setQuote] = useState(
    "Omnis cum in tenebris praesertim vita laboret."
  )
  const quoteHandler = () => {
    quote.length === 46
      ? setQuote("Life is one long struggle in the dark.")
      : setQuote("Omnis cum in tenebris praesertim vita laboret.")
  }
  return (
    <>
      <StHero>
        <Header siteTitle={props.siteTitle} />
        <h1>Frontend Web Developer</h1>
        <p className="start">Scroll to begin</p>
        <h2 onClick={quoteHandler}>{quote}</h2>
        <SocialBar />
      </StHero>
    </>
  )
}

export default Hero

const effect = keyframes`0% {
  letter-spacing: 1em;
  opacity: 0;
}
40% {
  opacity: 0.6;
}
100% {
  letter-spacing: normal;
  opacity: 1;
}`

const StHero = styled.div`
  background-color: #bada55;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-items: center;

  max-height: 100%;
  padding: 0;
  background-attachment: fixed;
  background-image: url(${pic2});
  background-position: top;
  background-size: cover;
  @media (min-width: 1281px) {
  }
  .start {
    background: linear-gradient(
      to right,
      rgba(187, 218, 85, 0) 0%,
      rgba(187, 218, 85, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    width: 50%;
    color: #000;
    font-weight: bold;
    display: inline-block;
    position: relative;
    margin: 0 auto;
    text-align: center;
    top: 40%;
    transition: 0.6s;
    transform: perspective(1px) translateY(-50%);
    animation: ${effect} 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 1.5s both;
  }
  .start:hover {
    text-decoration: none;
    background: linear-gradient(
      to right,
      rgba(187, 218, 85, 0) 0%,
      rgba(34, 34, 34, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    color: #fff;
  }
  h2,
  h1 {
    font-family: "Kaushan Script", cursive;
    color: white;
    margin: 0 auto;
    font-size: 2.5em;
    display: absolute;
    text-shadow: 2px 2px #000;
    position: relative;
    top: 40%;
    text-align: right;
    transform: perspective(1px) translateY(-50%);
    animation: ${effect} 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 1.5s both;
  }
  h2 {
    text-shadow: 1px 1px #000;
    animation: none;
    font-size: 1.8em;
    margin: auto 10px 50px auto;
    text-align: left;
  }
`
