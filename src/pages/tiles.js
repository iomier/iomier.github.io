import React from "react"

import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import uiPng from "../images/uiux.png"
import graphicPng from "../images/graphic.png"
import webPng from "../images/web.png"
import layoutPng from "../images/layout.png"
import progPng from "../images/prog.png"
import transPng from "../images/trans.png"

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
const tiles = ({ data }) => {
  return (
    <Container className="justify-content-center tiles">
      <Row>
        <Col>
          <h1 className="text-center my-3">What I Do..</h1>
        </Col>
      </Row>
      <div className="grid">
        {tilesData.map(tile => (
          <Card
            key={tile.id}
            style={{ border: "none" }}
            className="text-center"
          >
            <Card.Img
              variant="top"
              src={tile.image}
              style={{ margin: "auto", width: "150px" }}
            />
            <Card.Body>
              <Card.Title>{tile.name}</Card.Title>
              <Card.Text>{tile.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  )
}

export default tiles
