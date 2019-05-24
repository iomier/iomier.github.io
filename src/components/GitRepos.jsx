import React from "react"
import styled from "styled-components"
import githubsvg from "../assets/github.svg"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Spinner from "./utils/Spinner"
//For Pagination

// const MoreRepos = gql`
// query ($cursor: String){
//   viewer {
//     repositories(first: 6, after: $cursor ) {
//       totalCount
//       nodes {
//         id
//         name
//         description
//         url
//         primaryLanguage {
//           name
//         }
//       }
//       pageInfo {
//         startCursor
//         endCursor
//         hasNextPage
//       }
//     }
//   }
//`

const APOLLO_QUERY = gql`
  {
    viewer {
      repositories(
        first: 9
        privacy: PUBLIC
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        totalCount
        nodes {
          id
          name
          description
          url
          isFork
          primaryLanguage {
            name
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`

const GitRepos = () => {
  // useEffect(() => {
  //   const wrapper = async () => {
  //     await fetch("https://api.github.com/users/iomier/repos")
  //       .then(response => response.json())
  //       .then(data => setRepos(data))
  //   }
  //   wrapper()
  // }, [])

  // const [repos, setRepos] = useState([])
  // const reposDisplay = repos.map(repo => (
  //   <div key={repo.id} className="repos">
  //     <h4>
  //       <b>Name: </b>
  //       {repo.name}
  //     </h4>
  //     <p>{repo.description}</p>
  //     <a href={repo.url} alt={repo.name}>
  //       <b>URL: </b>
  //       {repo.url}
  //     </a>
  //     <h5>
  //       <b>Language: </b>
  //       {repo.language}
  //     </h5>
  //   </div>
  // ))
  // console.log(repos)
  return (
    <>
      <Query query={APOLLO_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <Spinner />
          if (error) return <p>Error: {error.message}</p>
          const repos = data.viewer.repositories.nodes
          return (
            <StGitRepos>
              {repos.map(repo => (
                <div key={repo.id} className="repo">
                  <h4>
                    <b>Name: </b>
                    {repo.name}
                  </h4>
                  <p>{repo.description}</p>
                  <a href={repo.url} alt={repo.name}>
                    <b>URL: </b>
                    {repo.url}
                  </a>
                  <h5>
                    <b>Language: </b>
                    {repo.primaryLanguage
                      ? repo.primaryLanguage.name
                      : "Unspecified"}
                  </h5>
                  <h5>
                    <b>Status: </b>
                    {repo.isFork ? "Fork" : "Original"}
                  </h5>
                </div>
              ))}
            </StGitRepos>
          )
        }}
      </Query>
      <StGithubLink href="https://github.com/iomier" alt="iman omidi github">
        Continue on Github
      </StGithubLink>
    </>
    // <StGitRepos>
    //   {repos.length > 0 ? <>{reposDisplay}</> : "loading..."}
    // </StGitRepos>
  )
}
export default GitRepos

const StGitRepos = styled.div`
  min-height: 200px;
  padding: 0.6em 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: white;
  .repo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #5555;
    border-radius: 5px;
    margin: 0.5em;
    padding: 0.5em;
    width: 350px;
    word-break: break-word;
    background-color: #eee;
    background: #eee url(${githubsvg}) bottom right no-repeat 50% 50%;
    background-size: 50% 50%;
  }
`
const StGithubLink = styled.a`
  padding: 1em;
  text-align: center;
  background-color: #bada55;
  display: block;
`
