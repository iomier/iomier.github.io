import React from "react"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import reactSvg from "../images/React.svg"
import gatsbySvg from "../images/gatsby.svg"
import javascriptSvg from "../images/javascript.svg"
import bootstrapSvg from "../images/bootstrap.svg"
import semanticuiSvg from "../images/semanticui.svg"
import htmlSvg from "../images/html5.svg"
import cssSvg from "../images/css3.svg"
import indesignSvg from "../images/indesign.svg"
import xdSvg from "../images/xd.svg"
import photoshopSvg from "../images/photoshop.svg"
import gitSvg from "../images/git.svg"
import cmsSvg from "../images/wordpress.svg"

const skillsList = [
  {
    name: "React JS",
    image: reactSvg,
  },
  {
    name: "Gatsby JS",
    image: gatsbySvg,
  },
  {
    name: "Javascript",
    image: javascriptSvg,
  },
  {
    name: "Bootstarp",
    image: bootstrapSvg,
  },
  {
    name: "Semantic UI",
    image: semanticuiSvg,
  },
  {
    name: "HTML",
    image: htmlSvg,
  },
  {
    name: "CSS",
    image: cssSvg,
  },
  {
    name: "Indesign",
    image: indesignSvg,
  },
  {
    name: "Adobe XD",
    image: xdSvg,
  },
  {
    name: "Photoshop",
    image: photoshopSvg,
  },
  {
    name: "Git",
    image: gitSvg,
  },
  {
    name: "CMS",
    image: cmsSvg,
  },
]
const skills = ({ data }) => {
  return (
    <Container className="justify-content-center skills">
      <Row>
        <Col>
          <h1 className="text-center my-3">What I Know..</h1>
        </Col>
      </Row>
      <div className="grid2">
        {skillsList.map(entry => (
          <Card
            key={entry.image}
            style={{ border: "none" }}
            className="text-center"
          >
            <Card.Img variant="top" src={entry.image} />
            <Card.Body>
              <Card.Title>{entry.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  )
}

export default skills
