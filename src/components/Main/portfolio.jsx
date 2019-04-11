import React from "react"

import { StaticQuery, graphql, Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Headline from "../utils/Headline"

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
        <>
          <Headline title="Portfolio" />
          <Container className="portfo">
            <Row>
              <Col>
                <div className="grid">
                  {data.allMarkdownRemark.edges.map(edge => (
                    <Card
                      key={edge.node.id}
                      style={{ border: "none" }}
                      className="m-1"
                    >
                      <Card.Img
                        variant="top"
                        src={
                          edge.node.frontmatter.feature.childImageSharp.fluid
                            .src
                        }
                      />
                      <Card.Body>
                        <Card.Title>
                          <Link to={edge.node.frontmatter.path}>
                            {edge.node.frontmatter.title}
                          </Link>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    />
  )
}

export default portfolio
