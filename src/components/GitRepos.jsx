import React, { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import styled from "styled-components"
import githubsvg from "../assets/github.svg"
const GitRepos = () => {
  useEffect(() => {
    const wrapper = async () => {
      await fetch("https://api.github.com/users/iomier/repos")
        .then(response => response.json())
        .then(data => setRepos(data))
    }
    wrapper()
  }, [])

  const [repos, setRepos] = useState([])
  const reposDisplay = repos.map(repo => (
    <div key={repo.id} className="repos">
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
        {repo.language}
      </h5>
    </div>
  ))
  console.log(repos)
  return (
    <>
      <StGitRepos>
        {repos.length > 0 ? <>{reposDisplay}</> : "loading..."}
      </StGitRepos>
      <ReactPaginate
        pageCount={2}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
      />
    </>
  )
}
export default GitRepos

const StGitRepos = styled.div`
  min-height: 200px;
  padding: 0.6em 0;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: white;
  .repos {
    border: 1px solid #5555;
    border-radius: 5px;
    margin: 0.5em;
    padding: 0.5em;
    max-width: 350px;
    word-break: break-word;
    background-color: #eee;
    background: #eee url(${githubsvg}) bottom right no-repeat 50% 50%;
    background-size: 50% 50%;
  }
`
