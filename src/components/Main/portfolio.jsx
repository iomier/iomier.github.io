import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby-plugin-modal-routing"

const portfolio = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  path
                  date
                  excerpt
                  feature {
                    publicURL
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <StPortGrid>
          {data.allMarkdownRemark.edges.map(edge => (
            <StLink key={edge.node.id} to={edge.node.frontmatter.path} asModal>
              <div>
                <img
                  src={edge.node.frontmatter.feature.childImageSharp.fluid.src}
                  alt={edge.node.frontmatter.title}
                />
              </div>
              <h3>{edge.node.frontmatter.title}</h3>
            </StLink>
          ))}
        </StPortGrid>
      )}
    />
  )
}

export default portfolio

const StPortGrid = styled.div`
  background-color: #eee;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
  padding: 4em;
  img {
    width: inherit;
  }
  a {
    text-align: center;
  }
`
const StLink = styled(Link)`
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  border: 1px solid #eee;
  padding: 0.5em;
  color: #333;
  background-color: #fff;
  font-weight: 600;
  transition: 0.6s;
  &:hover {
    filter: grayscale(100);
  }
  div {
    width: 100%;
  }
  img {
    display: block;
  }
  h3 {
    background-color: #bada55;
    font-size: 1rem;
    text-decoration: none;
    padding: 0.5em;
    margin: 0;
    margin-top: 10px;
  }
`
