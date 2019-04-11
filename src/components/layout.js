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

import Header from "./header"
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <Hero />
        <AboutMe />
        <Main />
        <div>{children}</div>
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
  width: 65vw;
  margin: 0 auto;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
`
