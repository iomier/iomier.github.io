/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Tiles from "./tiles"
import Hero from "./Hero"
import Contact from "./contact"

import gmailSvg from "../images/gmail.svg"
import telegramSvg from "../images/telegram.svg"
import githubSvg from "../images/github.svg"

// import "./layout.css"
import AboutMe from "./aboutMe"
import Portfolio from "./portfolio"
import Skills from "./skills"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Hero />
        <Tiles />
        <Skills />
        <Portfolio />
        <Contact />
        <AboutMe />
        <div>{children}</div>
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
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
