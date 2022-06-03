import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
import heroImg from "../assets/images/profile.jpg"
import resume from "../assets/Tanay's Resume.pdf"

const Hero = () => {
  return (
    <header className="hero container">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm Tanay</h1>
            <h4>freelance Web app Deveoper</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <a download href={resume} className="btn">Resume</a>
            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>
        <article className="hero-img">
          <img src={heroImg} className="hero-photo"  alt="john doe" />
        </article>
        {/* <img src={heroImg} alt="portfolio" className="hero-img-svg" /> */}
      </section>
    </header>
  )
}

export default Hero
