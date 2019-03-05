import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import profilePic from "../assets/profile.png"
import NavBar from "./navBar"

const home = ({ data }) => {
  return (
    <Container>
      <Row>
        <Col sm={2}>
          <img style={{ height: "190px" }} alt="profile" src={profilePic} />
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
          <NavBar />
        </Col>
        <Col sm={10}>
          <Row>
            <Col>
              <img style={{ height: "200px" }} alt="profile" src={profilePic} />
            </Col>
            <Col>
              <img style={{ height: "200px" }} alt="profile" src={profilePic} />
            </Col>
            <Col>
              <img style={{ height: "200px" }} alt="profile" src={profilePic} />
            </Col>
          </Row>
          <Row>
            <Col>
              <img style={{ height: "200px" }} alt="profile" src={profilePic} />
            </Col>
            <Col>
              <img style={{ height: "200px" }} alt="profile" src={profilePic} />
            </Col>
            <Col>
              <img style={{ height: "200px" }} alt="profile" src={profilePic} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col style={{ height: "20vh" }}>Sm 12</Col>
      </Row>
      <Row>
        <Col style={{ height: "20vh" }}>Sm 12</Col>
      </Row>
      <footer className="row">
        <Col style={{ height: "10vh" }}>Footer</Col>
      </footer>
    </Container>
  )
}

export default home
