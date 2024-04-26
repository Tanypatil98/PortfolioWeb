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
            <p>Im Tanay Patil, a seasoned Full Stack Developer with over four years of hands-on experience in crafting innovative web solutions. My journey in the tech industry has been both thrilling and rewarding, allowing me to hone my skills across various domains.My forte lies in the meticulous analysis, development, and seamless implementation of internet-based applications. Leveraging a versatile tech stack comprising Angular, React.js, Node.js, MongoDB, Python, Django, RPA, SQL, AWS EC2, HTML5, CSS, and JavaScript, Ive successfully delivered robust and scalable solutions tailored to meet diverse client needs.In addition to my technical prowess, I possess expertise in low-code and no-code development, particularly in third-party integration using n8n. This proficiency enables me to streamline processes and enhance efficiency, driving impactful outcomes for businesses.A proactive and collaborative approach defines my work ethic. I thrive in dynamic environments, excelling as a team player.</p>
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
