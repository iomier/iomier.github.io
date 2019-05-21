const path = require("path")

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   const blogPostTemplate = path.resolve("src/templates/blogPost.js")

//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `).then(res => {
//     res.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: blogPostTemplate,
//       })
//     })
//   })
// }

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    query {
      allSanityPortfolio {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const portfolios = result.data.allSanityPortfolio.edges.map(
    ({ node }) => node
  )

  portfolios.forEach(portfolio => {
    actions.createPage({
      path: portfolio.slug.current,
      component: path.resolve("./src/templates/portfolioTemp.js"),
      context: {
        slug: portfolio.slug.current,
      },
    })
  })
}
