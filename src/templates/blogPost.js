import React from "react"
import { graphql } from "gatsby"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"

import Header from "../components/header"
import Footer from "../components/footer"

const Template = ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      {" "}
      <Header />
      <Container>
        <Row>
          <Col md="9" className="mt-3" style={{ margin: "auto" }}>
            <>
              <div className="blog-title ">
                <h2 className="text-center rommetto">
                  {post.frontmatter.title}
                </h2>

                <img
                  className="card-img-top"
                  src={post.frontmatter.feature.childImageSharp.fluid.src}
                  alt=""
                />
              </div>

              <div
                className="post"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </>
          </Col>
        </Row>
      </Container>
      <Footer />
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
            fluid(maxHeight: 500) {
              src
            }
          }
        }
      }
    }
  }
`

export default Template
