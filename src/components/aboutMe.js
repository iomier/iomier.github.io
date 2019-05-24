import React from "react"
import styled from "styled-components"
import iomi from "../images/iomi.png"
import { UserGraduate, IdBadge } from "styled-icons/fa-solid/"
import Headline from "./utils/Headline"

const AboutMe = () => {
  return (
    <StAboutMe>
      <Headline title="About Me" id="me" />
      <StFlex>
        <StItem style={{ textAlign: "center" }}>
          <img src={iomi} alt="iman omidi" width="150px" />
          <h3>Iman Omidi</h3>
          <h5 style={{ padding: 0 }}>Junior Frontend Developer</h5>
        </StItem>
        <StItem>
          <h3>
            <UserGraduate />
            Education:
          </h3>
          <ul>
            <li>Bachelor:</li>
            Translation Studies
            <br />
            University of Isfahan
            <li>M.A:</li>
            Translation Studies
            <br />
            Kharazmi University of Tehran
          </ul>
        </StItem>
        <StItem>
          <h3>
            <IdBadge />
            Contact Info:
          </h3>
          <ul>
            <li>
              Age: <span>26</span>
            </li>
            <li>
              Residence: <span>Iran</span>
            </li>
            <li>
              Email:{" "}
              <a href="mailto://omidi.iman@gmail.com">Omidi.iman@gmail.com</a>
            </li>
            <li>
              Phone: <span>+989214544518</span>
            </li>
            <li>
              Resume:{" "}
              <a href="https://files.jjcloudservices.com/files/uploads/documents/8cd26902-6f6c-11e9-8f9f-d6b790452c1a_2effa93c-b9e6-4aa3-a358-1745992f1082.pdf">
                Click Here
              </a>
            </li>
          </ul>
        </StItem>
      </StFlex>
    </StAboutMe>
  )
}

export default AboutMe

const StAboutMe = styled.div`
  padding: 1px 0 0 0;
  margin: -1px auto 0 auto;
`
const StItem = styled.div`
  background-color: inherit;
  margin: 0 auto;
  flex: 1;
  padding: 1em 0;
  svg {
    width: 15px;
    margin-right: 5px;
  }
  li {
    font-weight: 600;
    padding: 0.5em 0;
  }
  a {
    font-weight: 400;
    color: #000;
    text-decoration: none;
  }
  a:hover {
    color: #bada55;
  }
  span {
    font-weight: 400;
  }
  img {
    filter: grayscale(60);
    transition: 0.3s;
  }
  img:hover {
    filter: grayscale(0);
  }
`
const StFlex = styled.div`
  background-color: #eee;
  align-items: stretch;
  padding: 0;
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
