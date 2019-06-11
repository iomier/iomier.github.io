import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby-plugin-modal-routing"
import Img from "gatsby-image"
const portfolio = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSanityPortfolio(sort: { fields: [_updatedAt], order: DESC }) {
            edges {
              node {
                slug {
                  current
                }
                title
                _rawDesc
                mainImage {
                  asset {
                    fluid(maxWidth: 800) {
                      ...GatsbySanityImageFluid
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
          {data.allSanityPortfolio.edges.map(edge => (
            <StLink key={edge.node.title} to={edge.node.slug.current} asModal>
              <div>
                <Img fluid={edge.node.mainImage.asset.fluid} />
              </div>
              <h3>{edge.node.title}</h3>
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
