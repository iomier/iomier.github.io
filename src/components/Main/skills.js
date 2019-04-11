import React from "react"
import styled from "styled-components"

import reactSvg from "../../images/React.svg"
import gatsbySvg from "../../images/gatsby.svg"
import javascriptSvg from "../../images/javascript.svg"
import bootstrapSvg from "../../images/bootstrap.svg"
import semanticuiSvg from "../../images/semanticui.svg"
import htmlSvg from "../../images/html5.svg"
import cssSvg from "../../images/css3.svg"
import indesignSvg from "../../images/indesign.svg"
import xdSvg from "../../images/xd.svg"
import photoshopSvg from "../../images/photoshop.svg"
import gitSvg from "../../images/git.svg"
import cmsSvg from "../../images/wordpress.svg"
import Tiles from "../utils/Tiles"

const skillsList = [
  {
    name: "React JS",
    image: reactSvg,
    id: 1,
  },
  {
    name: "Gatsby JS",
    image: gatsbySvg,
    id: 2,
  },
  {
    name: "Javascript",
    image: javascriptSvg,
    id: 3,
  },
  {
    name: "Bootstarp",
    image: bootstrapSvg,
    id: 4,
  },
  {
    name: "Semantic UI",
    image: semanticuiSvg,
    id: 5,
  },
  {
    name: "HTML",
    image: htmlSvg,
    id: 6,
  },
  {
    name: "CSS",
    image: cssSvg,
    id: 7,
  },
  {
    name: "Indesign",
    image: indesignSvg,
    id: 8,
  },
  {
    name: "Adobe XD",
    image: xdSvg,
    id: 9,
  },
  {
    name: "Photoshop",
    image: photoshopSvg,
    id: 10,
  },
  {
    name: "Git",
    image: gitSvg,
    id: 11,
  },
  {
    name: "CMS",
    image: cmsSvg,
    id: 12,
  },
]
const WikTiles = () => {
  return (
    <StWikTiles>
      <Tiles tilesData={skillsList} inputWidth="150px" wik={true} />
    </StWikTiles>
  )
}

export default WikTiles
const StWikTiles = styled.div`
  background: #fff;
`
