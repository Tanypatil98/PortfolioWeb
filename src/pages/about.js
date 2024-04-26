import React from "react"
import Title from "../components/Title"
import her from "../assets/images/hero.svg"
import Seo from "../components/Seo"

const About = () => {
  const stack = ["Html", "Css", "Javascript", "React.Js", "Angular", "Node.Js", "Python", "Django", "RPA", "MongoDb", "MySQL", "PostgreSQL"]
  return (
    <>
      <Seo title="About" />
      <section className="about-page">
        <div className="section-center about-center">
          <img src={her} alt="Tanay Patil" className="about-img-svg" />
          <article className="about-text">
            <Title title="Tanay Patil" />
            <p>A dynamic professional with 4+ years of experience in the analysis, development, and implementation of various internet-based web applications using React.js, Angular, Python, Django, RPA, Node.js, MongoDB, SQL, AWS EC2, HTML5, CSS, and JavaScript. I easily collaborate with developers and project managers to accomplish milestones, managing and coordinating projects across technical platforms and business units.</p>
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
