import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"

import Headline from "../components/utils/Headline"

const Template = ({ data }) => {
  const post = data.markdownRemark
  return (
    <StModal>
      <div>
        <Headline isPost={true} title={post.frontmatter.title} />
        <StClose to="#port">Back to Portfolio</StClose>

        <div className="postimage">
          <img
            src={post.frontmatter.feature.childImageSharp.fluid.src}
            alt={post.frontmatter.title}
          />
        </div>
      </div>

      <StPost dangerouslySetInnerHTML={{ __html: post.html }} />
    </StModal>
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

const StModal = styled.div`
  width: 100%;
  margin: 0;
  background-color: #fff;
  .postimage {
    border-radius: 12px;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);

    width: 40vw;
    max-width: 100%;
    margin: 2em auto;
  }
  img {
    width: inherit;
    border-radius: inherit;
  }
`
const StPost = styled.div`
  background-color: #eee;
  margin: 0;
  padding: 2em;
  .btn {
    background-color: #bada55;
    color: #eee;
    border: 1px solid #333;
  }
`
const StClose = styled(Link)`
  color: #000;
  background-color: #eee;
  padding: 0.5em 1em;
  display: block;
  text-align: center;
  font-weight: 600;
  transition: 0.5s;
  &:hover {
    background-color: #000;
    color: #eee;
  }
`
