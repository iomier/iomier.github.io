import React from "react"
import styled from "styled-components"
import Headline from "./utils/Headline"
import WidTiles from "./Main/WidTiles"
import Skills from "./Main/skills"
import Portfolio from "./Main/portfolio"
import GitRepos from "./GitRepos"

const Main = () => {
  return (
    <StMain>
      <Headline title="What I Do" id="wid" />
      <WidTiles />
      <Headline title="What I Know" id="wik" />
      <Skills />
      <Headline title="Github Repos" id="repo" />
      <GitRepos />
      <Headline title="Portfolio" id="port" />
      <Portfolio />
    </StMain>
  )
}

export default Main

const StMain = styled.main``
