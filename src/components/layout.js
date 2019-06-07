/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import codeoic from "../images/code.png"

import Hero from "./Hero"

import AboutMe from "./aboutMe"
import Footer from "./footer"
import Main from "./Main"

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
      <StHome>
        <Hero siteTitle={data.site.siteMetadata.title} />
        {console.log(data.site.siteMetadata.title)}
        <AboutMe />
        <Main />
        <Footer />
      </StHome>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
const StHome = styled.div`
  width: 100%;
  margin: 0 auto;
  background-attachment: fixed;
  background-image: url(${codeoic});
  background-position: top;
  background-size: cover;
`
