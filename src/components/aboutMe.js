import React from "react"

import iomiPng from "../images/iomi.png"
const aboutMe = ({ data }) => {
  return (
    <>
      <div className="aboutMe ss2">
        <div className="">
          <img className="iomi" src={iomiPng} alt="iomi" />
        </div>
        <div className="aboutMeP">
          <h1>About Me...</h1>
          <p>
            My name is Iman Omidi and i have studied translation studies in
            Kharazmi University. I was always interested in Tech and programming
            therefore i started fiddling with html and css from early ages. i
            have worked with various CMS such as Wordpress and Joomla then I
            started learning Javascript and consequently ReactJs and GatsbyJs.
          </p>
        </div>
      </div>
    </>
  )
}

export default aboutMe
