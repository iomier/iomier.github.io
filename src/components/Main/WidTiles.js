import React from "react"
import Tiles from "../utils/Tiles"
import styled from "styled-components"

import uiPng from "../../images/uiux.png"
import graphicPng from "../../images/graphic.png"
import webPng from "../../images/web.png"
import layoutPng from "../../images/layout.png"
import progPng from "../../images/prog.png"
import transPng from "../../images/trans.png"
const tilesData = [
  {
    id: 1,
    name: "UI/UX Design",
    image: uiPng,
    text:
      "Designing Minimal UI and UX Designs with Adobe XD Based on Latest Trends.",
  },
  {
    id: 2,
    name: "Graphic Design",
    image: graphicPng,
    text: "Designing Fabulous Designs with Adobe Photoshop.",
  },
  {
    id: 3,
    name: "Web Design",
    image: webPng,
    text:
      "Beautiful Designs by the Might of the HTML5, CSS3, Js and Other Goodies.",
  },
  {
    id: 4,
    name: "Layout Design",
    image: layoutPng,
    text: "Creative and Multipurpose Layouts for Magazines and Office Sets.",
  },
  {
    id: 5,
    name: "Programming",
    image: progPng,
    text: "Programming Web Programms with JS and React JS.",
  },
  {
    id: 6,
    name: "Translation",
    image: transPng,
    text:
      "My Academic Field of Study and Lifelong Obssession with Words and Knowledge.",
  },
]
const WidTiles = () => {
  return (
    <>
      <StWidTiles>
        <Tiles tilesData={tilesData} />
      </StWidTiles>
    </>
  )
}

export default WidTiles

const StWidTiles = styled.div`
  background-color: #fff;
`
