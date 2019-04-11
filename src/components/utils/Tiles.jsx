import React from "react"
import styled, { keyframes } from "styled-components"

const Tiles = props => {
  const { tilesData } = props
  return (
    <div>
      <StGrid inputWidth={props.inputWidth}>
        {props.wik
          ? tilesData.map(tile => (
              <StTileWik key={tile.id}>
                <img src={tile.image} alt="" />
                <h4>{tile.name}</h4>
                <p>{tile.text}</p>
              </StTileWik>
            ))
          : tilesData.map(tile => (
              <StTile key={tile.id}>
                <img src={tile.image} alt="" />
                <h4>{tile.name}</h4>
                <p>{tile.text}</p>
              </StTile>
            ))}
      </StGrid>
    </div>
  )
}

export default Tiles
const StGrid = styled.div`
  display: grid;
  grid-gap: 0.8em;
  padding: 2em;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.inputWidth || "250px"}, 1fr)
  );
`
export const StTile = styled.div`
  padding: 1em;
  border-radius: 10px;
  border: #000 4px solid;
  background-color: #eee;
  text-align: center;
  transition: 0.5s;

  img {
    height: 150px;
  }
  h4 {
    margin: 0;
  }
  p {
    text-align: left;
  }
  &:hover {
    transform: translate(0px, -30px);
    border-color: #bada55;
    background-color: #333;
    color: #fff;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  }
  &:hover img {
    border: 3px #fff solid;
    border-radius: 100%;
  }
`
const heartbeat = keyframes`
from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(0.91);
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.87);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`
const StTileWik = styled.div`
  padding: 1em;
  border-radius: 10px;
  text-align: center;
  border: red;
  background-color: #fff;

  img {
    height: 100px;
  }
  img:hover {
    animation: ${heartbeat} 1.5s ease-in-out infinite both;
  }
  p {
    text-align: left;
  }
  &:hover {
  }
`
