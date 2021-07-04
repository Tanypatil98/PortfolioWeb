import React from "react"
import Seo from "../components/Seo"
import {
  FaPhone,
  FiMail,
  FaMapMarkerAlt
} from "react-icons/fa"
const contact = () => {
  
  return (
    <>
      <Seo title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get In Touch</h3>
          <ul class="list-unstyled li-space-lg">
              <li class="address"><FaMapMarkerAlt class="social-icon"></FaMapMarkerAlt>Surat,India.</li>
              <li><FaPhone class="social-icon"></FaPhone><a href="tel:9624441873">+91 9624441873</a></li>
              <li><FiMail class="social-icon"></FiMail><a href="mailto:tanaypatil36@gmail.com">tanaypatil36@gmail.com</a></li>
          </ul>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact
