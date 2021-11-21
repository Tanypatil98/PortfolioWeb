import React, { useState } from "react"
import Seo from "../components/Seo"
import {
  FaPhone,
  FaMapMarkerAlt,
  FaMailBulk
} from "react-icons/fa"
const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}
const Contact = () => {

  const [name, setName] = useState('');
  const [success, setSuceess] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const submitHandler = () => {
    let formData = {
    name: name,
    email: email,
    subject: subject,
    description: description
    }
    fetch("/contact/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Contact", ...formData })
    }).then(() => {
      setSuceess('Thank you for Contact us. your message is Sent.');
      setName('');
      setEmail('');
      setSubject('');
      setDescription('');
    }).catch(error => alert(error))
  }

  return (
    <>
      <Seo title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get In Touch</h3>
          <ul class="list-unstyled li-space-lg">
            <li class="address"><FaMapMarkerAlt class="social-icon"></FaMapMarkerAlt>Surat,India.</li>
            <li><FaPhone class="social-icon"></FaPhone><a href="tel:9624441873">+91 9624441873</a></li>
            <li><FaMailBulk class="social-icon"></FaMailBulk><a href="mailto:tanaypatil36@gmail.com">tanaypatil36@gmail.com</a></li>
          </ul>
          <form data-netlify="true" name="Contact" method="post" data-netlify-honeypot="bot-field" onSubmit={submitHandler}>
            <div className="form-group">
              <input type="hidden" name="form-name" value="Contact" />
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                name="subject"
                placeholder="subject"
                className="form-control"
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </>
  );
}

export default Contact;
