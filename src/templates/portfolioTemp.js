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
import Headline from "../components/utils/Headline"
import Seo from "../components/seo"

export default ({ data }) => {
  const portfolio = data.sanityPortfolio
  return (
    <StModal>
      <Seo title={portfolio.title} />
      <div>
        <Headline isPost={true} title={portfolio.title} />
        <StClose to="#port">Back to Portfolio</StClose>

        <div className="postimage">
          <Img fluid={portfolio.mainImage.asset.fluid} alt={portfolio.title} />
        </div>
      </div>

      {/* <StPost dangerouslySetInnerHTML={{ __html: post.html }} /> */}
    </StModal>
  )
}

export const blogPostQuery = graphql`
  query($slug: String) {
    sanityPortfolio(slug: { current: { eq: $slug } }) {
      title
      desc {
        sanityChildren {
          text
        }
      }
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
