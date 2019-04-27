import React from "react"
import styled from "styled-components"
import { Github, Telegram, Deviantart } from "styled-icons/boxicons-logos"
import { Envelope } from "styled-icons/boxicons-solid/Envelope"
const SocialBar = () => {
  return (
    <StSocialBar>
      <StItem href="https://github.com/iomier/" alt="Iomier Github">
        <Github />
      </StItem>
      <StItem href="https://t.me/iomi2034">
        <Telegram />
      </StItem>
      <StItem href="mailto://omidi.iman@gmail.com">
        <Envelope />
      </StItem>
      <StItem href="https://www.deviantart.com/iomier">
        <Deviantart />
      </StItem>
    </StSocialBar>
  )
}

export default SocialBar
const StItem = styled.a`
  background-color: inherit;
  color: #000;
  cursor: pointer;
  margin: 0 auto;
  width: 100px;
  text-align: center;
  flex: 1;
  padding: 1em 0;
  transition: 0.5s;
  a,
  a:hover {
    color: inherit;
  }
  svg {
    width: 25px;
  }
  &:nth-child(1) {
    border-top: 3px solid #333;
  }
  &:nth-child(2) {
    border-top: 3px solid #0088cc;
  }
  &:nth-child(3) {
    border-top: 3px solid #ea4335;
  }
  &:nth-child(4) {
    border-top: 3px solid #05cc47;
  }
  &:nth-child(1):hover {
    color: #fff;
    background-color: #333;
  }
  &:nth-child(2):hover {
    color: #fff;

    background-color: #0088cc;
  }
  &:nth-child(3):hover {
    color: #fff;
    background-color: #ea4335;
  }
  &:nth-child(4):hover {
    color: #fff;
    background-color: #05cc47;
  }
`
const StSocialBar = styled.div`
  margin-top: auto;
  background-color: #fff;
  align-items: center;
  padding: 0;
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
