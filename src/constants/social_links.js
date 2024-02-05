import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    text: "facebook",
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/tanay.patil.5454/",
  },
  {
    id: 2,
    text: "linkedin",
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/tanay-patil-9094b7169",
  },
  {
    id: 3,
    text: "github",
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/Tanypatil98",
  },
  {
    id: 4,
    text: "twitter",
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/tanaypa85900150",
  },
]

export default data
