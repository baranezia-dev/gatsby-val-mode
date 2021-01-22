import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import "./valorant-button.css"
import ReactIcon from "../images/react-logo.png"
import GatsbyIcon from "../images/gatsby-mono.png"
import GitIcon from "../images/git-icon.png"
import TailwindIcon from "../images/tailwind-css-logo.png"
import ContentfulIcon from "../images/contentful-logo.png"
import FigmaIcon from "../images/figma-logo.png"

const Layout = () => {
  return (
    <>
      <div className="header">
        <div className="horizontal-line"></div>
        <h5 className="header-text">7°09′09″S 111°53′13″E</h5>
        <h5 className="header-text">LOC - BJN - IDN</h5>
        <div className="header-line"></div>
      </div>
      <div className="vertical-line"></div>
      <div className="background-text"><span>PORTFOLIO</span></div>
      <div className="information">
        <div className="title"><h1>ILHAM BARA</h1></div>
        <div className="content">
          <h3>WEB DEVELOPER</h3>
          <p>Hi, I'm passionately curious about anything related to web development. There’s a lot of things I can explore. I usually contribute to open source projects, exploring some useful resources, and taking any courses to rank up my skills. Also working on paid projects if there's opportunity.</p>
        </div>
      </div>
      <div className="div">
        <a href="https://github.com/ilhambara" target="_blank" rel="noreferrer">
          <p><span className="bg"></span><span className="base"></span><span className="text">Projects</span></p>
        </a>
        <a href="https://read.cv/ilhambara" target="_blank" rel="noreferrer">
          <p><span className="bg"></span><span className="base"></span><span className="text">Read cv</span></p>
        </a>
      </div>
      <div className="skill-title"><h2>SKILLS</h2></div>
      <div className="skill-container">
        <div className="skill-items">
          <img src={ReactIcon} alt="reactjs"/><h3>react js</h3>
        </div>
        <div className="skill-items">
          <img src={GatsbyIcon} alt="gatsbyjs"/><h3>gatsby js</h3>
        </div>
        <div className="skill-items">
          <img src={GitIcon} alt="git"/><h3>git</h3>
        </div>
        <div className="skill-items">
          <img className="tailwind" src={TailwindIcon} alt="tailwindcss"/><h3>tailwind</h3>
        </div>
        <div className="skill-items">
          <img src={ContentfulIcon} alt="contentful"/><h3>contentful</h3>
        </div>
        <div className="skill-items">
          <img src={FigmaIcon} alt="figma"/><h3>figma</h3>
        </div>
      </div>
      <div className="border-bottom"></div>

      {/* accesories */}
      <div className="box box-1"></div>
      <div className="box box-2"></div>
      <div className="box box-3"></div>
      <div className="box box-4"></div>
      <div className="box box-5"></div>
      <div className="box box-black"></div>
      <div className="horizontal-line-2"></div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
