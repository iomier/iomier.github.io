// import React from "react"
// import { graphql } from "gatsby"

// export const query = graphql`
//   query($slug: String) {
//     sanityPortfolio(slug: { current: { eq: $slug } }) {
//       title
//     }
//   }
// `

// export default ({ data }) => (
//   <div>
//     <h1>{data.sanityPortfolio.title}</h1>
//   </div>
// )

import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"
import Headline from "../components/utils/Headline"
import Seo from "../components/seo"

export default ({ data }) => {
  const serializers = {
    types: {
      code: ({ node }) => (
        <pre data-language={node.language}>
          <code>{node.code}</code>
        </pre>
      ),
    },
  }
  const portfolio = data.sanityPortfolio
  return (
    <StModal>
      <Seo title={portfolio.title} />
      <div>
        <Headline isPost={true} title={portfolio.title} />
        <StClose to="#port">Back to Portfolio</StClose>
        <div className="flex-wrapper">
          <Img
            style={{ width: "48%" }}
            fluid={portfolio.mainImage.asset.fluid}
            alt={portfolio.title}
          />

          <div style={{ width: "48%" }} className="meta">
            <ul>
              <li>
                Title: <strong>{portfolio.title}</strong>
              </li>
              <li>
                Keywords: <strong>{portfolio.keywords}</strong>
              </li>
              <li>
                Language: <strong>{portfolio.language}</strong>
              </li>
              <li>
                Link: <strong>{portfolio.URL}</strong>
              </li>
              {portfolio._rawDesc ? (
                <BlockContent
                  blocks={portfolio._rawDesc}
                  serializers={serializers}
                />
              ) : null}
            </ul>
          </div>
        </div>
      </div>
      {/* <StPost dangerouslySetInnerHTML={{ __html: post.html }} /> */}
    </StModal>
  )
}

export const blogPostQuery = graphql`
  query($slug: String) {
    sanityPortfolio(slug: { current: { eq: $slug } }) {
      id
      title
      keywords
      language
      URL
      _rawDesc
      mainImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

const StModal = styled.div`
  width: 100%;
  margin: 0;
  background-color: #fff;
  .flex-wrapper {
    display: flex;
    justify-content: center;
  }
  .meta {
    margin: 0 1em;
  }
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
// const StPost = styled.div`
//   background-color: #eee;
//   margin: 0;
//   padding: 2em;
//   .btn {
//     background-color: #bada55;
//     color: #eee;
//     border: 1px solid #333;
//   }
// `
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
