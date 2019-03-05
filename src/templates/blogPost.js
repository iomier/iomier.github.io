import React from "react"
import { graphql } from "gatsby"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"

import Header from "../components/header"

const Template = ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      {" "}
      <Header />
      <Container>
        <Row>
          <Col>
            <div>
              <div className="blog-title ">
                <img
                  className="card-img-top"
                  style={{ height: "70vh" }}
                  src={post.frontmatter.feature.childImageSharp.fluid.src}
                  alt=""
                />
                <h2 className="text-center mt-3 ">{post.frontmatter.title}</h2>
              </div>

              <div
                className="post"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const blogPostQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
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
`

export default Template
