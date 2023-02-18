import React from "react"
import Title from "../components/Title"
import her from "../assets/images/hero.svg"
import Seo from "../components/Seo"

const About = () => {
  const stack = ["Html", "Css", "Javascript", "React.Js", "Node.Js", "Gatsby.Js", "React Native"]
  return (
    <>
      <Seo title="About" />
      <section className="about-page">
        <div className="section-center about-center">
          <img src={her} alt="Tanay Patil" className="about-img-svg" />
          <article className="about-text">
            <Title title="Tanay Patil" />
            <p>A dynamic professional with 3+ years in the areas of experience in analysis, development and implementation of various internet-based web applications using React js, Node js, Mongo Db, Sql, Aws Ec2, Html5, CSS and JavaScript. Easily collaborate with developers and project managers to accomplish milestones. Managing and coordinating projects across technical platforms and business units.</p>
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
