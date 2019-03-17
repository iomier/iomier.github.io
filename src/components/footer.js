import React from "react"

import gmailSvg from "../images/gmail.svg"
import telegramSvg from "../images/telegram.svg"
import githubSvg from "../images/github.svg"

function footer() {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with
      <a href="https://www.gatsbyjs.org"> Gatsby</a>
      <div className="pull">
        <a href="http://github.com">
          <img src={githubSvg} alt="github profile" /> Github
        </a>
        <a href="http://github.com">
          <img src={telegramSvg} alt="github profile" />
          @iomier
        </a>
        <a href="http://github.com">
          <img src={gmailSvg} alt="github profile" /> omidi.iman@gmail.com
        </a>
      </div>
    </footer>
  )
}

export default footer
