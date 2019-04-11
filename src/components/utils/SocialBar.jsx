import React from "react"
import styled from "styled-components"
import { Github, Telegram, Dribbble } from "styled-icons/boxicons-logos"
import { Envelope } from "styled-icons/boxicons-solid/Envelope"
const SocialBar = () => {
  return (
    <StSocialBar>
      <StItem className="github">
        <Github />
      </StItem>
      <StItem>
        <Telegram />
      </StItem>
      <StItem>
        <Envelope />
      </StItem>
      <StItem>
        <Dribbble />
      </StItem>
    </StSocialBar>
  )
}

export default SocialBar
const StItem = styled.button`
  background-color: inherit;
  border: 0;
  cursor: pointer;
  margin: 0 auto;
  width: 100px;
  text-align: center;
  flex: 1;
  padding: 1em 0;
  transition: 0.5s;

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
    border-top: 3px solid #ea4c89;
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
    background-color: #ea4c89;
  }
`
const StSocialBar = styled.div`
  background-color: #fff;
  align-items: center;

  padding: 0;
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
