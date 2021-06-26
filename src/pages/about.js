import React from "react"
import Title from "../components/Title"
import her from "../assets/images/hero.svg"
import Seo from "../components/Seo"

const About = () => {
  const stack = ["Html", "Css", "Javascript", "React.Js", "Node.Js", "Gatsby.Js"]
  return (
    <>
      <Seo title="About" />
      <section className="about-page">
        <div className="section-center about-center">
          <img src={her} alt="Tanay Patil" className="about-img-svg" />
          <article className="about-text">
            <Title title="Tanay Patil" />
            <p>I started learning of the web development in the first year of my B.Tech. degree.I have learned javascript and React.js in udemy.now, currently I am working in Zluck Solutions pvt Ltd as React developer.</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item}>{item}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}


export default About
