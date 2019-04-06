import React from "react"
// import { graphql, StaticQuery } from "gatsby"
// import Img from "gatsby-image"

const Hero = ({ data }) => {
  return (
    <div className="big-hero">
      <div className="text-center ss2" style={{ height: "90vh" }}>
        <div className="herotitle">
          {console.log(data)}
          <h2>Welcome to iomi.ir</h2>
          <h3>Iman Omidi, Junior Frontend Developer</h3>
        </div>
      </div>
    </div>
  )
}

export default Hero
